import RevealOnScroll from './ui/RevealOnScroll';
import GlassCard from './ui/GlassCard';

const testimonials = [
  {
    quote: "The best travel experience of my life. Everything was perfectly organized from start to finish.",
    name: "Sarah Jenkins",
    location: "New York, USA"
  },
  {
    quote: "Breathtaking destinations and unparalleled service. I can't wait to book my next adventure.",
    name: "Michael Chen",
    location: "London, UK"
  },
  {
    quote: "An unforgettable journey. The attention to detail made us feel like royalty.",
    name: "Elena Rodriguez",
    location: "Madrid, Spain"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 sm:px-12 bg-surface text-tertiary">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-widest text-primary font-mono">
            WHAT THEY SAY
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <RevealOnScroll key={index} delay={index * 0.2}>
              <GlassCard className="p-8 h-full flex flex-col justify-between rounded-sm">
                <p className="text-lg italic text-secondary mb-8">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-tertiary font-mono">{t.name}</h4>
                  <p className="text-sm text-secondary/70">{t.location}</p>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
