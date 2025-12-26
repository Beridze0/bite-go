import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/landing/Button";
import Logo from "../components/landing/Logo";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Navbar() {
  const location = useLocation();

  const { pathname } = location;

  const userLocation = useSelector((state) => state.location);
  console.log(userLocation);

  return (
    <nav
      className={`flex items-center justify-between py-4 px-10 sticky top-0 z-50 ${
        pathname === "/login" ? "bg-white" : "bg-[#FEC54A]"
      }`}
    >
      <div>
        <Logo />
        {userLocation && <p></p>}
      </div>
      {pathname !== "/login" && <Button icon={IoPersonOutline}>Login</Button>}
    </nav>
  );
}
