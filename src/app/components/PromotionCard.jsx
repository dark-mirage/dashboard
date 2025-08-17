import React from "react";
import Image from "next/image";

export default function PromotionsCard({ img, span, title, button }) {
  return (
    <div className="flex flex-col gap-2 sm:gap-[10px] w-full sm:min-w-[250px] md:min-w-[300px] p-3 sm:p-4 border border-[var(--glass-border)] rounded-[16px] sm:rounded-[20px]">
      <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-full bg-gradient-to-br from-purple-900 to-blue-800 text-white">
        <div className="relative">
          <Image
            src={img}
            alt={title}
            width={320}
            height={180}
            className="w-full aspect-[16/9] sm:aspect-[4/3]  object-cover"
          />

          <div className="absolute top-2 right-1 bg-yellow-400 text-black font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
            {span}
          </div>

          <div className="absolute bottom-2 left-0 right-0 bg-opacity-50 text-white p-1 sm:p-2 text-center text-[14px] sm:text-[18px]">
            <h3 className="font-bold text-[10px] sm:text-[12px] text-yellow-400">{title}</h3>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="border border-[var(--glass-border)] w-full pr-2 pl-2 sm:pr-[8px] sm:pl-[8px] rounded-lg button-yellow font-bold py-1 sm:py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base">
          {button}
        </button>
      </div>
    </div>
  );
}