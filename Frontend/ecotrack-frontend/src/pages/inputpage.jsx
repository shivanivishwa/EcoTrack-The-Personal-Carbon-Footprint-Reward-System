import { useState } from "react";

export default function EcoTrackerInput() {
  const [vehicle, setVehicle] = useState("bike");
  const [transportType, setTransportType] = useState("bike"); // NEW
  const [distance, setDistance] = useState(0);
  const [electricity, setElectricity] = useState(0);

  return (
<div className="w-full min-h-screen bg-[#E1ECCC] font-['Inter'] relative overflow-hidden">
      {/* 🔹 HEADER */}
      <div className="bg-[#1D5525]/60 py-6 text-center shadow-md">
        <h1 className="text-5xl italic font-extrabold text-black drop-shadow-lg">
          EcoTracker
        </h1>
        <p className="mt-3 text-lg italic font-semibold">
          Track Your Carbon Footprint. Earn Rewards. Save the Planet.
        </p>
      </div>

      {/* 🔹 DESCRIPTION */}
      <div className="max-w-4x2 mx-auto text-center mt-6 px-4">
        <p className="text-lg italic text-gray-800">
          EcoTracker helps you measure and reduce your daily carbon footprint — one habit at a time. Log your meals, commutes, and energy use, and watch your eco-score grow as you make greener choices. Earn badges, hit milestones, and join a community of people building a more sustainable future together.
        </p>
      </div>

      {/* 🔹 TRACK FOOTPRINT (moved down) */}
      <div className="max-w-5xl mx-auto text-center mt-6 px-4">
        <p className="text-lg italic-bold text-green-800">
          Track Your Footprint
        </p>
      </div>

      {/* 🔹 MAIN SECTION */}
      <div className="relative flex items-center justify-between mt-1 px-1">

        {/* LEFT IMAGE */}
        <div className="hidden md:block w-[40vw] h-[45vh] bg-[url('/sticker1.png')] bg-contain bg-no-repeat bg-left mix-blend-darken"></div>

        {/* CENTER */}
        <div className="z-10 flex flex-col items-center w-full md:w-auto">

          {/* Toggle Buttons */}
          <div className="flex gap-12">
            <button
              onClick={() => setVehicle("transport")}
              className={`px-8 py-2 rounded-full text-white font-bold ${
                vehicle === "transport" ? "bg-[#1D5525]" : "bg-green-600"
              }`}
            >
              🏍️ Transport
            </button>

            <button
              onClick={() => setVehicle("electricity")}
              className={`px-10 py-2 rounded-full text-white font-bold ${
                vehicle === "electricity" ? "bg-[#1D5525]" : "bg-green-600"
              }`}
            >
              ⚡ Electricity
            </button>
          </div>

          {/* TRANSPORT */}
          {vehicle === "transport" && (
            <div className="bg-white/60 rounded-xl p-6 w-[90%] md:w-[400px] mt-6 shadow-md">
              <h2 className="text-[#1D5525] font-bold mb-4">
                Select vehicle type
              </h2>

              {/* Controlled Radio */}
              <div className="flex gap-6 mb-4">
                <label>
                  <input
                    type="radio"
                    value="bike"
                    checked={transportType === "bike"}
                    onChange={(e) => setTransportType(e.target.value)}
                  /> 🏍️ Bike
                </label>

                <label>
                  <input
                    type="radio"
                    value="car"
                    checked={transportType === "car"}
                    onChange={(e) => setTransportType(e.target.value)}
                  /> 🚗 Car
                </label>
              </div>

              {/* SINGLE INPUT */}
              <div className="flex border rounded-full px-4 py-2">
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-full outline-none"
                  placeholder={`Enter distance for ${transportType}`}
                />
                <span>km</span>
              </div>
            </div>
          )}

          {/* ELECTRICITY */}
          {vehicle === "electricity" && (
            <div className="bg-white/60 rounded-xl p-6 w-[90%] md:w-[400px] mt-6 shadow-md">
              <h2 className="text-[#1D5525] font-bold mb-4">
                Enter electricity usage
              </h2>

              <div className="flex border rounded-full px-4 py-2">
                <input
                  type="number"
                  value={electricity}
                  onChange={(e) => setElectricity(e.target.value)}
                  className="w-full outline-none"
                />
                <span>kWh</span>
              </div>
            </div>
          )}

          <button className="mt-8 bg-[#1D5525] text-white px-12 py-3 rounded-full">
            Calculate Carbon Footprint
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block w-[40vw] h-[45vh] bg-[url('/sticker3.png')] bg-contain bg-no-repeat bg-right mix-blend-darken"></div>
      </div>

      {/* 🔹 FOOTER */}
      <div className="bg-[#1D5525] text-center text-white mt-16 py-6">
        <h3 className="italic font-bold text-lg text-[#D4EDBA]">
          EcoTracker
        </h3>
        <p className="italic text-sm mt-2">
          © 2026 EcoTracker. Building a greener tomorrow.
        </p>
        <div className="mt-3 flex justify-center gap-6 text-sm">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}