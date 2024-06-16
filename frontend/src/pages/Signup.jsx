import React from 'react'
import axios from 'axios'
import '../css/Signup.css'

function Signup() {
    var username = '';
    var password = '';

    const insertData = (data) => {
      //requesting the app.post /api/users method in index.js file
      //here we are also passing the data this data will be stored in req.body in that post method.
      axios.post('http://localhost:5000/api/users', data)
        .then(response => {
          console.log(response.data);
          // Handle the response data if needed
        })
        .catch(error => {
          console.error('Error inserting data:', error);
        });
    };
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
      const data = {username: username,
                    password: password
      };
      insertData(data);
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
