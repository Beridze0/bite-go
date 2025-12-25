import React, { useEffect, useRef } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import CurrentLocationBtn from "../../../ui/CurrentLocationBtn";

export default function SearchStep({ isVisible, onSuccess, setLocation }) {
  const inputRef = useRef();

  useEffect(
    function () {
      if (isVisible) {
        inputRef.current.focus();
      }
    },
    [isVisible]
  );

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onSucces();
  // }

  return (
    <div className="flex flex-col gap-7">
      <h3 className="text-3xl font-bold">Where shall we deliver to?</h3>

      <div
        className={`flex items-center gap-2.5 border border-gray-300 py-1.5 px-3 rounded-full w-full transform transition-all duration-1000 ${
          isVisible ? "focus-within:border-green-700" : ""
        }`}
      >
        <HiOutlineMagnifyingGlass size={23} className="text-gray-500" />
        <input
          ref={inputRef}
          placeholder="Search address"
          className="text-lg w-full outline-none"
        />
      </div>

      <CurrentLocationBtn
        className="w-full"
        onSuccess={onSuccess}
        setLocation={setLocation}
      />
    </div>
  );
}
