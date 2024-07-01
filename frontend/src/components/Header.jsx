import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';

function Header({ user }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  }
  
  const handlePuzzlesClick = () => {
    navigate('/puzzles');
  }

  const handleBooksClick = () => {
    navigate('/books');
  }

  const hanldeMoviesClick = () => {
    navigate('/movies');
  }

  const handleWebSeriesClick = () => {
    navigate('/webseries');
  }

  return (
    <div className='header'>
      <div className='title'>
        To Do List
      </div>
      <div className='page' onClick={handleHomeClick}>
        Home
      </div>
      <div className='page' onClick={handlePuzzlesClick}>
        Cp Problems
      </div>
      <div className='page' onClick={handleBooksClick}>
        Books
      </div>
      <div className='page' onClick={hanldeMoviesClick}>
        Movies
      </div>
      <div className='page'onClick={handleWebSeriesClick}>
        Web Series
      </div>
      <div className='user'>
        <p>
          {/* ?. will be exceuted only if user is not NULL. */}
          Hi Mr.{user?.username}
        </p>
      </div>
    </div>    
  )
}

export default Header
