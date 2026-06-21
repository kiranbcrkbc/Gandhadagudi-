import RevealOnScroll from './ui/RevealOnScroll';
import GlowButton from './ui/GlowButton';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 sm:px-12 bg-neutral text-tertiary flex justify-center">
      <div className="max-w-4xl w-full">
        <RevealOnScroll>
          <div className="border-t-4 border-primary bg-surface/50 p-10 md:p-16 rounded-b-sm shadow-2xl backdrop-blur-md border-x border-b border-secondary/20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-widest mb-4 text-primary font-mono">
                GET DEPARTURE ALERTS
              </h2>
              <p className="text-secondary text-lg">
                Sign up for exclusive offers, travel inspiration, and the latest news.
              </p>
            </div>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-neutral border border-secondary/30 text-tertiary px-6 py-4 rounded-sm focus:outline-none focus:border-primary transition-colors font-mono"
                required
              />
              <GlowButton type="submit" className="py-4 px-8 whitespace-nowrap">
                SUBSCRIBE
              </GlowButton>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Newsletter;
