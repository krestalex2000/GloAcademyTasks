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

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let askForPrice = 0;

      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }

      do {
        askForPrice = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(askForPrice));

      sum += +askForPrice;
    }

    return sum;
  },

  getFullPrice: function (screenPrice, allServicePrices) {
    return parseInt(screenPrice) + parseInt(allServicePrices);
  },

  getTitle: function (title) {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  }, 

  logger: function () {
    for (this.item in appData) {
      console.log(this.item);
    }
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(
      appData.screenPrice,
      appData.allServicePrices
    );
    appData.servicePercentPrice = appData.getServicePercentPrices(
      appData.fullPrice,
      appData.servicePercentPrice
    );
    appData.logger();
  }
};

appData.start()


