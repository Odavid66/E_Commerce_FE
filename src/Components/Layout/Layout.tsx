import './Layout.css';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__content">
        {children}
      </main>
      <Footer />
    </div>
  );
};