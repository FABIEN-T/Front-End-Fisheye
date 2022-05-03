// MENU DE TRI DES MEDIAS
// ÉCOUTE DES ÉVÉNEMENTS SOURIS ET CLAVIER
// ET GESTION DE L'AFFICHAGE DU MENU ET DE LA FLÈCHE

// Déclaration de Variables
const dropDown = document.querySelector(".dropDown");
const headerDropdown = document.querySelector(".headerDropdown");
// const item = document.querySelector(".item");
const arrow = document.querySelector(".arrow");
let focusablesItem = [];
focusablesItem = Array.from(dropDown.querySelectorAll("li"));


// Déclaration de la fonction d'ouverture du menu
function openDropdown() {
  dropDown.style.display = "block";
    arrow.setAttribute("class", "fas fa-chevron-up arrow");
    headerDropdown.setAttribute("aria-expanded", "true");
}

// Déclaration de la fonction de fermeture du menu
function closeDropdown() {
  dropDown.style.display = "none";
  arrow.setAttribute("class", "fas fa-chevron-down arrow");
  headerDropdown.setAttribute("aria-expanded", "false");
}

// CLAVIER : OUVERTURE du menu de tri
headerDropdown.addEventListener("keyup", function (e) {
  // console.log(e.key);
  if (e.key === "Enter") {
    openDropdown();
  }
});

// NAVIGATION AU CLAVIER : tabulation ne circulant que dans le menu
dropDown.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    focusLoop(e, focusablesItem);
  }
  // Quand un type de tri est sélectionné : FERMETURE du menu de tri
  if (e.key === "Enter") {
    closeDropdown();
    // headerDropdown.focus(); 
  }
});

// CLAVIER : FERMETURE du menu de tri
document.querySelector(".select").addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "esc") {    
    closeDropdown();
  }
});

// SOURIS : OUVERTURE du menu de tri
headerDropdown.addEventListener("mousedown", () => {
  openDropdown();
});

// SOURIS : FERMETURE du menu de tri QUAND un type de tri est sélectionné 
dropDown.addEventListener("mousedown", () => {
  closeDropdown();
});

// SOURIS : FERMETURE du menu de tri QUAND un clic est extérieur au menu
document.addEventListener("click", (e) => {
  console.log();
  if (!document.querySelector(".dropDownContainer").contains(e.target)) {
    closeDropdown();
  }
});
