import React from 'react'
import "./grid.css";
const Grid = () => {
  return (
    <div className="fea-grid">
      <div className='card'>
        <img src="/images/community.jpeg" alt="community" className='img' />
        <p className="title">Community </p>
        <p className="des">Connect with others going through similar situation</p>
      </div>
      <div className='card'>
        <img src="/images/resources.png" alt="community" className='img' />
        <p className="title">Resources </p>
        <p className="des">Books, videos and links to guide you through your recovery</p>
      </div>
      <div className='card'>
        <img src="/images/therapy.png" alt="community" className='img' />
        <p className="title">Therapy </p>
        <p className="des">Talk to a therapist</p>
      </div>
      <div className='card'>
        <img src="/images/gym.jpeg" alt="community" className='img' />
        <p className="title">Activities </p>
        <p className="des">Mental and physical exercises</p>
      </div>
      <div className='card'>
        <img src="/images/journaling.png" alt="community" className='img' />
        <p className="title">Journaling </p>
        <p className="des">Write down what is going on in your head</p>
      </div>
      <div className='card'>
        <img src="/images/meditation.jpeg" alt="community" className='img' />
        <p className="title">Spirituality </p>
        <p className="des">Discover yourself</p>
      </div>
    </div>
  )
}

export default Grid