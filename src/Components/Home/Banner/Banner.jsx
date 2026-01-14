/* eslint-disable @next/next/no-img-element */
import React from "react";
import titleShape from "../../../assets/banner/content-shape.png";
import Button from "@/Components/Shared/Button/Button";
import rocketImg from "../../../assets/banner/rocket.png";
import arrow from "../../../assets/banner/Conversions Arrow.png";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import VideoPlayCard from "./VideoPlayCard";
import waltonLogo from "../../../assets/banner/walton-logo.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import quoteImg from "../../../assets/banner/backtick.png";
import { FiTarget } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import shape from "../../../assets/banner/track-record-card-shape.png";
import bgImg from '../../../assets/banner/section-bg.png'
const statsData = [
  {
    icon: <FiUsers size={30} />,
    value: "500+",
    label: "Clients",
  },
  {
    icon: <FiTarget size={30} />,
    value: "98%",
    label: "Success",
  },
  {
    icon: <BsLightningCharge size={30} />,
    value: "24h",
    label: "Supports",
  },
];
const Banner = () => {
  return (
    <section className="h-screen bg-cover bg-center py-40 lg:py-48 px-2 lg:px-4"   style={{
    backgroundImage: `url(${bgImg.src})`,
  }}>
      <div className="container mx-auto flex flex-col justify-between lg:flex-row items-center gap-14">
        {/* right side ttitle and usbtitle container */}
        <div className="title-subtitle lg:flex-1 text-center lg:text-left">
          <div className="titles relative">
            <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-[80px] font-dmSans font-bold lg:font-extrabold text-[#060606]">
              Digital Marketing Agency in Bangladesh
            </h1>
            <img src={titleShape.src} alt="title-shape-frame" className="hidden lg:absolute -top-2 right-6"/>
          </div>
          <p className="text-[#65758B] font-normal font-inter text-sm xl:text-lg max-w-2xl py-6 mb-2 lg:mb-5 mx-auto lg:mx-0">
            Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150%
            more leads and 2.5x higher conversions through integrated digital
            marketing and web design.
          </p>
          <div className="text-center">
            <Button className={`text-lg mx-auto lg:mx-0`}>Book Your Free Consultation</Button>
          </div>
        </div>
        {/* left side card container */}
        <div className="card-container lg:flex-1">
          {/* card1 and two contaienr */}
          <div className="card-icontainer lg:flex gap-6 items-center">
            {/* cardi */}
            <div className="cardi self-start bg-linear-to-br from-[#eaedff] to-[#f9effb] p-6 rounded-3xl border border-[#B4D5F9] space-y-2 lg:flex-1 text-center lg:text-left">
              <Image
                src={rocketImg}
                alt="Rocket image"
                width={50}
                height={50}
                className="mx-auto lg:mx-0"
              />
              <div className="text and icon flex items-center justify-center lg:justify-start pt-2 xl:pt-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-text-primary font-bold">
                  200%
                </h2>
                <Image src={arrow} alt="Rocket image" width={50} height={50} />
              </div>
              <h5 className="font-semibold text-[#06060680] text-[16px]">
                More Conversion
              </h5>
              <h6 className="font-regular text-[#06060670] text-[14px]">
                Than Industry Average
              </h6>
            </div>

            {/* card-ii */}
            <div className="relative  flex-1 cardii bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] p-6 rounded-3xl border border-[#B4D5F9] lg:translate-y-9 mb-6 mt-6 lg:mt-0">
              <h2 className="text-lg font-bold text-text-primary text-center lg:text-left">
                Our Track Record
              </h2>

              <div className="shape bg-[#dae7f6] absolute top-0 right-0 rounded-3xl">
                <Image src={shape} alt="walton logo" width={90} height={50} className="w-18 lg:w-22"/>
              </div>
              {/* list- */}

              {statsData.map((stats, i) => (
                <div
                  key={i}
                  className="bg-white/60 border border-[#B4D5F9] rounded-2xl flex gap-5 items-center px-5 py-2 shadow-sm mt-3"
                >
                  <span className="bg-[#d0e4fa] text-primary text-3xl p-3 rounded-full">
                    {stats.icon}
                  </span>
                  <h2 className="text-lg font-bold text-text-primary ">
                    {stats.value}
                    <span className="text-[#65758b] text-sm font-medium ml-2">
                      {stats.label}
                    </span>
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* card 3 and 4 container */}
          <div className="card-3-4-conatiner lg:flex items-center gap-6">
            {/* card-iii */}
            <div className="cardiii flex-1 lg:-translate-y-22">
              <VideoPlayCard />
            </div>

            {/* card-iv */}
            <div className="cardii bg-linear-to-br from-[#FEEFDB] to-[#FCF2F2] p-6 rounded-3xl border border-[#FDE1BF] flex-1 relative mt-9">
              <Image
                src={waltonLogo}
                alt="walton logo"
                width={65}
                height={50}
              />
              <div className="rating flex itesms-center flex-wrap py-5">
                <MdOutlineStarPurple500 className="text-[#f45925]" size={30} />
                <MdOutlineStarPurple500 className="text-[#f45925]" size={30} />
                <MdOutlineStarPurple500 className="text-[#f45925]" size={30} />
                <MdOutlineStarPurple500 className="text-[#f45925]" size={30} />
                <MdOutlineStarPurple500 className="text-[#f45925]" size={30} />
              </div>
              <p className="text-text-primary font-medium text-lg">
                &ldquo;Their marketing strategies are simply outstanding&ldquo;
              </p>

              <div className="blockquatote bg-[#fdeade] absolute top-0 right-0">
                <Image
                  src={quoteImg}
                  alt="walton logo"
                  width={60}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
