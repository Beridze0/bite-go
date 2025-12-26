import { useState } from "react";
import { ImOffice } from "react-icons/im";
import { LuHouse } from "react-icons/lu";
import { MdApartment } from "react-icons/md";
import { PiChairDuotone } from "react-icons/pi";
import MiniMap from "../../MiniMap";

const addressTypes = [
  { id: 1, label: "House", icon: LuHouse },
  { id: 2, label: "Apartment", icon: MdApartment },
  { id: 3, label: "Office", icon: ImOffice },
  { id: 4, label: "Other", icon: PiChairDuotone },
];

export default function ConfirmLocationStep({
  locationData,
  setLocationData,
  onConfirm,
}) {
  const [selectedLabel, setSelectedLabel] = useState(locationData.label);

  function handleSelectLabel(label) {
    setSelectedLabel(label);
    setLocationData((prev) => ({ ...prev, label }));
  }

  return (
    <div className="flex flex-col gap-4 w-100">
      <h4 className="text-3xl font-bold text-center">
        What kind of place is this?
      </h4>

      <MiniMap lat={locationData.lat} lng={locationData.lng} />

      <div className="grid grid-cols-2 gap-3">
        {addressTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              type="button"
              key={type.id}
              className={`flex items-center justify-center gap-4 rounded-lg py-2 cursor-pointer
                ${
                  selectedLabel === type.label
                    ? "bg-green-200"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              onClick={() => handleSelectLabel(type.label)}
            >
              <Icon size={21} />
              {type.label}
            </button>
          );
        })}
      </div>

      <button
        className="bg-green-600 text-white py-3 rounded-lg"
        onClick={onConfirm}
      >
        Continue
      </button>
    </div>
  );
}
