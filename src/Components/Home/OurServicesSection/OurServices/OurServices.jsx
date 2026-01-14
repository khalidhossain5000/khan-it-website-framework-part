import Title from "@/Components/Shared/SectionTitle/Title";
import React from "react";
import servicesData from "../ServicesData";
import ServicesCard from "../ServicesCard/ServicesCard";
const OurServices = () => {
  return (
    <section className="py-6 lg:py-30 bg-[#ffffff] px-2 lg:px-4">
      <div className="container mx-auto ">
        <div className="text-center">
          <p className="bg-[#F0F7FF] py-2 px-4 rounded-4xl text-primary text-sm font-medium inline-block">
            Our Services
          </p>
        </div>
        <Title className="mt-6 mb-5 text-text-primary">
          Full-stack Digital Marketing Services
        </Title>

        <p className="text-center text-lg font-regular text-[#65758B]">
          We manage your complete digital presence so you can focus on your core
          business.
        </p>
        {/* services card section starts here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-16">
          {servicesData.map((service, i) => (
            <ServicesCard key={i} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
