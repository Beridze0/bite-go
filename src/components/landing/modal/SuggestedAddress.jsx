import React from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../slices/locationSlice";

export default function SuggestedAddress({ suggestion, onSuccess }) {
  console.log(suggestion);

  const dispatch = useDispatch();

  const location = {
    lat: suggestion.lat,
    lng: suggestion.lon,
    address: suggestion.address.name,
  };

  function handleSuggestedAddress() {
    // UPDATE REDUX
    //////
    ///////
    ////
    dispatch(setLocation(location));

    onSuccess();
  }
  return (
    <li
      key={suggestion.lat}
      className="flex flex-col text-lg font-semibold hover:bg-gray-100 px-3 py-1 rounded-lg cursor-pointer"
      onClick={handleSuggestedAddress}
    >
      {suggestion.address.name}
      <span className="text-sm font-normal text-gray-600">
        {suggestion.address.city
          ? suggestion.address.city
          : suggestion.address.state}
      </span>
    </li>
  );
}
