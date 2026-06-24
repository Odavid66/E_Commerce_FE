import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  const handleProfileClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate('/profile');
  };

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
        <span onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>🛒</span>
        {/* Attached the API test here */}
        <span onClick={handleProfileClick} style={{ cursor: 'pointer' }}>👤</span>
      </div>

    </nav>
  );
};