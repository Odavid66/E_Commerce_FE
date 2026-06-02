import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar__logo" onClick={() => navigate('/')}>
        NexusStore
      </div>

      {/* Nav Links */}
      <ul className="navbar__links">
        <li onClick={() => navigate('/')}>Shop</li>
        <li>Categories</li>
        <li>Deals</li>
        <li>Support</li>
      </ul>

      {/* Search */}
      <div className="navbar__search">
        <input type="text" placeholder="Search products..." />
      </div>

      {/* Icons */}
      <div className="navbar__icons">
        <span onClick={() => navigate('/cart')}>🛒</span>
        <span>👤</span>
      </div>

    </nav>
  );
};