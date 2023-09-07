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
  rollback: 0,
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

      select.addEventListener("change", appData.isButtonDisabled.bind(appData));
      input.addEventListener("input", appData.isButtonDisabled.bind(appData));
    })

    if (selects.every(function (select) {
        return select.selectedIndex !== 0;
      })
      && inputs.every(function (input) {
        return input.value.trim() !== "";
      })) {
        startBtn.disabled = false;
        startBtn.style.opacity = "100%"
      } else {
        startBtn.disabled = true;
        startBtn.style.opacity = "50%";
      }
  },

  init: function () {
    this.addTitle();
    this.isButtonDisabled();
    startBtn.addEventListener("click", appData.start);
    startBtn.addEventListener("click", appData.disabledInputs);
    startBtn.addEventListener("click", appData.replaceBtn);
    resetBtn.addEventListener("click", appData.reset);
    resetBtn.addEventListener("click", appData.disabledInputs);
    resetBtn.addEventListener("click", appData.replaceBtn);
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
    this.screenPrice = this.screens.reduce(function (sum, item) {
      return sum + +item.price;
    }, 0)

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    for (let key in this.screens) {
      this.screenCount += this.screens[key].count
    }

    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice = this.fullPrice - this.fullPrice * (this.rollback / 100);
  },

  addRollback: function () {
    appData.rollback = +inputRange.value;
    rangeValue.textContent = inputRange.value + "%"
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.screenCount;
    totalCountOther.value = this.servicePricesNumber + this.servicePricesPercent;
    totalFullCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  logger: function () {
    for (this.item in this) {
      console.log(this.item);
    }
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  },

  disabledInputs: function () {
    document.querySelectorAll(".screen input[type=text]").forEach(input => {
      input.disabled = !input.disabled;
    })

    document.querySelectorAll("select").forEach(select => {
      select.disabled = !select.disabled;
    })
  },

  replaceBtn: function (e) {
    e.target.style.display = "none";
  
    if(e.target.nextElementSibling) {
      e.target.nextElementSibling.style.display = "block"
    } else {
      e.target.previousElementSibling.style.display = "block"
    }
  },

  reset: function () {
    document.querySelectorAll("select").forEach((item, index) => {
      item.value = "";
      if (index > 0) {
        item.parentElement.parentElement.remove();
      }
    });
    document.querySelectorAll(".screen [type=text]").forEach((item, index) => {
      item.value = "";
      if (index > 0) {
        item.parentElement.parentElement.remove();
      }
    });
    document.querySelectorAll("input[type=checkbox]").forEach(item => {
      item.checked = false;
    });

    appData.fullPrice = 0;
    appData.rollback = 0;
    appData.screenCount = 0;
    appData.screenPrice = 0;
    appData.screens = [];
    appData.servicePercentPrice = 0;
    appData.servicePricesNumber = 0;
    appData.servicePricesPercent = 0;
    appData.servicesNumber = {};
    appData.servicesPercent = {};

    inputRange.value = 0;
    rangeValue.textContent = inputRange.value + "%";

    document.querySelectorAll(".main-total__item input[type=text]").forEach(item => item.value = 0);
    appData.isButtonDisabled();
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


