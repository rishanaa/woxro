import React, { useState } from 'react'
import logo from './logo.png'
import { Link } from "react-router-dom"
import './Header.css'
import { Col, Container, Row } from 'reactstrap';
const Header = () => {
  const [Mobile,setMobile]=useState(false)
  return (
    <div className='header'>
        <div className='first-section'>
    <div className='segment1'>
        <h2>NOW HIRING : </h2>
        <h2 style={{fontWeight:'400'}}> Looking for a job in Full Stack Developement?</h2>
    </div>
    <div className='segment2'>
     <i class="fa-solid fa-phone-flip"></i>
     <h2>+91 487 2080 212</h2>
     <i class="fa-solid fa-location-dot"></i>
      <h2  style={{fontWeight:'400'}}>Lehshore Business Park, Thrissur</h2>
     </div>
     </div>
     <div className='second-section'>
      <Row>
        <Col md="6">
        <img src={logo} alt="" />
        </Col>
        
      </Row>
       
       
     <Row className='nav'>
     <Col md="12">
      <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={()=>setMobile(false)}>
          <Link Link to='/' className='home'>Home</Link>
          <Link Link to='/about'>About Us</Link>
          <Link Link to='/services'>Services</Link>
          <Link Link to='/technology'>Technology</Link>
          <Link Link to='/careers'>Careers</Link>
          <Link Link to='/blogs'>Blogs</Link>
          <Link Link to='/works'>Our Works</Link>
          <Link Link to='/contact'>Contact Us</Link>
      </ul>
      <Col md="6">
        <button className='toggle' onClick={()=>setMobile(!Mobile)}>
        {Mobile ? <i className='fa fa-times' ></i> : <i className='fa fa-bars' ></i>}
      </button>
        </Col>
      </Col>
     </Row>
     </div>
    </div>
  )
}
export default Header
