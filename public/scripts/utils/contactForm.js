// async function displayData(photographer) {
//   const photographersHeader = document.querySelector(".photograph-header");
//   // console.log("async", photographer);
//   const photographerPageModel = photographerPageFactory(photographer);
//   const userPhotographerCardDOM =
//     photographerPageModel.getPhotographerPageDOM();
//   photographersHeader.appendChild(userPhotographerCardDOM);
// }

// async function initModal() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   let params = new URL(document.location).searchParams;
//   let photographerId = params.get("id");
//   console.log("photographerId", photographerId);

//   photographers.forEach((element) => {
//     if (photographerId == element.id) {
//       let photographerData = element;
//       displayData(photographerData);
//     }
//   });
// }

function displayModal() {
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");  
  console.log("photographerId", photographerId);
  

  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  // const h2 = document.createElement("h2");
  // h2.textContent = "coucou";
  // header.appendChild(h2);
  // const { photographers } = await getPhotographers();
  // const { name, id } = photographers;
  // console.log(data);
  
  
  // 
  //   initModal();
  // console.log("MODAL");
  // const h2 = document.querySelector(h2);
  // console.log("MODAL", h2);
  // h2.textContent = "Contactez-nous";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
