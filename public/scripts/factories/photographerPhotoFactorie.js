function photographerPhotoFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;
  const picture = `assets/images/${image}`;
  const movie = `assets/images/${video}`;
  //   console.log("MEDIA", data);

  function getPhotographerPhotoDOM() {
    // Déclaration des variables pour la création d'éléments HTML
    const photographPhotos = document.querySelector(".photograph-photos");
    // const article = document.createElement("article");
    const photoTextContainer = document.createElement("div");
    photoTextContainer.classList.add("photoTextContainer");
    const img = document.createElement("img");
    const video = document.createElement("video");
    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photoContainer");
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");
    const h2 = document.createElement("h2");
    const likesHeart = document.createElement("div");
    likesHeart.classList.add("likesHeart");
    const nbLikes = document.createElement("nbLikes");
    nbLikes.classList.add("nbLikes");
    const iconHeart = document.createElement("i");
    // iconHeart.classList.add("iconHeart");

    // Création des attributs
    img.setAttribute("src", picture);
    img.setAttribute("alt", title);
    video.setAttribute("src", movie);
    video.setAttribute("control", "");
    video.setAttribute("poster", "");
    video.setAttribute("alt", title);
    h2.textContent = title;
    h2.setAttribute("arialabel", "title");
    nbLikes.textContent = likes;
    nbLikes.setAttribute("arialabel", "nombre de likes");
    iconHeart.setAttribute("class", "fas fa-heart iconHeart");    
    iconHeart.setAttribute("arialabel", "like");

    // Création des éléments HTML
    // photographPhotos.appendChild(article);
    photographPhotos.appendChild(photoTextContainer);
    // article.appendChild(photoTextContainer);
    photoTextContainer.appendChild(photoContainer);
    photoContainer.appendChild(img);
    photoContainer.appendChild(video);
    photoTextContainer.appendChild(titleContainer);
    titleContainer.appendChild(h2);
    titleContainer.appendChild(likesHeart);
    likesHeart.appendChild(nbLikes);
    likesHeart.appendChild(iconHeart);

    return (photographPhotos);
  }

  return {
    id,
    photographerId,
    title,
    likes,
    date,
    price,
    getPhotographerPhotoDOM,
  };
}
