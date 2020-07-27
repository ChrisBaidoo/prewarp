import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-30px">
            <h1>Prewarp</h1>
          </div>
          <div className="col-md-6 col-sm-6 mb-30px">
            <div>
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

        <div className="row" id="about">
          <div className="col-md-6 col-sm-6 mb-30px">
            <h4>Launch product.</h4>
            <h4>Capture demand.</h4>
            <h4>Take on risk.</h4>
            <p>
              Removing guess work from product creation and inventrory
              management.
            </p>
          </div>
          <div class="col-md-6 col-sm-6">
            <p>In private beta. For information:</p>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Email" required />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <hr />
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 mb-30px">
          <div>
            <img src="/src/tom-barber.jpeg" alt="Tom Barber"></img>
            <h6>Tom Barber</h6>
            <p>CEO and Co-founder</p>
          </div>
          <div>
            <h6>Tom Walker</h6>
            <p>CTO and Co-founder</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <p>
            Copyright 2020 Prewarp Limited Companies House No. 12345678 All
            rights reserved Privacy Policy
          </p>
          <p>
            Lincoln Studios, The Biscuit Factory, Drummond Rd London SE16 4DG
            hello@prewarp.co
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
