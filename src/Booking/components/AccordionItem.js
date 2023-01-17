import { useRef } from "react";

import { HiPlus } from "react-icons/hi";
import { HiOutlineCheck } from "react-icons/hi";
import './AccordionItem.css';

const AccordionItem = ({ faq, active, onToggle, arrow_down, arrow_up, checkboxHandler, value, checked }) => {
    const { name, price, desc, desc_title, id } = faq;

    const contentEl = useRef();
    return (
        <li className={`accordion_item ${active ? "active" : ""}`}>
            <div className="question">
                <label className="check-button">
                    <input
                        id={id}
                        type="checkbox"
                        value={value}
                        name={name}
                        onChange={checkboxHandler}
                        checked={checked}
                    />

                    <span className={checked ? "check-button checked" : "check-button"}>{checked ? <HiOutlineCheck /> : <HiPlus />}</span>  </label>
                <p className="accordion_item-name"> {name}</p>
                <span className="portion">{price}</span>
                <span className="control" onClick={onToggle}>{active ? arrow_down : arrow_up} </span>
            </div>
            <div
                ref={contentEl}
                className="desc_wrapper"
                style={
                    active
                        ? { height: contentEl.current.scrollHeight, margin: '24px 0 26px' }
                        : { height: "0px" }
                }
            >
                <div className="desc">
                    <p className="desc-item-title">{desc_title}</p>
                    <p className="desc-item">{desc}</p>
                </div>
            </div>
        </li>
    );
};

export default AccordionItem;