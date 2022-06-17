import moment from "moment";

import { hours, getHour, getMinute } from "./helpers";

export default function App() {
  const time = moment().add(0, "m").add(3, "h").format("h:mm:A");
  const destructured = time.split(":");

  const hour = +destructured[0];
  const minute = +destructured[1];
  const ampm = destructured[2];

  console.log("-----");
  console.log("hour", hour);
  console.log("minute", minute);
  // console.log("ampm", ampm);

  const [outputHour, outputMinute] = [getHour(hour, minute), getMinute(minute)];
  console.log(outputHour, outputMinute);
  console.log("-----");

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
