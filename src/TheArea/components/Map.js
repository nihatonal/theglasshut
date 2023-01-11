import React from 'react';

import map from '../../assets/images/area/map.png';
import point from '../../assets/images/area/point.png';
import './Map.css';
function Map(props) {
    return (
        <div className='section-card-container'>
            <div className="map-container">
                <h2 className="map-desc">{props.map_desc}</h2>
                <div className="map-wrapper">
                    <div className="map-point">
                        <p>{props.vesterborg}</p>
                        <img src={point} alt='point' />
                    </div>
                    <div className="map-point">
                        <p>{props.copenhagen}</p>
                        <img src={point} alt='point' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;