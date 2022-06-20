import React from "react";
import "./menu-item.style.css";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`${size} menu-item col-12 col-6-sm`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <h1 className="title text-white">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
