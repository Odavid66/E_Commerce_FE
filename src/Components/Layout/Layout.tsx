import './Layout.css';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};