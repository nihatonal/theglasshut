import React, { useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";


function HutRules(props) {
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_hot_rules"];
    return (
        <div>
            <p
                className="booking-section-title"
                style={{ fontWeight: "600" }}
            >{sectionData[0]}</p>
            <div className="booking-section-items hut-rules">
                {sectionData.slice(1).map((el, index) =>
                    <p key={index} className='booking-section-item '>{el}</p>
                )}
            </div>

        </div>
    );
}

export default HutRules;