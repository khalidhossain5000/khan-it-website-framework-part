import Banner from "@/Components/Home/Banner/Banner";
import OurServices from "@/Components/Home/OurServicesSection/OurServices/OurServices";
import WhyChooseUs from "@/Components/Home/WhyChooseUsSection/WChooseUsSectionContainer/WhyChooseUs";

import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <WhyChooseUs/>
    </div>
  );
};

export default Home;
