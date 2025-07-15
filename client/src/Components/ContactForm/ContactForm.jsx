// src/components/ContactForm.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  return (
    <>
    
    <div className="contact-section py-5" style={{ background: '#a97eff1a', minHeight: '100vh' }}>
      
      <div className="container bg-white shadow rounded-4 p-4">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="Envelope Icon"
              style={{ width: '60%', maxWidth: '250px' }}
            />
          </div>

          {/* Right Side: Form */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-4">Get in touch</h4>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Email"
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="4"
                  className="form-control rounded-4"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 rounded-pill fw-semibold"
                style={{ backgroundColor: '#8e62f3', color: '#fff' }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
