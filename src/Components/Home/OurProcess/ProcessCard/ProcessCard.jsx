import Image from "next/image";
import React from "react";

const ProcessCard = ({ data }) => {
  return (
    <div className="">
      <div className="text-center mx-auto relative">
        <Image
          src={data?.icon}
          width={164}
          height={164}
          alt="process data icon "
          className=" mx-auto"
        />

        {/* divider arrow */}
        {data.dividerArrow && (
          <Image
            src={data?.dividerArrow}
            width={155}
            height={100}
            alt="process data dividerArrow icon "
            className={`hidden md:block absolute top-4/12 left-9/12 mx-auto ${
              data.isDown && "top-20 md:hidden xl:block"
            }`}
          />
        )}
      </div>
      <h2 className="text-text-primary mt-6 mb-3 text-xl md:text-2xl font-semibold text-center mx-auto">
        {data.title}
      </h2>
      <p className="max-w-[301px] mx-auto text-sm md:text-[16px] text-[#65758B] font-regular text-center">
        {data?.description}
      </p>
    </div>
  );
};

export default ProcessCard;
