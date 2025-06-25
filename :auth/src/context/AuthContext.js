import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth on app load
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem('fluentways_auth');
        if (authData) {
          const { isAuthenticated: auth, user: userData } = JSON.parse(authData);
          if (auth && userData) {
            setUser(userData);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        // Clear invalid auth data
        localStorage.removeItem('fluentways_auth');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (userData) => {
    console.log('Logging in user:', userData);
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('fluentways_auth', JSON.stringify({
      isAuthenticated: true,
      user: userData
    }));
  };

  // Accepts an optional callback to be called after logout is complete
  const logout = (callback) => {
    console.log('Logging out user');
    
    // Clear localStorage first
    try {
      localStorage.removeItem('fluentways_auth');
      localStorage.removeItem('fluentways_notifications');
      console.log('localStorage cleared successfully');
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
    
    // Clear state synchronously
    setUser(null);
    setIsAuthenticated(false);
    
    console.log('Logout completed successfully');
    
    // Force a re-render by updating loading state briefly
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);

    if (typeof callback === 'function') {
      // Ensure callback is called after state updates
      setTimeout(callback, 0);
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 