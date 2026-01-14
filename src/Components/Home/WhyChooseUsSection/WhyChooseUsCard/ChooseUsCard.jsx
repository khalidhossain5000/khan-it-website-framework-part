import Image from "next/image";
import React from "react";

const ChooseUsCard = ({ whyChooseUsData }) => {
  return (
    <div className='px-6 py-[51px] bg-[#3399FF0D] border border-[#F8FAFC1A] shadow-sm rounded-[20px] hover:bg-[#3399FF1A] hover:border-primary transition-all duration-500 text-center md:text-left  group'>
      <Image
        src={whyChooseUsData?.icon}
        alt="whyChooseUsData-icon"
        width={56}
        height={56}
        className="mx-auto md:mx-0"
      />

      <h2 className="text-white mt-6 mb-3 text-xl md:text-2xl font-semibold group-hover:text-primary transition duration-300">
        {whyChooseUsData.title}
      </h2>
      <p className=" text-sm md:text-[16px] text-[#CBD5E1] font-regular">
        {whyChooseUsData.description}
      </p>
    </div>
  );
};

export default ChooseUsCard;
