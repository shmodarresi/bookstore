import React from "react";
import {Link} from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <nav className="navbar navbar-light bg-light">
         <Link to="/" className="navbar-brand bold">Book Store</Link>
      </nav>
      <div className="container-fluid py-4">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
