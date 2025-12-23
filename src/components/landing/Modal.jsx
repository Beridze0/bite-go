import React, { useEffect, useRef } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import CloseBtn from "../../ui/CloseBtn";
import CurrentLocationBtn from "../../ui/CurrentLocationBtn";

export default function Modal({ isVisible, closeModal }) {
  const inputRef = useRef();

  useEffect(
    function () {
      function handleEsc(e) {
        if (e.key === "Escape") {
          closeModal();
        }
      }

      document.body.addEventListener("keydown", handleEsc);

      return () => document.body.removeEventListener("keydown", handleEsc);
    },
    [closeModal]
  );

  function handleOverlayClick() {
    closeModal();
  }

  useEffect(
    function () {
      if (isVisible) {
        inputRef.current.focus();
      }
    },
    [isVisible]
  );

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/30"
      onClick={handleOverlayClick}
    >
      <div
        className={`flex flex-col items-center justify-center py-6 px-13 bg-white rounded-3xl gap-3
              transform transition-all duration-300 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-end">
          <CloseBtn onClick={closeModal} />
        </div>

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

          <CurrentLocationBtn className="w-full" />
        </div>
      </div>
    </div>
  );
}
