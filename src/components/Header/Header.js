import React from "react";
import logo from "../../../assets/logo.png";
import Menu from "../../components/Menu/Menu";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Navbar-Header">
      <div className="navbar-brand">
        <a href="/" data-toggle="tooltip" title="Home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <Menu />
    </div>
  );
}
