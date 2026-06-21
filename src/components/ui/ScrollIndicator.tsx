import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-xs font-mono text-tertiary/70">
      <motion.span
        className="mb-2 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        SCROLL
      </motion.span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </div>
  );
};

export { ScrollIndicator };
export default ScrollIndicator;
