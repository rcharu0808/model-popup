'use strict';

// Element selection
let btnShowModal = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');

// Functions

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Events handeling

// 1. btnShowModal = open model
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', showModal);
}

// 2. btnShowModal = close the modal
btnCloseModal.addEventListener('click', hideModal);

// 3. overlay = close the modal
overlay.addEventListener('click', hideModal);

// 4. Esc key = close the modal
// Keypress(character value only) vs keydown(any key)

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('test');
    hideModal();
  }
});

// let person = {
//   name : "varun"
// }

// person.name
