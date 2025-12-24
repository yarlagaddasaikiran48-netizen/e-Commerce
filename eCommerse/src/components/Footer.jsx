import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-content">
          <div className="footer-section">
            <h5>🛍️ Smart Gadget</h5>
            <p>Your trusted online destination for premium tech products at great prices.</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>🚚 Free shipping on orders over $100</p>
          </div>
          
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#products">Shop Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5>Customer Service</h5>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#warranty">Warranty</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5>Contact & Follow</h5>
            <p>📧yarlagaddasaikiran48@gmail.com</p>
            <p>📞+91-7993499776</p>
            <div className="social-links">
              <a href="#facebook" title="Facebook">f</a>
              <a href="#twitter" title="Twitter">𝕏</a>
              <a href="#instagram" title="Instagram">📷</a>
              <a href="#linkedin" title="LinkedIn">in</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Smart Gadget. All rights reserved.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <a href="#privacy" style={{ color: 'inherit', marginRight: '1rem' }}>Privacy Policy</a> | 
            <a href="#terms" style={{ color: 'inherit', marginLeft: '1rem', marginRight: '1rem' }}>Terms & Conditions</a> | 
            <a href="#cookies" style={{ color: 'inherit', marginLeft: '1rem' }}>Cookie Policy</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
