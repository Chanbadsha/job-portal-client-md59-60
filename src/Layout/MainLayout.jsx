import React from "react";
import Navbar from "../sharedComponents/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Nab section */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
