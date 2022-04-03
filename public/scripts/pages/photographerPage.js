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
  gallery.onclick = function(event) {
    if (!event.target.className.includes('iconHeart')) return;
      // console.log(event.target.className); 
      let nbLikes = event.target.previousSibling;
    //let plus = event.target.closest('.nbLikes');  
      // console.log(nbLikes);
      if(nbLikes.classList.contains('unClick')){
        nbLikes.classList.replace('unClick', 'click');
        nbLikes.innerHTML++
        event.target.setAttribute("class", "fas fa-heart iconHeart");
      } else { 
        nbLikes.classList.replace('click', 'unClick');
        nbLikes.innerHTML--
        event.target.setAttribute("class", "far fa-heart iconHeart");
      }
      informationFooter(); 
  };







//   document.addEventListener('click', function(event) {

//     if (event.target.dataset.counter != undefined) { // si l'attribut existe...
//         event.target.value++;
//         console.log();    
//     }
// .contains
//   });

  // const nbLikes = document.querySelectorAll(".nbLikes");
  // const iconHeart = document.querySelector(".iconHeart");
  // console.log("nbLikes.innerHTML", nbLikes.innerHTML);
  // // console.log(document);
  // // console.log("1", nbLikes.innerHTML);
  
  // nbLikes.forEach((e) => {
  //   // console.log("nbLikes.innerHTML", e.innerHTML);
    
  //   let memoryCount = e.innerHTML;
  //   // let memoryCount = document.querySelectorAll(".nbLikes").innerHTML;
  //   // console.log("memoryCount", memoryCount);
    
    
  //   iconHeart.addEventListener("click", (e) => {
  //       // console.log("e.target", e.target);
  //       if (e.target.classList.contains("unClick")) {
  //         console.log("+1");
  //         e.target.classList.replace("unClick", "click");
  //         memoryCount++;
  //         // refreshLike();
  //         nbLikes.innerText = memoryCount;
  //         console.log("nbLikes.innerText", nbLikes.innerText);
  //         document.querySelectorAll(".nbLikes").innerHTML = memoryCount;
  //         } 
  //         else {
  //           console.log("-1");
  //           e.target.classList.replace("click", "unClick");
  //           memoryCount--;
  //           // refreshLike();
  //           nbLikes.innerText = memoryCount;
  //           console.log(nbLikes.innerText);
  //         }
  //     });
  //   });
  };

// MATIN MENTORAT
//   function increment() {
//     const nbLikes = document.querySelectorAll(".nbLikes");
//     // console.log("nbLikes.innerHTML", nbLikes.innerHTML);
//     // console.log(document);
//     // console.log("1", nbLikes.innerHTML);
    
//     nbLikes.forEach((e) => {
//       console.log("nbLikes.innerHTML", e.innerHTML);
    
//       let memoryCount = e.innerHTML;
//       console.log("memoryCount", memoryCount);
//       // const refreshLike = () => {
//       //   nbLikes.innerText = `${memoryCount}`;
//       //   console.log(nbLikes.innerText);
//       // }
//       const iconHeart = document.querySelectorAll(".iconHeart");
      
//       iconHeart.addEventListener("click", (e) => {
//           console.log(e.target);
//           console.log("click");
//           if (e.target.classList.contains("unClick")) {
//             console.log("+1");
//             e.target.classList.replace("unClick", "click");
//             memoryCount++;
//             // refreshLike();
//             nbLikes.innerText = `${memoryCount}`;
//             console.log(nbLikes.innerText);
//             } else {
//               console.log("-1");
//               e.target.classList.replace("click", "unClick");
//               memoryCount--;
//               // refreshLike();
//               nbLikes.innerText = `${memoryCount}`;
//               console.log(nbLikes.innerText);
//             }
//         });
//       });
//     };



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

