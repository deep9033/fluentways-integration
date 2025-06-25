import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './TopNav.css';

const TopNav = ({ className = '', userType }) => {
  const navigate = useNavigate();
  const { logout, user: authUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Use auth user data if available, otherwise fallback to mock data
  const user = authUser || {
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    email: 'john.doe@example.com'
  };

  const handleLogout = () => {
    setIsLoggingOut(true);
    logout(() => {
      setIsLoggingOut(false);
      navigate('/login', { replace: true });
    });
  };

  const getUserInitials = () => {
    if (!user) return 'U';
    const firstName = user.firstName || user.name?.split(' ')[0] || '';
    const lastName = user.lastName || user.name?.split(' ').slice(1).join(' ') || '';
    return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase() || 'U';
  };

  const getUserName = () => {
    if (!user) return 'User';
    return user.fullName || user.name || user.firstName || 'User';
  };

  const getUserEmail = () => {
    if (!user) return '';
    return user.email || user.primaryEmailAddress?.emailAddress || '';
  };

  return (
    <nav className={`top-nav ${className}`}>
      <div className="nav-left">
        <Link to="/dashboard" className="nav-logo-link">
          <img
            src="/logo.png"
            alt="FluentWays Logo"
            className="nav-logo"
          />
        </Link>
      </div>

      <div className="nav-right">
        <div className="user-profile" onClick={() => setShowDropdown(!showDropdown)}>
          <div className="user-avatar">
            <span className="avatar-text">{getUserInitials()}</span>
          </div>
          <div className="user-info">
            <div className="user-name">{getUserName()}</div>
            <div className="user-email">{getUserEmail()}</div>
          </div>
          <span className="dropdown-arrow">▼</span>
        </div>

        {showDropdown && (
          <div className="profile-dropdown">
            <div className="dropdown-item">
              <span className="dropdown-icon">👤</span>
              Profile
            </div>
            <div className="dropdown-divider"></div>
            <div 
              className={`dropdown-item ${isLoggingOut ? 'logging-out' : ''}`} 
              onClick={handleLogout}
            >
              <span className="dropdown-icon">🚪</span>
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav; 