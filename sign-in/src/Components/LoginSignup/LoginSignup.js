import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user-solid.svg'
import email_icon from '../Assets/envelope-solid.svg'
import lock_icon from '../Assets/lock-solid.svg'


function LoginSignup() {
    const[action, setAction] = useState("Sign Up/LogIn")
  return (
      <div className='container'>
          <div className='header'>
              <div className='text'>{action }</div>
              <div className='underline'></div>
          </div>

          <div className='inputs'>
              {action === 'LogIn' ? <div></div> :
                  <div className='input'>
                      <img src={user_icon} alt='' />
                      <input type='text' placeholder='Name' />
                  </div> }
            
              <div className='input'>
                  <img src={email_icon} alt='' />
                  <input type='email' placeholder='Email Id' />
              </div>
              <div className='input'>
                  <img src={lock_icon} alt='' />
                  <input type='password' placeholder='Password' />
              </div>
          </div>
          {action === 'Sign Up' ? <div></div> :
              <div className="forgot-password">Lost Password? <span>Click Here!</span></div>

}
          <div className='buttons'>
              <div className={action === 'LogIn' ? 'submit gray' : 'submit'}
              onClick={()=>{setAction('Sign Up')}}>
                  Sign Up</div>
              <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => { setAction('LogIn') }}>
                  LogIn</div>

          </div>
           </div>
  )
}

export default LoginSignup