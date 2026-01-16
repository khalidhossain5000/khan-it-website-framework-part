"use client";

import Title from "@/Components/Shared/SectionTitle/Title";
import VerticalTimelineSection from "./VerticalTimeline";

const Timeline = () => {
  return (
    <section className="py-6 lg:py-30 bg-[#ffffff] px-2 lg:px-4">
      <div className="max-w-7xl mx-auto">
        {/* title and content left side */}
        <div className="max-w-2xl mx-auto mb-9 lg:mb-16">
          <div className="text-center ">
            <p className="bg-[#F0F7FF] py-2 px-4 rounded-4xl text-primary text-sm font-medium inline-block">
              Our Journey
            </p>
          </div>
          <Title className="mt-6 mb-5 text-text-primary text-center ">
            From Vision to Bangladesh&lsquo;s Trusted Digital Partner
          </Title>

          <p className="mt-5 text-center text-lg font-regular text-[#65758B]">
            The Khan IT story starts long before the agency&lsquo;s official
            founding—built on passion, persistence, and a commitment to ethical
            digital marketing.
          </p>
        </div>

        <div>
          <VerticalTimelineSection />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
