import React, { useContext,useState } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import Accordion from '../../shared/UI/Accordion';
import AccordionItem from './AccordionItem.js';
import arrowDown from '../../assets/icons/accordion_down_arrow.png';
import arrowUp from '../../assets/icons/accordion_up_arrow.png';


import './Additionals.css';
function Additionals(props) {
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["booking_additional_services"];
    const arrow_up = <img src={arrowDown} alt='arrowDown' />
    const arrow_down = <img src={arrowUp} alt='arrowUp' />
    return (
        <div>
            <div className="additionals-wrapper">
                <p className="additionals-title">{lang.dictionary["booking_additionals"]}</p>
                <Accordion
                    faqs={sectionData}
                    arrow_down={arrow_down}
                    arrow_up={arrow_up}
                    AccordionItem={AccordionItem}
                />
            </div>
        </div>
    );
}

export default Additionals;