import moment from "moment";

import { hours } from "./static-data";

function getFormattedHour() {
  const time = moment().add(0, "m").add(0, "h").format("h:mm:A");

  const splitTime = time.split(":");

  const hour = +splitTime[0];
  const minute = +splitTime[1];
  const ampm = splitTime[2];

  return [hour, minute, ampm, time];
}

function getHour(hour, minute) {
  if (minute <= 5) {
    return hours[hour]["ქვევით"];
  } else if (minute > 5 && minute <= 35) {
    return hours[hour]["ნაკლები"];
  } else if (minute > 35 && minute <= 53) {
    return hours[hour]["მეტი"];
  } else if (minute > 53) {
    return hours[hour]["ზევით"];
  }
}

function getMinute(minute) {
  switch (true) {
    case minute > 53 || minute <= 5:
      return "ზუსტად";
      break;
    case minute > 5 && minute <= 12:
      return "ათი წუთია";
      break;
    case minute > 12 && minute <= 17:
      return "თხუთმეტი წუთია";
      break;
    case minute > 17 && minute <= 22:
      return "ოცი წუთია";
      break;
    case minute > 22 && minute <= 35:
      return "ნახევარია";
      break;
    case minute > 35 && minute <= 42:
      return "უკლია ოცი";
      break;
    case minute > 42 && minute <= 53:
      return "უკლია ათი";
      break;
    default:
      return "ლოლ";
  }
}

export default function getTime() {
  const [hour, minute, ampm, time] = getFormattedHour();

  return [getHour(hour, minute), getMinute(minute), time];
}
