import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import '../css/Home.css'

function Home() {
  const location = useLocation();
  // here we are using { user } instead of user, because if location.state JSON object has many key value pairs
  // user will be selected among them.
  // || {} is used to avoid error of location.state is NULL. if it is NULL user will be = {}
  const { user } = location.state || {};
  return (
    <div>
      <Header user={ user } />
    </div>
  )
}

export default Home
