import React, {useState}from 'react'
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [i, seti] = useState('');

  return (
    <div className="body">
        <div id={i=='' ?"login_box":"not-active"} >
            <form class="form" >
                <input type="email" className="field" id="username" name="username" placeholder="username"/>
                <input type="password" className="field" id="password" name="password" placeholder="password"/>
                <button className="btn" id="login" type="submit">LogIn</button>
                <p class="or">OR</p>
                <button class="btn" id="signup" type='button' onClick={()=>{seti("set")}} >SignUp</button>
                {/* <Link to = '/signup'> */}
                    {/* <button className="btn" id = "signup" >SignUp</button> */}
                {/* </Link> */}
            </form>
        </div>
        <div id = {i=="set" ?"submit-box" : "not-active"}>
            <form class="signup">
                <input type="email" class="field" id="username" name="username" placeholder="username"/>
                <input type="password" class="field" id="password" name="password" placeholder="password"/>
                <button class="signup-btn" type="submit">SignUp</button>
            </form>
        </div>

    </div>
  )
  }

export default Login
