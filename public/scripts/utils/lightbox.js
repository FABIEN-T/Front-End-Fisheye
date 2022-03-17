async function displayLightbox(e) {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "block";
  const { media } = await getPhotographers();
  // console.log("value", e.target.value);
  // console.log(media);
  // media.forEach((element) => {
  //   const mediaContainer = document.querySelectorAll(".mediaContainer");
  //   mediaContainer.addEventListener("click", console.log ("MediaID", element.id, element.title));
    
  // }); 
  lightboxFactory();
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");  
  lightbox.style.display = "none";  
  // const boxMediaTextContainer = document.getElementsByClassName("boxMediaTextContainer");
  // console.log(lightbox, boxMediaTextContainer);
  lightbox.removeChild(lightbox.children[1]);
}

