const lightboxModal = document.getElementById("lightboxModal");
const viewContainer = document.querySelector(".viewContainer");
const legendContainer = document.querySelector(".legendContainer");

// FERMETURE DE LA LIGHTBOX : Ecoute de la touche "Echap"
echapClose(closeLightbox);
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" || e.key === "Esc") {
//     closeLightbox();
//   }
// });

// FERMETURE DE LA LIGHTBOX : Ecoute du "click" sur la croix de la lightbox
const crossCloseLightbox = document.querySelector(".crossCloseLightbox");
crossCloseLightbox.addEventListener("click", closeLightbox);


// Fonction ouverture de la lightbox
function openLightboxModal() {
  lightboxModal.style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("footer").style.display = "none";
  lightboxModal.setAttribute("aria-hidden", false);
  // lightboxModal.focus();
}

// Fonction Fermeture de la lightbox
function closeLightbox() {
  lightboxModal.blur();
  lightboxModal.style.display = "none";
  // document.getElementById("lightboxModal").blur();
  document.getElementById("header").style.display = "block";
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";
  lightboxModal.setAttribute("aria-hidden", true);
  const movieRemove = document.querySelectorAll(".movie");
  movieRemove.forEach(() => {
    document.querySelector(".movie").removeAttribute("controls", "");
    
    // document.querySelector(".movie").setAttribute("autoplay", "false");
    // document.querySelector(".movie").pause();
    // document.querySelector(".movie").setAttribute("autoplay.enabled", "false");
  });
}

// Fonction création de la lightbox et sa navigation
function lightbox() {
  // Transformation de la Collection HTML "media" de la galerie en un tableau
  // (ensemble des div de class "media" dans la galerie)
  const tableauMedias = Array.from(document.getElementsByClassName("media"));
  // const tableauMediaContainer = Array.from(document.getElementsByClassName("mediaContainer"));
  // console.log("tab1",tableauMedias);
  // console.log("tab2", tableauMediaContainer.length, tableauMediaContainer);
  // Boucle : pour chaque élément du tableau, écouter le "click"
  for (let i = 0; i < tableauMedias.length; i++) {
    tableauMedias[i].addEventListener("click", function (e) {
      // console.log("click e", e);
      let index = tableauMedias.indexOf(e.target); // Récupération et mémorisation de l'index du media cliqué
      // console.log("click", index, e.target);
      launchMedia(index);
    });
  }
  // Boucle : pour chaque élément du tableau, écouter le clavier
  for (let i = 0; i < tableauMedias.length; i++) {
    tableauMedias[i].addEventListener("keydown", function (e) {
      // console.log("Pré", e);
      if (e.key === "Enter") {
        e.preventDefault();
        let index = tableauMedias.indexOf(e.target); // Récupération et mémorisation de l'index du media cliqué
        console.log("key e", tableauMedias.indexOf(e.target), e.target);
        launchMedia(index);
      }
    });
  }

  async function launchMedia(index) {
    openLightboxModal(); // Quand un média est cliqué, ouverture de la lightbox
    document.getElementById("lightboxModal").style.display = "block";
    document.getElementById("lightboxModal").focus();
    displaySlides(index); // Exécution de l'affichage du média cliqué avec envoi de l'index associé
    // Ecoute du "click" sur les Contrôles "média suivant" et ""media précédent"
    lightboxModal.querySelector(".prev").addEventListener("click", function () {
      displaySlides((index -= 1)); // clic sur précédent : on décrémente (image précédente)
    });
    lightboxModal.querySelector(".next").addEventListener("click", function () {
      displaySlides((index += 1)); // clic sur précédent : on incrémente (image suivante)
    });

    document.addEventListener("keyup", function (e) {
      console.log(e.key, e.code);
      // Touche flèche gauche : on décrémente (image précédente)
      if (e.key === "ArrowLeft") {
        displaySlides((index -= 1)); 
      }
      // Touche flèche droite : on incrémente (image suivante)
      if (e.key === "ArrowRight") {
        displaySlides((index += 1)); 
      }      
    });


    // Ecoute du clavier sur les Contrôles "média suivant" et ""media précédent"
    document.addEventListener("keyup", function (e) {
      // console.log(e.key, e.code);
      // Touche Entrée détectée sur la flèche droite : on incrémente (image suivante)
      if (e.key === "Enter" && e.target.className.includes("prev")) {
        displaySlides((index -= 1));
      }
      // Touche Entrée détectée sur la flèche gauche, on incrémente (image suivante)
      if (e.key === "Enter" && e.target.className.includes("next")) {
        displaySlides((index += 1));
      }
      // console.log("e.target", e.target);
      // Touche Entrée détectée sur la croix, on ferme la lightbox
      if (
        e.key === "Enter" &&
        e.target.className.includes("crossCloseLightbox")
      ) {
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

      // const lightboxMediaContainer = document.querySelector(
      //   ".lightboxMediaContainer"
      // );
      
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
