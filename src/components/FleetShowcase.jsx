import { useState, useEffect, useRef, useCallback } from 'react';
import './FleetShowcase.css';

const FLEET_SHOWCASE = [
  {
    image: "/images/black-urbania-angle.png",
    name: "Force Urbania",
    category: "Premium Group Travel",
    alt: "Black Force Urbania"
  },
  {
    image: "/images/white-urbania-angle.png",
    name: "Force Urbania",
    category: "Premium Group Travel",
    alt: "White Force Urbania"
  },
  {
    image: "/images/force-traveller.png",
    name: "Force Traveller",
    category: "Comfortable Group Travel",
    alt: "Force Traveller"
  },
  {
    image: "/images/white-urbania-side.png",
    name: "White Urbania",
    category: "Premium Comfortable Travel",
    alt: "White Urbania"
  },
  {
    image: "/images/isuzu-blue.png",
    name: "SML / Isuzu SLM Bus",
    category: "Comfortable Group Travel",
    alt: "Blue SML Isuzu SLM Bus"
  },
  {
    image: "/images/isuzu-cream.png",
    name: "SML / Isuzu SLM Bus",
    category: "Reliable Group Travel",
    alt: "Cream SML Isuzu SLM Bus"
  },
  {
    image: "/images/isuzu-silver.png",
    name: "SML / Isuzu SLM Bus",
    category: "Spacious Group Travel",
    alt: "Silver SML Isuzu SLM Bus"
  },
  {
    image: "/images/toyota-innova-crysta.png",
    name: "Toyota Innova Crysta",
    category: "Premium Family Travel",
    alt: "Toyota Innova Crysta"
  }
];

