import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="main1">
      <div className="main">
        <div className="choose">
          <h1>Why Choose Us</h1>
          <p className="ptag">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="gridpart">
            <div className="part1">
              <i class="fa-solid fa-car-side"></i>
              <h3>Free&Fast Shipping</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="part1">
              <i class="fa-solid fa-bag-shopping"></i>
              <h3>Easy to Shop</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="part1">
              <i class="fa-solid fa-compact-disc"></i>
              <h3>24/7 Support</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="part1">
              <i class="fa-solid fa-right-left"></i>
              <h3>Hassle Free Returns</h3>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
        <div className="image">
          <img
            src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="team">
        <h1>Our Team</h1>
      </div>

      <div className="names">
        <div className="person1">
          <img
            className="name-image"
            src="https://themewagon.github.io/furni/images/person_1.jpg"
            alt=""
          />
          <h2>Lawson Arnold</h2>
          <p>CEO, Founder, Atty.</p>
          <p>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>
          <a href="https://themewagon.github.io/furni/about.html?#">
            Learn More
          </a>
        </div>
        <div className="person1">
          <img
            className="name-image"
            src="https://themewagon.github.io/furni/images/person_2.jpg"
            alt=""
          />
          <h2>Jeremy Walker</h2>
          <p>CEO, Founder, Atty.</p>
          <p>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>
          <a href="https://themewagon.github.io/furni/about.html?#">
            Learn More
          </a>
        </div>
        <div className="person1">
          <img
            className="name-image"
            src="https://themewagon.github.io/furni/images/person_3.jpg"
            alt=""
          />
          <h2>Patrick White</h2>
          <p>CEO, Founder, Atty.</p>
          <p>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>
          <a href="https://themewagon.github.io/furni/about.html?#">
            Learn More
          </a>
        </div>
        <div className="person1">
          <img
            className="name-image"
            src="https://themewagon.github.io/furni/images/person_4.jpg"
            alt=""
          />
          <h2>Kathryn Ryan</h2>
          <p>CEO, Founder, Atty.</p>
          <p>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>
          <a href="https://themewagon.github.io/furni/about.html?#">
            Learn More
          </a>
        </div>
      </div>
      <div className="test">
        <p className="testimonial">Testimonials</p>
        <p className="donec">
          “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Integer convallis volutpat dui quis scelerisque.”
        </p>
        <img
          className="test-image"
          src="https://themewagon.github.io/furni/images/person-1.png"
          alt=""
        />
        <h5>Maria Jones</h5>
        <h5>CEO, Co-Founder, XYZ Inc.</h5>
      </div>
      <div className="above-footer">
        <div className="email">
          <div className="icon">
            <i class="fa-regular fa-envelope"></i>
            <span>Subscribe to Newsletter</span>
          </div>
          <div className="butons">
            <input placeholder="Enter your name"></input>
            <input placeholder="Enter your email"></input>
            <button>
              <i class="fa-brands fa-telegram"></i>
            </button>
          </div>
        </div>
        <div className="chair">
          <img
            className="chair-image"
            src="https://themewagon.github.io/furni/images/sofa.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
