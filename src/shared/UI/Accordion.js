import { useState } from "react";

import './Accordion.css'
const Accordion = ({ faqs, arrow_down, arrow_up, AccordionItem, }) => {
    const [clicked, setClicked] = useState("0");
    const [checkedState, setCheckedState] = useState(
        new Array(faqs.length).fill(false)
    );
    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };
    const checkboxHandler = (e, position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        console.log(updatedCheckedState)
        setCheckedState(updatedCheckedState);

        // let addition;
        // if (e.target.checked) {
        //     addition = {
        //         id: e.target.id,
        //         name: e.target.name,
        //         price_additon: e.target.value
        //     }
        //     cart.addAdditionsToCart(id, addition);
        // } else {
        //     let addition_id = e.target.id;
        //     cart.removeAdditionsToCart(id, addition_id);
        // }

    }
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
                    checkboxHandler={(e) => checkboxHandler(e, index)}
                    value={faq.price}
                    checked={checkedState[index]}

                />
            ))}
        </ul>
    );
};

export default Accordion;