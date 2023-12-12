import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';


const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

  
    useEffect(() => {
      // Check if the current path is '/'
      if (location.pathname === '/') {
        // Redirect to '/home' when the user manually refreshes the page
        navigate('/home');
      }
  
    }, [location]);
  
  
    return (
      <div className='bg-secondary'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
  
  export default Layout;
