import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 }, true);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export { RevealOnScroll };
export default RevealOnScroll;
