import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import { scroller } from "react-scroll"; // Import scroller from react-scroll
import Header from "./../Header/Header";
import Footer from "./../Footer.jsx/Footer";

export const ScrollContext = createContext();

const Layout = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }; // Close the scrollToSection function properly

  return (
    <div>
      <ScrollContext.Provider value={scrollToSection}>
        <Header />
        <Outlet />
        <Footer />
      </ScrollContext.Provider>
    </div>
  );
};

export default Layout;
