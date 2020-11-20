import React from 'react';
import './ChoseYourTeam.css';
import background from '../../images/Rectangle 31@1X.png';



const ChoseYourTeam = () => {
    return (
        <div className="chooseYourTeam">
          <div className="container">
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

                  <p className="card-text team-p">Homepage<br/><br/> 4 Inner Page<br/><br/>Asset file<br/><br/>
                  Source file<br/><br/>Free Stock Photos<br/><br/>20 Days Free Support<br/><br/>24/7 Support</p>
                  <button className="btn navContact pricing-btn mt-4 team-btn">Order Now</button>
                </div>
              </div>
              <div className="card team-card">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h3 className="card-title team-price">$599</h3>
                  <h6 className="card-text team-plan">For Elite</h6>

                  <p className="card-text team-p">Homepage<br/><br/> 8 Inner Page<br/><br/>Asset file<br/><br/>
                  Source file<br/><br/>Free Stock Photos<br/><br/>30 Days Free Support<br/><br/>24/7 Support</p>
                  <button className="btn navContact pricing-btn mt-4 team-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="team-background style">
            <img src={background} alt=""/>
          </div>
        </div>
    );
};

export default ChoseYourTeam;