import React,{useState} from 'react'
import "./navi.css";
const Navi = () => {
    const [i, seti] = useState(true);
  return (
    <nav className='nav'>
        <ul className="list">
            <li className="item">Bran</li>
            <li className="item">
                <div className="hamburger" onClick={()=>{seti(!i)}}>
                    <div className={i ? "ham" : "ham c1"}></div>
                    <div className={i ? "ham" : "ham c2"}></div>
                    <div className={i ? "ham" : "ham c3"}></div>
                </div>
            </li>
        </ul>
        <ul className={i ? "list" : "nbi"}>
            <li className="item">Home</li>
            <li className="item">About Us</li>
            <li className="item">Contact Us</li>
            <li className="item">Products</li>
        </ul>
        
    </nav>
  )
}

export default Navi