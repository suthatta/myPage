import logo from "./logo.png";
import React from "react";
const Header = ({subtitle}) => (
  <header className="row">
    <div className="col-md-5">
      <a href={process.env.NODE_ENV === "development" ? "/" : "/myPage"}>
        <img src={logo} className="logo" alt="logo" />
      </a>
    </div>
    <div className="col-md mt-5 subtitle">{subtitle}</div>
  </header>
);

export default Header;
