
import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer.jsx/Footer'
import ProductSet from '../../features/ProductSet/ui/ProductSet'
import React, { createContext, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./../Header/Header";
import Footer from "./../Footer.jsx/Footer";

export const ScrollContext = createContext();


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
  )
}

    <ScrollContext.Provider value={{ handlePopular }}>
      <div>
        <Header />
        <Outlet context={{ popularSetsRef }} />
        <Footer />
      </div>
    </ScrollContext.Provider>
  );
};


export default Layout;
