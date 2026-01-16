import AboutBanner from '@/Components/AboutPage/AboutBanner/AboutBanner';
import InfoSection from '@/Components/AboutPage/InfoSection/InfoSectionContainer/InfoSection';
import Timeline from '@/Components/AboutPage/Timeline/Timeline';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <AboutBanner/>
            <InfoSection/>
            <Timeline/>
        </div>
    );
};

export default AboutPage;