import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Login.css'

function Login() {
  var username = '';
  var password = '';
  const navigate = useNavigate();
  //function for fetching data from the backend.
  const fetchData = () => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        console.log(response.data);
        handleLogin(response.data);
        // Handle the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
    fetchData();
  }

  const handleLogin = (userData) => {
    var userFound = false;
    userData.forEach(user => {
      if(user.username === username && user.password === password)    userFound = true;
    });
    if(userFound)   console.log('user is found');
    else            console.log('no such user exists');
  }

  return (
    <div className='loginCard'>
      <h3>Login here for To Do List Application</h3>
      <h3>Enter UserName</h3>
      <input type="text" aria-label='UserName' placeholder='Username' onChange={handleUserNameChange}/>
      <h3>Enter Password</h3>
      <input type="text" aria-label='Password' placeholder='Password' onChange={handlePasswordChange}/>
      <br />
      <button onClick={handleOnSubmit}>
        Submit
      </button>
      <p>
        didn't have an account, 
        <Link to='/signup'>register here!!</Link>
      </p>
    </div>
  )
}

export default Login
