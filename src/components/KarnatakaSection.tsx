import { karnatakaPlaces } from '../data/karnataka';
import TiltCard from './ui/TiltCard';
import RevealOnScroll from './ui/RevealOnScroll';

const KarnatakaSection = () => {
  const handleExplore = (place: any) => {
    const event = new CustomEvent('openDestinationModal', { detail: place });
    window.dispatchEvent(event);
  };

  return (
    <section id="karnataka" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-mono tracking-widest">KARNATAKA UNVEILED</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Discover the royal heritage, pristine beaches, and lush hills of One State, Many Worlds.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {karnatakaPlaces.map((place, index) => (
            <RevealOnScroll key={place.id} delay={index * 0.1}>
              <TiltCard className="bg-surface rounded-sm overflow-hidden shadow-lg border border-secondary/20 flex flex-col h-full">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="h-64 object-cover w-full"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-tertiary mb-2 font-mono">{place.name}</h3>
                  <p className="text-secondary/80 mb-4 flex-grow">{place.description}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-secondary/10">
                    <span className="text-xl font-bold text-primary">{place.price}</span>
                    <button 
                      onClick={() => handleExplore(place)}
                      className="bg-primary/10 hover:bg-primary text-primary hover:text-on-primary px-4 py-2 rounded-sm transition-colors font-mono uppercase text-sm font-bold tracking-wider"
                    >
                      Explore
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

export default KarnatakaSection;
