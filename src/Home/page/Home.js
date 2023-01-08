import React from 'react';

import Hero from '../components/Hero';
import Cabins from '../components/Cabins';
import Forest from '../components/Forest';
import AboutUs from '../components/AboutUs';
import Facilities from '../components/Facilities';
import Contact from '../components/Contact'

import './Home.css';
function Home(props) {
    return (
        <div>
            <Hero />
            <Cabins />
            <Forest />
            <Facilities />
            <AboutUs />
            <Contact />
        </div>
    );
}

export default Home;