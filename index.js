'use strict';

var body = document.body;
var _window = self || window;
var head = document.head || document.getElementsByTagName('head')[0];

function src (className='disable-hover', interval=200) {
  var pointerEventsTimer;
  function pointerEvents() {
    requestAnimationFrame(() => {
      body.classList.add(className);
      clearTimeout(pointerEventsTimer);
      pointerEventsTimer = setTimeout(() => {
        body.classList.remove(className);
      }, interval);
    });
  }
  if ('pointerEvents' in body.style) {
    _window.on('scroll', pointerEvents);
  }
}

module.exports = src;