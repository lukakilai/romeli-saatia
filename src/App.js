import moment from "moment";

import { hours, getHour, getMinute } from "./helpers";

export default function App() {
  const time = moment().add(40, "m").add(3, "h").format("h:mm:A");
  const splitTime = time.split(":");
  const hour = +splitTime[0];
  const minute = +splitTime[1];
  const ampm = splitTime[2];

  const [outputHour, outputMinute] = [getHour(hour, minute), getMinute(minute)];

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col justify-start items-center space-y-8 border">
        <p className="text-4xl font-bold">{time}</p>
        <p className="text-4xl font-bold">
          {outputHour} {outputMinute}
        </p>
      </div>
    </div>
  );
}
