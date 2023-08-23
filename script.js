let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 15;
let allServicePrices;
let service1;
let service2;
let fullPrice;
let servicePercentPrice;

const isNumber = function(num) {
  return !isNaN(parseFloat(num) && isFinite(num))
}

const asking = function() {
  title = prompt("Как называется ваш проект?", "Калькулятор");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  
  adaptive = confirm("Нужен ли адаптив на сайте?");
}

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

const getAllServicePrices = function () {
  let sum = 0;
  let askForPrice;
  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      askForPrice = prompt("Сколько это будет стоить?");
    } while (!isNumber(askForPrice))

    sum += +askForPrice;
  }

  return sum
};


function getFullPrice(screenPrice, allServicePrices) {
  return parseInt(screenPrice) + parseInt(allServicePrices);
}

const getTitle = function (title) {
  return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return fullPrice - (fullPrice * (rollback / 100))
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, servicePercentPrice);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(
  "Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани"
  );
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани"
);
console.log(servicePercentPrice);
