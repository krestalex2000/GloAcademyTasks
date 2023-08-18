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