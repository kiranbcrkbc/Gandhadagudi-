import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      className={`bg-tertiary text-on-primary font-mono text-sm font-semibold uppercase tracking-widest px-7 py-3 rounded-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(242,181,58,0.5)] hover:bg-primary cursor-pointer ${className}`.trim()}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export { GlowButton };
export default GlowButton;
