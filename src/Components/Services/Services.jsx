import React from 'react'
import './Services.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import computer from './computer.png'
import service1 from './service1.png'
import mobile from './mobile.png'
import ecommerce from './ecommerce.png'
import graphic from './graphic.png'
import digital from './digital.png'
import Contact from '../Contact/Contact';


const Services = () => {
  return (
    <div className='services'>
      <div className='service-cont'>
        <p>SERVICES WE DELIVER</p>
        <h4>Preparing for your success, we provide truly</h4>
        <h4>  prominent IT solutions.</h4>
      </div>
      <div className='services-bottom'>
      <CardGroup>
      <Card className='service-card' style={{backgroundColor: '#e7f0f7'}}>
        <Card.Body>
        <img src={computer} alt="" />
          <Card.Title style={{fontWeight:'700',fontSize:'24px'}}>Web Designing</Card.Title>
          <Card.Text style={{fontSize:'14px',letterSpacing:'1px'}}>
          We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the 
          latest web design trends, our experience, and achievements.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='service-card' style={{backgroundColor: '#f6f5f3'}}>
        <Card.Body>
        <img src={service1} alt="" />
          <Card.Title style={{fontWeight:'700',fontSize:'24px'}}>Web Designing</Card.Title>
          <Card.Text style={{fontSize:'14px',letterSpacing:'1px'}}>
          We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a 
          professional partner who can develop stunning web applications.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='service-card' style={{backgroundColor: '#f6f5f3'}}>
        <Card.Body>
        <img src={mobile} alt="" />
          <Card.Title style={{fontWeight:'700',fontSize:'24px'}}>Web Designing</Card.Title>
          <Card.Text style={{fontSize:'14px',letterSpacing:'1px'}}>
          We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile 
          applications for iOS and Android and cross-platform solutions.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    <CardGroup>
      <Card className='service-card' style={{backgroundColor: '#fcf0e4'}}>
        <Card.Body>
        <img src={ecommerce} alt="" />
          <Card.Title style={{fontWeight:'700',fontSize:'24px'}}>Web Designing</Card.Title>
          <Card.Text style={{fontSize:'14px',letterSpacing:'1px'}}>
          For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – 
          a possibility to give their business a fresh start.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='service-card' style={{backgroundColor: '#f5f6f8'}}>
        <Card.Body>
        <img src={digital} alt="" />
          <Card.Title style={{fontWeight:'700',fontSize:'24px'}}>Web Designing</Card.Title>
          <Card.Text style={{fontSize:'14px',letterSpacing:'1px'}}>
          We bring together expertise in digital marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating 
          great stories. Now Maximize your online visibility.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='service-card' style={{backgroundColor: '#effbfb'}}>
        <Card.Body>
        <img src={graphic} alt="" />
          <Card.Title style={{fontWeight:'700',fontSize:'24px'}}>Web Designing</Card.Title>
          <Card.Text style={{fontSize:'14px',letterSpacing:'1px'}}>
          For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a 
          possibility to give their business a fresh start.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
      </div>
      <Contact/>
    </div>
  )
}

export default Services
