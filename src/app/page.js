import Banner from "@/Components/Home/Banner/Banner";
import ProcessSection from "@/Components/Home/OurProcess/OurProcessContainer/OurProcessSection";
import OurServices from "@/Components/Home/OurServicesSection/OurServices/OurServices";
import StatsSection from "@/Components/Home/ResultsStatsSection/StatsContainer/StatsSection";
import WhyChooseUs from "@/Components/Home/WhyChooseUsSection/WChooseUsSectionContainer/WhyChooseUs";

import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <WhyChooseUs/>
      <StatsSection/>
      <ProcessSection/>
    </div>
  );
};

export default Home;
