// window.addEventListener("keydown", myFunction);

// function myFunction(event) {  
//       console.log(event.key, event.keyCode);
// }


async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
      photographerIndexFactory(element);      
    }); 
}

init();





// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographerSection");
//   // console.log(".photographerSection", photographersSection);
 
//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   console.log("tableau", photographers);
//   displayData(photographers);
//   // const { name, id, portrait, city, country, tagline, price } = photographers
//   // console.log("DATA_index", { name, id, portrait, city, country, tagline, price });
// }

// init();