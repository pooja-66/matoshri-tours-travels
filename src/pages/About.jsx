export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Matoshri Tours & Travels and our commitment to premium travel experiences.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: '#0B1F33' }}>Who We Are</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '20px' }}>
              Matoshri Tours & Travels is a trusted name in premium travel services based in Pune, Maharashtra.
              We specialize in providing Force Urbania on rent for families, corporate clients, and groups
              looking for comfortable and reliable travel solutions.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '20px' }}>
              Our fleet of well-maintained Force Urbania vehicles is equipped with modern amenities to ensure
              a luxurious journey. Whether you need airport transfers, outstation travel, corporate transportation,
              or wedding event services, we have you covered.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '20px' }}>
              We pride ourselves on our professional drivers, clean vehicles, punctual service, and transparent
              pricing. Our goal is to make every journey comfortable, safe, and memorable for our customers.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
              <div style={{ textAlign: 'center', padding: '32px 20px', background: '#F8F7F3', borderRadius: '16px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#D4A84F', fontFamily: "'Playfair Display', serif" }}>500+</div>
                <div style={{ fontSize: '0.9rem', color: '#6B7280', marginTop: '8px' }}>Happy Customers</div>
              </div>
              <div style={{ textAlign: 'center', padding: '32px 20px', background: '#F8F7F3', borderRadius: '16px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#D4A84F', fontFamily: "'Playfair Display', serif" }}>1000+</div>
                <div style={{ fontSize: '0.9rem', color: '#6B7280', marginTop: '8px' }}>Trips Completed</div>
              </div>
              <div style={{ textAlign: 'center', padding: '32px 20px', background: '#F8F7F3', borderRadius: '16px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#D4A84F', fontFamily: "'Playfair Display', serif" }}>5+</div>
                <div style={{ fontSize: '0.9rem', color: '#6B7280', marginTop: '8px' }}>Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
