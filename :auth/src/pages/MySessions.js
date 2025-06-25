import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './MySessions.css';

const MySessions = ({ userType = 'premium' }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentPage, setCurrentPage] = useState(1);
  const sessionsPerPage = 5;

  // Mock sessions data
  const sessions = [
    {
      id: 1,
      date: '2024-01-18',
      time: '14:00',
      trainer: 'Sarah Wilson',
      topic: 'Business Communication',
      status: 'upcoming',
      duration: '45 minutes',
      type: '1-on-1'
    },
    {
      id: 2,
      date: '2024-01-15',
      time: '10:30',
      trainer: 'Mike Johnson',
      topic: 'Grammar Review',
      status: 'completed',
      duration: '45 minutes',
      type: '1-on-1',
      rating: 4.5,
      feedback: 'Great improvement in complex sentence structures!'
    },
    {
      id: 3,
      date: '2024-01-12',
      time: '16:00',
      trainer: 'Emma Davis',
      topic: 'Pronunciation Practice',
      status: 'completed',
      duration: '45 minutes',
      type: '1-on-1',
      rating: 5.0,
      feedback: 'Excellent work on vowel sounds and intonation patterns.'
    },
    {
      id: 4,
      date: '2024-01-20',
      time: '11:00',
      trainer: 'David Chen',
      topic: 'Vocabulary Building',
      status: 'upcoming',
      duration: '45 minutes',
      type: '1-on-1'
    },
    {
      id: 5,
      date: '2024-01-10',
      time: '13:30',
      trainer: 'Lisa Brown',
      topic: 'Speaking Confidence',
      status: 'completed',
      duration: '45 minutes',
      type: '1-on-1',
      rating: 4.0,
      feedback: 'Good progress in maintaining conversation flow.'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const filteredSessions = sessions.filter(session => {
    if (activeTab === 'upcoming') return session.status === 'upcoming';
    if (activeTab === 'completed') return session.status === 'completed';
    return true;
  });

  const totalPages = Math.ceil(filteredSessions.length / sessionsPerPage);
  const startIndex = (currentPage - 1) * sessionsPerPage;
  const endIndex = startIndex + sessionsPerPage;
  const currentSessions = filteredSessions.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewPlans = () => {
    navigate('/dashboard/my-plan');
  };

  if (userType === 'new') {
    return (
      <div className="my-sessions-page">
        <div className="page-header">
          <h1 className="page-title">My Sessions</h1>
          <p className="page-subtitle">
            Start your English learning journey with personalized sessions
          </p>
        </div>

        <div className="sessions-content">
          <Card className="upgrade-card">
            <div className="upgrade-content">
              <div className="upgrade-icon">🔒</div>
              <h2 className="upgrade-title">Unlock Your Sessions</h2>
              <p className="upgrade-description">
                Choose a plan to start booking personalized English coaching sessions with our expert trainers.
              </p>
              <button className="upgrade-button" onClick={handleViewPlans}>View Plans</button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="my-sessions-page">
      <div className="page-header">
        <h1 className="page-title">My Sessions</h1>
        <p className="page-subtitle">
          Manage your upcoming, past, and canceled sessions.
        </p>
      </div>

      <div className="sessions-content">
        {/* Session Tabs */}
        <div className="sessions-tabs">
          <button
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            📅 Upcoming ({sessions.filter(s => s.status === 'upcoming').length})
          </button>
          <button
            className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            ✅ Completed ({sessions.filter(s => s.status === 'completed').length})
          </button>
        </div>

        {/* Sessions List */}
        <div className="sessions-list">
          {currentSessions.length > 0 ? (
            currentSessions.map((session) => (
              <Card key={session.id} className="session-card">
                <div className="session-header">
                  <div className="session-info">
                    <div className="session-date-time">
                      <span className="session-date">{formatDate(session.date)}</span>
                      <span className="session-time">{formatTime(session.time)}</span>
                    </div>
                    <div className="session-topic">{session.topic}</div>
                  </div>
                  <div className="session-status">
                    <span className={`status-badge ${session.status}`}>
                      {session.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                </div>

                <div className="session-details">
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Trainer:</span>
                      <span className="detail-value">{session.trainer}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{session.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Type:</span>
                      <span className="detail-value">{session.type}</span>
                    </div>
                  </div>

                  {session.status === 'completed' && session.rating && (
                    <div className="session-feedback">
                      <div className="feedback-rating">
                        <span className="rating-stars">
                          {'★'.repeat(Math.floor(session.rating))}
                          {'☆'.repeat(5 - Math.floor(session.rating))}
                        </span>
                        <span className="rating-value">{session.rating}/5</span>
                      </div>
                      <div className="feedback-text">{session.feedback}</div>
                    </div>
                  )}
                </div>

                <div className="session-actions">
                  {session.status === 'upcoming' ? (
                    <>
                      <button className="action-button primary">Join Session</button>
                      <button className="action-button secondary">Reschedule</button>
                      <button className="action-button secondary">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="action-button secondary">View Details</button>
                      <button className="action-button secondary">Download Notes</button>
                    </>
                  )}
                </div>
              </Card>
            ))
          ) : (
            <Card className="empty-state-card">
              <div className="empty-state">
                <div className="empty-icon">📅</div>
                <h3 className="empty-title">No {activeTab} sessions</h3>
                <p className="empty-description">
                  {activeTab === 'upcoming' 
                    ? 'You don\'t have any upcoming sessions. Book your next session to continue learning!'
                    : 'You haven\'t completed any sessions yet. Start your learning journey today!'
                  }
                </p>
                {activeTab === 'upcoming' && (
                  <button className="action-button primary">Book Session</button>
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              ← Previous
            </button>
            
            <div className="pagination-pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-page ${page === currentPage ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              className="pagination-button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySessions; 