import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. IMPORT YOUR IMAGES

export default function EcoTrackerInput() {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState("transport"); // Set default to transport to match toggle
  const [transportType, setTransportType] = useState("bike");
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
      <div className="max-w-4xl mx-auto text-center mt-6 px-4">
        <p className="text-lg italic text-gray-800">
          EcoTracker helps you measure and reduce your daily carbon footprint — one habit at a time.
        </p>
      </div>

      <div className="max-w-5xl mx-auto text-center mt-6 px-4">
        <p className="text-lg font-bold italic text-green-800">
          Track Your Footprint
        </p>
      </div>

      {/* 🔹 MAIN SECTION */}
      <div className="relative flex items-center justify-between mt-1 px-1">
        
        {/* 2. LEFT IMAGE (Updated to use style prop) */}
        <div 
          className="hidden md:block w-[40vw] h-[45vh] bg-contain bg-no-repeat bg-left mix-blend-darken"
          style={{ backgroundImage: `url(${'/sticker1.png'})` }}
        ></div>

        {/* CENTER */}
        <div className="z-10 flex flex-col items-center w-full md:w-auto">
          {/* Toggle Buttons */}
          <div className="flex gap-12">
            <button
              onClick={() => setVehicle("transport")}
              className={`px-8 py-2 rounded-full text-white font-bold transition-colors ${
                vehicle === "transport" ? "bg-[#1D5525]" : "bg-green-600"
              }`}
            >
              🏍️ Transport
            </button>

            <button
              onClick={() => setVehicle("electricity")}
              className={`px-10 py-2 rounded-full text-white font-bold transition-colors ${
                vehicle === "electricity" ? "bg-[#1D5525]" : "bg-green-600"
              }`}
            >
              ⚡ Electricity
            </button>
          </div>

          {/* TRANSPORT SECTION */}
          {vehicle === "transport" && (
            <div className="bg-white/60 rounded-xl p-6 w-[90%] md:w-[400px] mt-6 shadow-md">
              <h2 className="text-[#1D5525] font-bold mb-4">Select vehicle type</h2>
              <div className="flex gap-6 mb-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value="bike"
                    checked={transportType === "bike"}
                    onChange={(e) => setTransportType(e.target.value)}
                  /> 🏍️ Bike
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value="car"
                    checked={transportType === "car"}
                    onChange={(e) => setTransportType(e.target.value)}
                  /> 🚗 Car
                </label>
              </div>
              <div className="flex border bg-white rounded-full px-4 py-2">
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(parseFloat(e.target.value) || 0)}
                  className="w-full outline-none bg-transparent"
                  placeholder={`Enter distance for ${transportType}`}
                />
                <span className="text-gray-500">km</span>
              </div>
            </div>
          )}

          {/* ELECTRICITY SECTION */}
          {vehicle === "electricity" && (
            <div className="bg-white/60 rounded-xl p-6 w-[90%] md:w-[400px] mt-6 shadow-md">
              <h2 className="text-[#1D5525] font-bold mb-4">Enter electricity usage</h2>
              <div className="flex border bg-white rounded-full px-4 py-2">
                <input
                  type="number"
                  value={electricity}
                  onChange={(e) => setElectricity(e.target.value)}
                  className="w-full outline-none bg-transparent"
                />
                <span className="text-gray-500">kWh</span>
              </div>
            </div>
          )}

          <button 
            className="mt-8 bg-[#1D5525] text-white px-12 py-3 rounded-full hover:bg-green-900 transition-colors shadow-lg"
            onClick={() => navigate("/result")}
          >
            Calculate Carbon Footprint
          </button>
        </div>

        {/* 3. RIGHT IMAGE (Updated to use style prop) */}
        <div 
          className="hidden md:block w-[40vw] h-[45vh] bg-contain bg-no-repeat bg-right mix-blend-darken"
          style={{ backgroundImage: `url(${'/sticker3.png'})` }}
        ></div>
      </div>

      {/* 🔹 FOOTER */}
      <div className="bg-[#1D5525] text-center text-white mt-16 py-6">
        <h3 className="italic font-bold text-lg text-[#D4EDBA]">EcoTracker</h3>
        <p className="italic text-sm mt-2">© 2026 EcoTracker. Building a greener tomorrow.</p>
        <div className="mt-3 flex justify-center gap-6 text-sm">
          <span className="cursor-pointer hover:underline">Privacy</span>
          <span className="cursor-pointer hover:underline">Terms</span>
          <span className="cursor-pointer hover:underline">Contact</span>
        </div>
      </div>
    </div>
  );
}