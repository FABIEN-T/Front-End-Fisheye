// RÉCUPERATION DU FICHIER photographers.json (base de données)
async function getPhotographers() {
  let response = await fetch("./data/photographers.json");
  return await response.json();
}

// Fonction écoute de la touche "Escape" pour fermer le formulaire de contact et la lightbox
function echapClose(f) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      f(e);
    }
  });
}

// Fonction incrémentation des Likes
function increment() {
  const gallery = document.querySelector("#gallery");
  // Ecoute du "click" sur le coeur d'une card et lancement de l'incrémentation
  gallery.addEventListener("click", function (e) {
    inc(e);
  });
  // Ecoute de la touche "enter" sur le coeur d'une card et lancement de l'incrémentation
  gallery.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      inc(e);
    }
  });

  function inc(e) {
    // Si l'élément activé (souris ou clavier) est l'icône coeur
    if (e.target.className.includes("iconHeart")) {
      let nbLikes = e.target.previousSibling;
      // Si le nombres de likes n'a pas été incrémenté
      if (nbLikes.classList.contains("unClick")) {
        // alors on l'incrémente et on lui donne la classe "click"
        // pour effacer l'incrémentation à la prochaine activation
        nbLikes.classList.replace("unClick", "click");
        nbLikes.innerHTML++;
        // Incrémentation matérialisée par un coeur plein
        e.target.setAttribute("class", "fas fa-heart iconHeart");
      } else {
        // Sinon on décrémente et on lui donne la classe "unClick"
        nbLikes.classList.replace("click", "unClick");
        nbLikes.innerHTML--;
        // Dérémentation matérialisée par un coeur vide
        e.target.setAttribute("class", "far fa-heart iconHeart");
      }
      informationFooter();
    }
  }
}

// Bouclage de la navigation clavier ("Tab") à l'intérieur du formulaire de contact et du menu de tri
function focusLoop(e, focusables) {
  e.preventDefault();
  // L'index est le premier élément qui a le focus dans tableau des éléménts "focusables"
  let index = focusables.findIndex(
    (searchFocus) => searchFocus === document.querySelector(":focus")
  );
  // Si la touche "Shift" est activée alors décrémentation de l'index du tableau
  if (e.shiftKey) {
    index--;
  } else {
    index++; // sinon on l'incrémente
  }
  // Si l'index est supérieur à la longueur du tableau, il revient au début du tableau
  if (index >= focusables.length) {
    index = 0;
  }
  // Si l'index est négatif, il va à la fin du tableau
  if (index < 0) {
    index = focusables.length - 1;
  }
  focusables[index].focus();
}