import { motion } from 'framer-motion';

interface FloatingTagProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingTag: React.FC<FloatingTagProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`bg-surface border border-secondary/30 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-tertiary shadow-lg backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export { FloatingTag };
export default FloatingTag;
