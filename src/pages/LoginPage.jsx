import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import AuthButton from "../components/login/AuthButton";
import Navbar from "../ui/Navbar";
import CloseBtn from "../ui/CloseBtn";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center  h-screen bg-white relative">
      <div className="flex flex-col gap-5 items-center mt-5">
        <div className="flex w-full justify-end">
          <CloseBtn onClick={() => navigate(-1)} />
        </div>
        <div className="flex items-center flex-col px-10 gap-3">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-[16px]">
            Continue with one of the following options
          </p>
        </div>
        <form className="flex items-center flex-col w-full gap-2">
          <div className="flex flex-col w-full">
            <label className="text-gray-500 font-semibold mb-0.5 text-[17px]">
              Username
            </label>
            <input
              placeholder="Username"
              className="border border-gray-400 p-2.5 rounded-lg w-full text-lg"
            />
          </div>
          <button className="w-full rounded-lg py-3 bg-teal-700 text-white font-bold cursor-pointer hover:bg-teal-800 transition-all duration-500">
            Continue
          </button>
        </form>

        <p className="text-gray-600 text-lg">or with</p>

        <div className="flex flex-col items-center gap-3 w-full">
          <AuthButton text={"Google"} icon={FcGoogle} />
          <AuthButton text={"Facebook"} icon={BsFacebook} />
          <AuthButton text={"Email"} icon={MdOutlineMail} />
        </div>
      </div>
    </div>
  );
}
