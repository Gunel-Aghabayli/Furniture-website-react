import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="furni">
          <h1>Furni.</h1>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
        </div>
        <div className="footer-part">
          <p>About us</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>
        <div className="footer-part">
          <p>Support</p>
          <p>Knowledge base</p>
          <p>Live chat</p>
        </div>
        <div className="footer-part">
          <p>Jobs</p>
          <p>Our team</p>
          <p>Leadership</p>
          <p>Privacy policy</p>
        </div>
        <div className="footer-part">
          <p>Nordic chair</p>
          <p>Kruzo Aero</p>
          <p>Ergonomic chair</p>
        </div>
      </div>
      <div className="lastpart">
      <p className="copy">Copyright © 2024 by Omnifood.All rights reserved.— Designed with love by Untree.co Distributed By </p>
      <p className="privacy">Terms&Conditions <span>Privacy Policy</span></p>
      </div>
      </div>
  );
};

export default Footer;
