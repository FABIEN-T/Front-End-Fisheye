async function init() {
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

  // Récupère les datas des médias
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
      photographerPhotoFactory(element, type);
    }
  });
  
// Détection du clic sur un media et ouverture de la lightbox 
  const mediaContainer = document.querySelectorAll(".mediaContainer");
  // console.log(mediaContainer);
  
  for(let i = 0;i < mediaContainer.length;i++){
    mediaContainer[i].addEventListener("click", displayLightbox);
    // console.log("itérations", i);
    };
}  

init();





// console.log(
//   "list id",
//   photographers.map((e) => `${e.id}`)
// );

