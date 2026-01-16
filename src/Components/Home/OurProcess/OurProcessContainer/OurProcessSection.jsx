import Title from "@/Components/Shared/SectionTitle/Title";
import React from "react";
import processData from "../ProcessData.js";
import ProcessCard from "../ProcessCard/ProcessCard";
const ProcessSection = () => {
  return (
    <section className="py-6 lg:py-30 bg-[#ffffff] px-2 lg:px-4 xl:px-8">
      <div className="container mx-auto ">
        <div className="text-center">
          <p className="bg-[#F0F7FF] py-2 px-4 rounded-4xl text-primary text-sm font-medium inline-block">
            Our Process
          </p>
        </div>
        <Title className="mt-6 mb-5 text-text-primary">
          How We Deliver Real Growth
        </Title>

        <p className="text-center text-lg font-regular text-[#65758B]">
          Every successful project begins with a clear and transparent strategy.
        </p>




     
      </div>

         {/* process card container start here */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-9 pt-16">
        {processData.map((data, i) => (
          <ProcessCard key={i} data={data}></ProcessCard>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
