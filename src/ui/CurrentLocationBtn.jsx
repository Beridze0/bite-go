import React from "react";

export default function CurrentLocationBtn({ className = "", onClick }) {
  return (
    <button
      className={`py-2.5 px-5 rounded-4xl bg-[#e4efed] text-lg text-teal-900 font-bold cursor-pointer hover:bg-[#c5e3dd] transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      Use current location
    </button>
  );
}
