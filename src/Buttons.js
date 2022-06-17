import React, { useState } from "react";

export default function Buttons() {
  const [activeCity, setActiveCity] = useState(1);

  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <button
        className={
          activeCity === 1
            ? "bg-sky-800"
            : "bg-sky-300 hover:bg-sky-400 hover:scale-105 transition-all duration-75"
        }
        onClick={() => setActiveCity(1)}
      >
        თბილისი
      </button>
      <button
        className={
          activeCity === 2
            ? "bg-sky-800"
            : "bg-sky-300 hover:bg-sky-400 hover:scale-105 transition-all duration-75"
        }
        onClick={() => setActiveCity(2)}
      >
        ხაშური
      </button>
      <button
        className={
          activeCity === 3
            ? "bg-sky-800"
            : "bg-sky-300 hover:bg-sky-400 hover:scale-105 transition-all duration-75"
        }
        onClick={() => setActiveCity(3)}
      >
        ბათუმი
      </button>
    </div>
  );
}
