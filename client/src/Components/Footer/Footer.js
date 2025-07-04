import React from 'react'
import './Footer.css'
import footer from '../../Assets/share.jpeg'

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='left-footer'>
          <h1>ScribeHub</h1> 
        </div>
        <div className='right-footer'>
          <img src={footer} alt="" />
        </div>
      </section>
    </>
  )
}

export default Footer