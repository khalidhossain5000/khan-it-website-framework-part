import React from "react";
import bgImg from "../../../assets/about/banner-bg.png";
import medal from "../../../assets/about/medal.svg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import aboutStatsData from "./aboutStatsData";
import Button from "@/Components/Shared/Button/Button";
const AboutBanner = () => {
  
  return (
    <section
      className="min-h-screen bg-cover bg-center pt-40 pb-24 md:py-40  lg:pt-44 lg:pb-36  px-2 lg:px-4"
      style={{
        backgroundImage: `url(${bgImg.src})`,
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <div className="text-center inline-block">
          <p className="bg-[#F0F7FF] py-2 px-4 rounded-4xl text-primary text-sm font-medium flex flex-col sm:flex-row items-center gap-2 ">
            <Image src={medal} alt="medal icon" width={16} height={16} />{" "}
            Bangladesh&lsquo;s Trusted Digital Partner Since 2017
          </p>
        </div>
        {/* title and subttile*/}
        <div className="text-center mt-6 mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-[80px] font-dmSans font-bold lg:font-extrabold text-[#060606]">
            About <span className="text-primary">Khan It</span>
          </h1>
          <p className="text-[#65758B] font-normal font-inter text-sm xl:text-lg max-w-2xl mt-2 lg:mt-5 mx-auto lg:mx-0">
            We&lsquo;re more than a digital marketing agency. We&lsquo;re your
            partner in Bangladesh&lsquo;s fast-changing digital landscape.
            Delivering measurable growth through ethical, data-driven, and
            AI-powered strategies.
          </p>
        </div>
        {/* button */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Button>
            Explore Our Services{" "}
            <span className="ml-2 text-xl">
              <FaArrowRightLong />
            </span>
          </Button>

          <button className=" py-3 px-6 border border-primary font-inter rounded-lg text-primary">
            View Case Studies
          </button>
        </div>
        {/* stats card section container */}
      </div>
      <div className="max-w-250 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center justify-center pt-16">
        {aboutStatsData.map((stat, i) => (
          <div
            key={i}
            className="py-5 px-15 bg-[#FFFFFF] border border-[#E6F2FF] shadow-sm rounded-[20px] hover:bg-[#f0f7ff] hover:border-primary transition-all duration-500 text-center "
          >
            <Image
              src={stat?.icon}
              alt="services-icon"
              width={64}
              height={64}
              className="mx-auto "
            />
            <h2
              className={`${stat?.titleColor} mt-6 mb-3 text-2xl md:text-3xl font-semibold lg:font-bold lg:text-[32px]`}
            >
              {stat.title}
            </h2>
            <p className=" text-sm text-[#65758B] font-regular">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutBanner;
