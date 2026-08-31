import { DESTINATIONS } from '../config';
import { Link } from 'react-router-dom';
import './Destinations.css';

export default function Destinations() {
  return (
    <section className="destinations section">
      <div className="container">
        <div className="destinations__header">
          <h2 className="destinations__title">Popular Destinations</h2>
          <Link to="/packages" className="destinations__view-all">View All</Link>
        </div>
        <p className="destinations__subtitle">
          Explore the beautiful destinations of Maharashtra with our comfortable travel services.
        </p>
        <div className="destinations__grid">
          {DESTINATIONS.slice(0, 4).map((dest, index) => (
            <div key={index} className="destinations__card">
              <div className="destinations__image-wrapper">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <div className="destinations__overlay"></div>
              </div>
              <div className="destinations__info">
                <h3 className="destinations__name">{dest.name}</h3>
                <p className="destinations__desc">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}