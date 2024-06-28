import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

function Dashboard() {
  let location = useLocation();
  console.log(location)
  return (
    <div>
        <Navbar></Navbar>
      <h1>Dashboard</h1>
      <h2>{location&& location.state&&location.state.msg}</h2>
    </div>
  )
}

export default Dashboard
