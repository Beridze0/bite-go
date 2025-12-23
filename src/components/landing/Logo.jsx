import React from "react";
import { FaCookieBite } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 cursor-pointer text-teal-700"
      onClick={() => navigate("/")}
    >
      <h1 className="text-4xl font-medium">BiteGo</h1>
      <FaCookieBite size={35} />
    </div>
  );
}
