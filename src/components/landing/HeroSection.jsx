import React from "react";
import AddressInput from "./AddressInput";
import burger from "../../assets/burger.jpg";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-2 gap-8 px-20 py-10 bg-[#FEC54A]">
      <div className="flex items-center justify-end">
        <div className="w-115 aspect-square">
          <img
            src={burger}
            alt="advert"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-6xl font-bold">Food delivery and more</h1>
        <h3 className="text-2xl font-semibold mt-10 mb-1">
          Groceries, pharmacies, shops and everything!
        </h3>
        <AddressInput />
      </div>
    </div>
  );
}
