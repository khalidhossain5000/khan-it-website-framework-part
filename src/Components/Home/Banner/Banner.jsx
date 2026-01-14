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
import quoteImg from '../../../assets/banner/backtick.png'
const Banner = () => {
  return (
    <section >
        <div className="container mx-auto flex flex-col lg:flex-row items-center ">
      <div className="title-subtitle">
        <div className="titles">
          <h1 className="text-2xl xl:text-[80px] font-dmSans font-bold lg:font-extrabold text-[#060606]">
            Digital Marketing Agency in Bangladesh
          </h1>
          <img src={titleShape.src} alt="title-shape-frame" />
        </div>
        <p className="text-[#65758B] font-normal font-inter text-lg">
          Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150%
          more leads and 2.5x higher conversions through integrated digital
          marketing and web design.
        </p>
        <Button className={`text-lg`}>Book Your Free Consultation</Button>
      </div>
      <div className="card-container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* cardi */}
        <div className="cardi bg-linear-to-br from-[#eaedff] to-[#f9effb] p-6">
          <Image src={rocketImg} alt="Rocket image" width={100} height={50} />
          <div className="text and icon">
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
        <div className="cardii bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] p-6 rounded-3xl border border-[#B4D5F9]">
          <h2 className="text-lg font-bold text-text-primary">
            Our Track Record
          </h2>
          {/* list- */}
          <div className="bg-white/60 border border-[#B4D5F9]">
            <span>
              <FiUsers />
              <h2>
                500+ <span>Clients</span>
              </h2>
            </span>
          </div>
        </div>

        {/* card-iii */}
        <div className="cardiii">
          <VideoPlayCard />
        </div>

        {/* card-iv */}
        <div className="cardii bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] p-6 rounded-3xl border border-[#B4D5F9]">
          <Image src={waltonLogo} alt="walton logo" width={60} height={50} />
          <div className="rating flex itesms-center flex-wrap">
            <MdOutlineStarPurple500 className="text-[#f45925]" />
            <MdOutlineStarPurple500 className="text-[#f45925]" />
            <MdOutlineStarPurple500 className="text-[#f45925]" />
            <MdOutlineStarPurple500 className="text-[#f45925]" />
            <MdOutlineStarPurple500 className="text-[#f45925]" />
          </div>
          <p className="text-text-primary font-medium text-lg">
            &ldquo;Their marketing strategies are simply outstanding&ldquo;
          </p>

          <div className="blockquatote bg-[#f4592510]">
              <Image src={quoteImg} alt="walton logo" width={60} height={50} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Banner;
