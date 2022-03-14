function photographerPhotoFactory(data, type) {
  const { id, photographerId, title, image, video, likes, date, price } = data; 
  const typeFactory = type;
  // console.log("log",typeFactory);
  if (type == "image") {    
    getPhotographerPhotoDOM();
    // console.log("Factorie", typeFactory);
  } 
  else if (type == "video") {
    getPhotographerVideoDOM();        
    // console.log("Factorie", typeFactory);
  }

// function getMediaDOM() {

// }

  function getPhotographerVideoDOM() {
    // Déclaration des variables pour la création d'éléments HTML
    // console.log("countVideo");
    const photographMedia = document.querySelector(".photographMedia");
    const mediaTextContainer = document.createElement("div");
    mediaTextContainer.classList.add("mediaTextContainer");
    const videoElement = document.createElement("video");
    
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("mediaContainer");
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
    const movie = `assets/images/${video}`;
    videoElement.setAttribute("src", movie);
    videoElement.setAttribute("control", "");
    videoElement.setAttribute("poster", "");
    videoElement.setAttribute("alt", title); 
    
    h2.textContent = title;
    h2.setAttribute("arialabel", "title");
    nbLikes.textContent = likes;
    nbLikes.setAttribute("arialabel", "nombre de likes");
    iconHeart.setAttribute("class", "fas fa-heart iconHeart");    
    iconHeart.setAttribute("arialabel", "like");

    // Création des éléments HTML
    photographMedia.appendChild(mediaTextContainer);
    mediaTextContainer.appendChild(mediaContainer);   
    mediaContainer.appendChild(videoElement);
    mediaTextContainer.appendChild(titleContainer);
    titleContainer.appendChild(h2);
    titleContainer.appendChild(likesHeart);
    likesHeart.appendChild(nbLikes);
    likesHeart.appendChild(iconHeart);

    // return (photographMedia);
  }


  function getPhotographerPhotoDOM() {
    // console.log("countPhoto");
    // Déclaration des variables pour la création d'éléments HTML
    const photographMedia = document.querySelector(".photographMedia");
    const mediaTextContainer = document.createElement("div");
    mediaTextContainer.classList.add("mediaTextContainer");
    const imgElement = document.createElement("img");
    
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("mediaContainer");
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
    const picture = `assets/images/${image}`;
    imgElement.setAttribute("src", picture);
    imgElement.setAttribute("alt", title);
    
    h2.textContent = title;
    h2.setAttribute("arialabel", "title");
    nbLikes.textContent = likes;
    nbLikes.setAttribute("arialabel", "nombre de likes");
    iconHeart.setAttribute("class", "fas fa-heart iconHeart");    
    iconHeart.setAttribute("arialabel", "like");

    // Création des éléments HTML
    photographMedia.appendChild(mediaTextContainer);
    mediaTextContainer.appendChild(mediaContainer);
    mediaContainer.appendChild(imgElement);
    mediaTextContainer.appendChild(titleContainer);
    titleContainer.appendChild(h2);
    titleContainer.appendChild(likesHeart);
    likesHeart.appendChild(nbLikes);
    likesHeart.appendChild(iconHeart);

    // return (photographMedia);
  }

  return {
    id,
    photographerId,
    title,    
    likes,
    date,
    price,    
    getPhotographerVideoDOM,
    getPhotographerPhotoDOM
  };
}