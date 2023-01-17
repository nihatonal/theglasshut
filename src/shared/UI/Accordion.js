import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../shared/context/CartContext";
import './Accordion.css'
const Accordion = ({ faqs, arrow_down, arrow_up, AccordionItem, }) => {
    const cart = useContext(CartContext);
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
        setCheckedState(updatedCheckedState);

        let addition;
        if (e.target.checked) {
            addition = {
                id: e.target.id,
                name: e.target.name,
                price: e.target.value
            }
            // console.log(addition)
            cart.addAdditionsToCart(addition);
        } else {
            cart.removeAdditionsToCart(e.target.id);
        }

    }
    useEffect(() => {
        console.log(cart.items)
    }, [checkedState])
    return (
        <ul className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                    key={index + faq.price}
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