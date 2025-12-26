import React from "react";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Button from "../components/landing/Button";
import Logo from "../components/landing/Logo";

export default function Navbar() {
  const location = useLocation();

  const { pathname } = location;

  const userLocation = useSelector((state) => state.location);

  return (
    <nav
      className={`flex items-center justify-between py-4 px-10 sticky top-0 z-50 ${
        pathname === "/login" ? "bg-white" : "bg-[#FEC54A]"
      }`}
    >
      <div className="flex items-center gap-4">
        <Logo />
        {userLocation.address && (
          <p className="py-2 font-bold px-3 rounded-3xl bg-white flex items-center gap-1">
            <span>
              <IoLocationOutline size={22} />
            </span>
            {userLocation.address}
          </p>
        )}
      </div>
      {pathname !== "/login" && <Button icon={IoPersonOutline}>Login</Button>}
    </nav>
  );
}
