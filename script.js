const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");
const rollback = 15;

let fullPrice =
  parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2);
let servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback / 100));

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
}

const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return parseInt(servicePrice1) + parseInt(servicePrice2);
};

function getFullPrice(screenPrice, allServicePrices) {
  return parseInt(screenPrice) + parseInt(allServicePrices);
}

const getTitle = function (title) {
  return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
};

const getServicePercentPrices = function (fullPrice, servicePercentPrice) {
  return fullPrice - servicePercentPrice;
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, servicePercentPrice);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(getRollbackMessage(fullPrice));
console.log(
  "Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани"
);
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани"
);
console.log(servicePercentPrice);
