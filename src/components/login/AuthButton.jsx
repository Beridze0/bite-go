import React from "react";

export default function AuthButton({ icon, text }) {
  const Icon = icon;

  return (
    <button className="flex items-center gap-3 text-lg font-bold border border-gray-300 w-full rounded-4xl text justify-center py-2 hover:bg-gray-200 transition-all duration-500 cursor-pointer">
      <span>
        <Icon size={30} />
      </span>
      {text}
    </button>
  );
}
