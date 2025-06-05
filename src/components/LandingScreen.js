import React from 'react'
import {Link} from 'react-router-dom'
import './LandingScreen.css'

const LandingScreen = () => {
  return (
    <div className="landing-screen">
      <div>
        <h3>Welcome to PopX</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to='/signup'>
          <button className="btn button-1">Create Account</button>
        </Link>
        <Link to='/login'>
          <button className="btn button-2">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingScreen
