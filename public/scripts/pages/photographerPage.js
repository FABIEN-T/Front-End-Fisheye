async function initPhotographer() {
  // Récupère l'ID dans l'URL
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");

  // Récupère les datas et les medias des photographes
  const { photographers, media } = await getPhotographers();

  // Récupère les medias des photographes
  photographers.forEach((element) => {
    if (photographerId == element.id) {
      photographerPageFactory(element);
    }
  });

  // Récupère les datas des médias pour le photographe sélectionné
  media.forEach((element) => {
    
    if (photographerId == element.photographerId) {
      let type = "";
      // Détection du type de médias : image ou vidéo
      if (element.video) {
        type = "video";
      }
      if (element.image) {
        type = "image";
      }
      // type mis en paramètre dans la fonction
      photographerMediaFactory(element, type);
    }
  });

  // Ecoute du clic sur un média pour lancer la galerie
  


    
    }
// }

initPhotographer();






// console.log(
//   "list id",
//   photographers.map((e) => `${e.id}`)
// );
