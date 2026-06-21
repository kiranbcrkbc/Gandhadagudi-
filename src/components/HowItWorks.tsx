import AnimatedCounter from './ui/AnimatedCounter';
import RevealOnScroll from './ui/RevealOnScroll';

const steps = [
  {
    target: 1,
    title: 'Choose Destination',
    description: 'Browse our curated list of exotic and beautiful destinations around the world.',
  },
  {
    target: 2,
    title: 'Book Your Trip',
    description: 'Select your preferred dates and easily book your entire journey with us.',
  },
  {
    target: 3,
    title: 'Pack & Go',
    description: 'Pack your bags and get ready for the adventure of a lifetime. We handle the rest.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 sm:px-12 bg-neutral text-tertiary">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-widest text-primary font-mono">
            HOW IT WORKS
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl font-black text-secondary/20 mb-6 relative">
                  <span className="absolute inset-0 flex items-center justify-center text-primary">
                    <AnimatedCounter target={step.target} duration={1.5} />
                  </span>
                  <span className="opacity-0">0{step.target}+</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-tertiary font-mono">{step.title}</h3>
                <p className="text-secondary/80">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
