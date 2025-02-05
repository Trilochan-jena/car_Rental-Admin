import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import { SiKubernetes } from "react-icons/si";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
          <SiKubernetes />
          </span>{" "}
          UberX
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <div className="icon" >{item.icon}</div >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
