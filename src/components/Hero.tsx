import { motion } from 'framer-motion';
import GlowButton from './ui/GlowButton';
import FloatingTag from './ui/FloatingTag';
import AnimatedCounter from './ui/AnimatedCounter';
import ScrollIndicator from './ui/ScrollIndicator';
import Globe from './Globe';

const Hero = () => {
  const title = "GANDHADAGUDI".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Globe />
      </div>
      
      {/* Cinematic gradient overlay to fade bottom into next section */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-neutral to-transparent z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-primary border border-primary/30 px-3 py-1 rounded-full">
              Explore India Beyond Maps
            </span>
            <div className="h-px bg-primary/30 w-12" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-tertiary mb-6 font-mono leading-none flex overflow-hidden">
            {title.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1],
                  delay: index * 0.05
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-secondary mb-10 max-w-2xl leading-relaxed"
          >
            From Western Ghats to Himalayan Dreams. Discover immersive travel experiences tailored for the modern explorer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <GlowButton onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth'})}>
              Begin Your Journey
            </GlowButton>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-secondary/20"
          >
            <div>
              <div className="text-3xl font-bold text-primary mb-1"><AnimatedCounter target={200} duration={2} /></div>
              <div className="text-xs uppercase tracking-widest text-secondary font-semibold">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1"><AnimatedCounter target={50000} duration={2.5} /></div>
              <div className="text-xs uppercase tracking-widest text-secondary font-semibold">Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">4.9</div>
              <div className="text-xs uppercase tracking-widest text-secondary font-semibold">Rating</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Tags */}
      <div className="absolute right-[10%] top-[25%] hidden lg:block z-20">
        <FloatingTag delay={0}>Mystic Coorg</FloatingTag>
      </div>
      <div className="absolute right-[25%] top-[60%] hidden lg:block z-20">
        <FloatingTag delay={1.5}>Kerala Backwaters</FloatingTag>
      </div>
      <div className="absolute right-[5%] bottom-[30%] hidden lg:block z-20">
        <FloatingTag delay={0.8}>Golden Triangle</FloatingTag>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
