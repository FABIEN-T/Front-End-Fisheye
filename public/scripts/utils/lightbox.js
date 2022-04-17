// Fonction ouverture de la Modale
function openLightboxModal() {
  document.getElementById("lightboxModal").style.display = "block";
  document.getElementById("main").style.display = "none";
}

// Fonction fermeture de la Modale
echapClose(closeLightModal);

function closeLightModal() {
  document.getElementById("lightboxModal").style.display = "none";
  document.getElementById("main").style.display = "block";
  const movieRemove = document.querySelectorAll(".movie");
  movieRemove.forEach((e) => {
    document.querySelector(".movie").removeAttribute("controls", "");
  });  
}

// Fonction création de la lightbox et sa navigation
function lightbox() {
  // Transformation de la Collection HTML "media" en un tableau
  // (ensemble des div de class "media" dans la gallerie)
  const tableauMedias = Array.from(document.getElementsByClassName("media"));
  const tableauMediaContainer = Array.from(document.getElementsByClassName("mediaContainer"));
  // Boucle : pour chaque élément du tableau, écouter le "click"
  for (let i = 0; i < tableauMedias.length; i++) {
    tableauMedias[i].addEventListener("click", function (e) {   
      console.log("click e", e);
      let index = tableauMedias.indexOf(e.target); // Récupération et mémorisation de l'index du media cliqué
      launchLightbox(index);
      
    });
  }
  
  for (let i = 0; i < tableauMediaContainer.length; i++) {
    tableauMediaContainer[i].addEventListener("keydown", function(e) {
      console.log("Pré", e);
      if (e.key === "Enter") {
        e.preventDefault();
        let index = tableauMediaContainer.indexOf(e.target); // Récupération et mémorisation de l'index du media cliqué
        // console.log("key e Child", e.target.firstElementChild);
        console.log("key e", index);
        launchLightbox(index);
    }
  });
  }

  
  function launchLightbox(index) {
    openLightboxModal(); // Quand un média est cliqué, ouverture de la lightbox
    console.log("click fctn", index);
    document.getElementById("lightboxModal").style.display = "block";  
    console.log("index", index);
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
    }
  }
}
