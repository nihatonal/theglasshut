import React, { useContext } from 'react';
import { LanguageContext } from "../../shared/context/Language";
import background from '../../assets/images/thehut/hero.png';

import SectionHero from '../../shared/components/formElements/SectionHero';
import SectionCard from '../../shared/components/formElements/SectionCard';
import { sectionsData } from '../../assets/sectionsData';
import './TheHut.css';
function TheHut(props) {
    const lang = useContext(LanguageContext);
    return (
        <div className='page-container'>
            <SectionHero
                image={background}
                title={lang.dictionary["hut"]}
            />
            <SectionCard slides={sectionsData[0].hut} title={lang.dictionary["hut_page"][0]["section-title"]} />

        </div>
    );
}

export default TheHut;