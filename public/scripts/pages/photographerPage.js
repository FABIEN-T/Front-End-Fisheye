async function initPhotographer() {
  // Récupère l'ID dans l'URL
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");

  // Récupère les datas et les medias des photographes
  const { photographers, media } = await getPhotographers();

  // Récupère les medias des photographes
  photographers.forEach((element) => {
    if (photographerId == element.id) {
      photographerPageFactory(element);
    }
  });

  // Récupère les datas des médias pour le photographe sélectionné
  media.forEach((element) => {
    
    if (photographerId == element.photographerId) {
      let type = "";
      // Détection du type de médias : image ou vidéo
      if (element.video) {
        type = "video";
      }
      if (element.image) {
        type = "image";
      }
      // type mis en paramètre dans la fonction
      photographerMediaFactory(element, type);
    }
  });
  increment();
    }
// }

initPhotographer();

// increment(); 

function increment() {
  const nbLikes = document.querySelectorAll(".nbLikes");
  // consconsole.log("nbLikes.innerHTML", e.innerHTML);
  // console.log(document);
  console.log(nbLikes);
  
  nbLikes.forEach((e) => {
    console.log("nbLikes.innerHTML", e.innerHTML);
  
    let memoryCount = e.innerHTML;
    // console.log("memoryCount", memoryCount);
    // const refreshLike = () => {
    //   nbLikes.innerText = `${memoryCount}`;
    //   console.log(nbLikes.innerText);
    // }
    const iconHeart = document.querySelectorAll(".iconHeart");
    
    iconHeart.addEventListener("click", (e) => {
        console.log(e.target);
        console.log("click");
        if (e.target.classList.contains("unClick")) {
          console.log("+1");
          e.target.classList.replace("unClick", "click");
          memoryCount++;
          // refreshLike();
          nbLikes.innerText = `${memoryCount}`;
          console.log(nbLikes.innerText);
          } else {
            console.log("-1");
            e.target.classList.replace("click", "unClick");
            memoryCount--;
            refreshLike();
          }
      });
    });
  };
}


// function increment() {
//   const nbLikes = document.querySelectorAll(".nbLikes");
//   // console.log(likeButton.classList.contains("unliked"));
//   const iconHeart = document.querySelectorAll(".iconHeart");
//   nbLikes.forEach((e) => {  
//     console.log("e.innerHTML", e.innerHTML);
  
//     let memoryCount = e.innerHTML;
//     const refreshLike = () => {
//       e.innerText = `${memoryCount}`;
//     }
//     iconHeart.addEventListener("click", () => {
//       if (iconHeart.classList.contains("unClick")) {
//         console.log("CLICK");
//         iconHeart.classList.replace("unClick", "click");
//         memoryCount++;
//         refreshLike();
//         } else {
//           console.log("CLICKdeTROP");
//           iconHeart.classList.replace("click", "unClick");
//           memoryCount--;
//           refreshLike();
//         }
//     }); 
//   });
// }

  






// console.log(
//   "list id",
//   photographers.map((e) => `${e.id}`)
// );
