import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <p>
            <span>Contact Us:</span>
            <div className="footcon">
            <span>Email: support@taskmaster.com</span> 
            <span>Phone: 123-456-7890</span>
            </div>
          </p>
          <p>
            <span>Social Media:</span>
            <ul className="social-links">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </p>
        </div>
      </footer>
    </div>
  );
}
