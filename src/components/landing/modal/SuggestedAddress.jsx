import React from "react";

export default function SuggestedAddress({
  suggestion,
  setLocationData,
  onSuccess,
}) {
  console.log(suggestion);

  const location = {
    lat: suggestion.lat,
    lng: suggestion.lon,
    address: suggestion.address.name,
  };

  function handleSuggestedAddress() {
    setLocationData((prev) => ({ ...prev, ...location }));
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
