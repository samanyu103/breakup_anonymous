import React from 'react';
import './activities.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';


const Activities = () => {
    const [i, seti] = useState('');

  return (
    <div className="activities">
        <Link to = "https://www.quantguide.io/quantify">
        <button className="butn" id="mental_math" type='button' onClick={()=>{seti("")}} >Mental Math</button>
        </Link>
        <button className="butn" id="gym" type='button' onClick={()=>{seti("gym")}} >Gym</button>
        <div id = {i=="gym" ?"active" : "not-active"}>
            Did you workout for at least half an hour?
        </div>

    </div>
  )
}
export default Activities