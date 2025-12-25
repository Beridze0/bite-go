import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({
  children,
  icon,
  iconSize = 21,
  className = "",
}) {
  const navigate = useNavigate();
  const Icon = icon;

  return (
    <button
      className={`py-2 px-4 flex items-center gap-2 font-bold rounded-full bg-teal-700 text-white cursor-pointer hover:bg-teal-800 transition-all duration-300 ${className}`}
      onClick={() => navigate("/login")}
    >
      {Icon && (
        <span>
          <Icon size={iconSize} />
        </span>
      )}
      {children}
    </button>
  );
}
