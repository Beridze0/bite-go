import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function CloseBtn({ onClick }) {
  return (
    <button
      className="p-1.5 flex items-center justify-center rounded-full bg-[#f0f0f0] cursor-pointer"
      onClick={onClick}
    >
      <IoCloseOutline size={27} />
    </button>
  );
}
