import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="navbar">
          <div className="first">Furni.</div>
          <div className="second">Home Shop About Services Blog Contact</div>
          <div className="icons">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        <div className="below-navbar">
          <div className="aboutus">
            <div className="about">About Us</div>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="buttons">
              <button className="buton1">Shop now</button>
              <button className="buton2">Explore</button>
            </div>
          </div>
          <div className="img">
            <img
              src="https://themewagon.github.io/furni/images/couch.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
