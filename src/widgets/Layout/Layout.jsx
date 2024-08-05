import React, { useRef } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer.jsx/Footer'

const Layout = () => {
  const popularSetsRef = useRef(null);

  const handlePopular = () => {
    popularSetsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
};

export default Layout;
