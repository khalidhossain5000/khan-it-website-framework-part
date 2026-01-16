import Title from "@/Components/Shared/SectionTitle/Title";
import React from "react";
import statsData from "../StatsData.js";
import StatsCard from "../StatsCard/StatsCard";
const StatsSection = () => {
  return (
    <section className="py-6 lg:py-30 bg-[#F1F5F966] px-2 lg:px-4 xl:px-8">
      <div className="container mx-auto ">
        <div className="text-center">
          <p className="bg-[#F0F7FF] py-2 px-4 rounded-4xl text-primary text-sm font-medium inline-block">
            Proven Results
          </p>
        </div>
        <Title className="mt-6 mb-5 text-text-primary">
          Results That Speak for Themselves
        </Title>

        <p className="text-center text-lg font-regular text-[#65758B]">
          We focus on measurable outcomes that directly impact your bottom line.
        </p>

         {/* cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto gap-6 pt-16">
        {statsData.map((stat, i) => (
          <StatsCard key={i} stat={stat}></StatsCard>
        ))}
      </div>
      </div>
     
    </section>
  );
};

export default StatsSection;
