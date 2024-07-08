import { useState } from "react";
import "./nav.css";
import { Link } from 'react-router-dom';


const Nav = () => {
    const [i, seti] = useState(0);
    return (
        <nav className="nav">   
        <div className="hamburger-icon" onClick={() =>{seti(!i)} }>
            <div className={i ? " ham ham-u1" : "ham"}></div>
            <div className={i ? " ham ham-u2" : "ham"}></div>
            <div className={i ? " ham ham-u3" : "ham"}></div>
        </div>
            <ul className="list" id = {i? '':"list"}>
                <li className="list-item">
                    <Link to = "/community">
                        Community
                    </Link></li>
                <li className="list-item">Resources</li>
                <li className="list-item">Therapy</li>
                <li className="list-item">Activities</li>
                <li className="list-item">Journaling</li>
                <li className="list-item">Spirituality</li>

            </ul>
        </nav>
    )
}







export default Nav