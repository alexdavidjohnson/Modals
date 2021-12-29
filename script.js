'use strict';

// Declare your variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Create a function to have the modal open
const openModal = function () {
  modal.classList.remove('hidden'); // Remove the hidden class on the modal
  overlay.classList.remove('hidden'); // remove the hidden class on the overlay
};

// Create a function to have the modal hide/close
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Create a for loop that applies the same click function to all of the buttons
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// When we click on the close button and overlay we will run the close modal function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Listen for the escape key press
// NOTE Longer way
// document.addEventListener('keydown', function (event) {
//   //   console.log(event.key);
//   if (event.key === 'Escape') {
//     // If the modal does not contain the class hidden then run the close modal fucntion
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }
// });

// Listen for the escape key press
// NOTE Shorter way
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
