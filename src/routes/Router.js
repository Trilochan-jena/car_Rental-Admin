import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import AddCars from "../pages/SellCar";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Privateroute from "../routes/Private.routes";
import TopNav from "../components/TopNav/TopNav";
import Sidebar from "../components/Sidebar/Sidebar";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route element={<Privateroute />}>

        <Route path="/" element={
          <div >
            <div>
              <Sidebar className="layout" />
              <div className="main__layout">
                <TopNav />
              </div>
              <Dashboard />
            </div>
          </div>
        } />

        <Route path="/dashboard" element={
          <div>
            <div>
              <Sidebar className="layout" />
              <div className="main__layout">
                <TopNav />
              </div>
            </div>
            <Dashboard />
          </div>
        } />

        <Route path="/bookings" element={
          <div>
            <div>
              <Sidebar className="layout" />
              <div className="main__layout">
                <TopNav />
              </div>
            </div>
            <Bookings />
          </div>

        } />

        <Route path="/addcars" element={
          <div>
            <div>
              <Sidebar className="layout" />
              <div className="main__layout">
                <TopNav />
              </div>
              <AddCars />
            </div>
          </div>
        } />
      </Route>

    </Routes>
  );
};

export default Router;
