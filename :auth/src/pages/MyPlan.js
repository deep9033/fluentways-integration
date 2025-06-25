import React, { useState } from 'react';
import './MyPlan.css';

const MyPlan = ({ userType = 'premium' }) => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const plans = [
    {
      id: 1,
      name: '1-Month Plan',
      price: '₹3,999',
      period: '/month',
      popular: false,
      savings: null,
      url: 'https://rzp.io/rzp/3V1Y37Ib',
      features: [
        '16 live 1-on-1 sessions',
        '4 days/week schedule',
        'Expert trainer feedback',
        'Personalized assignments',
        'Detailed session notes',
        'Rescheduling flexibility',
        'Practice materials'
      ]
    },
    {
      id: 2,
      name: '3-Month Plan',
      price: '₹2,972',
      period: '/month',
      popular: true,
      savings: 'Save ₹3,000',
      url: 'https://rzp.io/rzp/ynm6JbKd',
      features: [
        '16 live 1-on-1 sessions',
        '4 days/week schedule',
        'Expert trainer feedback',
        'Personalized assignments',
        'Detailed session notes',
        'Rescheduling flexibility',
        'Practice materials'
      ]
    },
    {
      id: 3,
      name: '6-Month Plan',
      price: '₹2,807',
      period: '/month',
      popular: false,
      savings: 'Save ₹7,000',
      url: 'https://rzp.io/rzp/GqkS4SL',
      features: [
        '16 live 1-on-1 sessions',
        '4 days/week schedule',
        'Expert trainer feedback',
        'Personalized assignments',
        'Detailed session notes',
        'Rescheduling flexibility',
        'Practice materials'
      ]
    }
  ];

  const handleGetStarted = (planId) => {
    console.log(`Starting plan ${planId}`);
    setShowUpgradeModal(true);
  };

  return (
    <div className="my-plan-premium">
      {/* Premium Header */}
      <div className="premium-header">
        <div className="header-content">
          <h1 className="premium-title">Your Learning Journey</h1>
          <p className="premium-subtitle">Choose the perfect plan to unlock your English potential</p>
        </div>
      </div>

      {/* Current Plan Status */}
      {userType === 'premium' && (
        <div className="current-plan-premium">
          <div className="status-card">
            <div className="status-badge">
              <span className="badge-icon">👑</span>
              <span className="badge-text">Premium Member</span>
            </div>
            <div className="status-details">
              <h2 className="current-plan-title">3-Month Premium Plan</h2>
              <p className="current-plan-desc">Priority slots · AI feedback · Biweekly reports</p>
              <div className="plan-metrics">
                <div className="metric">
                  <span className="metric-value">₹2,972</span>
                  <span className="metric-label">per month</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Feb 15</span>
                  <span className="metric-label">next billing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plans Section */}
      <div className="plans-premium">
        <div className="plans-header-premium">
          <h2 className="plans-title">Upgrade Your Experience</h2>
          <p className="plans-subtitle">Select the plan that matches your learning goals</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`plan-card-premium ${plan.popular ? 'plan-featured' : ''}`}>
              {plan.popular && (
                <div className="featured-badge">
                  <span className="featured-icon">⭐</span>
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="plan-header-premium">
                <h3 className="plan-name-premium">{plan.name}</h3>
                <div className="plan-pricing-premium">
                  <div className="price-main">{plan.price}</div>
                  <div className="price-period">{plan.period}</div>
                  {plan.savings && (
                    <div className="price-savings">{plan.savings}</div>
                  )}
                </div>
              </div>

              <div className="plan-features-premium">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature-item-premium">
                    <div className="feature-check">✓</div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="plan-action-premium">
                <a
                  href={plan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`action-button ${
                    userType === 'premium' && plan.id === 2 ? 'current-plan' : 'upgrade-plan'
                  }`}
                  style={{ whiteSpace: 'nowrap' }}
                  onClick={(e) => {
                    if (userType === 'premium' && plan.id === 2) {
                      e.preventDefault();
                    }
                  }}
                >
                  {userType === 'premium' && plan.id === 2 ? 'Current Plan' : 'Choose Plan'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="why-choose-premium">
        <div className="why-content">
          <h2 className="why-title">Why FluentWays?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🎯</div>
              <h3>Personalized Learning</h3>
              <p>Every session tailored to your goals</p>
            </div>
            <div className="why-item">
              <div className="why-icon">👨‍🏫</div>
              <h3>Expert Trainers</h3>
              <p>Certified professionals with experience</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📈</div>
              <h3>Proven Results</h3>
              <p>95% see improvement in 3 months</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🔄</div>
              <h3>Flexible Scheduling</h3>
              <p>Book sessions that fit your life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan; 