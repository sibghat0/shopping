import React from "react";
import "./menu-item.css";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className="menu-item">
    <div
      className="background-image"
      style={{
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
          ")",
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
