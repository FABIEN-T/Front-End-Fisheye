function photographerMediaFactory(dataMedia, type) {
  const { id, photographerId, title, image, video, likes, date, price } = dataMedia; 
  // console.log("factory", likes);

  const typeFactory = type;
  // console.log("log",typeFactory);
  if (typeFactory == "image") {    
    getPhotographerDOM(image);
    // console.log("Factorie", typeFactory);
  } 
  else if (typeFactory == "video") {
    getPhotographerDOM(video);        
    // console.log("Factorie", typeFactory);
  }
  
  // Ecoute du click sur un média
  const clickImg = document.querySelectorAll("img");
  const clickVideo = document.querySelectorAll("video");
  // const attributId = .getAttribute("id");
  // console.log("attributId", attributId);
  // console.log("clickImage", clickImg);
  clickImg.forEach((dataMedia) => {
    // console.log(clickImg.getAttribute);
    dataMedia.addEventListener("click", (e) => {
      // console.log("target img", e.target.id);
      displayLightbox(e);
    })
  }); 

  clickVideo.forEach((dataMedia) => {
    dataMedia.addEventListener("click", (e) => {      
      // console.log("target video", e.target.id);
      displayLightbox(e);
    })
  }); 
  

  function getPhotographerDOM(type) {
    // Déclaration des variables pour la création d'éléments HTML
    // console.log("countVideo");
    const gallery = document.querySelector(".gallery");
    const mediaTextContainer = document.createElement("article");
    mediaTextContainer.classList.add("mediaTextContainer");  
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("mediaContainer");
    
    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    const h2 = document.createElement("h2");
    const likesHeart = document.createElement("div");
    likesHeart.classList.add("likesHeart");
    const nbLikes = document.createElement("span");
    nbLikes.classList.add("nbLikes");
    const iconHeart = document.createElement("i");
    // iconHeart.classList.add("iconHeart");

    // Création des attributs et contenus
    h2.textContent = title;
    h2.setAttribute("arialabel", "title");
    nbLikes.textContent = likes;
    nbLikes.setAttribute("arialabel", "nombre de likes");
    iconHeart.setAttribute("class", "far fa-heart iconHeart unClick");    
    iconHeart.setAttribute("arialabel", "like");

    // Création des éléments HTML
    gallery.appendChild(mediaTextContainer);
    mediaTextContainer.appendChild(mediaContainer);
    
    mediaTextContainer.appendChild(textContainer);
    textContainer.appendChild(h2);
    textContainer.appendChild(likesHeart);
    likesHeart.appendChild(nbLikes);
    likesHeart.appendChild(iconHeart);

    if(type==video) {
      const videoElement = document.createElement("video");
      videoElement.classList.add(likes);
      const movie = `assets/images/${video}`;
      videoElement.setAttribute("src", movie);
      videoElement.setAttribute("id", id);
      videoElement.setAttribute("control", "");
      videoElement.setAttribute("poster", "");
      videoElement.setAttribute("alt", title);
      mediaContainer.appendChild(videoElement);
        
    } else {
      const imgElement = document.createElement("img");
      imgElement.classList.add(likes);
      const picture = `assets/images/${image}`;
      imgElement.setAttribute("src", picture);
      imgElement.setAttribute("id", id);
      imgElement.setAttribute("alt", title);
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
    getPhotographerDOM,
    getPhotographerDOM
  };

}