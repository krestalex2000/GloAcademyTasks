"use strict"

const title = document.getElementsByTagName("h1")[0];
const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];
const screenBtn = document.querySelector(".screen-btn");
const itemsPercent = document.querySelectorAll(".other-items.percent");
const itemsNumber = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback input[type=range]");
const rangeValue = document.querySelector(".range-value");
const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const totalFullCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 15,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  isButtonDisabled: function () {
    screens = document.querySelectorAll(".screen");
    let selects = [];
    let inputs = [];

    screens.forEach(function (screen) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      selects.push(select);
      inputs.push(input);

      select.addEventListener("change", appData.isButtonDisabled);
      input.addEventListener("input", appData.isButtonDisabled);
    })

    if (selects.every(function (select) {
        return select.selectedIndex !== 0;
      })
      && inputs.every(function (input) {
        return input.value.trim() !== "";
      })) {
        startBtn.diabled = false;
        startBtn.style.opacity = "100%"
      } else {
        startBtn.diabled = true;
        startBtn.style.opacity = "50%";
      }
  },

  init: function () {
    appData.addTitle();
    appData.isButtonDisabled();
    startBtn.addEventListener("click", appData.start);
    screenBtn.addEventListener("click", appData.addScreenBlock);
    inputRange.addEventListener("input", appData.addRollback);
  },

  addTitle: function () {
    document.title = title.textContent
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);

    appData.isButtonDisabled();
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({ 
        id: index, 
        name: selectName, 
        price: +select.value * +input.value,
        count: +input.value 
      });
    })
  },

  addServices: function () {
    itemsPercent.forEach(function(item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    itemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addPrices: function() {
    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + +item.price;
    }, 0)

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    for (let key in appData.screens) {
      appData.screenCount += appData.screens[key].count
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  addRollback: function () {
    appData.rollback = +inputRange.value;
    rangeValue.textContent = inputRange.value + "%"
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.screenCount;
    totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent;
    totalFullCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
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
    appData.addScreens()
    appData.addServices();
    appData.addPrices();
    // appData.logger();
    appData.showResult();
  }
};

appData.init()


