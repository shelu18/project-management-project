// pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="animate-text">PROJECT</span>
          <span className="animate-text delay-1">MANAGEMENT</span>
          <span className="animate-text delay-2">TOOL</span>
        </h1>
        <p className="hero-subtitle">Streamline. Collaborate. Succeed.</p>
        <div className="hero-buttons">
          <Link to="/signup" className="cta-button">Get Started</Link>
          <Link to="/login" className="secondary-button">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;