// components/header/Header.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../../features/auth/context/AuthContext';
import './Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <Link to="/">ProjectHub</Link>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            
            {/* Show these links only when the user is authenticated */}
            {isAuthenticated && (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </>
            )}
          </ul>
        </nav>
        <div className="auth-buttons">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;