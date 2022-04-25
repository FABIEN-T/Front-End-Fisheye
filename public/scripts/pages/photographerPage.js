async function initPhotographer() {
  // Récupère l'ID dans l'URL
  let params = new URL(document.location).searchParams;
  let photographerIdUrl = params.get("id");

  // Récupère les datas et les medias des photographes
  const { photographers, media } = await getPhotographers();
  // Récupère les datas et les medias DU photographe choisi
  const thisMedias = [];
  const thisPhotographer = [];

  // Récupère les medias des photographes
  function getThisPhotographer() {
    photographers.forEach((element) => {
      if (photographerIdUrl == element.id) {
        thisPhotographer.push(element);
      }
    });
  }

  // Récupère les datas des médias pour le photographe sélectionné
  function getThisMedias() {
    media.forEach((element) => {
      if (photographerIdUrl == element.photographerId) {
        thisMedias.push(element);
      }
    });
  }
  
// TRI
  function sort() {
    // let select = document.querySelector('#sortingSelect');
    // let value = document.getElementById("sortingSelect").value;
    // document.getElementById("demo").innerHTML = "You selected: " + x;

    let select = document.getElementById("sortingSelect");
    let value = "popularity";
    typeSort(value);

    select.addEventListener("change", function (e) {
      // console.log("e.target.value", e.target.value);
      // typeSort(this.value);
      typeSort(e.target.value);
      // console.log("type de tri", e.target.value);
    });

    function typeSort(value) {
      // console.log("typeSort", value);
      if (value === "popularity") {
        thisMedias.sort((a, b) => {
          // console.log("a b", a, b);
          return a.likes > b.likes ? -1 : 1;
        });
        // console.log("tm popularity", thisMedias);
      }
      if (value === "date") {
        thisMedias.sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        });
        console.log("tm date", thisMedias);
      }
      // console.log("2", value);
      if (value === "title") {
        thisMedias.sort((a, b) => {
          return a.title < b.title ? -1 : 1;
        });
        console.log("tm title", thisMedias);
      }
      // console.log("s1", value);
      // console.log("1", value)

      let htmlMedias = Array.from(document.querySelector("#gallery").children);
      htmlMedias.forEach((media) => {
        media.remove();
      });
      // console.log("thisMedias", thisMedias);
      photographerMediaFactory(thisMedias);
      lightbox();
      // focusInLightbox();
      
    }
  }

  /*Appel des fonctions*/
  getThisPhotographer();
  getThisMedias();
  photographerPageFactory(thisPhotographer);
  sort();  
  increment();  
  
  // lightbox();
}

initPhotographer();
// console.log("lightboxModal", lightboxModal);
// focusInLightbox();

// function focusInLightbox() {
//   const focusableSelectorLightboxModal = "h1, i, button, .media";
//   let focusablesLightBox = [];  
//   focusablesLightBox = Array.from(
//     lightboxModal.querySelectorAll(focusableSelectorLightboxModal)
//   );
//   console.log("focusablesLightBox", focusablesLightBox);
//   // Ecoute de la touche "tab" au clavier
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "Tab" && lightboxModal.style.display === "block") {
//       focusModals(e, focusablesLightBox);
//     }
//   });
// }