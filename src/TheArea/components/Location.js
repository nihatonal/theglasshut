import React from 'react';
import { Text } from "../../shared/context/Language";
import location_map from '../../assets/images/area/location.png';
import './Location.css';
function Location(props) {
    return (
        <div className='section-card-container location-container'>
            <div className="location-wrapper">
                <div className="location-filter"></div>
                <img src={location_map} alt="location_map" />
                <div className="forest-location-wrapper">
                    <div className="forest-location-secondline">
                        <div className="forest-location-thirdline">
                            <p className="forest-location-desc"><Text tid="we_are_here" /></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Location;