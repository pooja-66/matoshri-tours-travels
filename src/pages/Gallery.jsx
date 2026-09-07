import { useState, useEffect, useCallback } from 'react';
import { galleryImages, galleryVideos } from '../config';
import './Gallery.css';

const FILTERS = ['ALL', 'IMAGES', 'VIDEOS'];

export default function Gallery() {
  const [filter, setFilter] = useState('ALL');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(null);

  const displayedImages = filter === 'VIDEOS' ? [] : galleryImages;
  const displayedVideos = filter === 'IMAGES' ? [] : galleryVideos;
  const imageItems = displayedImages;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const openVideoModal = (src) => {
    setCurrentVideoSrc(src);
    setVideoModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = useCallback(() => {
    setVideoModalOpen(false);
    setCurrentVideoSrc(null);
    document.body.style.overflow = '';
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? imageItems.length - 1 : prev - 1));
  }, [imageItems.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === imageItems.length - 1 ? 0 : prev + 1));
  }, [imageItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToPrev, goToNext]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Take a look at our fleet and the beautiful destinations we travel to.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`gallery-filter-btn${filter === f ? ' gallery-filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {displayedImages.map((image, index) => (
              <div
                key={`img-${index}`}
                className="gallery-card"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="gallery-card__img"
                />
                <div className="gallery-card__overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            ))}
            {displayedVideos.map((video, index) => (
              <div
                key={`vid-${index}`}
                className="gallery-card gallery-card--video"
                onClick={() => openVideoModal(video.src)}
              >
                <div className="gallery-card__video-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  <span>Play Video</span>
                </div>
                <div className="gallery-card__overlay gallery-card__overlay--video">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="gallery-lightbox__close" onClick={closeLightbox} aria-label="Close">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          {imageItems.length > 1 && (
            <>
              <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); goToPrev(); }} aria-label="Previous">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button className="gallery-lightbox__nav gallery-lightbox__nav--next" onClick={(e) => { e.stopPropagation(); goToNext(); }} aria-label="Next">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </>
          )}
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={imageItems[lightboxIndex]?.src} alt={imageItems[lightboxIndex]?.alt} className="gallery-lightbox__img" />
          </div>
        </div>
      )}

      {videoModalOpen && currentVideoSrc && (
        <div className="gallery-video-modal" onClick={closeVideoModal}>
          <div className="gallery-video-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-video-modal__close" onClick={closeVideoModal} aria-label="Close video">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <video
              src={currentVideoSrc}
              controls
              className="gallery-video-modal__video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
