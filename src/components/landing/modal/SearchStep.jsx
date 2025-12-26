import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useAddressSuggestions } from "../../../hooks/useAddressSuggestions";
import { useGeolocation } from "../../../hooks/useGeolocation";
import CurrentLocationBtn from "../../../ui/CurrentLocationBtn";
import SuggestedAddress from "./SuggestedAddress";
import { setLocation } from "../../../slices/locationSlice";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchStep({ isVisible, onSuccess, autoLocate }) {
  const [address, setAddress] = useState("");

  const inputRef = useRef();

  const { location, getLocation } = useGeolocation();

  const dispatch = useDispatch();

  useEffect(
    function () {
      if (isVisible) {
        inputRef.current.focus();
      }
      if (autoLocate && isVisible) {
        getLocation();
      }
    },
    [isVisible, autoLocate, getLocation]
  );

  useEffect(() => {
    if (!location) return;

    dispatch(setLocation(location));
    onSuccess();
  }, [location, dispatch, onSuccess]);

  const { suggestions, isLoading } = useAddressSuggestions(address, API_KEY);

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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="text-lg w-full outline-none"
        />
      </div>

      {isLoading && (
        <div
          className={`self-center w-6 h-6 border-2 border-t-transparent border-solid rounded-full animate-spin`}
        ></div>
      )}

      {address && suggestions && !isLoading && (
        <ul className="flex flex-col gap-3">
          {suggestions.map((suggestion) => (
            <SuggestedAddress
              key={suggestion.lat}
              suggestion={suggestion}
              onSuccess={onSuccess}
            />
          ))}
        </ul>
      )}

      <CurrentLocationBtn className="w-full" onClick={getLocation} />
    </div>
  );
}
