import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <div className='card'>
        <img src="/images/community.jpeg" alt="community" className='img' />
        <p className="title">Community </p>
        <p className="des">Connect , share your problem with us we will help you from the hell</p>
    </div>
  )
}

export default Card