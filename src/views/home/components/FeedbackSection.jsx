import React from 'react'

function FeedbackSection() {
  return (
    <section className="feedback-section">
        <h2 className="section-title">Customer Feedback</h2>
        <div className="feedback-cards">
          <div className="feedback-card">
            <img src="https://via.placeholder.com/80" alt="User 1" className="user-avatar" />
            <div className="feedback-content">
              <p className="user-feedback">"Excellent service, highly recommended!"</p>
              <span className="user-name">- John D.</span>
            </div>
          </div>
          <div className="feedback-card">
            <img src="https://via.placeholder.com/80" alt="User 2" className="user-avatar" />
            <div className="feedback-content">
              <p className="user-feedback">"The booking process was smooth and quick."</p>
              <span className="user-name">- Sarah M.</span>
            </div>
          </div>
          <div className="feedback-card">
            <img src="https://via.placeholder.com/80" alt="User 3" className="user-avatar" />
            <div className="feedback-content">
              <p className="user-feedback">"Affordable rates with premium cars!"</p>
              <span className="user-name">- Alex R.</span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FeedbackSection