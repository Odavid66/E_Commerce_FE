import './Footer.css';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer__top">

        {/* Brand */}
        <div className="footer__brand">
          <h3 className="footer__logo">NexusStore</h3>
          <p className="footer__tagline">
            Engineered for high performance professionals. The best products for the modern world.
          </p>
        </div>

        {/* Shop Links */}
        <div className="footer__column">
          <h4 className="footer__heading">Shop</h4>
          <ul className="footer__list">
            <li onClick={() => navigate('/')}>All Products</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer__column">
          <h4 className="footer__heading">Company</h4>
          <ul className="footer__list">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer__column">
          <h4 className="footer__heading">Support</h4>
          <ul className="footer__list">
            <li>Help Center</li>
            <li>Shipping Policy</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer__bottom">
        <p>© 2025 NexusStore. All rights reserved.</p>
        <div className="footer__bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Settings</span>
        </div>
      </div>

    </footer>
  );
};