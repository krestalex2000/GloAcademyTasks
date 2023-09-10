'use strict'

const DomElement = function(selector, height, width, bg, fontSize, text) {
  this.selector = selector,
  this.height = height,
  this.width = width,
  this.bg = bg,
  this.fontSize = fontSize,
  this.text = text,

  this.elementCreated = function() {

    const elementStyles = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`
   
    if(this.selector[0] === '.') {
      const div = document.createElement('div');
      div.classList.add((this.selector.slice(1)));
      div.textContent = this.text;
      div.style.cssText = elementStyles;

      document.body.prepend(div)
    }

    if(this.selector[0] === '#') {
      const p = document.createElement('p');
      p.id = this.selector.slice(1);
      p.textContent = this.text;
      p.style.cssText = elementStyles;

      document.body.prepend(p)
    }
  }
}

const newElement = new DomElement('#paragraph', 50, 400, 'yellow', 36, 'Hello World')

