// FACTORIE : CRÉATION LA GALERIE MÉDIAS du PHOGRAPHE SÉLECTIONNÉ

function photographerMediaFactory(dataMedia) {
  // Récupération des datas du deuxième objet de l'objet photographers.json et décomposition
  dataMedia.forEach((media) => {
    const { id, title, image, video, likes } = media;
    // Tri du type de médias (vidéo ou image) pour créer la balise adaptée
    if (media.image) {
      getPhotographerGalleryDOM(image);
    } else if (media.video) {
      getPhotographerGalleryDOM(video);
    }

    // Injection du code HTML dans le DOM en prenant en compte les datas de chaque média
    function getPhotographerGalleryDOM(type) {
      // Déclaration des variables et création d'éléments HTML
      const gallery = document.querySelector("#gallery");
      const mediaTextContainer = document.createElement("article");
      mediaTextContainer.classList.add("mediaTextContainer");
      const mediaContainer = document.createElement("div");
      mediaContainer.classList.add("mediaContainer");
      const textContainer = document.createElement("div");
      textContainer.classList.add("textContainer");
      const h3 = document.createElement("h3");
      const likesHeart = document.createElement("div");
      likesHeart.classList.add("likesHeart");
      const nbLikes = document.createElement("span");
      // nbLikes.classList.add("nbLikes");
      const iconHeart = document.createElement("em");

      // Création des attributs et contenus
      h3.textContent = title;
      h3.setAttribute("aria-label", title);
      h3.setAttribute("role", "Text");
      h3.setAttribute("tabindex", "0");
      nbLikes.textContent = likes;
      nbLikes.setAttribute("aria-label", "nombre de likes");
      nbLikes.setAttribute("class", "nbLikes unClick");
      iconHeart.setAttribute("class", "far fa-heart iconHeart");
      iconHeart.setAttribute("aria-label", likes + " likes cliquable");
      iconHeart.setAttribute("role", "Image");
      iconHeart.setAttribute("tabindex", "0");

      // Création des éléments HTML dans le DOM
      gallery.appendChild(mediaTextContainer);
      mediaTextContainer.appendChild(mediaContainer);
      mediaTextContainer.appendChild(textContainer);
      textContainer.appendChild(h3);
      textContainer.appendChild(likesHeart);
      likesHeart.appendChild(nbLikes);
      likesHeart.appendChild(iconHeart);

      if (type == video) {
        // Création de l'élément vidéo
        const videoElement = document.createElement("video");
        videoElement.classList.add(likes);
        const movie = `assets/images/${video}`;
        videoElement.setAttribute("src", movie);
        videoElement.setAttribute("id", id);
        videoElement.setAttribute("class", "media movie");
        videoElement.setAttribute("poster", "");
        videoElement.setAttribute("alt", title);
        videoElement.setAttribute(
          "aria-label",
          title + " ouvrir la visionneuse"
        );
        videoElement.setAttribute("tabindex", "0");
        mediaContainer.appendChild(videoElement);
      } else {
        // Création de l'élément image
        const imgElement = document.createElement("img");
        imgElement.classList.add(likes);
        const picture = `assets/images/${image}`;
        imgElement.setAttribute("src", picture);
        imgElement.setAttribute("id", id);
        imgElement.setAttribute("class", "media");
        imgElement.setAttribute("alt", title);
        imgElement.setAttribute("aria-label", title + " ouvrir la visionneuse");
        imgElement.setAttribute("tabindex", "0");
        mediaContainer.appendChild(imgElement);
      }
    }
  });
}
