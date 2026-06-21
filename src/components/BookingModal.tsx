import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import GlowButton from './ui/GlowButton';

interface Props {
  data: any;
  onClose: () => void;
}

const BookingModal = ({ data, onClose }: Props) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-neutral/90 backdrop-blur-md"
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl bg-surface border-t-4 border-primary rounded shadow-2xl overflow-hidden p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-secondary hover:text-primary transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono text-tertiary mb-2">Book Your Journey</h2>
              <p className="text-secondary font-mono tracking-widest uppercase text-sm">Destination: <span className="text-primary font-bold">{data.name}</span></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-secondary mb-2">Travelers</label>
                  <select className="w-full bg-neutral border border-secondary/30 rounded-sm p-3 text-tertiary focus:border-primary outline-none transition-colors">
                    <option>1 Explorer</option>
                    <option>2 Explorers</option>
                    <option>Family (3-4)</option>
                    <option>Group (5+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-secondary mb-2">Travel Date</label>
                  <input type="date" className="w-full bg-neutral border border-secondary/30 rounded-sm p-3 text-tertiary focus:border-primary outline-none transition-colors [color-scheme:dark]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-secondary mb-2">Experience Level</label>
                <div className="grid grid-cols-3 gap-4">
                  <label className="cursor-pointer">
                    <input type="radio" name="budget" className="peer sr-only" defaultChecked />
                    <div className="text-center p-3 border border-secondary/30 rounded-sm text-sm text-secondary peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/5 transition-all">
                      Standard
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="budget" className="peer sr-only" />
                    <div className="text-center p-3 border border-secondary/30 rounded-sm text-sm text-secondary peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/5 transition-all">
                      Premium
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="budget" className="peer sr-only" />
                    <div className="text-center p-3 border border-secondary/30 rounded-sm text-sm text-secondary peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/5 transition-all">
                      Luxury
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-secondary mb-2">Special Requests</label>
                <textarea 
                  rows={3} 
                  placeholder="Any specific hotels, dietary requirements, or celebrations?"
                  className="w-full bg-neutral border border-secondary/30 rounded-sm p-3 text-tertiary focus:border-primary outline-none transition-colors placeholder:text-secondary/50"
                ></textarea>
              </div>

              <div className="pt-4 border-t border-secondary/20 flex justify-end">
                <GlowButton type="submit">
                  Confirm Booking Request
                </GlowButton>
              </div>
            </form>
          </>
        ) : (
          <div className="py-16 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full text-primary mb-6"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <h2 className="text-3xl font-bold font-mono text-tertiary mb-4">Journey Confirmed</h2>
            <p className="text-secondary max-w-sm mx-auto">
              Our travel concierges are preparing your itinerary for {data.name}. We will contact you shortly.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BookingModal;
