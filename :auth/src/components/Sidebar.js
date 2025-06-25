import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const Sidebar = ({ userType }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    logout(() => {
      setIsLoggingOut(false);
      navigate('/login', { replace: true });
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { path: '/dashboard', icon: '🏠', label: 'Home' },
    { path: '/dashboard/my-sessions', icon: '📅', label: 'My Sessions' },
    { path: '/dashboard/my-progress', icon: '📊', label: 'My Progress' },
    { path: '/dashboard/my-plan', icon: '💳', label: 'My Plan' },
    { path: '/dashboard/settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <>
      <button className="sidebar-mobile-toggle" onClick={toggleMobileMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      <div 
        className={`sidebar-overlay ${isMobileMenuOpen ? 'sidebar-overlay--open' : ''}`}
        onClick={toggleMobileMenu}
      ></div>

      <aside className={`sidebar ${isMobileMenuOpen ? 'sidebar--open' : ''}`}>
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map(item => (
              <li key={item.path} className="sidebar-menu-item">
                <NavLink 
                  to={item.path} 
                  end={item.path === '/dashboard'}
                  className={({ isActive }) => 
                    `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`
                  }
                  onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-label">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button 
            className="sidebar-logout" 
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <span className="sidebar-icon">🚪</span>
            <span className="sidebar-label">
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 