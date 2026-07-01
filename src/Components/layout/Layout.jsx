import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
const Layout = () => {
  return (
    <div className="site-wrapper">
        <Navbar />
      <main className="main-section">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
