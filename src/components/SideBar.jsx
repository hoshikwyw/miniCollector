import React, { useEffect, useState } from "react";
import "./css/sidebar.css";
import {
  BsFillXCircleFill,
  BsPersonCircle,
  BsFillLightbulbOffFill,
} from "react-icons/bs";
import { GiCircleForest } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import Draggable from "react-draggable";
import { Tooltip } from "@chakra-ui/react";

const SideBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [maxY, setMaxY] = useState(0); // To store the maximum vertical position
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Current position

  useEffect(() => {
    // Calculate the maximum vertical position based on the screen height
    const screenHeight = window.innerHeight;
    const sidebarHeight = document.querySelector(".nav").clientHeight;

    if (screenHeight > sidebarHeight) {
      setMaxY(screenHeight - sidebarHeight);
    }
  }, [isNavOpen]);

  const onToggleBtnClick = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Draggable axis="y" handle=".toggle-btn" // Restrict dragging to the toggle button
        bounds={{ top: 0, bottom: maxY }} // Limit vertical movement
        position={position} // Control position with state
        onStop={(e, data) => {
          setPosition({ x: 0, y: data.y });
        }}>
        <nav className={isNavOpen ? "nav open" : "nav"}>
          <div className="nav-content">
            <div className="toggle-btn" onClick={onToggleBtnClick}>
              {isNavOpen ? <BsFillXCircleFill /> : <GiCircleForest />}
            </div>
            <span style={{ "--i": 1 }}>
              <Tooltip hasArrow label="Home">
                <a href="/">
                  <HiHome className=" navIcon" />
                </a>
              </Tooltip>
            </span>
            <span style={{ "--i": 2 }}>
              <Tooltip hasArrow label="Settings">
                <a href="/settings">
                  <FiSettings className=" navIcon" />
                </a>
              </Tooltip>
            </span>
            <span style={{ "--i": 3 }}>
              <Tooltip hasArrow label="Profile">
                <a href="/profile">
                  <BsPersonCircle className=" navIcon" />
                </a>
              </Tooltip>
            </span>
            <span style={{ "--i": 4 }}>
              <Tooltip hasArrow label="Dark Mode">
                <a href="#">
                  <BsFillLightbulbOffFill className=" navIcon" />
                </a>
              </Tooltip>
            </span>
            <span style={{ "--i": 5 }}>
              <Tooltip hasArrow label="Ads">
                <a href="/ads">
                  <RiMoneyDollarCircleFill className=" navIcon" />
                </a>
              </Tooltip>
            </span>
          </div>
        </nav>
      </Draggable>
    </div>
  );
};

export default SideBar;
