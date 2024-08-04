import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer.jsx/Footer'
import ProductSet from '../../features/ProductSet/ui/ProductSet'

const Layout = () => {
  const popularSetsRef = useRef(null);

  const handlePopular = () => {
    popularSetsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
        <Header/>
        <Outlet/>
        {/* <ProductSet/> */}
        <Footer/>
    </div>
  );
};

export default Layout;
