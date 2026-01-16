import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import certi from '../../../../assets/about/certifcate.png'
import experience from '../../../../assets/about/xperince.png'
import Title from "@/Components/Shared/SectionTitle/Title";

import infoData from "../infoData"
import InfoCard from "../InfoCard/InfoCard";
const InfoSection = () => {
  return (
    <section className="py-6 lg:py-30 bg-[#ffffff] px-2 lg:px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
        {/* title and content left side */}
        <div className="flex-2">
        <div className="text-center lg:text-left">
          <p className="bg-[#F0F7FF] py-2 px-4 rounded-4xl text-primary text-sm font-medium inline-block">
            Who We Are
          </p>
        </div>
        <Title className="mt-6 mb-5 text-text-primary text-center lg:text-left">
          Your Partner in Digital Transformation
        </Title>

        <p className="text-center lg:text-left text-lg font-regular text-[#65758B]">
          Founded in 2017 by Md Faruk Khan, Khan IT began with a single purpose
          to help businesses in Bangladesh and beyond achieve measurable growth
          through ethical, data-driven, and Al-powered digital marketing.
        </p>
        <p className="text-center lg:text-left text-lg font-regular text-[#65758B]">
          Our focus remains transparency, strategy, and sustainability. We
          prioritize what matters—your visibility, leads, and long-term brand
          authority. Over the years, we&lsquo;ve supported 200+ businesses
          across 18 industries, from national brands like Walton Hi-Tech and
          HATIL Furniture to fast-growing startups.
        </p>

        <div className="achivment flex items-center gap-6 flex-wrap mt-10">
            {/* card-1 */}
            <p className="bg-[#FFFBF0] py-2 px-4 rounded-4xl text-text-primary text-[16px] font-medium  flex items-center gap-2">
           <span className="flex items-center gap-1 text-xl text-[#E89F02E8]"><FaStar className="text-[#E89F02E8] text-xl"/>4.9/5</span>On Clutch
          </p>
          {/* card-2 */}
          <p className="bg-[#F0F7FF] py-2 px-4 rounded-4xl text-text-primary text-[16px] font-medium flex items-center gap-2">
           <Image src={certi} alt="certificate icon" width={16} height={16}/> Google Certified
          </p>
          {/* card-3 */}
          <p className="bg-[#F0F7FF] py-2 px-4 rounded-4xl text-text-primary text-[16px] font-medium flex items-center gap-2">
           <Image src={experience} alt="certificate icon" width={16} height={16}/> 10+ Years Experience
          </p>
        </div>
        </div>

        {/* card section starts here */}
        <div className="flex-1">
            {
                infoData.map((data,i)=><InfoCard
                key={i}
                data={data}
                ></InfoCard>)
            }
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
