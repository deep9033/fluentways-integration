import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import './Settings.css';

const Settings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Profile form state
  const [profileData, setProfileData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  // Password form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Notification preferences state
  const [notifications, setNotifications] = useState({
    sessionReminders: true,
    sessionConfirmations: true,
    progressUpdates: true,
    feedbackNotifications: true,
    marketingEmails: false,
    weeklyReports: true
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (setting) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Simulate API call for profile update
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update user data in localStorage
      const authData = JSON.parse(localStorage.getItem('fluentways_auth') || '{}');
      authData.user = {
        ...authData.user,
        name: `${profileData.firstName} ${profileData.lastName}`.trim(),
        email: profileData.email,
        phone: profileData.phone
      };
      localStorage.setItem('fluentways_auth', JSON.stringify(authData));
      
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match.' });
      setIsLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setMessage({ type: 'error', text: 'New password must be at least 8 characters long.' });
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call for password update
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      setMessage({ type: 'success', text: 'Password changed successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to change password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNotificationSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Save notification preferences to localStorage
      localStorage.setItem('fluentways_notifications', JSON.stringify(notifications));
      
      setMessage({ type: 'success', text: 'Notification preferences updated!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update preferences. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'password', label: 'Password', icon: '🔒' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' }
  ];

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account settings and preferences.</p>
      </div>

      <div className="settings-content">
        {/* Settings Tabs */}
        <div className="settings-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Message Display */}
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <Card className="settings-card">
            <h2 className="card-title">Profile Information</h2>
            <form onSubmit={handleProfileSubmit} className="settings-form">
              <div className="form-row">
                <Input
                  label="First Name"
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleProfileChange}
                  required
                />
                <Input
                  label="Last Name"
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleProfileChange}
                  required
                />
              </div>
              
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                required
                fullWidth
              />
              
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleProfileChange}
                required
                fullWidth
              />
              
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="settings-submit-btn"
              >
                {isLoading ? 'Updating...' : 'Update Profile'}
              </Button>
            </form>
          </Card>
        )}

        {/* Password Tab */}
        {activeTab === 'password' && (
          <Card className="settings-card">
            <h2 className="card-title">Change Password</h2>
            <form onSubmit={handlePasswordSubmit} className="settings-form">
              <Input
                label="Current Password"
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                required
                fullWidth
              />
              
              <Input
                label="New Password"
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                required
                fullWidth
              />
              
              <Input
                label="Confirm New Password"
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                required
                fullWidth
              />
              
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="settings-submit-btn"
              >
                {isLoading ? 'Changing Password...' : 'Change Password'}
              </Button>
            </form>
          </Card>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <Card className="settings-card">
            <h2 className="card-title">Notification Preferences</h2>
            <form onSubmit={handleNotificationSubmit} className="settings-form">
              <div className="notification-settings">
                <div className="notification-item">
                  <div className="notification-info">
                    <h3>Session Reminders</h3>
                    <p>Get notified before your scheduled sessions</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.sessionReminders}
                      onChange={() => handleNotificationChange('sessionReminders')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h3>Session Confirmations</h3>
                    <p>Receive confirmations when sessions are booked or cancelled</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.sessionConfirmations}
                      onChange={() => handleNotificationChange('sessionConfirmations')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h3>Progress Updates</h3>
                    <p>Get notified about your learning progress and achievements</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.progressUpdates}
                      onChange={() => handleNotificationChange('progressUpdates')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h3>Feedback Notifications</h3>
                    <p>Receive notifications when trainers provide feedback</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.feedbackNotifications}
                      onChange={() => handleNotificationChange('feedbackNotifications')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h3>Marketing Emails</h3>
                    <p>Receive promotional content and special offers</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.marketingEmails}
                      onChange={() => handleNotificationChange('marketingEmails')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h3>Weekly Reports</h3>
                    <p>Get weekly summaries of your learning activity</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={notifications.weeklyReports}
                      onChange={() => handleNotificationChange('weeklyReports')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="settings-submit-btn"
              >
                {isLoading ? 'Saving...' : 'Save Preferences'}
              </Button>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Settings; 