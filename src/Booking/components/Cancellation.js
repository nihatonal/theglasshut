import React, { useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";


function Cancellation(props) {
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_cancellation_policy"];
    return (
        <div>
            <p
                className="booking-section-title"
                style={{ fontWeight: "600" }}
            >{sectionData[0]}</p>
            <div className="booking-section-items cancellation">
                {sectionData.slice(1).map((el, index) =>
                    <p
                        key={index}
                        style={{ lineHeight: "28px" }}
                        className='booking-section-item '>{el}</p>
                )}
            </div>

        </div>
    );
}

export default Cancellation;