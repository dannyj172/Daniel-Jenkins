import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <img src="pfp.webp" alt="" className="header-img2" />

      <div className="info-box">
        <h2>Daniel Jenkins</h2>
        <h1 className="geist">Software Engineer</h1>
      </div>
    </section>
  );
};

export default Header;
