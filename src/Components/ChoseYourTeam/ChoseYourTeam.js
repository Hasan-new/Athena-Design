import React from 'react';
import './ChoseYourTeam.css';



const ChoseYourTeam = () => {
    return (
        <div className="container">
            <h4 className="text-center">Choose Your Dedicated Team</h4>
           
            <div class="card-deck">
  <div class="card">
    {/* <img src="..." class="card-img-top" alt="..." /> */}
    <div class="card-body">
      <h2 class="card-title">$199</h2>
      <h6 class="card-text">For Basic</h6>

      <canvas id="myCanvas"></canvas>

      <p class="card-text">Homepage<br/><br/> No Inner Page<br/><br/>Asset file<br/><br/>
      Source file<br/><br/>Free Stock Photos<br/><br/>10 Days Free Support<br/><br/>24/7 Support</p>
      <button>Order Now</button>
    </div>
  </div>
  <div class="card">
    {/* <img src="..." class="card-img-top" alt="..." /> */}
    <div class="card-body">
      <h2 class="card-title">$399</h2>
      <h6 class="card-text">For Preferred</h6>
      
      <canvas id="myCanvas"></canvas>

      <p class="card-text">Homepage<br/><br/> No Inner Page<br/><br/>Asset file<br/><br/>
      Source file<br/><br/>Free Stock Photos<br/><br/>10 Days Free Support<br/><br/>24/7 Support</p>
      <button>Order Now</button>
    </div>
  </div>
  <div class="card">
    {/* <img src="..." class="card-img-top" alt="..." /> */}
    <div class="card-body">
      <h2 class="card-title">$599</h2>
      <h6 class="card-text">For Elite</h6>

      <canvas id="myCanvas"></canvas>

      <p class="card-text">Homepage<br/><br/> No Inner Page<br/><br/>Asset file<br/><br/>
      Source file<br/><br/>Free Stock Photos<br/><br/>10 Days Free Support<br/><br/>24/7 Support</p>
      <button>Order Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChoseYourTeam;