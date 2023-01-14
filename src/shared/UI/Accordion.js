import { useState } from "react";
// import { faqs } from "../data";
import AccordionItem from "./AccordionItem";

import './Accordion.css'
const Accordion = ({ faqs }) => {
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
                />
            ))}
        </ul>
    );
};

export default Accordion;