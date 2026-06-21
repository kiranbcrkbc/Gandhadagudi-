import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { destinations } from '../data/destinations';
import type { Destination } from '../data/destinations';
import GlowButton from './ui/GlowButton';

const SmartSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const autocompleteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        setShowAutocomplete(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTo(value);
    
    if (value.trim() === '') {
      setFilteredDestinations([]);
      setShowAutocomplete(false);
      return;
    }

    const lowerValue = value.toLowerCase();
    const filtered = destinations.filter(d => 
      d.name.toLowerCase().includes(lowerValue) || 
      d.country.toLowerCase().includes(lowerValue)
    );
    
    setFilteredDestinations(filtered);
    setSelectedIndex(-1);
    setShowAutocomplete(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showAutocomplete) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredDestinations.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < filteredDestinations.length) {
        e.preventDefault();
        selectDestination(filteredDestinations[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowAutocomplete(false);
    }
  };

  const selectDestination = (destination: Destination) => {
    setTo(destination.name);
    setShowAutocomplete(false);
    window.dispatchEvent(new CustomEvent('openDestinationModal', { detail: destination }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedDestination = destinations.find(d => d.name.toLowerCase() === to.toLowerCase());
    if (matchedDestination) {
       window.dispatchEvent(new CustomEvent('openDestinationModal', { detail: matchedDestination }));
    } else {
       window.dispatchEvent(new CustomEvent('openDestinationModal', { detail: { name: to } }));
    }
  };

  return (
    <div id="search" className="bg-surface border-t-2 border-primary p-8 rounded-lg shadow-xl w-full mx-auto relative z-10 max-w-7xl -mt-16 mb-20">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
        <div className="relative">
          <label className="text-xs text-secondary uppercase font-mono tracking-wider mb-2 block">From</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
            <input 
              type="text" 
              placeholder="Departure City"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full bg-neutral border border-secondary/30 text-tertiary pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="relative" ref={autocompleteRef}>
          <label className="text-xs text-secondary uppercase font-mono tracking-wider mb-2 block">To</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
            <input 
              type="text" 
              placeholder="Destination City"
              value={to}
              onChange={handleToChange}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (to.trim() !== '') {
                   handleToChange({ target: { value: to } } as React.ChangeEvent<HTMLInputElement>);
                }
              }}
              className="w-full bg-neutral border border-secondary/30 text-tertiary pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          
          <AnimatePresence>
            {showAutocomplete && to.trim() !== '' && (
              <motion.ul 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute w-full mt-1 bg-surface border border-secondary/30 rounded-sm shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto"
              >
                {filteredDestinations.length > 0 ? (
                  filteredDestinations.map((dest, idx) => (
                    <li 
                      key={dest.id}
                      onClick={() => selectDestination(dest)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`px-4 py-3 cursor-pointer border-b border-secondary/20 last:border-b-0 transition-colors ${
                        idx === selectedIndex ? 'bg-primary/10 text-primary' : 'hover:bg-primary/10 text-tertiary hover:text-primary'
                      }`}
                    >
                      <div className="font-semibold">{dest.name} — {dest.country}</div>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-4 text-sm text-secondary italic text-center">
                    No match found — try nearby destinations
                  </li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <label className="text-xs text-secondary uppercase font-mono tracking-wider mb-2 block">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-neutral border border-secondary/30 text-tertiary pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
            />
          </div>
        </div>

        <div className="flex items-end gap-4">
          <div className="relative flex-grow min-w-[120px]">
            <label className="text-xs text-secondary uppercase font-mono tracking-wider mb-2 block">Passengers</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
              <select 
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-neutral border border-secondary/30 text-tertiary pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors appearance-none"
              >
                {[1, 2, 3, 4, 5, '6+'].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
          </div>
          
          <GlowButton type="submit" className="h-[50px] px-6 flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            <span className="hidden md:inline">Search</span>
          </GlowButton>
        </div>
      </form>
    </div>
  );
};

export default SmartSearch;
