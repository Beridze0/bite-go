import React from "react";

export default function Feature({ feature }) {
  return (
    <div className="flex items-center flex-col px-10">
      <img src={feature.image} className="w-41 aspect-square object-contain" />
      <h3 className="text-xl font-bold">{feature.title}</h3>
      <p className="text-center text-[17px]">{feature.text}</p>
    </div>
  );
}
