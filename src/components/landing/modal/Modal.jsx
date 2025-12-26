import React, { useEffect, useState } from "react";
import CloseBtn from "../../../ui/CloseBtn";

import ConfirmLocationStep from "./ConfirmLocationStep";
import SearchStep from "./SearchStep";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../slices/locationSlice";

export default function Modal({ isVisible, closeModal }) {
  const dispatch = useDispatch();

  const [step, setStep] = useState("search");

  const [locationData, setLocationData] = useState({
    lat: null,
    lng: null,
    address: "",
    label: "",
  });

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

  function handleConfirm() {
    dispatch(setLocation({ ...locationData, isConfirmed: true }));
    closeModal();
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/30"
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

        {step === "search" && (
          <SearchStep
            isVisible={isVisible}
            onSuccess={() => setStep("confirm")}
            setLocationData={setLocationData}
          />
        )}

        {step === "confirm" && (
          <ConfirmLocationStep
            setLocationData={setLocation}
            locationData={locationData}
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </div>
  );
}
