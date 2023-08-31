"use strict"

const title = document.getElementsByTagName("h1")[0];
const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];
const screenBtn = document.querySelector(".screen-btn");
const itemsPercent = document.querySelectorAll(".other-items, .percent");
const itemsNumber = document.querySelectorAll(".other-items, .number");
const inputRange = document.querySelector(".rollback input[type=range]");
const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const totalFullCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];
const screen = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  asking: function () {
    do {
      appData.title = prompt("Как называется ваш проект?", "Калькулятор");
    } while (appData.isNumber(appData.title) || appData.title === '');

    for (let i = 0; i < 2; i++) {
      let price = 0
      let name;

      do {
        name = prompt(
          "Какие типы экранов нужно разработать?",
          "Простые, Сложные, Интерактивные"
        );
      } while (appData.isNumber(name) || name === '');

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price })
    }

    for (let i = 0; i < 2; i++) {
      let price = 0;
      let name;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isNumber(name) || name === '');
              
      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      
      appData.services[name + [i]] = +price
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function() {
    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + +item.price;
    }, 0)

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
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

  getFullPrice: function (screenPrice, allServicePrices) {
    appData.fullPrice = parseInt(screenPrice) + parseInt(allServicePrices);
  },

  getTitle: function (title) {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  }, 

  logger: function () {
    for (this.item in appData) {
      console.log(this.item);
    }
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice(
      appData.screenPrice,
      appData.allServicePrices
    );
    appData.getServicePercentPrices(
      appData.fullPrice,
      appData.servicePercentPrice
    );
    appData.logger();
  }
};

appData.start()


