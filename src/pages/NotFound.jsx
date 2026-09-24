import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="not-found__code">404</h1>
        <h2 className="not-found__title">Page Not Found</h2>
        <p className="not-found__desc">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
