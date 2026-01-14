import Title from "@/Components/Shared/SectionTitle/Title";
import React from "react";
import chooseUsData from "../ChooseUsData";
import ChooseUsCard from "../WhyChooseUsCard/ChooseUsCard";
const WhyChooseUs = () => {
  return (
    <section className="py-6 lg:py-30 bg-[#121C39] px-2 lg:px-4">
      <div className="container mx-auto ">
        <div className="text-center">
          <p className="bg-[#0271E833] py-2 px-4 rounded-4xl text-primary text-sm font-medium inline-block">
            Our Services
          </p>
        </div>
        <Title className={"text-white mt-6 mb-5"}>
          Why 100+ Businesses Choose Khan IT
        </Title>

        <p className="max-w-162.5 mx-auto text-center text-lg font-regular text-[#65758B]">
          You have options. So why do so many businesses in Bangladesh choose
          Khan IT? Simple — we deliver real results, not buzzwords.
        </p>

        {/* why choose us section card */}
        <div className="pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {chooseUsData.map((data, i) => (
            <ChooseUsCard key={i} whyChooseUsData={data}></ChooseUsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
