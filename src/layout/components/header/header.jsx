import React from "react";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import "./header.css";
import crown from "../../assets/crown.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={crown} alt="img" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
