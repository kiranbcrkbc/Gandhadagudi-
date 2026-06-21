import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-surface/80 backdrop-blur-md border border-secondary/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-sm p-6 ${className}`.trim()}>
      {children}
    </div>
  );
};

export { GlassCard };
export default GlassCard;
