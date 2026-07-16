type GradientBlobProps = {
  color?: 'primary' | 'secondary';
  className?: string;
};

/** Decorative ambient blur blob — purely visual, hidden from assistive tech. */
const GradientBlob = ({ color = 'primary', className = '' }: GradientBlobProps) => {
  const varName = color === 'primary' ? '--glow-primary' : '--glow-secondary';

  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-2xl animate-blob pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at center, hsl(var(${varName}) / 0.45) 0%, hsl(var(${varName}) / 0.12) 45%, transparent 72%)`,
      }}
    />
  );
};

export default GradientBlob;
