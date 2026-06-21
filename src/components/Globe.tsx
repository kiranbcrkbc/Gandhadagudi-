import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { destinations } from '../data/destinations';
import type { Destination } from '../data/destinations';

// Helper to convert lat/lng to 3D sphere coordinates
const getCoordinates = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
};

const Stars = () => {
  const [positions] = useState(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100 - 30; // z (behind globe)
    }
    return pos;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#ffffff" transparent opacity={0.9} sizeAttenuation={true} />
    </points>
  );
};

const AtmosphereShader = {
  uniforms: {
    coeficient: { value: 0.6 },
    power: { value: 2.5 },
    glowColor: { value: new THREE.Color('#4b96f3') },
  },
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 glowColor;
    uniform float coeficient;
    uniform float power;
    varying vec3 vNormal;
    void main() {
      float intensity = pow(coeficient - dot(vNormal, vec3(0.0, 0.0, 1.0)), power);
      gl_FragColor = vec4(glowColor, intensity);
    }
  `
};

const Earth = () => {
  const earthRef = useRef<THREE.Group>(null);
  const interactiveGroupRef = useRef<THREE.Group>(null);
  
  const [colorMap, setColorMap] = useState<THREE.Texture | null>(null);
  const [bumpMap, setBumpMap] = useState<THREE.Texture | null>(null);
  const [specularMap, setSpecularMap] = useState<THREE.Texture | null>(null);

  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Globe component mounted successfully');
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';
    loader.load('https://unpkg.com/three-globe/example/img/earth-day.jpg', setColorMap);
    loader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png', setBumpMap);
    loader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-water.png', setSpecularMap);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotation.current.x = y * 0.3; 
      targetRotation.current.y = x * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Auto rotation for the globe itself
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0008;
    }

    // Smooth mouse follow
    if (interactiveGroupRef.current) {
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05;
      
      interactiveGroupRef.current.rotation.x = currentRotation.current.x;
      interactiveGroupRef.current.rotation.y = currentRotation.current.y;
    }
  });

  const radius = 2.5;
  const atmosphereMaterial = useMemo(() => new THREE.ShaderMaterial({
    ...AtmosphereShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    transparent: true,
    depthWrite: false
  }), []);

  return (
    <group ref={interactiveGroupRef} position={[2, 0, 0]}>
      <group ref={earthRef}>
        {/* Earth Sphere */}
        <Sphere args={[radius, 64, 64]}>
          {colorMap ? (
            <meshPhongMaterial 
              map={colorMap} 
              bumpMap={bumpMap}
              bumpScale={0.05}
              specularMap={specularMap}
              specular={new THREE.Color('#333333')} 
              shininess={25} 
            />
          ) : (
            <meshPhongMaterial color="#001133" />
          )}
        </Sphere>

        {/* Atmospheric Glow Halo using custom Fresnel Shader */}
        <Sphere args={[radius * 1.2, 64, 64]} material={atmosphereMaterial} />
        
        {/* Destination Markers */}
        {destinations.map((dest) => {
          const position = getCoordinates(dest.lat, dest.lng, radius * 1.02);
          return <Marker key={dest.id} position={position} destination={dest} />;
        })}
      </group>
    </group>
  );
};

interface MarkerProps {
  position: THREE.Vector3;
  destination: Destination;
}

const Marker = ({ position, destination }: MarkerProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      {/* Pin core */}
      <mesh
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
        onClick={(e) => {
          e.stopPropagation();
          const event = new CustomEvent('openDestinationModal', { detail: destination });
          window.dispatchEvent(event);
        }}
      >
        <sphereGeometry args={[hovered ? 0.05 : 0.03, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#FFFFFF" : "#F2B53A"} />
      </mesh>

      {/* Pin glow */}
      <mesh>
        <sphereGeometry args={[hovered ? 0.08 : 0.05, 16, 16]} />
        <meshBasicMaterial color="#F2B53A" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
      </mesh>

      {hovered && (
        <Html distanceFactor={15} zIndexRange={[100, 0]}>
          <div className="bg-surface/90 backdrop-blur-md border border-primary/50 text-tertiary px-3 py-1.5 rounded-sm whitespace-nowrap shadow-[0_0_15px_rgba(242,181,58,0.5)] transform -translate-x-1/2 -translate-y-full mt-[-10px] font-mono text-xs cursor-pointer pointer-events-none">
            <div className="font-bold text-primary">{destination.name}</div>
            <div className="text-[10px] text-secondary opacity-80">{destination.country}</div>
          </div>
        </Html>
      )}
    </group>
  );
};

const Globe = () => {
  return (
    <div className="w-full h-full absolute inset-0 cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Space view dramatic lighting */}
        <ambientLight intensity={0.03} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-5, 3, -5]} intensity={0.1} color="#4b96f3" />
        
        <Stars />

        <Suspense fallback={null}>
          <Earth />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Globe;
