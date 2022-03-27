const closeLightboxCross = document.querySelector(".closeLightboxCross");
closeLightboxCross.addEventListener("click", closeLightbox());


async function displayLightbox(e) {
  // const recoveryId = e; 
  // console.log("target img", e.target.id);
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "block"; 
  lightboxFactory(e.target);
}

function closeLightbox() {
  const lightbox = document.querySelector("#lightbox");  
  lightbox.style.display = "none";  
  // const boxMediaTextContainer = document.getElementsByClassName("boxMediaTextContainer");
  // console.log(lightbox, boxMediaTextContainer);
  // lightbox.removeChild(lightbox.children[1]);
  while(lightbox.children[1]) {
    lightbox.removeChild(lightbox.children[1]);
}
}

  
  
