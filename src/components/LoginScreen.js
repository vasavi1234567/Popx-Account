import React from 'react'
import {Link} from 'react-router-dom'
import './LoginScreen.css'

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div>
        <h3>Signin to your<br /> PopX account</h3>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
        <label>Email Address</label>
        <input className="form-control" type="text" placeholder="Enter email address" />
        <label>Password</label>
        <input className="form-control" type="text" placeholder="Enter password" />
        <Link className="link" to='/profile'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default LoginScreen
