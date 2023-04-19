import React from 'react'
import './Contact.css'
import earth from './earth.png'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div>
      <img src={earth} alt="" />
      </div>
      <div>
        <button> <i class="fa-solid fa-phone"></i> Contact us</button>
        <button> <i class="fa-solid fa-comment"></i> Let's Talk</button>
      </div>
    </div>
  )
}

export default Contact
