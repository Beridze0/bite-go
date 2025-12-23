import React from "react";

export default function Restaurant({ res }) {
  return (
    <div
      key={res.name}
      className="relative rounded-2xl flex items-center justify-center mx-auto"
    >
      <img
        src={res.img}
        className="w-33 rounded-full aspect-square object-cover"
      />
      <p className="absolute bottom-0 px-2 font-bold bg-[#F9EFDC] text-[#896110]  rounded-md">
        {res.name}
      </p>
    </div>
  );
}
