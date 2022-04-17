function photographerMediaFactory(dataMedia) {
  dataMedia.forEach((media) => {
    const { id, photographerId, title, image, video, likes, date, price } =
      media;
    // console.log("factory", media);
    if (media.image) {
      getPhotographerGalleryDOM(image);
    } else if (media.video) {
      getPhotographerGalleryDOM(video);
    }

    function getPhotographerGalleryDOM(type) {
      // Déclaration des variables pour la création d'éléments HTML
      const gallery = document.querySelector("#gallery");
      // document.getElementsByClassName;
      const mediaTextContainer = document.createElement("article");
      mediaTextContainer.classList.add("mediaTextContainer");
      const mediaContainer = document.createElement("div");
      mediaContainer.classList.add("mediaContainer");
      // const linkLightbox = document.createElement("a");
      // linkLightbox.classList.add("linkLightbox");
      const textContainer = document.createElement("div");
      textContainer.classList.add("textContainer");
      const h3 = document.createElement("h3");
      const likesHeart = document.createElement("div");
      likesHeart.classList.add("likesHeart");
      const nbLikes = document.createElement("span");
      // nbLikes.classList.add("nbLikes");
      const iconHeart = document.createElement("i");
      // const iconHeartButton = document.createElement("button");
      // iconHeartButton.classList.add("iconHeartButton");

      // Création des attributs et contenus
      // linkLightbox.setAttribute("href", "#");
      // linkLightbox.setAttribute("role", "Image link");
      mediaContainer.setAttribute("tabindex", "80");
      h3.textContent = title;
      h3.setAttribute("aria-label", "title");
      h3.setAttribute("role", "Text");
      h3.setAttribute("tabindex", "80");

      nbLikes.textContent = likes;
      nbLikes.setAttribute("aria-label", "nombre de likes");
      nbLikes.setAttribute("class", "nbLikes unClick");
      nbLikes.setAttribute("tabindex", "80");
      iconHeart.setAttribute("class", "far fa-heart iconHeart");
      iconHeart.setAttribute("aria-label", "likes");
      iconHeart.setAttribute("role", "Image");
      iconHeart.setAttribute("tabindex", "80");
      // document.querySelector(".iconHeart").focus();

      // Création des éléments HTML
      gallery.appendChild(mediaTextContainer);
      mediaTextContainer.appendChild(mediaContainer);
      // mediaTextContainer.appendChild(linkLightbox);
      // linkLightbox.appendChild(mediaContainer);
      mediaTextContainer.appendChild(textContainer);
      textContainer.appendChild(h3);
      textContainer.appendChild(likesHeart);
      likesHeart.appendChild(nbLikes);
      // likesHeart.appendChild(iconHeartButton);
      // iconHeartButton.appendChild(iconHeart);
      likesHeart.appendChild(iconHeart);

      if (type == video) {
        const videoElement = document.createElement("video");
        videoElement.classList.add(likes);
        const movie = `assets/images/${video}`;
        videoElement.setAttribute("src", movie);
        videoElement.setAttribute("id", id);
        videoElement.setAttribute("class", "media movie");
        // videoElement.setAttribute("control", "");
        videoElement.setAttribute("poster", "");
        videoElement.setAttribute("alt", title);
        // videoElement.setAttribute("tabindex", "80");
        mediaContainer.appendChild(videoElement);
      } else {
        const imgElement = document.createElement("img");
        imgElement.classList.add(likes);
        const picture = `assets/images/${image}`;
        imgElement.setAttribute("src", picture);
        imgElement.setAttribute("id", id);
        imgElement.setAttribute("class", "media");
        imgElement.setAttribute("alt", title);
        imgElement.setAttribute("aria-label", "ouverture du diaporama");
        // imgElement.setAttribute("role", "Image link");
        // imgElement.setAttribute("tabindex", "80");
        mediaContainer.appendChild(imgElement);
      }

      // return (gallery);
    }

    return {
      id,
      photographerId,
      title,
      likes,
      date,
      price,
      getPhotographerGalleryDOM,
    };
  });
}
