// function  lightboxFactory(data, type) {
//     const { id, photographerId, title, image, video, date } = data; 
//     const typeFactory = type;
//     // console.log("log",typeFactory);
//     if (type == "image") {    
//       getLightboxPhotoDOM();
//       // console.log("Factorie", typeFactory);
//     } 
//     else if (type == "video") {
//       getLightboxVideoDOM();        
//       // console.log("Factorie", typeFactory);
//     }
  
// function getLightboxVideoDOM() {
//         // Déclaration des variables pour la création d'éléments HTML
//         // console.log("countVideo");
//         const lightbox = document.querySelector(".lightbox");
//         const mediaTextContainer = document.createElement("div");
//         mediaTextContainer.classList.add("mediaTextContainer");                
//         const mediaContainer = document.createElement("div");
//         mediaContainer.classList.add("mediaContainer");
//         const videoElement = document.createElement("video");
//         const titleContainer = document.createElement("div");
//         titleContainer.classList.add("titleContainer");
//         const h2 = document.createElement("h2");
           
//         // Création des attributs
//         const movie = `assets/images/${video}`;
//         videoElement.setAttribute("src", movie);
//         videoElement.setAttribute("control", "");
//         videoElement.setAttribute("poster", "");
//         videoElement.setAttribute("alt", title); 
        
//         h2.textContent = title;
//         h2.setAttribute("arialabel", "title");
    
//         // Création des éléments HTML
//         lightbox.appendChild(mediaTextContainer);
//         mediaTextContainer.appendChild(mediaContainer);   
//         mediaContainer.appendChild(videoElement);
//         mediaTextContainer.appendChild(titleContainer);
//         titleContainer.appendChild(h2);
//         // return (photographMedia);
//       }
    
    
//       function getLightboxPhotoDOM() {
//         // console.log("countPhoto");
//         // Déclaration des variables pour la création d'éléments HTML
//         const lightbox = document.querySelector(".photographMedia");
//         const mediaTextContainer = document.createElement("div");
//         mediaTextContainer.classList.add("mediaTextContainer");
//         const mediaContainer = document.createElement("div");
//         mediaContainer.classList.add("mediaContainer");
//         const imgElement = document.createElement("img");
//         const titleContainer = document.createElement("div");
//         titleContainer.classList.add("titleContainer");
//         const h2 = document.createElement("h2");
    
//         // Création des attributs
//         const picture = `assets/images/${image}`;
//         imgElement.setAttribute("src", picture);
//         imgElement.setAttribute("alt", title);
        
//         h2.textContent = title;
//         h2.setAttribute("arialabel", "title");
       
//         // Création des éléments HTML
//         lightbox.appendChild(mediaTextContainer);
//         mediaTextContainer.appendChild(mediaContainer);
//         mediaContainer.appendChild(imgElement);
//         mediaTextContainer.appendChild(titleContainer);
//         titleContainer.appendChild(h2);

//         // return (photographMedia);
//       }
    
//       return {
//         id,
//         photographerId,
//         title,
//         date,  
//         getLightboxVideoDOM,
//         getLightboxPhotoDOM
//       };
// }      