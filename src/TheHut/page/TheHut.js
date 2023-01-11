import React, { useState, useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import background from '../../assets/images/thehut/hero.png';

import SectionHero from '../../shared/components/formElements/SectionHero';
import SectionCard from '../../shared/components/formElements/SectionCard';
import { sectionsData } from '../../assets/sectionsData';
import './TheHut.css';

function TheHut() {
    const lang = useContext(LanguageContext);

    const sectionData = lang.dictionary["hut_page"];
    const [outside, setOutside] = useState(0);
    const [inside, setInside] = useState(0);
    const [practicalities, setPracticalities] = useState(0);

    const insideHandler = (e) => {
        setInside(e.target.id.slice(-1) - 1)
    }
    const outsideHandler = (e) => {
        setOutside(e.target.id.slice(-1) - 1)
    }
    const practicalitiesHandler = (e) => {
        setPracticalities(e.target.id.slice(-1) - 1)
    }
    return (
        <div className='page-container'>
            <SectionHero
                image={background}
                title={lang.dictionary["hut"]}
            />
            <SectionCard
                slides={sectionsData.outside}

                title={sectionData[0]['section-title']}
                buttons={sectionData[0]['section-buttons']}
                desc={sectionData[0]['section-desc'][outside]}
                onClick={outsideHandler}
                isActive={outside}
            />
            <SectionCard
                slides={sectionsData.inside}

                title={sectionData[1]['section-title']}
                buttons={sectionData[1]['section-buttons']}
                desc={sectionData[1]['section-desc'][inside]}
                onClick={insideHandler}
                isActive={inside}
            />
            <SectionCard
                slides={sectionsData.practicalities}

                title={sectionData[2]['section-title']}
                buttons={sectionData[2]['section-buttons']}
                desc={sectionData[2]['section-desc'][practicalities]}
                onClick={practicalitiesHandler}
                isActive={practicalities}
            />


        </div>
    );
}

export default TheHut;