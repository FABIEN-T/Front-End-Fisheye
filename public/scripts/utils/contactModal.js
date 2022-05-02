// DETECTION DU CLICK SUR LE BOUTON "CONTACTEZ-MOI" ET LANCEMENT DE LA MODALE
const contactButton = document.querySelector(".contactButton");
const modal = document.getElementById("contact_modal");
contactButton.addEventListener("click", displayModal);

//DECLARATION DE VARIABLES POUR NAVIGATION AU CLAVIER (enfermer le focus dans la modale)
const focusableSelectorModal = "h1, button, input, textarea, .crossCloseModal";
let focusablesModal = [];

// DECLARATION DE LA FONCTION D'OUVERTURE DE LA MODALE
async function displayModal() {
  document.getElementById("header").setAttribute("aria-hidden", "true");
  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("footer").setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");

  // CONSTRUCTION DU TABLEAU DES INDEX DE TABULATION
  focusablesModal = Array.from(modal.querySelectorAll(focusableSelectorModal));

  // AFFICHAGE DE LA MODALE
  modal.style.display = "block";
  modal.setAttribute("arial-modal", true);
  modal.querySelector("#headerModal").focus();

  // Récupération de l'Id Photographer dans l'URL pour intégrer le nom du photographe dans la Modale
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

  // LANCEMENT DE LA VALIDATION DU FORMULAIRE
  contactValidation();
}

// FERMETURE DE LA MODALE : Ecoute du "click" sur la croix de la modale
const crossCloseModal = document.querySelector(".crossCloseModal");
crossCloseModal.addEventListener("click", closeModal);

// FERMETURE DE LA MODALE : Ecoute de la touche "Enter" sur la croix de la modale
modal.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && e.target.className.includes("crossCloseModal")) {
    closeModal();
  }
});

// FERMETURE DE LA MODALE : Ecoute de la touche "Echap" et lancement la fonction de fermeture de la modale
echapClose(closeModal);

// DECLARATION DE LA FONCTION DE FERMETURE DE LA MODALE
function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hiden", "true");
  modal.removeAttribute("aria-modal");
  document.getElementById("header").setAttribute("aria-hidden", "false");
  document.getElementById("main").setAttribute("aria-hidden", "false");
  document.getElementById("footer").setAttribute("aria-hidden", "false");
  document.getElementById("form").reset(); // Effacement des champs à la fermeture de la Modale

  // Boucle de suppression de la classe error
  const constCloseClass = document.querySelectorAll(".formData");
  for (let element of constCloseClass) {
    element.classList.remove("error");
  }
  document.querySelector(".focusButton").focus();
}

// ÉCOUTE DE LA TOUCHE "TAB" AU CLAVIER ET "ENFERMEMENT" DU FOCUS DANS LA MODALE
function focusInModal() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" && modal.style.display === "block") {
      focusLoop(e, focusablesModal);
    }
  });
}

focusInModal();
