import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import './Home.css';

const Home = ({ userType = 'premium' }) => {
  // Mock data
  const upcomingSession = {
    date: 'Tomorrow',
    time: '2:00 PM',
    trainer: 'Sarah Wilson',
    topic: 'Business Meeting Phrases',
    duration: '45 minutes'
  };

  const quickActions = [
    { title: 'Book Session', icon: '📅', path: '/dashboard/my-plan' },
    { title: 'View Progress', icon: '📊', path: '/dashboard/my-progress' },
    { title: 'Practice Speaking', icon: '🎤', path: '/dashboard/my-progress' },
    { title: 'Review Notes', icon: '📝', path: '/dashboard/my-progress' }
  ];

  const dailyProgress = {
    streak: 12,
    sessionsCompleted: 24,
    totalSessions: 48,
    fluencyScore: 78
  };

  const phraseOfTheDay = {
    phrase: "Break the ice",
    meaning: "To initiate conversation in a social setting",
    example: "I'll break the ice by asking about their weekend."
  };

  // New user testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      text: "FluentWays helped me gain confidence in speaking English at work. My colleagues now understand me clearly!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Business Analyst",
      text: "The personalized approach and expert trainers made all the difference. I can now lead meetings confidently.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Marketing Manager",
      text: "Within 3 months, I went from struggling with basic conversations to presenting to international clients.",
      rating: 5
    }
  ];

  // What you'll get features
  const features = [
    { text: "Live speaking sessions with expert trainers", icon: "🗣️" },
    { text: "Personalized feedback and improvement tips", icon: "👨‍🏫" },
    { text: "Flexible scheduling that fits your routine", icon: "📅" },
    { text: "Progress tracking and fluency assessments", icon: "📊" },
    { text: "Practice materials and assignments", icon: "📚" },
    { text: "24/7 support via WhatsApp", icon: "💬" }
  ];

  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
    // Navigation logic would go here
  };

  // New user content
  if (userType === 'new') {
    return (
      <div className="home-page new-user-view">
        <div className="page-header">
          <h1 className="page-title">Welcome to FluentWays! 🎯</h1>
          <p className="page-subtitle">
            Start your English fluency journey today with personalized 1-on-1 sessions
          </p>
          <a
            href="https://rzp.io/rzp/beVU9j7g"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button primary header-cta"
          >
            📞 Book Demo Session
          </a>
        </div>

        <div 
          className="home-content"
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}
        >
          {/* Welcome Section */}
          <section className="welcome-section">
            <Card className="welcome-card">
              <div className="welcome-content">
                <div className="welcome-icon">🌟</div>
                <div className="welcome-text">
                  <h2 className="welcome-title">Ready to Speak Confidently?</h2>
                  <p className="welcome-description">
                    Join thousands of learners who have transformed their English speaking skills 
                    with our expert trainers and personalized approach.
                  </p>
                  <div className="welcome-stats">
                    <div className="stat-item">
                      <span className="stat-number">95%</span>
                      <span className="stat-label">Success Rate</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Expert Trainers</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">10K+</span>
                      <span className="stat-label">Happy Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <Card className="cta-card">
              <div className="cta-content">
                <div className="cta-icon">💡</div>
                <h2 className="cta-title">Choose Your Perfect Plan</h2>
                <p className="cta-description">
                  Start with a demo session and choose the plan that fits your goals and schedule.
                </p>
                <div className="cta-actions">
                  <a
                    href="https://rzp.io/rzp/beVU9j7g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button primary"
                  >
                    📞 Book Demo Session
                  </a>
                  <Link to="/dashboard/my-plan" className="cta-button secondary">
                    💳 View Plans
                  </Link>
                </div>
              </div>
            </Card>
          </section>

          {/* Quick Actions for New Users */}
          <section className="actions-section">
            <h2 className="section-title">🚀 Get Started Fast</h2>
            <div className="actions-grid">
              {quickActions.map((action, index) => (
                <Link to={action.path} key={index} className="action-card-link">
                  <Card className="action-card">
                    <div className="action-icon">{action.icon}</div>
                    <div className="action-title">{action.title}</div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
            <h2 className="section-title">💬 What Our Students Say</h2>
            <div className="testimonials-carousel">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-stars">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-role">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* What You'll Get Section */}
          <section className="features-section">
            <h2 className="section-title">📦 What You'll Get</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.text}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Premium user content
  return (
    <div className="home-page premium-user-view">
      <div className="page-header">
        <h1 className="page-title">Welcome back, Sarah! 👋</h1>
        <p className="page-subtitle">
          Continue your English fluency journey with today's personalized learning experience
        </p>
      </div>

      <div className="home-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <Card className="welcome-card">
            <div className="welcome-content">
              <div className="welcome-icon">🌟</div>
              <div className="welcome-text">
                <h2 className="welcome-title">Your Learning Journey</h2>
                <p className="welcome-description">
                  You're making excellent progress! Keep up the great work with your daily practice.
                </p>
              </div>
            </div>
            <div className="welcome-stats">
              <div className="stat-item">
                <span className="stat-number">{dailyProgress.streak}</span>
                <span className="stat-label">Day Streak</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{dailyProgress.fluencyScore}%</span>
                <span className="stat-label">Fluency Score</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{dailyProgress.sessionsCompleted}/{dailyProgress.totalSessions}</span>
                <span className="stat-label">Sessions</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Upcoming Session */}
        <section className="session-section">
          <h2 className="section-title">Your Next Session</h2>
          <Card className="session-card">
            <div className="session-header">
              <div className="session-icon">📅</div>
              <div className="session-info">
                <h3 className="session-title">{upcomingSession.topic}</h3>
                <p className="session-details">
                  {upcomingSession.date} at {upcomingSession.time} • {upcomingSession.duration}
                </p>
                <p className="session-trainer">with {upcomingSession.trainer}</p>
              </div>
            </div>
            <div className="session-actions">
              <button className="session-button primary">Join Session</button>
              <button className="session-button secondary">Reschedule</button>
            </div>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="actions-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className="action-card"
                onClick={() => handleQuickAction(action.action)}
              >
                <div className="action-icon">{action.icon}</div>
                <div className="action-title">{action.title}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Daily Progress */}
        <section className="progress-section">
          <h2 className="section-title">Today's Progress</h2>
          <Card className="progress-card">
            <div className="progress-header">
              <h3 className="progress-title">Daily Speaking Practice</h3>
              <div className="progress-score">{dailyProgress.fluencyScore}%</div>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${dailyProgress.fluencyScore}%` }}
              ></div>
            </div>
            <div className="progress-stats">
              <div className="progress-stat">
                <span className="stat-label">Sessions Completed</span>
                <span className="stat-value">{dailyProgress.sessionsCompleted}</span>
              </div>
              <div className="progress-stat">
                <span className="stat-label">Day Streak</span>
                <span className="stat-value">{dailyProgress.streak} days</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Phrase of the Day */}
        <section className="phrase-section">
          <h2 className="section-title">Phrase of the Day</h2>
          <Card className="phrase-card">
            <div className="phrase-header">
              <div className="phrase-icon">💡</div>
              <div className="phrase-content">
                <h3 className="phrase-title">{phraseOfTheDay.phrase}</h3>
                <p className="phrase-meaning">{phraseOfTheDay.meaning}</p>
                <p className="phrase-example">"{phraseOfTheDay.example}"</p>
              </div>
            </div>
            <div className="phrase-actions">
              <button className="phrase-button">Practice This Phrase</button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Home; 