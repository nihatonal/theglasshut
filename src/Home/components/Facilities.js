import React from 'react';
import { Text } from "../../shared/context/Language";

import fridge from '../../assets/icons/mini_fridge.png';
import kitchen from '../../assets/icons/kitchen.png';
import coffee from '../../assets/icons/coffee.png';
import kettle from '../../assets/icons/tea_kettle.png';
import parking from '../../assets/icons/parking.png';
import views from '../../assets/icons/breathing_views.png';
import heating from '../../assets/icons/floor_heating.png';
import plug from '../../assets/icons/plug_230V.png';
import wifi from '../../assets/icons/wifi.png';
import shower from '../../assets/icons/shower.png';
import toilet from '../../assets/icons/flushing_toilet.png';
import towels from '../../assets/icons/bedding_and_towels.png';

import './Facilities.css';
function Facilities(props) {
    return (
        <div className="facilities-container">
            <h4 className="home-section-title">
                <Text tid="facilities" />
            </h4>
            <div className="facilities-wrapper">
                <div className="facility-item">
                    <img src={fridge} alt="fridge" />
                    <p><Text tid="fridge" /></p>
                </div>
                <div className="facility-item">
                    <img src={kitchen} alt="kitchen" />
                    <p><Text tid="kitchen" /></p>
                </div>
                <div className="facility-item">
                    <img src={coffee} alt="coffee" />
                    <p><Text tid="coffee" /></p>
                </div>
                <div className="facility-item">
                    <img src={kettle} alt="kettle" />
                    <p><Text tid="kettle" /></p>
                </div>
                <div className="facility-item">
                    <img src={parking} alt="parking" />
                    <p><Text tid="parking" /></p>
                </div>
                <div className="facility-item">
                    <img src={views} alt="views" />
                    <p><Text tid="views" /></p>
                </div>
                <div className="facility-item">
                    <img src={heating} alt="heating" />
                    <p><Text tid="heating" /></p>
                </div>
                <div className="facility-item">
                    <img src={plug} alt="plug" />
                    <p><Text tid="light" /></p>
                </div>
                <div className="facility-item">
                    <img src={wifi} alt="wifi" />
                    <p><Text tid="wifi" /></p>
                </div>
                <div className="facility-item">
                    <img src={shower} alt="shower" />
                    <p><Text tid="shower" /></p>
                </div>
                <div className="facility-item">
                    <img src={toilet} alt="toilet" />
                    <p><Text tid="toilet" /></p>
                </div>
                <div className="facility-item">
                    <img src={towels} alt="towels" />
                    <p><Text tid="towels" /></p>
                </div>
            </div>
        </div>
    );
}

export default Facilities;