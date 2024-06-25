import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import { FaCarRear } from "react-icons/fa6";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import { CiDeliveryTruck } from "react-icons/ci";

const carObj = {
  title: "Total Cars",
  totalNumber: 20,
  icon: <FaCarRear />,
};

const tripObj = {
  title: "Total Booked",
  totalNumber: 10,
  icon:  <FaCarRear />,
};

const clientObj = {
  title: "Delivery",
  totalNumber: "8",
  icon: <CiDeliveryTruck />,
};


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />

        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

   
      </div>
    </div>
  );
};

export default Dashboard;
