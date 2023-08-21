let lang = prompt("Введите язык", "ru или en");

if(lang == "ru") {
  console.log("Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье");
} else if(lang == "en") {
    console.log("Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday");
  }

switch (lang) {
  case "ru":
      console.log(
        "Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье"
      );
    break;
  case "en":
    console.log(
      "Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday"
      );
}

const daysOfWeek = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
];

lang == "ru" ? console.log(daysOfWeek[0]) : lang == "en" ? console.log(daysOfWeek[1]) : null;

const namePerson = prompt("Введите ваше имя");

namePerson == "Артем" ? console.log("директор") : namePerson == "Александр" ? console.log("преподаватель") : console.log("студент");