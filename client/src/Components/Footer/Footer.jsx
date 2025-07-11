import React from 'react'
import './Footer.css'
import footer from '../../Assets/share.jpeg'
import 'tailwindcss'

// const Footer = () => {
//   return (
//     <>
//       <section className='footer'>
//         <div className='left-footer'>
//           <h1>ScribeHub</h1> 
//           <div className='contact'>
//             <a href="/">Gmail</a><br/>
//             <a href="/">Twitter</a><br/>
//             <a href="/">Instagram</a>
            
//           </div>
//         </div>
//         <div className='right-footer'>
//           <img src={footer} alt="" />
//         </div>
//       </section>
//     </>
//   )
// }

// export default Footer

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo and description */}
          <div className="col-md-4 mb-3">
            <h4 className="text-uppercase fw-bold">ScribeHub</h4>
            <p className="text-white">
              Share your stories, connect with others, and be part of a growing community.
            </p>
          </div>

          {/* Navigation links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/features" className="text-white text-decoration-none">Features</a></li>
              <li><a href="/stories" className="text-white text-decoration-none">Stories</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="https://github.com/" className="text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/" className="text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com/" className="text-white" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>

        </div>

        {/* Footer bottom text */}
        <div className="text-center pt-4 mt-3 border-top border-secondary text-white">
          &copy; {new Date().getFullYear()} ChatTales. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
