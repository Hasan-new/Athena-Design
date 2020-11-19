import React from 'react';
import './ChoseYourTeam.css';



const ChoseYourTeam = () => {
    return (
        <div className="container chooseYourTeam">
          <h2 className="text-center mb-5">Choose Your Dedicated Team</h2>
        
          <div className="card-deck text-center">
            <div className="card team-card">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h3 className="card-title team-price">$199</h3>
                <h6 className="card-text team-plan">For Basic</h6>

                <p className="card-text team-p">Homepage<br/><br/> No Inner Page<br/><br/>Asset file<br/><br/>
                Source file<br/><br/>Free Stock Photos<br/><br/>10 Days Free Support<br/><br/>24/7 Support</p>
                <button className="btn navContact pricing-btn mt-4 team-btn">Order Now</button>
              </div>
            </div>
            <div className="card team-card">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h3 className="card-title team-price">$399</h3>
                <h6 className="card-text team-plan">For Preferred</h6>

                <p className="card-text team-p">Homepage<br/><br/> No Inner Page<br/><br/>Asset file<br/><br/>
                Source file<br/><br/>Free Stock Photos<br/><br/>10 Days Free Support<br/><br/>24/7 Support</p>
                <button className="btn navContact pricing-btn mt-4 team-btn">Order Now</button>
              </div>
            </div>
            <div className="card team-card">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h3 className="card-title team-price">$599</h3>
                <h6 className="card-text team-plan">For Elite</h6>

                <p className="card-text team-p">Homepage<br/><br/> No Inner Page<br/><br/>Asset file<br/><br/>
                Source file<br/><br/>Free Stock Photos<br/><br/>10 Days Free Support<br/><br/>24/7 Support</p>
                <button className="btn navContact pricing-btn mt-4 team-btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ChoseYourTeam;