import { useState } from "react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const [show, setShow] = useState("false");
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="" className="logo" />
        <div
          className="menu-btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span></span>
          <span></span>
        </div>
        <div className={`links ${show ? "hide" : "show"}`}>
          <ul>
            <li>
              <a href="#features">features</a>
            </li>
            <li>
              <a href="https://github.com/proksh/atomize" target="_blank">github</a>
            </li>
            <li>
              <a href="https://atomizedesign.com/" target="_blank">for designers</a>
            </li>
            <div className="header-btn">
              <a href="https://atomizecode.com/docs/react/intro"><span>Documentaion</span></a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
