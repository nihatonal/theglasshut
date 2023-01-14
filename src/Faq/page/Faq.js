import React from 'react';

import Accordion from '../../shared/UI/Accordion';
import './Faq.css';
function Faq(props) {
    const faqs = [
        {
            question: "Lorem ipsum dolor sit amet?",
            answer:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            question: "Dignissimos sequi architecto?",
            answer:
                "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
        },
        {
            question: "Voluptas praesentium facere?",
            answer:
                "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
        },
    ];
    return (
        <div className='page-container'>
            <Accordion faqs={faqs} />
        </div>
    );
}

export default Faq;