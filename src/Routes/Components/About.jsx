import React from 'react';
import HomeMenu from "./Home/Menu";
import AboutMenu from './Home/About/AboutMenu';
import AboutHead from './Home/About/AboutHead';
import AboutCenterTop from './Home/About/AboutCenterTop';
import AboutCenter from './Home/About/AboutCenter';
import AboutCenterBottom from './Home/About/AboutCenterBottom';
import HomeFooter from './Home/Footer';

function About() {
    return (
        <div>
            {/* <HomeMenu /> */}
            <AboutMenu />
            <AboutHead />
            <AboutCenterTop />
            <AboutCenter />
            <AboutCenterBottom />
            <HomeFooter />
        </div>
    )
}

export default About
