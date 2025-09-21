'use strict';

// Modal Elements
const modalEl = document.querySelector('.modal');

// Overlay Modal
const overlayEl = document.querySelector('.overlay');

// Close Modal
const btnCloseModalEl = document.querySelector('.close-modal');

// Open Modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

let lastFocusedButton = null;

const openModal = function () {
    // Remove hidden classname in modal
    modalEl.classList.remove('hidden');

    // Remove the hidden keyword classname in overlay
    overlayEl.classList.remove('hidden');

    modalEl.focus();
    lastFocusedButton = document.activeElement;
};


const closeModal = function () {
    modalEl.classList.add('hidden');

    overlayEl.classList.add('hidden');
    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
};

btnsOpenModalEl.forEach(btn => {
    btn.addEventListener('click', openModal);
});
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
        closeModal();
    }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close modal');