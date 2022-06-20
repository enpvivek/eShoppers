import React from "react";
import "./menu-item.style.css";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`${size} menu-item`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="menu-item">
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
