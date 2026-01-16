import Image from "next/image";
import React from "react";

const StatsCard = ({ stat }) => {
  
  return (
    <div className="p-6 bg-[#FFFFFF] border border-[#E8EAED] shadow-sm rounded-[20px] hover:bg-[#f0f7ff] hover:border-primary transition-all duration-500 text-center ">
      <Image
        src={stat?.icon}
        alt="services-icon"
        width={64}
        height={64}
        className="mx-auto "
      />
      <h2 className={`${stat?.titleColor} mt-6 mb-3 text-2xl md:text-3xl font-semibold lg:font-bold lg:text-5xl`}>
        {stat.title}
      </h2>
      <p className=" text-sm text-[#65758B] font-regular">
        {stat.description}
      </p>
    </div>
  );
};

export default StatsCard;
