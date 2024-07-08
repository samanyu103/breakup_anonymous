import React from 'react'
import "./navi.css";
const Navi = () => {
  return (
    <nav className='nav'>
        <ul className="list">
            <li className="item">Bran</li>
            <li className="item">
                <div className="hamburger">
                    <div className="ham"></div>
                    <div className="ham"></div>
                    <div className="ham"></div>
                </div>
            </li>
        </ul>
        <ul className="list">
            <li className="item">Home</li>
            <li className="item">About Us</li>
            <li className="item">Contact Us</li>
            <li className="item">Products</li>
        </ul>
        
    </nav>
  )
}

export default Navi