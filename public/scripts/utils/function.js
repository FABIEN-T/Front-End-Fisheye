async function getPhotographers() {
  let response = await fetch("./data/photographers.json");
  return await response.json();
}

// Fonction écoute de la touche "Escape" pour fermer les modales
function echapClose(f) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      f(e);
    }
  });
}

// Fonction incrément des Likes (coeurs)
function increment() {
  // Ecoute du "click" sur la galerie (le coeur) et lancement du tri
  gallery.addEventListener("click", function (e) {
    inc(e);
  });
  // Ecoute de la touche "enter" sur la galerie (le coeur) et lancement du tri
  gallery.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      inc(e);
    }
  });

  function inc(e) {
    if (e.target.className.includes("iconHeart")) {
      // let nbLikes = e.target.parentNode.previousSibling;
      let nbLikes = e.target.previousSibling;
      //let plus = event.target.closest('.nbLikes');
      if (nbLikes.classList.contains("unClick")) {
        nbLikes.classList.replace("unClick", "click");
        nbLikes.innerHTML++;
        e.target.setAttribute("class", "fas fa-heart iconHeart");
      } else {
        nbLikes.classList.replace("click", "unClick");
        nbLikes.innerHTML--;
        e.target.setAttribute("class", "far fa-heart iconHeart");
      }
      informationFooter();
    }
  }
}

// Recherche de l'index "Tab"
function focusModals(e, focusables) {
  // const lightboxModal = document.getElementById("lightboxModal");
  e.preventDefault();
  // console.log("focusables[index]3", focusables[2]);
  // console.log("focusModals focusables", focusables);
  // console.log(document.hasFocus());
  let index = focusables.findIndex(
    (searchFocus) => searchFocus === document.querySelector(":focus")
  ); //sinon on a 'null is not a fonction'
  // console.log(focusables);
  // let index = focusables.indexOf(focusables);
  
  console.log("index", focusables.length, index);         
  if (e.shiftKey) {
    // console.log("shift");
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
    console.log("index<0", index);
  }
  focusables[index].focus();
};
