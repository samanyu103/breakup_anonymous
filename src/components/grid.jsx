import React from 'react'
import "./grid.css";
const Grid = () => {
  return (
    <div className="fea-grid">
      <div className="grid">
          <span className="feature">Community</span>
          <img src="/images/community.jpeg" alt="community" className="image" />
      </div>
      <div className="grid">
          <span className="feature">Resources</span>
          <img src="/images/resources.png" alt="resources" className="image" />
      </div>
      <div className="grid">
          <span className="feature">Therapy</span>
          <img src="/images/therapy.png" alt="therapy" className="image" />
      </div>

      <div className="grid">
          <span className="feature">Activities</span>
          <img src="/images/gym.jpeg" alt="activities" className="image" />
      </div>
      <div className="grid">
          <span className="feature">Journaling</span>
          <img src="/images/journaling.png" alt="journaling" className="image" />
      </div>
      <div className="grid">
          <span className="feature">Spirituality</span>
          <img src="/images/meditation.jpeg" alt="meditation" className="image" />
      </div>
    </div>
  )
}

export default Grid