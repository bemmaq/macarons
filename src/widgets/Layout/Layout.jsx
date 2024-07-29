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
