import React from "react";
import { Outlet } from "react-router-dom";
import NavBarTwo from "../components/navbar/NavBarTwo";

const Layout = () => {
  return (
    <div>
      <NavBarTwo />
      <div className="container mx-auto px-16 mb-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
