import {window, body} from 'my-global';
export default function (className='disable-hover', interval=200) {
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
    window.on('scroll', pointerEvents);
  }
}
