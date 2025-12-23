import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  return (
    <button
      className="py-2 px-3.5 flex items-center gap-2 font-bold rounded-full bg-teal-700 text-white cursor-pointer"
      onClick={() => navigate("/login")}
    >
      <span>
        <IoPersonOutline size={21} />
      </span>
      Login
    </button>
  );
}
