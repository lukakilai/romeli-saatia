import React, { useContext } from "react";

import { AppContext } from "../contexts/AppContextProvider";

import getTime from "../helpers/timeCalculations";
import { cities } from "../helpers/static-data";

export default function Output() {
  const { activeCity } = useContext(AppContext);

  const [outputHour, outputMinute, time] = getTime();

  return (
    <div className="flex flex-col justify-between items-center space-y-8 py-6 container">
      <div className="flex flex-col justify-start items-center space-y-4 bg-slate-200 py-4 w-full rounded-lg">
        <p className="text-center text-3xl font-nino">
          {cities[activeCity].name}ს დროით
        </p>
        <p className="text-5xl font-bold text-center break-words leading-12 font-archy ">
          {outputHour} {outputMinute}
        </p>
      </div>
      <p className="text-2xl font-base text-center font-nino">
        უფრო ზუსტად კი - {time}
      </p>
      <p className="text-lg font-base text-center font-nino bg-emerald-300 px-4 py-1 text-white rounded-lg">
        საათი გასწორებულია კურიერზე
      </p>
    </div>
  );
}
