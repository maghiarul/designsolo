import React from "react";
import Navbar from "../components/Navbar";
import About from "../public/about.png";
import Image from "next/image";

function about() {
  return (
    <div className="page">
      <Navbar />
      <div className="about-content">
        <div className="about-heading">
          <h1>From shepherd to 6-figure UX solo designer</h1>
        </div>
        <div className="about-image">
          <Image src={About} alt="about photo" width={650} />
        </div>
      </div>
    </div>
  );
}

export default about;
