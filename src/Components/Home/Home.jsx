import React from 'react'
import image from './image.png'
import './Home.css'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className='home-cont'>
      <div className='image'>
        <img src={image} alt="" className='image-home'/>
        <h1>Kerala's Leading Web Design Company</h1>
        <h5>Global Web Designing Company That Provides Full-cycle Software 
            Development Services, E-commerce & Mobile App Development Services
        </h5>
        <button className='chat'>Chat With us</button>
      </div>
      <Services/>
     
    </div>
  )
}

export default Home
