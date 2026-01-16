/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import thumbnail from "../../../assets/banner/thumbanil-imgs.png";
import { MdPlayArrow } from "react-icons/md";

const VideoPlayCard = () => {
  const youtubeUrl = "https://www.youtube.com/watch?v=KLuTLF3x9sA";

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block  w-full h-[235px] rounded-xl overflow-hidden cursor-pointer group"
    >
      {/* Thumbnail */}
      <img
        src={thumbnail.src}
        alt="Video Thumbnail"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0F1729CC] via-[#0F172920]to-[#0F1729]"></div>

      {/* Play Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-[#863cbf] rounded-full flex items-center justify-center text-white text-3xl group-hover:scale-110 transition">
          <MdPlayArrow />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-3 left-5 text-white">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="font-medium text-sm">Watch Case Study</span>
        </div>
        <p className="text-sm font-regular text-[#CCCCCC]">2:45 min</p>
      </div>
    </a>
  );
};

export default VideoPlayCard;
