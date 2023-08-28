const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const currentWeekDay = new Date().getDay()

week.forEach(function (item, index) {
  if (item === "Суббота" || item === "Воскресенье") {
    console.log("%c" + item, "font-style: italic");
  } else if (index === currentWeekDay - 1){
    console.log("%c" + item, "fontgi-weight: bold");
  } else {
    console.log(item);
  }
})