// const closeLightboxCross = document.querySelector(".closeLightboxCross");
// console.log(closeLightboxCross);
// closeLightboxCross.addEventListener("click", closeLightModal());

// async function displayLightbox(e) {
//   // const recoveryId = e;
//   // console.log("target img", e.target.id);
//   const lightbox = document.getElementById("lightbox");
//   lightbox.style.display = "block";
//   lightboxFactory(e.target);
// }

// function closeLightbox() {
//   const lightbox = document.querySelector("#lightbox");
//   lightbox.style.display = "none";
//   // const boxMediaTextContainer = document.getElementsByClassName("boxMediaTextContainer");
//   // console.log(lightbox, boxMediaTextContainer);
//   // lightbox.removeChild(lightbox.children[1]);
//   while(lightbox.children[1]) {
//     lightbox.removeChild(lightbox.children[1]);
//   }
// }
// Déclaration de variables
// const showMedia = document.createElement("div");

// Création de l'élément qui va recevoir l'élément média
// showMedia.classList.add("showMedia");
// document.querySelector("#lightboxModal").appendChild(showMedia);

// Ecoute du clic sur la croix de fermeture de la modale
// const closeLightboxCross = document.querySelector(".closeLightboxCross");
// console.log("closeLightboxCross", closeLightboxCross);
// closeLightboxCross.addEventListener("click", closeLightModal());
// console.log("closeLightboxCross", closeLightboxCross.addEventListener("click", closeLightModal()));

// Fonction ouverture de la Modale
function openLightboxModal() {
  // console.log("openModal");
  document.getElementById("lightboxModal").style.display = "block";
  // document.getElementById("main").style.display = "none";
}

// Fonction fermeture de la Modale
// const tableauMedias = Array.from(document.getElementsByClassName("media"));
// console.log("1", document.getElementsByClassName("media"));
function closeLightModal() {
  document.getElementById("lightboxModal").style.display = "none";
  const movieRemove = document.querySelectorAll(".movie");
  movieRemove.forEach((e) => {
    document.querySelector(".movie").removeAttribute("controls", "");
  });
  // console.log("1", document.querySelectorAll(".movie"));
}

// Fonction création de la lightbox
function lightbox() {
  // Transformation de la Collection HTML "media" en un tableau
  // (ensemble des div de class "media" dans la gallerie)
  const tableauMedias = Array.from(document.getElementsByClassName("media"));
  // console.log("tab", tableauMedias);
  // console.log("query", Array.from(document.querySelectorAll(".media")));
  // Boucle : pour chaque élément du tableau, écouter le "click"
  // console.log("array", Array.from(document.getElementsByClassName("media")));
  for (let i = 0; i < tableauMedias.length; i++) {
    tableauMedias[i].addEventListener("click", function (e) {
      console.log("Go Lightbox", tableauMedias[i]);
      openLightboxModal(); // Quand un média est cliqué, ouverture de la lightbox
      document.getElementById("lightboxModal").style.display = "block";
      // console.log("mediasLength", tableauMedias.length);
      let index = tableauMedias.indexOf(e.target); // Récupération et mémorisation de l'index du media cliqué
      displaySlides(index); // Exécution de l'affichage du média cliqué avec envoi de l'index associé

      // Ecoute du clic sur les Contrôles "média suivant" et ""media précédent"
      document.querySelector(".prev").addEventListener("click", function () {
        displaySlides((index -= 1)); //précédent : on décrémente
      });
      document.querySelector(".next").addEventListener("click", function () {
        displaySlides((index += 1)); //précédent : on incrémente
      });

      function displaySlides(n) {
        // SI le numéro d'images dans le tableau est supérieur au nombre d'images
        if (n > tableauMedias.length - 1) {
          // ALORS revenir à la 1ère image (index 0)
          index = 0;
          // console.log("début", index);
        }
        // SI le numéro d'images dans le tableau est inférieur à 0
        if (n < 0) {
          // ALORS aller à la dernière image du tableau
          index = tableauMedias.length - 1;
          // console.log("fin", index);
        }
        // création de l'élément média dont l'index
        // console.log("display index", index);
        // console.log("display tableauMedias", tableauMedias[index]);
        if (tableauMedias[index].outerHTML.includes("video")) {
          tableauMedias[index].setAttribute("controls", "");
        }
        const lightboxMediaContainer = document.querySelector(
          ".lightboxMediaContainer"
        );
        lightboxMediaContainer.innerHTML = tableauMedias[index].outerHTML;

        // console.log("contenu", tableauMedias[index].outerHTML);
        lightboxMediaContainer.innerHTML += '<div class="legend"></div>';
        const legend = document.querySelector(".legend");
        legend.innerHTML = tableauMedias[index].getAttribute("alt");

        // console.log("figcaption", document.querySelector('figcaption'));
        // document.querySelector('figcaption').innerText = 'coucou';
      }
    });
  }
}

// const figure = document.querySelector("figure");
//       figure.innerHTML = tableauMedias[index].outerHTML;
//       figure.innerHTML += '<figcaption>An elephant</figcaption>';
//       const figcaption = document.querySelector("figcaption");
//       figcaption.innerHTML = tableauMedias[index].getAttribute('alt');
