import React, { useContext } from 'react';

import { LanguageContext } from "../../shared/context/Language";
import background from '../../assets/images/area/hero.png';


import SectionHero from '../../shared/components/formElements/SectionHero';
import SectionCard from '../../shared/components/formElements/SectionCard';
import Map from '../components/Map';
import Location from '../components/Location';
import { sectionsData } from '../../assets/sectionsData';

import { MdLocationOn } from "react-icons/md";

import './TheArea.css';
function TheArea(props) {
    const lang = useContext(LanguageContext);

    const sectionData = lang.dictionary["area_page"];

    const content = <div className="area-content-wrapper">
        <a href="https://www.google.com/maps/place/4953+Vesterborg,+Danimarka/@54.8696449,11.3133109,12z/data=!4m5!3m4!1s0x47ad568afb8a7b8b:0x2b0ef19488050ea5!8m2!3d54.856686!4d11.271945"
            className="hero-link"
            target='_blank'
            rel='noreferrer'>
            <MdLocationOn className='location-icon' />{lang.dictionary["area-name"]}
        </a>
        <button className='area-nav-btn'>{lang.dictionary["area-nav"]}</button>
    </div>

    const filteredData = (x) => Object.keys(sectionsData)
        .filter(key => x.includes(key))
        .reduce((obj, key) => {
            obj[key] = sectionsData[key];
            return obj;
        }, {});

    return (
        <div className='page-container area-wrapper'>
            <SectionHero
                image={background}
                title={lang.dictionary["area"]}
                content={content}
            />
            <SectionCard
                slides={sectionsData.vesterborg}
                title={sectionData[0]['section-title']}
                buttons={sectionData[0]['section-buttons']}
                desc={sectionData[0]['section-desc']}
            >
                <p className="section-subtitle">
                    {sectionData[0]['section-subtitle']}
                </p>
            </SectionCard>
            <Map map_desc={lang.dictionary["area-map-desc"]}
                vesterborg={lang.dictionary["vesterborg"]}
                copenhagen={lang.dictionary["copenhagen"]}
            />
            {/*  */}
            {sectionData.slice(1).map((item) =>
                <SectionCard
                    title_content={<h2 className="activities">{lang.dictionary["activities"]}</h2>}
                    key={item['section-id']}
                    slides={filteredData(item['section-id'])[item['section-id']]}
                    title={item['section-title']}
                    buttons={item['section-buttons']}
                    desc={item['section-desc']}
                />
            )}
            {/* <SectionCard
                title_content={<h2 className="activities">{lang.dictionary["activities"]}</h2>}
                slides={sectionsData.outside}
                title={sectionData[1]['section-title']}
                buttons={sectionData[1]['section-buttons']}
                desc={sectionData[1]['section-desc'][restoran]}
                onClick={restoranHandler}
                isActive={restoran}
            />
            <SectionCard
                slides={sectionsData.outside}
                title={sectionData[2]['section-title']}
                buttons={sectionData[2]['section-buttons']}
                desc={sectionData[2]['section-desc'][experience]}
                onClick={experienceHandler}
                isActive={experience}
            />
            <SectionCard
                slides={sectionsData.outside}
                title={sectionData[3]['section-title']}
                buttons={sectionData[3]['section-buttons']}
                desc={sectionData[3]['section-desc'][drive]}
                onClick={driveHandler}
                isActive={drive}
            />
            <SectionCard
                slides={sectionsData.outside}
                title={sectionData[4]['section-title']}
                buttons={sectionData[4]['section-buttons']}
                desc={sectionData[4]['section-desc'][town]}
                onClick={townHandler}
                isActive={town}
            /> */}
            <Location />


        </div>

    );
}

export default TheArea;