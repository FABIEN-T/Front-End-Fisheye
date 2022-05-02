// LIGHTBOX

// DÉCLARATION DES VARIABLES
const lightboxModal = document.getElementById("lightboxModal");
const viewContainer = document.querySelector(".viewContainer");
const legendContainer = document.querySelector(".legendContainer");

// FERMETURE DE LA LIGHTBOX : Ecoute de la touche "Echap"
echapClose(closeLightbox);

// FERMETURE DE LA LIGHTBOX : Ecoute du "click" sur la croix de la lightbox
const crossCloseLightbox = document.querySelector(".crossCloseLightbox");
crossCloseLightbox.addEventListener("click", closeLightbox);

// Déclaration de la Fonction ouverture de la lightbox
function openLightboxModal() {
  lightboxModal.style.display = "block";
  document.getElementById("header").style.display = "none"; // Les attributs Aria ne sont plus lisibles
  document.getElementById("main").style.display = "none"; // Les attributs Aria ne sont plus lisibles
  document.getElementById("footer").style.display = "none"; // Les attributs Aria ne sont plus lisibles
  lightboxModal.setAttribute("aria-hidden", false); // Les attributs Aria de la lightbox sont lisibles
}

// Déclaration de la Fonction Fermeture de la lightbox
function closeLightbox() {
  lightboxModal.blur(); // On enlève le focus de la lightbox
  lightboxModal.style.display = "none";
  document.getElementById("header").style.display = "block"; // On affiche à nouveau la page photographers
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";
  lightboxModal.setAttribute("aria-hidden", true); // Les attributs Aria de la lightbox ne sont plus lisibles
  const movieRemove = document.querySelectorAll(".movie");
  // Pour toutes les vidéos, les éléments de contrôle sont retirés et mises en pause
  movieRemove.forEach(() => {
    document.querySelector(".movie").removeAttribute("controls", "");
    document.querySelector(".movie").pause();
    document.querySelector(".movie").currentTime = 0;
  });
}

// Fonction création de la lightbox et sa navigation
function lightbox() {
  // Transformation de la Collection HTML "media" de la galerie en un tableau
  // (ensemble des div de class "media" dans la galerie)
  const tableauMedias = Array.from(document.getElementsByClassName("media"));
  // Boucle : pour chaque élément du tableau, écouter le "click"
  for (let i = 0; i < tableauMedias.length; i++) {
    tableauMedias[i].addEventListener("click", function (e) {
      let index = tableauMedias.indexOf(e.target); // Récupération et mémorisation de l'index du media cliqué
      launchMedia(index);
    });
  }
  // Boucle : pour chaque élément du tableau, écouter le clavier
  for (let i = 0; i < tableauMedias.length; i++) {
    tableauMedias[i].addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        let index = tableauMedias.indexOf(e.target); // Récupération et mémorisation de l'index du media activé
        launchMedia(index); // Lancement de la visionneuse
      }
    });
  }

  // Déclaration de la fonction visionneuse
  async function launchMedia(index) {
    openLightboxModal(); // Quand un média est cliqué, ouverture de la lightbox
    lightboxModal.style.display = "block";
    lightboxModal.focus(); // la lightbox a le focus
    // Exécution de l'affichage du média activé avec envoi de l'index associé
    displaySlides(index);
    // Ecoute du "click" sur les Contrôles "média suivant" et ""media précédent"
    lightboxModal.querySelector(".prev").addEventListener("click", function () {
      displaySlides((index -= 1)); // clic sur précédent : on décrémente (image précédente)
    });
    lightboxModal.querySelector(".next").addEventListener("click", function () {
      displaySlides((index += 1)); // clic sur précédent : on incrémente (image suivante)
    });

    // Ecoute des flèches gauche et droite du clavier
    document.addEventListener("keyup", function (e) {
      // Touche flèche gauche : on décrémente (image précédente)
      if (e.key === "ArrowLeft") {
        displaySlides((index -= 1));
      }
      // Touche flèche droite : on incrémente (image suivante)
      if (e.key === "ArrowRight") {
        displaySlides((index += 1));
      }
    });

    // Ecoute du clavier sur les icônes "média suivant", "media précédent" et la croix de fermeture
    document.addEventListener("keyup", function (e) {
      // Touche Entrée détectée sur la flèche droite : incrémentation (image suivante)
      if (e.key === "Enter" && e.target.className.includes("prev")) {
        displaySlides((index -= 1));
      }
      // Touche Entrée détectée sur la flèche gauche, décrémentation (image suivante)
      if (e.key === "Enter" && e.target.className.includes("next")) {
        displaySlides((index += 1));
      }
      // Touche Entrée détectée sur la croix : fermeture de la lightbox
      if (
        e.key === "Enter" &&
        e.target.className.includes("crossCloseLightbox")
      ) {
        tableauMedias[index].focus();
        closeLightbox();
      }
    });

    // Index du Carroussel
    function displaySlides(n) {
      // SI le numéro d'images dans le tableau est supérieur au nombre d'images
      if (n > tableauMedias.length - 1) {
        // ALORS revenir à la 1ère image (index 0)
        index = 0;
      }
      // SI le numéro d'images dans le tableau est inférieur à 0
      if (n < 0) {
        // ALORS aller à la dernière image du tableau
        index = tableauMedias.length - 1;
      }
      // Si l'élément média est une vidéo alors ajouter l'attribut de contrôles de la vidéo
      if (tableauMedias[index].outerHTML.includes("video")) {
        tableauMedias[index].setAttribute("controls", "");
      }

      // Création des eléments du DOM de la lightbox
      const titreMedia = tableauMedias[index].getAttribute("alt");
      tableauMedias[index].setAttribute("tabindex", "0");
      tableauMedias[index].setAttribute("aria-label", titreMedia);
      viewContainer.innerHTML = tableauMedias[index].outerHTML;
      legendContainer.innerHTML = '<h1 class="legend"></h1>';
      const legend = document.querySelector(".legend");
      legend.innerHTML = tableauMedias[index].getAttribute("alt");
      legend.setAttribute("tabindex", "0");
    }
  }
}
