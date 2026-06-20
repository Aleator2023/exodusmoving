import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

import './Layout.css';

function Layout() {
  return (
    <div className="site-wrapper">
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Layout;