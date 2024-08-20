import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-section">
        <h3>Locations</h3>
        <div>
          <div>Sydney CBD</div>
          <div>Dardivng Harbour</div>
          <div>Chatswood</div>
          <div>Milsons Point</div>
        </div>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <div>
          <div>About Us</div>
          <div>Contact</div>
          <div>Booking</div>
          <div>Latest News</div>
        </div>
      </div>
      <div className="footer-section">
        <h3>Opening Hours</h3>
        <div>
          <div>Mon — Thu: 12pm to 9pm</div>
          <div>Fri: 12pm to 10pm</div>
          <div>Sat: 11.30am to 10pm</div>
          <div>Sun: 11.30am to 8.30pm</div>
        </div>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <div>
          <div><strong>For General Enquiries</strong></div>
          <div>Phone: +39-055-123456</div>
          <div>Email: hello@patiotime.com</div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
