import React, {useState}from 'react'
import './login.css';
const Login = () => {
    const [i, seti] = useState(false);

  return (
    <div class="body">
        <div class="login_box">
            <form class="form">
                <input type="email" class="field" id="username" name="username" placeholder="username"/>
                <input type="password" class="field" id="password" name="password" placeholder="password"/>
                <button class="btn" id="login" type="submit">LogIn</button>
                <p class="or">OR</p>
                <button class="btn" id="signup" onClick={()=>{seti(!i)}} >SignUp</button>
            </form>
        </div>
        <div id = "submit-box" class={i?"active":"active"}>
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
