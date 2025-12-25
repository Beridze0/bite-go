import React from "react";
import Feature from "./Feature";
import fastDelivery from "../../assets/fast-delivery.svg";
import topRestaurants from "../../assets/top-restaurants.svg";
import groceries from "../../assets/groceries.svg";
import Button from "../../components/landing/Button";

const features = [
  {
    id: 1,
    title: "Your city's top restaurants",
    text: (
      <>
        With a great variety of restaurants you can order your favourite food or{" "}
        <span className="bg-[#FEC54A] rounded-lg px-1 box-decoration-clone">
          explore new restaurants nearby!
        </span>
      </>
    ),
    image: topRestaurants,
  },
  {
    id: 2,
    title: "Groceries delivery & more",
    text: (
      <>
        Find anything you need! From{" "}
        <span className="bg-[#FEC54A] rounded-lg px-1 box-decoration-clone">
          supermarkets to shops, pharmacies to florists
        </span>{" "}
        — if it's in your city order it and receive it.
      </>
    ),
    image: groceries,
  },
  {
    id: 3,
    title: "Fast delivery",
    text: (
      <>
        Like a flash! Order or send anything in your city and{" "}
        <span className="bg-[#FEC54A] rounded-lg px-1 box-decoration-clone">
          receive it in minutes
        </span>
      </>
    ),
    image: fastDelivery,
  },
];

export default function FeaturesSection() {
  return (
    <div className="mt-15 flex flex-col gap-10 pb-6">
      <h1 className="text-4xl text-center font-bold">Anything delivered</h1>
      <div className="grid grid-cols-3 mx-20">
        {features.map((feature) => (
          <Feature key={feature.id} feature={feature} />
        ))}
      </div>
      <Button className="w-fit self-center text-lg font-extrabold">
        Explore stores around you
      </Button>
    </div>
  );
}
