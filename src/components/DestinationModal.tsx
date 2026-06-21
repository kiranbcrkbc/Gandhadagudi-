import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Sun, Hotel, Plane } from 'lucide-react';
import GlowButton from './ui/GlowButton';
import BookingModal from './BookingModal';

const DestinationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const handleOpen = (e: any) => {
      setData(e.detail);
      setIsOpen(true);
      setShowBooking(false);
    };

    window.addEventListener('openDestinationModal', handleOpen);
    return () => window.removeEventListener('openDestinationModal', handleOpen);
  }, []);

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      {isOpen && !showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-neutral/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-secondary/30 rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-neutral/50 hover:bg-primary/20 text-tertiary hover:text-primary rounded-full transition-colors backdrop-blur-md cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Image Column */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              {data.image ? (
                <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-neutral flex items-center justify-center">
                  <MapPin size={48} className="text-secondary/50" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:bg-gradient-to-r" />
              
              <div className="absolute bottom-6 left-6 text-tertiary">
                <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-2 text-primary">{data.name}</h2>
                <div className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-secondary">
                  <MapPin size={14} />
                  {data.country || 'India'}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <p className="text-lg text-tertiary/90 mb-8 leading-relaxed">
                {data.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-neutral/50 p-4 border border-secondary/20 rounded-sm">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Sun size={18} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Best Season</span>
                  </div>
                  <div className="text-tertiary text-sm">October to March</div>
                </div>
                <div className="bg-neutral/50 p-4 border border-secondary/20 rounded-sm">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar size={18} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Duration</span>
                  </div>
                  <div className="text-tertiary text-sm">{data.duration || '3-5 Days'}</div>
                </div>
                <div className="bg-neutral/50 p-4 border border-secondary/20 rounded-sm">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Hotel size={18} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Stays</span>
                  </div>
                  <div className="text-tertiary text-sm">Luxury & Boutique</div>
                </div>
                <div className="bg-neutral/50 p-4 border border-secondary/20 rounded-sm">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Plane size={18} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Transport</span>
                  </div>
                  <div className="text-tertiary text-sm">Flight & Premium Cab</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-secondary/20 pt-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-secondary font-mono mb-1">Starting from</div>
                  <div className="text-2xl font-bold text-primary">{data.price || '₹15,000'}</div>
                </div>
                <GlowButton onClick={() => setShowBooking(true)}>
                  Book Journey
                </GlowButton>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      {showBooking && <BookingModal data={data} onClose={() => { setShowBooking(false); setIsOpen(false); }} />}
    </AnimatePresence>
  );
};

export default DestinationModal;
