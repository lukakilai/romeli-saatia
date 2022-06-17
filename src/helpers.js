const hours = {
  1: {
    ნაკლები: "ორის",
    მეტი: "ორს",
    ზემოთ: "ორია",
    ქვევით: "პირველია",
  },
  2: {
    ნაკლები: "სამის",
    მეტი: "სამს",
    ზემოთ: "სამია",
    ქვევით: "ორია",
  },
  3: {
    ნაკლები: "ოთხის",
    მეტი: "ოთხს",
    ზემოთ: "ოთხია",
    ქვევით: "სამია",
  },
  4: {
    ნაკლები: "ხუთის",
    მეტი: "ხუთს",
    ზემოთ: "ხუთია",
    ქვევით: "ოთხია",
  },
  5: {
    ნაკლები: "ექვსის",
    მეტი: "ექვსს",
    ზემოთ: "ექვსია",
    ქვევით: "ხუთია",
  },
  6: {
    ნაკლები: "შვიდის",
    მეტი: "შვიდს",
    ზემოთ: "შვიდია",
    ქვევით: "ექვსია",
  },
  7: {
    ნაკლები: "რვის",
    მეტი: "რვას",
    ზემოთ: "რვაა",
    ქვევით: "შვიდია",
  },
  8: {
    ნაკლები: "ცხრის",
    მეტი: "ცხრას",
    ზემოთ: "ცხრაა",
    ქვევით: "რვაა",
  },
  9: {
    ნაკლები: "ათის",
    მეტი: "ათს",
    ზემოთ: "ათია",
    ქვევით: "ცხრაა",
  },
  10: {
    ნაკლები: "თერთმეტის",
    მეტი: "თერთმეტს",
    ზემოთ: "თერთმეტია",
    ქვევით: "ათია",
  },
  11: {
    ნაკლები: "თორმეტის",
    მეტი: "თორმეტს",
    ზემოთ: "თორმეტია",
    ქვევით: "თერთმეტია",
  },
  12: {
    ნაკლები: "პირველის",
    მეტი: "პირველს",
    ზემოთ: "თორმეტია",
    ქვევით: "პირველია",
  },
};

function getHour(hour, minute) {
  if (minute <= 5) {
    return hours[hour]["ქვევით"];
  } else if (minute > 5 && minute <= 35) {
    return hours[hour]["ნაკლები"];
  } else if (minute > 35 && minute <= 53) {
    return hours[hour]["მეტი"];
  } else if (minute > 53) {
    return hours[hour]["ქვევით"];
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

export default function getTime(hour, minute) {
  return [getHour(hour, minute), getMinute(minute)];
}
