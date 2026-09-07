import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [phase, setPhase] = useState('idle');
  const previousPathRef = useRef(location.pathname);
  const timersRef = useRef([]);

  useEffect(() => {
    if (location.pathname === previousPathRef.current) {
      return;
    }

    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    previousPathRef.current = location.pathname;
    setPhase('entering');
    setIsAnimating(true);

    const t1 = setTimeout(() => {
      setPhase('active');
    }, 350);
    const t2 = setTimeout(() => {
      setPhase('exiting');
    }, 1800);
    const t3 = setTimeout(() => {
      setIsAnimating(false);
      setPhase('idle');
    }, 2500);

    timersRef.current = [t1, t2, t3];

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [location.pathname]);

  return (
    <>
      {children}
      {isAnimating && (
        <div
          className={`page-transition ${phase === 'entering' ? 'page-transition--enter' : ''} ${phase === 'active' ? 'page-transition--active' : ''} ${phase === 'exiting' ? 'page-transition--exit' : ''}`}
          aria-hidden="true"
        >
          <div className="page-transition__overlay" />
          <div className="page-transition__road" />
          <div className="page-transition__streak" />
          <img
            src="/images/white-urbania.png"
            alt=""
            className="page-transition__urbania"
            draggable={false}
          />
        </div>
      )}
    </>
  );
}
