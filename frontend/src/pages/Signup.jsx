import React from 'react'
import '../css/Signup.css'

function Signup() {
    var username = '';
    var password = '';
  
    //events are only to be handled in arrow functions because of the latest updates.
    const handleUserNameChange = (event) => {
      //here we do not need to use this.username because this is undefined in function scope
      username = event.target.value;
    }
  
    const handlePasswordChange = (event) => {
      password = event.target.value;
    }
  
    const handleOnSubmit = (event) => {
      console.log("username is " + username);
      console.log("password is " + password);
    }
  
    return (
      <div className='signupCard'>
        <h3>Enter UserName</h3>
        <input type="text" aria-label='UserName' placeholder='Username' onChange={handleUserNameChange}/>
        <h3>Enter Password</h3>
        <input type="text" aria-label='Password' placeholder='Password' onChange={handlePasswordChange}/>
        <br />
        <button onClick={handleOnSubmit}>
          Submit
        </button>
        <p>
          already have an account, 
          <a href="https://www.google.com">login here</a>
        </p>
      </div>
    )
}

export default Signup
