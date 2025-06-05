import React from 'react'
import {Link} from 'react-router-dom'
import './SignupScreen.css'

const SignupScreen = () => {
  return (
    <div className="signup-screen">
      <div>
        <h3>Create your<br /> PopX account</h3>
        <label>Full Name<span className='text-danger'>*</span></label>
        <input className="form-control" type="text" placeholder="Marry Doe" />
        <label>Phone number<span className='text-danger'>*</span></label>
        <input className="form-control" type="text" placeholder="Marry Doe" />
        <label>Email address<span className='text-danger'>*</span></label>
        <input className="form-control" type="text" placeholder="Marry Doe" />
        <label>Password<span className='text-danger'>*</span></label>
        <input className="form-control" type="text" placeholder="Marry Doe" />
        <label>Company name<span className='text-danger'>*</span></label>
        <input className="form-control mb-3" type="text" placeholder="Marry Doe" />
        <p>Are you an Agency<span className="text-danger">*</span></p>
        <div className="d-flex flex-row radio-text">
          <input className="mt-2 mr-2" type='radio' checked />
          <p className="mr-4">Yes</p>
          <input className="mt-2 mr-2" type='radio' />
          <p>No</p>
        </div>
        <Link className="link" to='/profile'>
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  )
}

export default SignupScreen
