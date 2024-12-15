import React from 'react';
import  './ContactUs.css'; // Your custom styles

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="container py-5">
        <h2 className="text-center section-title animate-fadeIn text-black">Contact Us</h2>
        <p className="text-center section-subtitle animate-fadeIn">
          We're here to assist you. Get in touch with us for any queries regarding our services.
        </p>
        
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-card p-4 shadow-lg rounded animate-fadeIn">
              <i className="fas fa-phone-alt contact-icon mb-3"></i>
              <h4>Phone</h4>
              <p>
                <strong>Toll-free for U.S. & Canada: </strong> <a href="tel:+18007693254">1-800-769-3254</a>
              </p>
              <p><small>Operating hours: Monday 00:00 a.m. to Saturday 08:00 p.m. (UTC)</small></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-card p-4 shadow-lg rounded animate-fadeIn">
              <i className="fas fa-map-marker-alt contact-icon mb-3"></i>
              <h4>Location</h4>
              <p>DoMyAssignments.com is provided by [Company Name].</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="contact-card p-4 shadow-lg rounded animate-fadeIn">
              <i className="fas fa-envelope contact-icon mb-3"></i>
              <h4>Email</h4>
              <p>
                <a href="mailto:info@domyassignments.com">info@domyassignments.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="contact-card p-4 shadow-lg rounded animate-fadeIn">
              <i className="fas fa-comments contact-icon mb-3"></i>
              <h4>Live Chat</h4>
              <p>Chat operating hours: Monday 00:00 a.m. to Saturday 08:00 p.m. (UTC)</p>
              <button className="btn btn-primary">Open Chat</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline-success btn-lg animate-fadeIn">Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;