import React from 'react'
import axios from 'axios'
//here Link is a named export for react-router-dom
//so here we shall use curley braces ( as it is mandatory for named imports to be in curley braces ).
import { Link, useNavigate } from 'react-router-dom'
import '../css/Signup.css'

function Signup() {
    var username = '';
    var password = '';
    const navigate = useNavigate();

    const insertData = (data) => {
      //requesting the app.post /api/users method in index.js file
      //here we are also passing the data this data will be stored in req.body in that post method.
      axios.post('http://localhost:5000/api/users', data)
        .then(response => {
          console.log(response.data);
          // Handle the response data if needed
          navigate('/login');
          //redirects to the login page automatically after succesfull user insertion.
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
        <h3>Signup here for To Do List Application</h3>
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
          <Link to='/login'>login here!!</Link>
        </p>
      </div>
    )
}

export default Signup
