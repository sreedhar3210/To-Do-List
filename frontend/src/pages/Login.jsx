import React from 'react'
import '../css/Login.css'

function Login() {
  return (
    <div className='loginCard'>
      <h3>Enter UserName</h3>
      <input type="text" aria-label='UserName' placeholder='Username'/>
      <h3>Enter Password</h3>
      <input type="text" aria-label='Password' placeholder='Password'/>
      <br />
      <button>
        Submit
      </button>
      <p>
        didn't have an account, 
        <a href="https://www.google.com">register here</a>
      </p>
    </div>
  )
}

export default Login
