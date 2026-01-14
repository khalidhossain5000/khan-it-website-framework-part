/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import thumbnail from "../../../assets/banner/thumbanil-imgs.png";

import { MdPlayArrow } from "react-icons/md";

const VideoPlayCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative p-6 rounded-lg overflow-hidden cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying ? (
        <>
          <img
            src={thumbnail.src}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
  <div className="absolute"></div>

      
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl">
           <MdPlayArrow />

            </div>
          </div>
        </>
      ) : (
        /* YouTube iframe */
        <iframe
          src={`https://youtu.be/KLuTLF3x9sA`}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default VideoPlayCard;
