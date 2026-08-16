import React, { useEffect, useState } from 'react';

export default function LiveEffects() {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    // Generate 40 fairy lights scattered around the screen
    const newLights = Array.from({ length: 40 }).map((_, i) => {
      // Mix of tiny, small, and medium lights
      const sizeClass = Math.random() > 0.8 ? 'large' : (Math.random() > 0.4 ? 'medium' : 'small');
      return {
        id: `light-${i}`,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        twinkleDelay: `${Math.random() * 8}s`,
        twinkleDuration: `${3 + Math.random() * 5}s`,
        sizeClass
      };
    });

    setLights(newLights);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
      {/* Fairy Lights Only - Petals Removed */}
      {lights.map(light => (
        <div
          key={light.id}
          className={`fairy-light fairy-light-${light.sizeClass}`}
          style={{
            left: light.left,
            top: light.top,
            '--twinkle-delay': light.twinkleDelay,
            '--twinkle-duration': light.twinkleDuration
          }}
        />
      ))}
    </div>
  );
}
