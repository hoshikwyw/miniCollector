import React, { useState } from "react";
import "./sidebar.css";
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

  const onToggleBtnClick = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Draggable axis="y">
        <nav className={isNavOpen ? "nav open" : "nav"}>
          <div className="nav-content">
            <div className="toggle-btn" onClick={onToggleBtnClick}>
              {isNavOpen ? <BsFillXCircleFill /> : <GiCircleForest />}
            </div>
            <span style={{ "--i": 1 }}>
              <Tooltip hasArrow label="Home">
                <a href="#">
                  <HiHome className=" navIcon" />
                </a>
              </Tooltip>
            </span>
            <span style={{ "--i": 2 }}>
              <Tooltip hasArrow label="Settings">
                <a href="#">
                  <FiSettings className=" navIcon" />
                </a>
              </Tooltip>
            </span>
            <span style={{ "--i": 3 }}>
              <Tooltip hasArrow label="Profile">
                <a href="#">
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
                <a href="#">
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
