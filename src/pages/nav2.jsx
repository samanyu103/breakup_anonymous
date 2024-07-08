import React,{useState} from 'react'
import "./nav.css";
import icon from "./ico.png";
const Nav = () => {
  const [i, seti] = useState(false);
  return (
    <nav className='nav'> 
      <ul className="list">
        <li className="list-item cen">
          <img src={icon} alt="icon-img" className="img-icon" /> TelescamTeller
        </li> 
        <li className="list-item">
          <div className="hamburger-icon" onClick={() =>{seti(!i)} }>
            <div className={i ? " ham ham-u1" : "ham"}></div>
            <div className={i ? " ham ham-u2" : "ham"}></div>
            <div className={i ? " ham ham-u3" : "ham"}></div>
          </div>
        </li> 
      </ul>
      <ul className='list' id={i ? '' :'list'}>
          <li className="list-item ">Home</li>
          <li className="list-item">Contact Us</li>
          <li className="list-item ">About Us  </li>            
          <li className="list-item ">Pricing</li>
      </ul>
    </nav>
  )
}

export default Nav