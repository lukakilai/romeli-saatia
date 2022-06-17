import React, { useContext } from "react";

import { cities } from "../helpers/static-data";

import { AppContext } from "../contexts/AppContextProvider";

import Button from "./Button";

export default function Buttons() {
  const { activeCity, setActiveCity, setLoading } = useContext(AppContext);

  function changeActiveCity(id) {
    setLoading(true);
    setActiveCity(id);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="flex flex-row justify-between items-center mb-4 w-full">
      {Object.entries(cities).map(([key, city]) => (
        <Button
          key={city.name}
          isActive={activeCity === city.id}
          onClick={() => changeActiveCity(city.id)}
        >
          {city.name}
        </Button>
      ))}
    </div>
  );
}
