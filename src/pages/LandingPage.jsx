import React from "react";

import burger from "../assets/burger.jpg";
import AddressInput from "../components/landing/AddressInput";
import Navbar from "../ui/Navbar";
import wave from "../assets/wave-haikei.png";
import Restaurant from "../components/top-restaurants/Restaurant";
import burgerking from "../assets/burger-king.jpg";
import kfc from "../assets/kfc.jpg";
import mc from "../assets/mc.jpg";
import pizzahut from "../assets/pizzahut.jpg";
import papajohns from "../assets/papa-johns.jpg";
import tacobell from "../assets/tacobell.jpg";
import subway from "../assets/subway.jpg";
import carrefour from "../assets/carrefour.jpg";

const restaurants = [
  { name: "McDonald's", img: mc },
  { name: "KFC", img: kfc },
  { name: "Burger King", img: burgerking },
  { name: "PizzaHut", img: pizzahut },
  { name: "Papa John's", img: papajohns },
  { name: "Subway", img: subway },
  { name: "Carrefour", img: carrefour },
  { name: "TacoBell", img: tacobell },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
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
      <div className="bg-[#FEC54A]">
        <img src={wave} className="w-full object-cover" />
      </div>

      {/* SECOND  */}
      <div className="flex flex-col gap-10 my-5">
        <h1 className="text-4xl mb-3 text-center font-bold">
          Top restaurants and more in BiteGo
        </h1>
        <div className="grid grid-cols-4 gap-y-10 gap-x-15 content-center mx-auto ">
          {restaurants.map((res) => (
            <Restaurant key={res.name} res={res} />
          ))}
        </div>
      </div>
    </div>
  );
}
