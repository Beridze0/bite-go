import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/landing/Button";
import Logo from "../components/landing/Logo";
import { IoPersonOutline } from "react-icons/io5";

export default function Navbar() {
  const location = useLocation();

  const { pathname } = location;

  return (
    <nav
      className={`flex items-center justify-between py-4 px-10 sticky top-0 z-50 bg-[#FEC54A]`}
    >
      <Logo />
      {pathname !== "/login" && <Button icon={IoPersonOutline}>Login</Button>}
    </nav>
  );
}
