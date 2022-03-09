async function displayData(photographer) {
  const photographersHeader = document.querySelector(".photograph-header");
  // console.log("async", photographer);
  const photographerPageModel = photographerPageFactory(photographer);
  const userPhotographerCardDOM = photographerPageModel.getPhotographerPageDOM();
  photographersHeader.appendChild(userPhotographerCardDOM);
}

async function displayDataPhoto(photoVideo) {
  // console.log("async", photoVideo);
  const photographPhotos = document.querySelector(".photograph-photos");
  const photographerPhotoModel = photographerPhotoFactory(photoVideo);
  const userPhotographerPhotoDOM = photographerPhotoModel.getPhotographerPhotoDOM();  
  photographPhotos.appendChild(userPhotographerPhotoDOM);
}


async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  // console.log(
  //   "list id",
  //   photographers.map((e) => `${e.id}`)
  // );
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");

  photographers.forEach((element) => {
    if (photographerId == element.id) {
      let photographerData = element;
      displayData(photographerData);
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
      let photoData = element;
      displayDataPhoto(photoData);
    }
  });
}

init();


