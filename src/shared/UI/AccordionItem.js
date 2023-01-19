import { useRef } from "react";


import './AccordionItem.css';

const AccordionItem = ({ faq, active, onToggle, arrow_down, arrow_up }) => {
    const { question, answer } = faq;

    const contentEl = useRef();

    return (
        <li className={`accordion_item ${active ? "active" : ""}`}>
            <button className="question" onClick={onToggle}>
                {question}
                <span className="control">{active ? arrow_down : arrow_up} </span>
            </button>
            <div
                ref={contentEl}
                className="answer_wrapper"
                style={
                    active
                        ? { height: contentEl.current.scrollHeight, marginTop: '24px' }
                        : { height: "0px" }
                }
            >
                <div className="answer">

                    {answer.map((el,index) => <p className="answer-item" key={index}>{el}</p>)}
                </div>
            </div>
        </li>
    );
};

export default AccordionItem;