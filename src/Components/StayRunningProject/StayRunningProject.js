import React from 'react';
import './StayRunningProject.css';
import projectImage from '../../Image/20 [Converted]@2x.png';

const StayRunningProject = () => {
    return (
        <div className="StayRunningProject">
            <div className="container p-0 d-flex align-items-center project">
            
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="project-image" src={projectImage} alt=""/>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 contact">
                <h2>Stay Running Project</h2>
                <p>It is a long established fact that a reader will be distracted by the<br/>
                    readable content of a page when looking at its layout. The point of<br/>
                    using Lorem Ipsum is that it has a more-or-less normal distribution<br/>
                    of letter.
                </p>
                <button className="btn navContact mx-2 pricing-btn">Contact Us</button>
            </div>

        </div>
        </div>
    );
};

export default StayRunningProject;