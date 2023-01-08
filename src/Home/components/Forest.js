import React from 'react';
import { Text } from "../../shared/context/Language";

import './Forest.css';
function Forest(props) {
    return (
        <div className='forest-container'>
            <div className='forest-image-wrapper'>
                <div className="forest-image-filter"></div>
                <div className="forest-location-wrapper">
                    <div className="forest-location-secondline">
                        <div className="forest-location-thirdline">
                            <p className="forest-location-desc"><Text tid="we_are_here" /></p>
                        </div>

                    </div>
                </div>

            </div>
            <div className="forest-content">
                <div className="forest-content-info">
                    <h4 className="home-section-title"><Text tid="homepage_forest" /></h4>
                    <p className="home-section-desc"><Text tid="homepage_forest_desc" /></p>
                    <a href="/thehut" className="home-section-btn"><Text tid="read_more" /></a>
                </div>
            </div>
        </div>
    );
}

export default Forest;