export default function FleetShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const autoplayRef = useRef(null);
  const progressRef = useRef(null);
  const progressStartRef = useRef(null);
  const reducedMotion = useRef(false);
  const touchStartRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isVisibleRef = useRef(false);
  const timeoutRef = useRef(null);

  const AUTOPLAY_INTERVAL = 1500;
  const TRANSITION_DURATION = 500;

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          isVisibleRef.current = true;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    setProgress(0);
    progressStartRef.current = null;
  }, []);

  const startAutoplay = useCallback(() => {
    resetAutoplay();
    if (reducedMotion.current || isHoveringRef.current) return;

    progressStartRef.current = Date.now();
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FLEET_SHOWCASE.length);
      setProgress(0);
      progressStartRef.current = Date.now();
    }, AUTOPLAY_INTERVAL);
  }, [resetAutoplay]);

  useEffect(() => {
    if (!isHovering && isVisible) {
      startAutoplay();
    }
    return () => resetAutoplay();
  }, [isHovering, isVisible, startAutoplay, resetAutoplay]);

  useEffect(() => {
    if (!isVisible || isHovering || reducedMotion.current) {
      if (progressRef.current) {
        cancelAnimationFrame(progressRef.current);
      }
      return;
    }

    progressStartRef.current = Date.now();

    const animateProgress = () => {
      if (!progressStartRef.current || isHoveringRef.current) return;
      const elapsed = Date.now() - progressStartRef.current;
      const p = Math.min(elapsed / AUTOPLAY_INTERVAL, 1);
      setProgress(p);
      if (p < 1) {
        progressRef.current = requestAnimationFrame(animateProgress);
      }
    };

    progressRef.current = requestAnimationFrame(animateProgress);

    return () => {
      if (progressRef.current) {
        cancelAnimationFrame(progressRef.current);
      }
    };
  }, [isVisible, isHovering, activeIndex]);

  const goToVehicle = useCallback(
    (index) => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setActiveIndex(index);
      resetAutoplay();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isTransitioningRef.current = false;
        if (!isHoveringRef.current && isVisibleRef.current) {
          startAutoplay();
        }
      }, TRANSITION_DURATION + 100);
    },
    [resetAutoplay, startAutoplay]
  );

  const goNext = useCallback(() => {
    goToVehicle((activeIndex + 1) % FLEET_SHOWCASE.length);
  }, [activeIndex, goToVehicle]);

  const goPrev = useCallback(() => {
    goToVehicle((activeIndex - 1 + FLEET_SHOWCASE.length) % FLEET_SHOWCASE.length);
  }, [activeIndex, goToVehicle]);

  const handleMouseMove = useCallback((e) => {
    if (reducedMotion.current || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 4, y: y * 4 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStartRef.current === null) return;
      const diff = touchStartRef.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
      }
      touchStartRef.current = null;
    },
    [goNext, goPrev]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    },
    [goPrev, goNext]
  );

  const formatIndex = (i) => String(i + 1).padStart(2, '0');

  const getVehiclePosition = (index) => {
    const diff = (index - activeIndex + FLEET_SHOWCASE.length) % FLEET_SHOWCASE.length;
    if (diff === 0) return 'active';
    if (diff === 1) return 'next';
    if (diff === FLEET_SHOWCASE.length - 1) return 'prev';
    return 'hidden';
  };

  const prevIndex = (activeIndex - 1 + FLEET_SHOWCASE.length) % FLEET_SHOWCASE.length;
  const nextIndex = (activeIndex + 1) % FLEET_SHOWCASE.length;

  return (
    <div
      ref={sectionRef}
      className={`fleet-showcase ${isVisible ? 'fleet-showcase--visible' : ''}`}
    >
      <div className="fleet-showcase__inner">
        <div className="fleet-showcase__header">
          <h2 className="fleet-showcase__title">Our Premium Fleet</h2>
        </div>

        <div
          ref={stageRef}
          className="fleet-showcase__stage"
          onMouseEnter={() => {
            setIsHovering(true);
            isHoveringRef.current = true;
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            isHoveringRef.current = false;
            handleMouseLeave();
          }}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="fleet-showcase__glow"
            style={
              {
                '--mx-glow': `${mousePos.x * 0.5}px`,
                '--my-glow': `${mousePos.y * 0.5}px`,
              }
            }
          />

          {FLEET_SHOWCASE.map((vehicle, index) => {
            const position = getVehiclePosition(index);
            if (position === 'hidden') return null;

            const isActive = position === 'active';
            const isPrev = position === 'prev';
            const isNext = position === 'next';

            return (
              <div
                key={index}
                className={`fleet-showcase__vehicle fleet-showcase__vehicle--${position}`}
                style={
                  isActive
                    ? {
                        '--mx': `${mousePos.x}px`,
                        '--my': `${mousePos.y}px`,
                      }
                    : undefined
                }
                onClick={() => {
                  if (isPrev) goPrev();
                  if (isNext) goNext();
                }}
                role={isPrev || isNext ? 'button' : undefined}
                tabIndex={isPrev || isNext ? 0 : undefined}
                aria-label={
                  isPrev
                    ? `Previous vehicle: ${FLEET_SHOWCASE[prevIndex].name}`
                    : isNext
                      ? `Next vehicle: ${FLEET_SHOWCASE[nextIndex].name}`
                      : undefined
                }
                onKeyDown={(e) => {
                  if (
                    (e.key === 'Enter' || e.key === ' ') &&
                    (isPrev || isNext)
                  ) {
                    e.preventDefault();
                    if (isPrev) goPrev();
                    if (isNext) goNext();
                  }
                }}
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.alt || vehicle.name}
                  loading={isActive ? 'eager' : 'lazy'}
                  draggable={false}
                />
                {(isPrev || isNext) && (
                  <div className="fleet-showcase__vehicle-label">
                    {vehicle.name}
                  </div>
                )}
              </div>
            );
          })}

          <div className="fleet-showcase__shadow" />
        </div>

        <div className="fleet-showcase__controls">
          <button
            className="fleet-showcase__btn fleet-showcase__btn--prev"
            onClick={goPrev}
            aria-label="Previous vehicle"
            type="button"
          >
            ‹
          </button>
          <button
            className="fleet-showcase__btn fleet-showcase__btn--next"
            onClick={goNext}
            aria-label="Next vehicle"
            type="button"
          >
            ›
          </button>
        </div>

        <div className="fleet-showcase__info">
          <div className="fleet-showcase__counter">
            <span className="fleet-showcase__counter-current">
              {formatIndex(activeIndex)}
            </span>
            <span className="fleet-showcase__counter-sep">/</span>
            <span className="fleet-showcase__counter-total">
              {formatIndex(FLEET_SHOWCASE.length - 1)}
            </span>
          </div>

          <div className="fleet-showcase__progress">
            <div
              className="fleet-showcase__progress-fill"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div key={activeIndex} className="fleet-showcase__details">
            <h3 className="fleet-showcase__vehicle-name">
              {FLEET_SHOWCASE[activeIndex].name}
            </h3>
            <p className="fleet-showcase__vehicle-category">
              {FLEET_SHOWCASE[activeIndex].category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
