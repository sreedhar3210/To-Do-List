import React from 'react'
import '../css/Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='title'>
        To Do List
      </div>
      <div className='page'>
        Home
      </div>
      <div className='page'>
        Cp Problems
      </div>
      <div className='page'>
        Books
      </div>
      <div className='page'>
        Movies
      </div>
      <div className='page'>
        Web Series
      </div>
      <div className='user'>
        Profile
      </div>
    </div>    
  )
}

export default Header
