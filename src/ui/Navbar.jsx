import React from "react";
import Logo from "../components/landing/Logo";
import LoginButton from "../components/landing/LoginButton";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const { pathname } = location;

  return (
    <nav
      className={`flex items-center justify-between py-4 px-10 sticky top-0 bg-[#FEC54A]`}
    >
      <Logo />
      {pathname !== "/login" && <LoginButton />}
    </nav>
  );
}
