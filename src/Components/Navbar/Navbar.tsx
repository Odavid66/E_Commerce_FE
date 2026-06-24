import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { fetchClient } from '../../utils/fetchClient'; // Adjust path if needed
import { useAuthStore } from '../../store/authStore';

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  const handleProfileClick = async () => {
    // If they aren't logged in, maybe redirect to login instead of testing
    if (!isAuthenticated) {
      navigate('/E_Commerce_FE/login');
      return;
    }

    try {
      console.log("1. Fetching user profile...");
      // Hitting the protected endpoint you specified
      const data = await fetchClient('/api/auth/profile');
      
      console.log("2. Profile Data Received:", data);
      alert("Success! Profile fetched. Check console for data.");
    } catch (error) {
      console.error("3. Profile Fetch Failed:", error);
      alert("Failed to fetch profile. Check the console and network tab.");
      
      // Optional: If it fails entirely (refresh token also dead), log them out
      // logout();
    }
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