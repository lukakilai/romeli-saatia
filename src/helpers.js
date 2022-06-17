export const hours = {
  1: {
    ნაკლები: "ორის",
    მეტი: "ორს",
    ზუსტად: "პირველია",
  },
  2: {
    ნაკლები: "სამის",
    მეტი: "სამს",
    ზუსტად: "ორია",
  },
  3: {
    ნაკლები: "ოთხის",
    მეტი: "ოთხს",
    ზუსტად: "სამია",
  },
  4: {
    ნაკლები: "ხუთის",
    მეტი: "ხუთს",
    ზუსტად: "ოთხია",
  },
  5: {
    ნაკლები: "ექვსის",
    მეტი: "ექვსს",
    ზუსტად: "ხუთია",
  },
  6: {
    ნაკლები: "შვიდის",
    მეტი: "შვიდს",
    ზუსტად: "ექვსია",
  },
  7: {
    ნაკლები: "რვის",
    მეტი: "რვას",
    ზუსტად: "შვიდია",
  },
  8: {
    ნაკლები: "ცხრის",
    მეტი: "ცხრას",
    ზუსტად: "რვაა",
  },
  9: {
    ნაკლები: "ათის",
    მეტი: "ათს",
    ზუსტად: "ცხრაა",
  },
  10: {
    ნაკლები: "თერთმეტის",
    მეტი: "თერთმეტს",
    ზუსტად: "ათია",
  },
  11: {
    ნაკლები: "თორმეტის",
    მეტი: "თორმეტს",
    ზუსტად: "თერთმეტია",
  },
  12: {
    ნაკლები: "პირველის",
    მეტი: "პირველს",
    ზუსტად: "თორმეტია",
  },
};

export function getHour(hour, minute) {
  if (minute <= 5) {
    return hours[hour]["ზუსტად"];
  } else if (minute > 5 && minute <= 35) {
    return hours[hour]["ნაკლები"];
  } else if (minute > 35) {
    return hours[hour]["მეტი"];
  }
}

export function getMinute(minute) {
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
