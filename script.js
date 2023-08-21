let title = "Мой первый проект";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 2000;
let rollback = 15;
let fullPrice = 35000;
let adaptive = true;

// alert("Hello JavaScript!");
console.log("Мой первый log");
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");
console.log(screens.toLocaleLowerCase().split(','));
console.log("Процент отката посреднику за работу: " + (fullPrice * (rollback / 100)));

title = prompt("Как называется ваш проект?");
screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");

fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);

const servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback / 100));

console.log(servicePercentPrice);

if(fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if(fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if(fullPrice < 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}