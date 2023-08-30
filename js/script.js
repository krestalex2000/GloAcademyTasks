"use strict"

const body = document.querySelector("body");
const books = document.querySelectorAll(".book");
const adv = document.querySelector(".adv");
const book2ListItems = books[0].querySelectorAll("li");
const book5ListItems = books[5].querySelectorAll("li");
const book6ListItems = books[2].querySelectorAll("li");

books[0].insertAdjacentElement("beforebegin", books[1]);
books[2].insertAdjacentElement("beforebegin", books[4]);
books[5].insertAdjacentElement("afterend", books[2]);

body.style.backgroundImage = "url(../image/you-dont-know-js.jpg)";

books[4].childNodes[1].childNodes[1].textContent = "\n            Книга 3. this и Протопипы Объектов";

adv.style.display = "none";

book2ListItems[10].insertAdjacentElement("beforebegin", book2ListItems[2]);
book2ListItems[3].insertAdjacentElement("afterend", book2ListItems[6]);
book2ListItems[6].insertAdjacentElement("afterend", book2ListItems[8]);

book5ListItems[1].insertAdjacentElement("afterend", book5ListItems[9]);
book5ListItems[4].insertAdjacentElement("afterend", book5ListItems[2]);
book5ListItems[7].insertAdjacentElement("afterend", book5ListItems[5]);

book6ListItems[8].insertAdjacentHTML("afterend", "<li>Глава 8: За пределами ES6</li>");

