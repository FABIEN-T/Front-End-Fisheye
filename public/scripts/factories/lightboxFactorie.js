function lightboxFactory() {
  async function initLightbox() {
    // Récupère l'ID dans l'URL
    let params = new URL(document.location).searchParams;
    let photographerId = params.get("id");

    // Récupère les datas et les medias des photographes
    const { media } = await getPhotographers();
    
    // Récupère les datas des médias pour le photographe sélectionné
    media.forEach((element) => {
      
      if (photographerId == element.photographerId) {
        console.log("element.id", element.id);
        // let type = "";
        // Détection du type de médias : image ou vidéo
        if (element.video) {
          // type = "video";
          // console.log("Video Element.id", element.id);
          // console.log(element.video);
          getLightboxVideoDOM(element);
        }
        if (element.image) {
          // console.log("Photo Element.id", element.id);
          // console.log(element.image);
          getLightboxPhotoDOM(element);
        }
        // type mis en paramètre dans la fonction
        // recoveryData(element, type);
      }
    });
  }
  initLightbox();

  function getLightboxVideoDOM(element) {
    const { id, title, video, date } = element;
    // Déclaration des variables pour la création d'éléments HTML
    // console.log("countVideo");
    const lightbox = document.querySelector("#lightbox");
    const boxMediaTextContainer = document.createElement("div");
    boxMediaTextContainer.classList.add("boxMediaTextContainer");
    const boxMediaContainer = document.createElement("div");
    boxMediaContainer.classList.add("boxMediaContainer");
    const videoElement = document.createElement("video");
    const boxTitleContainer = document.createElement("div");
    boxTitleContainer.classList.add("boxTitleContainer");
    const h2 = document.createElement("h2");

    // Création des attributs
    const movie = `assets/images/${video}`;
    videoElement.setAttribute("src", movie);
    videoElement.setAttribute("control", "");
    videoElement.setAttribute("poster", "");
    videoElement.setAttribute("alt", title);

    h2.textContent = title;
    h2.setAttribute("arialabel", "title");

    // Création des éléments HTML
    lightbox.appendChild(boxMediaTextContainer);
    boxMediaTextContainer.appendChild(boxMediaContainer);
    boxMediaContainer.appendChild(videoElement);
    boxMediaTextContainer.appendChild(boxTitleContainer);
    boxTitleContainer.appendChild(h2);
    // return (photographMedia);
  }

  function getLightboxPhotoDOM(element) {
    const { id, title, image, date } = element;
    // console.log("countPhoto");
    // Déclaration des variables pour la création d'éléments HTML
    const lightbox = document.querySelector(".photographMedia");
    const boxMediaTextContainer = document.createElement("div");
    boxMediaTextContainer.classList.add("boxMediaTextContainer");
    const boxMediaContainer = document.createElement("div");
    boxMediaContainer.classList.add("boxMediaContainer");
    const imgElement = document.createElement("img");
    const boxTitleContainer = document.createElement("div");
    boxTitleContainer.classList.add("boxTitleContainer");
    const h2 = document.createElement("h2");

    // Création des attributs
    const picture = `assets/images/${image}`;
    imgElement.setAttribute("src", picture);
    imgElement.setAttribute("alt", title);

    h2.textContent = title;
    h2.setAttribute("arialabel", "title");

    // Création des éléments HTML
    lightbox.appendChild(boxMediaTextContainer);
    boxMediaTextContainer.appendChild(boxMediaContainer);
    boxMediaContainer.appendChild(imgElement);
    boxMediaTextContainer.appendChild(boxTitleContainer);
    boxTitleContainer.appendChild(h2);

    // return (photographMedia);
  }

  return {
    // id,
    // photographerId,
    // title,
    // date,
    getLightboxVideoDOM,
    getLightboxPhotoDOM,
  };
}
