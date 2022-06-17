import { useState } from "react";
import moment from "moment";

import Buttons from "./Buttons";

import getTime from "./helpers";

export default function App() {
  const time = moment().subtract(6, "m").add(3, "h").format("h:mm:A");

  const splitTime = time.split(":");
  const hour = +splitTime[0];
  const minute = +splitTime[1];
  const ampm = splitTime[2];

  const [outputHour, outputMinute] = getTime(hour, minute);

  return (
    <div className="w-full h-screen grid place-items-center">
      <div>
        <Buttons />
        <div className="flex flex-col justify-between items-center space-y-8 border h-[200px] px-10 py-6 rounded-md bg-sky-50">
          <p className="text-4xl font-bold">
            {outputHour} {outputMinute}
          </p>
          <p className="text-2xl font-bold">უფრო ზუსტად - {time}</p>
        </div>
      </div>
    </div>
  );
}
