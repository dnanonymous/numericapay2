import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="">Home</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
