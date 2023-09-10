'use strict'

const DomElement = function(selector, height, width, bg, fontSize, text, style) {
  this.selector = selector,
  this.height = height,
  this.width = width,
  this.bg = bg,
  this.fontSize = fontSize,
  this.text = text,

  this.elementCreated = function() {

    const elementStyles = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; ${style}`
   
    if(this.selector[0] === '.') {
      const div = document.createElement('div');
      div.classList.add((this.selector.slice(1)));
      div.textContent = this.text;
      div.style.cssText = elementStyles;

      return div
    }

    if(this.selector[0] === '#') {
      const p = document.createElement('p');
      p.id = this.selector.slice(1);
      p.textContent = this.text;
      p.style.cssText = elementStyles;

      return p
    }
  }
}

const moveElement = (event) => {

  const elem = squareElement.getBoundingClientRect();
  let x = elem.x;
  let y = elem.y;


  if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

  if (event.code == "ArrowRight") x += 10;
  if (event.code == "ArrowLeft") x -= 10; 
  if (event.code == "ArrowUp") y -= 10;   
  if (event.code == "ArrowDown") y += 10;

  squareElement.style.left = x + 'px';
  squareElement.style.top = y + 'px';
}


const newElement = new DomElement('#paragraph', 50, 400, 'yellow', 36, 'Hello World');
const square = new DomElement('.square', 100, 100, 'red', '', '', 'position: absolute');
const squareElement = square.elementCreated();

document.addEventListener('DOMContentLoaded', () => {
  document.body.prepend(squareElement);
  document.addEventListener('keydown', moveElement)
})

