import MiniMap from "../../MiniMap";

export default function ConfirmLocationStep({ location }) {
  return (
    <div className="flex flex-col gap-4 w-[400px]">
      <MiniMap lat={location.lat} lng={location.lng} />

      <h4 className="text-xl font-semibold">What kind of place is this?</h4>

      <div className="grid grid-cols-2 gap-3">
        <button className="border rounded-lg py-2">Home</button>
        <button className="border rounded-lg py-2">Work</button>
        <button className="border rounded-lg py-2">Hotel</button>
        <button className="border rounded-lg py-2">Other</button>
      </div>

      <button className="bg-green-600 text-white py-3 rounded-lg">
        Continue
      </button>
    </div>
  );
}
