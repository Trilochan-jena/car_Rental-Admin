import React, { useState } from "react";

import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import "./top-nav.css";
import Logout from "../../pages/auth/Logout";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const TopNav = () => {
  let loginImg = sessionStorage.getItem("data");
  let loginImg2 = JSON.parse(loginImg);
   
  const [admin, setAdmin] = useState(false)
  const adminLogout = () => {
    setAdmin(!admin)
  }
  const CloseModal = () => {
    setAdmin(false)
  }
  console.log(loginImg2.image);

  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="search or type" />
          <span>
            <CiSearch className="search__icon" />
          </span>
        </div>
        <div className="top__nav-right">
          <span className="notification">
            <IoNotificationsOutline className="icon" />
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <Link to="/logout">  </Link>
            <img src={loginImg2.image} alt="profileimg" onClick={adminLogout} />
            {admin && <Logout closeModal={CloseModal} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
