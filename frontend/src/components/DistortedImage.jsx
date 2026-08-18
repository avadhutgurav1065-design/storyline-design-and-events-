import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DistortedImage({ src, alt, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a unique ID for the filter to avoid conflicts if multiple images are on screen
  const filterId = `distortion-${src.replace(/[^a-zA-Z0-9]/g, '')}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div 
      className={`distorted-image-container ${className}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id={filterId}>
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.015 0.03" 
            numOctaves="2" 
            result="noise" 
          />
          <motion.feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            xChannelSelector="R" 
            yChannelSelector="G"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 25 : 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
        </filter>
      </svg>
      
      <motion.img 
        src={src} 
        alt={alt}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          filter: `url(#${filterId})`
        }} 
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
