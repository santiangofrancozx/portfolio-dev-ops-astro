import { Modal } from 'flowbite';

// Selecciona el elemento modal por su ID
const $modalTrigger = document.getElementById('1trigger');
const $modalTrigger2 = document.getElementById('2trigger');
const $modalTrigger3 = document.getElementById('3trigger');

const $modalEl = document.getElementById('1');
const $modalEl2 = document.getElementById('2');
const $modalEl3 = document.getElementById('3');

// Opciones del modal
const options = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
    onHide: () => console.log('Modal is hidden'),
    onShow: () => console.log('Modal is shown'),
    onToggle: () => console.log('Modal has been toggled'),
};

// Inicializa el modal
const modal = new Modal($modalEl, options);

// Escucha el clic en el <a> trigger y muestra el modal
$modalTrigger.addEventListener('click', (e) => {
    modal.show();
});

document.addEventListener('escape', (e) => {
    if (modal.isVisible()) {
        modal.hide();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.js-hide-modal')) {
        modal.hide();
    }
});

// Inicializa el modal
const modal2 = new Modal($modalEl2, options);

// Escucha el clic en el <a> trigger y muestra el modal
$modalTrigger2.addEventListener('click', (e) => {
    modal2.show();
});

document.addEventListener('escape', (e) => {
    if (modal2.isVisible()) {
        modal2.hide();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.js-hide-modal')) {
        modal2.hide();
    }
});

// Inicializa el modal
const modal3 = new Modal($modalEl3, options);

// Escucha el clic en el <a> trigger y muestra el modal
$modalTrigger3.addEventListener('click', (e) => {
    modal3.show();
});

document.addEventListener('escape', (e) => {
    if (modal3.isVisible()) {
        modal3.hide();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.js-hide-modal')) {
        modal3.hide();
    }
});


