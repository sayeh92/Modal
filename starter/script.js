'use strict';

const modals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

modals.forEach(item => {
  item.addEventListener('click', show);
});

function show() {
  console.log('tagh tagh + 1');
  modal.style.display = 'block';
  overlay.style.display = 'block';
  close.addEventListener('click', closef);
  overlay.addEventListener('click', closeOut);
  document.addEventListener('keydown', closekey);
}
function closef() {
  console.log('tsgh tasssssgh + 1');
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

function closeOut(Event) {
  if (Event.target === overlay) {
    closef();
  }
}
function closekey(Event) {
  if (Event.key == 'Escape') {
    closef();
  }
}

// WHAT I LEARNED
// I learned that we need to target the html tags (the exact amount) in js in order to use them.
//for example if you need to change something to something probably you need two variables in js in order to manipulate them.
// I learned that adding a css class vs adding a html class is different. i had problem here.the syntax is different
//I learned that event has been deprecated and i should use Event. but the trick here is this we need to use Event as a parameter.
//otherwise only Event does not work like this:
//function closekey(){
// if (Event.key == 'Escape'){closef()}
//}
//
//
//
