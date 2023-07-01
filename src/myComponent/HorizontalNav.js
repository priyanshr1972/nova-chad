import React from 'react';
import './HorizontalNav.css'; // Import custom CSS file for styling

const HorizontalNav = () => {
  const currentDate = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
  const currentTime = currentDate.toLocaleTimeString();

  return (
    <nav className="horizontal-navbar" style={{ background: '#3f8dc3', color: '#fff' }}>
      <div className="container">
        <div className="horizontal-navbar-content">
          <div className="left-section">
            <div className="horizontal-nav-item">Date: {formattedDate}</div>
            <div className="horizontal-nav-item">Time: {currentTime}</div>
            <div className="horizontal-nav-item">City: Mathura</div>
            <div className="horizontal-nav-item">Country: India</div>
          </div>
          <div className="right-section">
            <a className="horizontal-nav-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="horizontal-nav-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="horizontal-nav-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Add more social media links/icons as needed */}
            <a className="horizontal-nav-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="horizontal-nav-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNav;
