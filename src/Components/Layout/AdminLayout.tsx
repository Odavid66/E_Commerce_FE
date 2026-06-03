import { Outlet } from 'react-router-dom';
import { Sidenav } from '../Sidenav/Sidenav';
import './AdminLayout.css';

export function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidenav />
      <main className="admin-layout__content">
        <Outlet />
      </main>
    </div>
  );
}
