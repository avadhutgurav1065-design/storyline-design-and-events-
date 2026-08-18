import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImage({ src, alt, className = '' }) {
  const ref = useRef(null);
  
  // Track the scroll progress of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform the scroll progress into a vertical shift for the inner div
  // The image container moves from -15% to 15% on the Y axis as it scrolls through viewport.
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div 
      ref={ref} 
      className={`parallax-container ${className}`} 
      style={{ 
        overflow: 'hidden', 
        position: 'absolute', 
        inset: 0, 
        width: '100%', 
        height: '100%',
        zIndex: 0
      }}
    >
      <motion.div
        style={{
          y,
          width: '100%',
          height: '130%',
          position: 'absolute',
          top: '-15%',
          left: 0
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          /* Inline style isn't strictly necessary if CSS handles it, but good for safety */
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </motion.div>
    </div>
  );
}
