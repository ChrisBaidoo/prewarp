import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="row" id="nav">
          <div className="col-md-6 col-sm-6">
            <img
              src={require("../assets/photos/prewarp_logo.png")}
              width="100"
              class="inline-block"
              alt=""
            />
            <h1 className="logo-title">Prewarp</h1>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="about-button">
              <ul className="buttons02 style1 buttons">
                <li>
                  <a href="#about" className="button n01">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-6 col-sm-6">
            <h1>Prewarp</h1>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="about-button">
              <ul className="buttons02 style1 buttons">
                <li>
                  <a href="#about" className="button n01">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="row" id="about">
          <div className="col-md-6 col-sm-6 mb-30px">
            <div>
              <p id="text03">
                <span>Launch product.</span>
                <br /> <span>Capture demand.</span>
                <br />
                <span>
                  <s>Take on risk.</s>
                </span>
              </p>
              <p id="text04">
                Removing guess work from product creation <br />
                and inventrory management.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <p>In private beta. For information:</p>
            <form id="form02">
              <div className="inner">
                <div className="field">
                  <input
                    type="text"
                    name="fname"
                    id="form02-fname"
                    placeholder="Name"
                    maxlength="128"
                    required=""
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    id="form02-email"
                    placeholder="Email"
                    maxlength="128"
                  />
                </div>

                <div class="actions">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <hr />
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-4 mb-30px profile">
          <div>
            <div className="profile-image">
              <img
                src={require("../assets/photos/tom-barber.jpeg")}
                alt="Tom Barber"
                width="80%"
              />
            </div>
            <div className="profile-details test-font">
              <h6>Tom Barber</h6>
              <p>CEO and Co-founder</p>
            </div>
          </div>
          <div className="profile-image">
            <div className="profile-container">
              <img
                src={require("../assets/photos/tom-walker.jpeg")}
                alt="Tom Walker"
                width="80%"
              />
            </div>

            <div className="profile-details">
              <h6>Tom Walker</h6>
              <p>CTO and Co-founder</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div className="profile">
            <div className="image-container">
              <img
                src={require("../assets/photos/PngItem_2839759.png")}
                alt="Logo"
                width="100%"
              />
            </div>

            <div className="image-container">
              <img
                src={require("../assets/photos/imperial-college-london.png")}
                alt="Imperial College London"
                width="100%"
              />
            </div>

            <div className="image-container">
              <img
                src={require("../assets/photos/university-of-cambridge.png")}
                alt="University of Cambridge"
                width="100%"
              />
            </div>

            <div className="image-container">
              <img
                src={require("../assets/photos/university-of-oxford.png")}
                alt="University of Oxford"
                width="100%"
              />
            </div>
          </div>
          <div className="copyrigt-info">
            <p>
              Copyright 2020 Prewarp Limited Companies House No. 12345678 All
              rights reserved Privacy Policy
            </p>
          </div>
        </div>
        <div class="col-md-2 col-sm-2 profile">
          <p>
            Lincoln Studios, <br />
            The Biscuit Factory, Drummond Rd London SE16 4DG hello@prewarp.co
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
