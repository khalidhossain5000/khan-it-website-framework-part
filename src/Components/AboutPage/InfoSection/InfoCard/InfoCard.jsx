import Image from "next/image";
import React from "react";

const InfoCard = ({ data }) => {
  return (
    <div
      className={`p-6 ${data.bgColor} border ${data.borderColor} rounded-[20px] `}
    >
      <Image src={data.icon} alt="info icon" width={56} height={56}></Image>
      <div className="contents">
        <h2 className="text-text-primary text-lg font-semibold">{data.title}</h2>
        <p className="text-[#65758B] text-[16px] font-regular pt-2">{data.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
