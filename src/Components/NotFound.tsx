import { Link } from "react-router-dom";
import "../Styles/NotFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <div className="content">
        <div className="hero">
          <p className="error-code">404</p>
          <h1 className="title">Page not found</h1>
          <p className="message">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="accent-line"></div>
        <Link to="/" className="home-link">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
