import React from 'react';
import './WhatWeDo.css';
import firstImage from '../../Image/Group 65@2x.png';
import secondImage from '../../Image/Group 66@2x.png';
import thirdImage from '../../Image/Group 69@2x.png';
import fourthImage from '../../Image/Group 72@2x.png';




const card = [

]

const WhatWeDo = () => {
    return (
        <div className="whatWeDo">
            <div className="container">
                <div className='text-center'>
                    <h2>What We Do</h2>
                    <p>Our main focus is to make the User Experience very<br/>
                        simple and easy. Simplicity is our Strength.</p>
                </div>

                <div>
                    <div class="container first-part mt-5">
                        <div class="row d-flex">
                            <div class="card-deck">
                                <div class="card whatWeDoCard text-center" >
                                    <img  style={{margin: '0 auto'}} src={firstImage} className="card-img-top img-fluid w-25" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-text" >Experience Design</h3>
                                        <p class="card-text">The point of using Lorem
                                                Ipsum is that it has a more-orless normal.</p>
                                    </div>
                                </div>
                                <div class="card whatWeDoCard text-center">
                                    <img  style={{margin: '0 auto'}} src={secondImage} className="card-img-top img-fluid w-25" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-text" >Interface Design </h3>
                                        <p class="card-text">The point of using Lorem
                                            Ipsum is that it has a more-orless normal.</p>
                                    </div>
                                </div>
                                <div class="card whatWeDoCard text-center">
                                    <img  style={{margin: '0 auto'}} src={thirdImage} className="card-img-top img-fluid w-25" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-text" >Prototyping</h3>
                                        <p class="card-text">The point of using Lorem
                                                    Ipsum is that it has a more-orless normal.</p>
                                    </div>
                                </div>
                                <div class="card whatWeDoCard text-center">
                                    <img  style={{margin: '0 auto'}} src={fourthImage} className="card-img-top img-fluid w-25" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-text" >Illustration</h3>
                                        <p class="card-text">The point of using Lorem
                                                        Ipsum is that it has a more-orless normal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default WhatWeDo;