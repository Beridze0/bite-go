import React from "react";
import Restaurant from "../top-restaurants/Restaurant";
import burgerking from "../../assets/burger-king.jpg";
import kfc from "../../assets/kfc.jpg";
import mc from "../../assets/mc.jpg";
import pizzahut from "../../assets/pizzahut.jpg";
import papajohns from "../../assets/papa-johns.jpg";
import tacobell from "../../assets/tacobell.jpg";
import subway from "../../assets/subway.jpg";
import carrefour from "../../assets/carrefour.jpg";

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

export default function TopRestaurants() {
  return (
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
  );
}
