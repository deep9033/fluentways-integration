import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './MyProgress.css';

const MyProgress = ({ userType = 'premium' }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock progress data
  const progressData = {
    fluencyScore: 78,
    fluencyLevel: 'Intermediate B1',
    totalSpeakingMinutes: 245,
    assignmentsCompleted: 12,
    totalAssignments: 16,
    sessionsCompleted: 24,
    totalSessions: 48,
    streakDays: 12,
    badges: [
      { name: 'First Session', icon: '🎯', earned: true },
      { name: 'Week Warrior', icon: '🏆', earned: true },
      { name: 'Fluency Master', icon: '⭐', earned: false },
      { name: 'Consistency King', icon: '👑', earned: false }
    ],
    recentFeedback: [
      {
        trainer: 'Sarah Wilson',
        date: '2024-01-15',
        rating: 4.5,
        comment: 'Excellent improvement in pronunciation! Your confidence is growing with each session.'
      },
      {
        trainer: 'Mike Johnson',
        date: '2024-01-12',
        rating: 4.0,
        comment: 'Great work on complex sentences. Keep practicing the new vocabulary.'
      }
    ]
  };

  // Mock assignments data
  const assignments = [
    {
      id: 1,
      title: 'Practice Business Meeting Phrases',
      description: 'Record yourself using 10 business meeting phrases in context',
      dueDate: '2024-01-20',
      status: 'pending',
      type: 'recording'
    },
    {
      id: 2,
      title: 'Write a Travel Blog Post',
      description: 'Write a 200-word blog post about your dream vacation destination',
      dueDate: '2024-01-18',
      status: 'completed',
      type: 'writing'
    },
    {
      id: 3,
      title: 'Watch TED Talk & Summarize',
      description: 'Watch "The Power of Vulnerability" and summarize in 3 minutes',
      dueDate: '2024-01-22',
      status: 'pending',
      type: 'video'
    },
    {
      id: 4,
      title: 'Practice Phone Conversation',
      description: 'Role-play a customer service call with a friend',
      dueDate: '2024-01-25',
      status: 'pending',
      type: 'conversation'
    }
  ];

  const handleFileUpload = (assignmentId) => {
    console.log(`Uploading file for assignment ${assignmentId}`);
    // File upload logic would go here
  };

  const navigate = useNavigate();

  const handleViewPlans = () => {
    navigate('/dashboard/my-plan');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    return status === 'completed' ? 'var(--success)' : 'var(--warning)';
  };

  const getStatusText = (status) => {
    return status === 'completed' ? '✅ Completed' : '🟡 Pending';
  };

  const getAssignmentIcon = (type) => {
    const icons = {
      recording: '🎤',
      writing: '✍️',
      video: '📹',
      conversation: '🗣️'
    };
    return icons[type] || '📘';
  };

  if (userType === 'new') {
    return (
      <div className="my-progress-page">
        <div className="page-header">
          <h1 className="page-title">My Progress</h1>
          <p className="page-subtitle">
            Track your learning journey and see how far you've come.
          </p>
        </div>

        <div className="progress-content">
          <Card className="upgrade-card">
            <div className="upgrade-content">
              <div className="upgrade-icon">🔒</div>
              <h2 className="upgrade-title">Unlock Your Progress Tracker</h2>
              <p className="upgrade-description">
                Choose a plan to get access to detailed progress tracking, assignments, and personalized feedback.
              </p>
              <button className="upgrade-button" onClick={handleViewPlans}>View Plans</button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="my-progress-page">
      <div className="page-header">
        <h1 className="page-title">My Progress</h1>
        <p className="page-subtitle">Track your learning journey and see how far you've come.</p>
      </div>

      <div className="progress-content">
        {/* Progress Overview */}
        <section className="progress-overview-section">
          <div className="overview-header">
            <h2 className="section-title">Progress Overview</h2>
            <div className="overview-stats">
              <Card className="stat-card">
                <div className="stat-icon">🧠</div>
                <div className="stat-info">
                  <div className="stat-value">{progressData.totalSpeakingMinutes} mins</div>
                  <div className="stat-label">Total Speaking Minutes</div>
                </div>
              </Card>
              
              <Card className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-info">
                  <div className="stat-value">{progressData.assignmentsCompleted} of {progressData.totalAssignments} Done</div>
                  <div className="stat-label">Assignments Completed</div>
                </div>
              </Card>
              
              <Card className="stat-card">
                <div className="stat-icon">📈</div>
                <div className="stat-info">
                  <div className="stat-value">{progressData.fluencyLevel}</div>
                  <div className="stat-label">Fluency Level</div>
                </div>
              </Card>
            </div>
          </div>

          <div className="progress-chart">
            <div className="chart-container">
              <div className="chart-header">
                <div className="chart-title">Fluency Progress</div>
                <div className="fluency-level">Fluency Level: {progressData.fluencyLevel}</div>
              </div>
              <div className="chart-bar">
                <div 
                  className="chart-fill"
                  style={{ width: `${progressData.fluencyScore}%` }}
                ></div>
              </div>
              <div className="chart-labels">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
                <span>Fluent</span>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Speaking Assignments - Premium Only */}
        {userType === 'premium' && (
          <section className="assignments-section">
            <div className="assignments-header">
              <h2 className="section-title">Weekly Speaking Assignments</h2>
              <p className="section-subtitle">
                Your trainer adds personalized tasks here to help you speak better in real-life situations.
              </p>
            </div>

            <div className="assignments-grid">
              {assignments.map((assignment) => (
                <Card key={assignment.id} className="assignment-card">
                  <div className="assignment-header">
                    <div className="assignment-icon">
                      {getAssignmentIcon(assignment.type)}
                    </div>
                    <div className="assignment-info">
                      <h3 className="assignment-title">{assignment.title}</h3>
                      <p className="assignment-description">{assignment.description}</p>
                    </div>
                    <div className="assignment-status">
                      <span 
                        className="status-badge"
                        style={{ color: getStatusColor(assignment.status) }}
                      >
                        {getStatusText(assignment.status)}
                      </span>
                    </div>
                  </div>

                  <div className="assignment-details">
                    <div className="assignment-due">
                      <span className="due-label">Due:</span>
                      <span className="due-date">{formatDate(assignment.dueDate)}</span>
                    </div>
                    
                    {assignment.status === 'pending' && (
                      <button
                        className="upload-button"
                        onClick={() => handleFileUpload(assignment.id)}
                      >
                        📤 Upload Assignment
                      </button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Achievements & Badges */}
        <section className="achievements-section">
          <h2 className="section-title">Achievements & Badges</h2>
          <div className="badges-grid">
            {progressData.badges.map((badge, index) => (
              <div 
                key={index} 
                className={`badge-card ${badge.earned ? 'badge-earned' : 'badge-locked'}`}
              >
                <div className="badge-icon">{badge.icon}</div>
                <div className="badge-name">{badge.name}</div>
                <div className="badge-status">
                  {badge.earned ? 'Earned' : 'Locked'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Feedback */}
        <section className="feedback-section">
          <h2 className="section-title">Recent Trainer Feedback</h2>
          <div className="feedback-list">
            {progressData.recentFeedback.map((feedback, index) => (
              <Card key={index} className="feedback-card">
                <div className="feedback-header">
                  <div className="trainer-info">
                    <div className="trainer-name">{feedback.trainer}</div>
                    <div className="feedback-date">{formatDate(feedback.date)}</div>
                  </div>
                  <div className="feedback-rating">
                    <span className="rating-stars">
                      {'★'.repeat(Math.floor(feedback.rating))}
                      {'☆'.repeat(5 - Math.floor(feedback.rating))}
                    </span>
                    <span className="rating-value">{feedback.rating}/5</span>
                  </div>
                </div>
                <div className="feedback-comment">{feedback.comment}</div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyProgress; 