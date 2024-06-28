import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

function Home1() {
  // let loc =useLocation();
  // console.log(loc)
  return (
    <div>
      <Navbar></Navbar>
      <img src='https://img.freepik.com/free-vector/realistic-responsive-website-design-collection_23-2149500081.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1719360000&semt=ais_user'></img>
    </div>
  )
}

export default Home1
