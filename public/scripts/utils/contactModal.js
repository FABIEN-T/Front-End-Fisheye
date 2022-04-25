// DETECTION DU CLICK SUR LE BOUTON "CONTACTEZ-MOI"
const contactButton = document.querySelector(".contactButton");
contactButton.addEventListener("click", displayModal);

// const main = document.getElementById("main");
const modal = document.getElementById("contact_modal");

//DECLARATION DE VARIABLES NAVIGATION AU CLAVIER
const focusableSelectorModal = "h1, button, input, textarea, .crossCloseModal";
let focusablesModal = [];
// let previouslyFocusElement = null;


// DECLARATION DE LA FONCTION D'OUVERTURE DE LA MODALE
async function displayModal() {
  // e.preventDefault();
  document.getElementById("header").setAttribute("aria-hidden", "true");
  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("footer").setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");

  // CONSTRUCTION DU TABLEAU DES INDEX DE TABULATION
  focusablesModal = Array.from(modal.querySelectorAll(focusableSelectorModal));
  // console.log("focusablesModal", focusablesModal);
  // previouslyFocusElement  = document.querySelectorAll(':focus');
  // console.log("previouslyFocusElement", previouslyFocusElement);
  
  // AFFICHAGE DE LA MODALE
  modal.style.display = "block";
  // modal.removeAttribute("aria-hiden");   
  modal.setAttribute("arial-modal", true);   
  // document.querySelector(".contactButton").blur(); 
  modal.querySelector("#headerModal").focus();  
  
      // Récupération de l'Id Photographer dans l'URL pour récupérer le nom du photographe dans la Modale
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");
  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
    if (photographerId == element.id) {
      const contactPhotographer = document.querySelector(
        "#contactPhotographerH1"
      );
      contactPhotographer.innerHTML = "Contactez " + element.name;
      contactPhotographer.setAttribute(
        "arialabel",
        "contactez " + element.name
      );
    }
  });

  // VALIDATION DU FORMULAIRE
  contactValidation();
}

// FERMETURE DE LA MODALE : Ecoute du "click" sur la croix de la modale
const crossCloseModal = document.querySelector(".crossCloseModal");
crossCloseModal.addEventListener("click", closeModal);

// FERMETURE DE LA MODALE : Ecoute de la touche "Enter" sur la croix de la modale
modal.addEventListener("keyup", function(e) {
  console.log("e.target", e.target);
  // console.log(e.target);
  // console.log(e.target.className.includes("buttonCross"));
  if (e.key === "Enter" && e.target.className.includes("crossCloseModal")) {
    closeModal();
  }
});

// FERMETURE DE LA MODALE : Ecoute de la touche "Echap" et lancement la fonction de fermeture de la modale
echapClose(closeModal);

// DECLARATION DE LA FONCTION DE FERMETURE DE LA MODALE
function closeModal() {
  // modal.blur(); 
  modal.style.display = "none";
  modal.setAttribute("aria-hiden", "true");
  modal.removeAttribute("aria-modal");
  document.removeEventListener("keydown", function(){});
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
   
  document.querySelector(".contactButton").focus();  
    // console.log("previouslyFocusElement", previouslyFocusElement);
    // previouslyFocusElement.focus();
}

// document.getElementById("contact_modal").addEventListener("keydown", function (e) {
//   if (e.key === "Tab" && modal.style.display === "block") {
//     console.log("Coucou", e);
//   }
// });   


function focusInModal() {
  // Ecoute de la touche "tab" au clavier
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" && modal.style.display === "block") {
      // console.log("hugh", e);
      focusModals(e, focusablesModal);
    }
  });   
}     

focusInModal(); 
