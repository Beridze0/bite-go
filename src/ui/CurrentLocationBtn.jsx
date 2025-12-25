import React from "react";

export default function CurrentLocationBtn({
  className = "",
  onSuccess,
  setLocation,
}) {
  function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported on your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        setLocation({ lat: latitude, lng: longitude });
        onSuccess();
      },
      (error) => {
        console.error(error.message);
      }
    );
  }

  return (
    <button
      className={`py-2.5 px-5 rounded-4xl bg-[#e4efed] text-lg text-teal-900 font-bold cursor-pointer hover:bg-[#c5e3dd] transition-all duration-300 ${className}`}
      onClick={getCurrentLocation}
    >
      Use current location
    </button>
  );
}
