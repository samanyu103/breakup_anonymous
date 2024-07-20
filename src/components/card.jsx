import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <div className='card'>
        <img src="/images/community.jpeg" alt="community" className='img' />
        <p className="title">Community </p>
        <p className="des">Connect with others going through a similar situation</p>
    </div>
  )
}

export default Card