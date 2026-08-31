import { GALLERY_IMAGES } from '../config';

export default function Gallery() {
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  aspectRatio: '4/3',
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
