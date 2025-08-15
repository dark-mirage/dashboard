import React from "react";
import Image from "next/image";

export default function PromotionsCard({ img, span, title, button }) {
  return (
    <div className="flex flex-col gap-[10px] p-4 border border-[var(--glass-border)] rounded-[20px]">
    <div className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-900 to-blue-800 text-white">
      <div className="relative">
        <Image
          src={img}
          alt={title}
          width={320}
          height={180}
          className="w-full object-cover min-w-[250px]"
        />

        <div className="absolute top-2 right-1 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
          {span}
        </div>

        <div className="absolute bottom-2 left-0 right-0 bg-opacity-50 text-white p-2 text-center text-[18px]">
          <h3 className="font-bold text-[12px] text-yellow-400">{title}</h3>
        </div>
      </div>

    </div>
    <div className=" text-center">
      <button className="border border-[var(--glass-border)] w-full pr-[8px] pl-[8px] rounded-lg text-yellow-400 font-bold py-2 px-6 rounded-full transition-colors">
        {button}
      </button>
    </div>
  </div>
  );
}
