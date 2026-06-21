import { indianPackages } from '../data/packages';
import TiltCard from './ui/TiltCard';
import RevealOnScroll from './ui/RevealOnScroll';
import { Star, Clock } from 'lucide-react';

const IndianPackages = () => {
  const handleExplore = (pkg: any) => {
    const event = new CustomEvent('openDestinationModal', { detail: pkg });
    window.dispatchEvent(event);
  };

  return (
    <section id="packages" className="py-20 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-mono tracking-widest">DISCOVER INDIA</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Curated experiences across the diverse landscapes of the incredible subcontinent.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indianPackages.map((pkg, index) => (
            <RevealOnScroll key={pkg.id} delay={index * 0.1}>
              <TiltCard className="bg-surface rounded-sm overflow-hidden shadow-lg border border-secondary/20 flex flex-col h-full">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="h-56 object-cover w-full"
                />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-tertiary font-mono">{pkg.name}</h3>
                      <div className="flex items-center text-primary">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm font-semibold">{pkg.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-secondary text-sm mb-4 font-mono">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-secondary/20">
                    <span className="text-xl font-bold text-primary">{pkg.price}</span>
                    <button 
                      onClick={() => handleExplore(pkg)}
                      className="bg-primary/10 hover:bg-primary text-primary hover:text-on-primary px-4 py-2 rounded-sm transition-colors font-mono uppercase text-sm font-bold tracking-wider"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndianPackages;
