import { Link, useLocation } from 'react-router-dom';
import './Sidenav.css';

// SVG Icons as inline components for self-containment and easy styling
const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const BagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-2.82.33 1.65 1.65 0 0 0-.1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-2.82 1.65 1.65 0 0 0-1.51-.1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 2.82-.33 1.65 1.65 0 0 0 .1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 2.82c.1.68.7 1.15 1.38 1.15h.09a2 2 0 0 1 2 2 2 2 0 0 1-2 2z"></path>
  </svg>
);

export const Sidenav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Overview', path: '/admin', icon: <GridIcon /> },
    { name: 'Orders', path: '/admin/orders', icon: <BagIcon /> },
    { name: 'Products', path: '/admin/products', icon: <BoxIcon /> },
    { name: 'Customers', path: '/admin/customers', icon: <UsersIcon /> },
    { name: 'Settings', path: '/admin/settings', icon: <SettingsIcon /> },
  ];

  const isActive = (path: string) => {
    if (path === '/admin' && currentPath !== '/admin') return false;
    return currentPath.startsWith(path);
  };

  return (
    <aside className="sidenav">
      {/* Top Header */}
      <div className="sidenav__header">
        <h1 className="sidenav__logo">
          <span className="logo-dark">Nexus</span> <span className="logo-blue">Admin</span>
        </h1>
        <p className="sidenav__subtitle">Manage your store</p>
      </div>

      {/* Navigation Links */}
      <nav className="sidenav__nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`sidenav__link ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="sidenav__link-icon">{item.icon}</span>
                <span className="sidenav__link-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer */}
      <div className="sidenav__spacer"></div>

      {/* Bottom Profile Section */}
      <div className="sidenav__profile">
        <div className="profile__avatar">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
        <div className="profile__info">
          <p className="profile__name">Alex Rivera</p>
          <p className="profile__role">Lead Administrator</p>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="sidenav__footer">
        <button className="btn-view-store">View Live Store</button>
      </div>
    </aside>
  );
};
