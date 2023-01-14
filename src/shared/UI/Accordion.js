import { useState } from "react";
// import { faqs } from "../data";
import AccordionItem from "./AccordionItem";

import './Accordion.css'
const Accordion = ({ faqs, arrow_down, arrow_up }) => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <ul className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                    key={index}
                    faq={faq}
                    arrow_down={arrow_down}
                    arrow_up={arrow_up}
                />
            ))}
        </ul>
    );
};

export default Accordion;