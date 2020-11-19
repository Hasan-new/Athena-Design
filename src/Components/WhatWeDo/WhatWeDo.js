import React from 'react';
import './WhatWeDo.css';
import firstImage from '../../Image/Group 65@2x.png';
import secondImage from '../../Image/Group 66@2x.png';
import thirdImage from '../../Image/Group 69@2x.png';
import fourthImage from '../../Image/Group 72@2x.png';





const WhatWeDo = () => {
    return (
        <div className="container">
            <div className='text-center'>
                <h1>What We Do</h1>
                <p><small style={{ color:'#afb0b0'}}>Our main focus is to make the User Experience <br/>very
simple and easy. Simplicity is our Strength.</small></p>
            </div>

            <div>
                <div class="container first-part">
                    <div class="row d-flex">
                        <div class="card-deck">
                            <div class="card card-withHover" >
                                <img  style={{margin: '0 auto'}} src={firstImage} className="card-img-top img-fluid w-25" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-text" style={{ color: ' #413960' }}>Experience Design</h6>
                                    <p class="card-text"><small class="text-muted">The point of using Lorem
                                            Ipsum is that it has a more-orless normal.</small></p>
                                </div>
                            </div>
                            <div class="card card-withHover text-center">
                                <img  style={{margin: '0 auto'}} src={secondImage} className="card-img-top img-fluid w-25" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-text" style={{ color: '#413960' }}>Interface Design </h6>
                                    <p class="card-text"><small class="text-muted">The point of using Lorem
                                        Ipsum is that it has a more-orless normal.</small></p>
                                </div>
                            </div>
                            <div class="card card-withHover text-center">
                                <img  style={{margin: '0 auto'}} src={thirdImage} className="card-img-top img-fluid w-25" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-text" style={{ color: ' #413960' }}>Prototyping</h6>
                                    <p class="card-text"><small class="text-muted">The point of using Lorem
                                                Ipsum is that it has a more-orless normal.</small></p>
                                </div>
                            </div>
                            <div class="card card-withHover text-center">
                                <img  style={{margin: '0 auto'}} src={fourthImage} className="card-img-top img-fluid w-25" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-text" style={{ color: '#413960' }}>Illustration</h6>
                                    <p class="card-text"><small class="text-muted">The point of using Lorem
                                                    Ipsum is that it has a more-orless normal.</small></p>
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