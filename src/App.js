import moment from "moment";

export default function App() {
  const time = moment().format("h:mm:A");
  const [hour, minute, ampm] = time.split(":");

  console.log("hour", hour);
  console.log("minute", minute);
  console.log("ampm", ampm);

  return (
    <div className="w-full h-screen grid place-items-center">
      <p className="text-4xl font-bold">{time}</p>
    </div>
  );
}
