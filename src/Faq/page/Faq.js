import React, { useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import Accordion from '../../shared/UI/Accordion';
import AccordionItem from '../../shared/UI/AccordionItem';
import arrowDown from '../../assets/icons/accordion_down_arrow.png';
import arrowUp from '../../assets/icons/accordion_up_arrow.png'

import './Faq.css';
function Faq() {
    const lang = useContext(LanguageContext);
    const sectionData = lang.dictionary["faq"];
    const arrow_up = <img src={arrowDown} alt='arrowDown' />
    const arrow_down = <img src={arrowUp} alt='arrowUp' />
    return (
        <div className='page-container faq-container'>
            <div className="faq-wrapper">
                <Accordion faqs={sectionData} arrow_down={arrow_down} arrow_up={arrow_up} AccordionItem={AccordionItem} />
            </div>

        </div>
    );
}

export default Faq;