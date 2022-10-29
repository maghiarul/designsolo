import React from "react";
import Image from "next/image";
import LOGO from "../public/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <a href="/">
          <Image src={LOGO} alt="logo goes here" width={200} />
        </a>
      </div>
      <div className="navbar-item">
        <a href="#" className="guide">Free Guide</a>
      </div>
    </div>
  );
}

export default Navbar;
