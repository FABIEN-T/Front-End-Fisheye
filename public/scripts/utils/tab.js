let modal = null;
// const focusableSelector = "button, a, input, textarea";
const focusableSelector = "button, input, textarea";
let focusables = [];
let = previouslyFocusElement = null;

const openModal = function (e) {
    e.preventDefault();
    // modal = document.querySelector(e.target.getAttribute('href'));
    modal = document.getElementById("contact_modal");
    focusables = Array.from(modal.querySelectorAll(focusableSelector));
    // previouslyFocusElement = document.querySelector(':focus'); // mémorise le dernier élément "focusé" de la page où on lancé la modale
    // focusables[0].focus();
    modal.style.display = null;
    modal.removeAttribute('aria-hiden');
    modal.setAttribute('arial-modal', true);
    // modal.addEventListener('click', closeModal);
    modal.querySelector('.closeModalCross').addEventListener('click', closeModal);
    // modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);
}

const closeModal = function(e) {
    // if (modal === null) return;
    // if (previouslyFocusElement !== null) previouslyFocusElement.focus();
    e.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hiden', 'true');
    modal.removeAttribute('aria-modal');
    modal.remove.addEventListener('click', closeModal);
    // modal.querySelector('.js-modal-close').remove.addEventListener('click'; stopPropagation);
    modal = null;
}

// const stopPropagation = function(e) {
//     e.stopPropagation();
// }

document.querySelector('.contact_button').addEventListener('click', openModal);

const focusInModal = function(e) {
    e.preventDefault();
    let index = focusables.findIndex(f => f===modal.querySelector(':focus')); //sinon on a 'null is not a fonction'
    if (e.shifkey === true) {
        index--
    } else {
        index++
    }
    if (index >= focusables.length){
        index = 0
    }
    if (index < 0) {
        index = focusables.length - 1
    }
    focusables[index].focus()
}
// css, '*:focus {box-shadow: 0 0 10px blue}

window.addEventListener(' keydown ', function(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
        closeModal(e);
    }
    if (e.key === 'Tab' && modal !== null) {
        focusInModal(e);
    }
}
)