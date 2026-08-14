import { useState, useEffect } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500);
    const removeTimer = setTimeout(() => setRemoved(true), 2100);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo-container">
        <img src="/images/logo.jpg" alt="Loading..." className="loader-logo-img" />
      </div>
      <div className="loader-text">Storyline</div>
    </div>
  );
}
