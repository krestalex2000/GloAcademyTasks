"use strict"

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  asking: function() {
    this.title = prompt("Как называется ваш проект?", "Калькулятор");
    this.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );

    do {
      this.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(this.screenPrice));
    
    this.adaptive = confirm("Нужен ли адаптив на сайте?");
  }
}

const isNumber = function(num) {
  return !isNaN(parseFloat(num) && isFinite(num))
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

  for (let i = 0; i < 2; i++) {
    let askForPrice = 0;

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

