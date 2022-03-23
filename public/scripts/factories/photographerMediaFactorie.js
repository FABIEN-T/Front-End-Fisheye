function photographerMediaFactory(data, type) {
  const { id, photographerId, title, image, video, likes, date, price } = data; 
  // console.log("factory", likes);

  const typeFactory = type;
  // console.log("log",typeFactory);
  if (typeFactory == "image") {    
    getPhotographerPhotoDOM();
    // console.log("Factorie", typeFactory);
  } 
  else if (typeFactory == "video") {
    getPhotographerVideoDOM();        
    // console.log("Factorie", typeFactory);
  }
  
  // const photographMedia = document.querySelector(".photographMedia");
  // const mediaContainer = photographMedia.querySelectorAll("div.mediaTextContainer > div.mediaContainer"); 
  // mediaContainer.addEventListener("click", displayLightbox);
  // const mediaContainer = document.querySelectorAll(".mediaContainer");
  // console.log(mediaContainer);
  // mediaContainer.forEach(() => {
  //   mediaContainer.addEventListener("click", displayLightbox);
  // });
  
// function getMediaDOM() {

// }

  function getPhotographerVideoDOM() {
    // Déclaration des variables pour la création d'éléments HTML
    // console.log("countVideo");
    const photographMedia = document.querySelector(".photographMedia");
    const mediaTextContainer = document.createElement("div");
    mediaTextContainer.classList.add("mediaTextContainer");  
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("mediaContainer");
    const videoElement = document.createElement("video");
    videoElement.classList.add(likes);
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");
    const h2 = document.createElement("h2");
    const likesHeart = document.createElement("div");
    likesHeart.classList.add("likesHeart");
    const nbLikes = document.createElement("span");
    nbLikes.classList.add("nbLikes");
    const iconHeart = document.createElement("i");
    // iconHeart.classList.add("iconHeart");

   // Création des attributs et contenus
    const movie = `assets/images/${video}`;
    videoElement.setAttribute("src", movie);
    videoElement.setAttribute("id", id);
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
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("mediaContainer");
    const imgElement = document.createElement("img");
    imgElement.classList.add(likes);
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");
    const h2 = document.createElement("h2");
    const likesHeart = document.createElement("div");
    likesHeart.classList.add("likesHeart");
    const nbLikes = document.createElement("span");
    nbLikes.classList.add("nbLikes");
    const iconHeart = document.createElement("i");
    // iconHeart.classList.add("iconHeart");
    
    // Création des attributs et contenus
    const picture = `assets/images/${image}`;
    imgElement.setAttribute("src", picture);
    imgElement.setAttribute("id", id);
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

  // function totalLikes() {
  //   // let totalOfLikes = 0;
  //   const photographMedia = document.querySelector(".photographMedia");
  //   // console.log("photographMedia", photographMedia);
  //   // const likesHeart = photographMedia.querySelectorAll(".likesHeart");
  //   // console.log("likesHeart", likesHeart);
  //   const nbLikes = photographMedia.querySelectorAll(".nbLikes");
  //   console.log("nbLikes", nbLikes);
  //   // const nbLikes2 = document.querySelectorAll(".nbLikes");
  //   // console.log("nbLikes2", nbLikes2);
  
  //   // const nbLikes3 = photographMedia.getElementsByClassName("nbLikes");
  //   // console.log("nbLikes3", nbLikes3);
  
  //   // const nbLikes4 = document.getElementsByClassName("nbLikes");
  //   // console.log("nbLikes4", nbLikes4);
  //   nbLikes.forEach((e) => {  
  //     console.log("e", e);
  //   // //   // const i = parseInt(e.previousElementSibling.innerHTML);
  
  //   // //   // totalOfLikes += i;
  //   // //   // console.log("totalLikes", totalLikes);
  //   });
  // }
  
  // totalLikes();
 
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