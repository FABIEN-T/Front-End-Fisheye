// DETECTION DU CLICK SUR LE BOUTON "CONTACTEZ-MOI"
const contact_button = document.querySelector(".contact_button");
contact_button.addEventListener("click", displayModal);

// const main = document.getElementById("main");
const modal = document.getElementById("contact_modal");

//DECLARATION DE VARIABLES NAVIGATION AU CLAVIER
const focusableSelector = "button, input, textarea";
let focusables = [];
// let previouslyFocusElement = null;

// DECLARATION DE LA FONCTION D'OUVERTURE DE LA MODALE
async function displayModal() {
  // e.preventDefault(); 
  document.getElementById("header").setAttribute("aria-hidden", "true"); 
  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("footer").setAttribute("aria-hidden", "true");
  // main.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");

  // CONSTRUCTION DU TABLEAU DES INDEX DE TABULATION
  focusables = Array.from(modal.querySelectorAll(focusableSelector));

  // AFFICHAGE DE LA MODALE
  modal.style.display = "block";
  // modal.removeAttribute("aria-hiden");    
  modal.setAttribute("arial-modal", true);
  

  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");
  // console.log("photographerId", photographerId);

  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
    if (photographerId == element.id) {
        const contactPhotographer = document.querySelector(
          "#contactPhotographer"
        );
        contactPhotographer.innerHTML = "Contactez " + element.name;
        contactPhotographer.setAttribute("arialabel", "contactez " + element.name);
      } 
  });

  // VALIDATION DU FORMULAIRE
  contactValidation();
}

// DECLARATION DE LA FONCTION DE FERMETURE DE LA MODALE

const closeModalCross = document.querySelector(".closeModalCross");
closeModalCross.addEventListener("click", closeModal);

function closeModal() {
  // e.preventDefault();
  modal.style.display = "none";
  modal.setAttribute("aria-hiden", "true");
  modal.removeAttribute("aria-modal");
  document.getElementById("header").setAttribute("aria-hidden", "false"); 
  document.getElementById("main").setAttribute("aria-hidden", "false");
  document.getElementById("footer").setAttribute("aria-hidden", "false");
  // modal.remove.addEventListener("click", closeModal);
  document.getElementById("form").reset(); // Effacement des champs à la fermeture de la Modale
  // Boucle de suppression de la classe error
  const constCloseClass = document.querySelectorAll(".formData");
  const constCloseSpan = document.querySelectorAll(".formData > span");
  for (element of constCloseClass) {
    element.classList.remove("error");
  }
  // Boucle de suppression des messages d'erreurs
  for (element of constCloseSpan) {
    element.textContent = "";
  }
}

const focusInModal = function (e) {
  e.preventDefault();
  let index = focusables.findIndex((f) => f === modal.querySelector(":focus")); //sinon on a 'null is not a fonction'
  if (e.shiftKey) {
    console.log("shift");
    index--;
    console.log("index--", index);
  } else {
    index++;
    console.log("index++", index);
  }
  if (index >= focusables.length) {
    index = 0;
    console.log("index=0", index);
  }
  if (index < 0) {
    index = focusables.length - 1;
    console.log("index-1", index);
  }
  focusables[index].focus();
  console.log("focusables", focusables[index].focus());
};


window.addEventListener("keydown", listenEscape);
function listenEscape(e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal(e);
  }
}

echapClose(closeModal);
// window.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" || e.key === "Esc") {
//     closeModal(e);
//   }
// });


 //     // recoveryName(element.name);
  //     // console.log(element.name);

  //     // function recoveryName(name) {
  //     //   // console.log(name);
  //     //   const contactPhotographer = document.querySelector(
  //     //     "#contactPhotographer"
  //     //   );
  //     //   contactPhotographer.innerHTML = "Contactez " + name;
  //     //   contactPhotographer.setAttribute("arialabel", "contactez " + name);
  //     // }
    // }