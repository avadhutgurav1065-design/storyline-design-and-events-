import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ScrollReveal({ children, className = '', animation = 'reveal' }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
