async function getPhotographers() {
    let response = await fetch("./data/photographers.json");
      return await response.json();
    }

// Fonction écoute de la touche "Escape" pour fermer les modales
function echapClose(f) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Esc") {
      f(e);
    }
  });
}

// Fonction incrément des Likes (coeurs)
function increment() {
  // Ecoute du "click" sur la galerie (le coeur) et lancement du tri
  gallery.addEventListener("click", function(e) {
    inc(e);
  });
  // Ecoute de la touche "enter" sur la galerie (le coeur) et lancement du tri
  gallery.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
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

