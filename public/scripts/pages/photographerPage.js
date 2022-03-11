// async function displayData(photographer) {
//   // const photographersHeader = document.querySelector(".photographHeader");
//   // console.log("async", photographer);
//   const photographerPageModel = photographerPageFactory(photographer);
//   const userPhotographerCardDOM = photographerPageModel.getPhotographerPageDOM();
//   // photographersHeader.appendChild(userPhotographerCardDOM);
// }

// async function displayDataPhoto(media) {
//   // console.log("async", photoVideo);
//   const photographPhotos = document.querySelector(".photograph-photos");
//   const photographerPhotoModel = photographerPhotoFactory(media);
//   const userPhotographerPhotoDOM = photographerPhotoModel.getPhotographerPhotoDOM();  
//   photographPhotos.appendChild(userPhotographerPhotoDOM);
// }


async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");

  photographers.forEach((element) => {
    if (photographerId == element.id) {
      let photographerData = element;
      // displayData(photographerData);
      const photographerPageModel = photographerPageFactory(photographerData);
      photographerPageModel.getPhotographerPageDOM();

    }
  });

  // Récupère les datas des médias
  const { media } = await getPhotographers();
  media.forEach((element) => {
    if (photographerId == element.photographerId) {      
      // console.log("photographerId", element.photographerId);
      // console.log("ID", element.id);
      // // console.log("title", element.title);
      // if (element.image) {
      //   console.log("JPG", element.image);
      // }
      // else {
      //   console.log("MP4", element.video);
      // } 
      let type = "";
      if (element.video) {
        type = "video";       
      } 
      if (element.image) {
        type = "image";
      }
      photographerPhotoFactory(element, type);  
    }
  });
}

init();



  // console.log(
  //   "list id",
  //   photographers.map((e) => `${e.id}`)
  // );