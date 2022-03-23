async function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";

  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");
  // console.log("photographerId", photographerId);

  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
    if (photographerId == element.id) {
      recoveryName(element.name);
      // document.querySelector(".headerModal").getElementByClassName("hContact");
      function recoveryName(name) {
        // console.log(name);
        const photographerName = document.querySelector(".hContact");
        photographerName.innerHTML = "Contactez " + name;        
        photographerName.setAttribute( 'arialabel', 'nom du photographe' );
        // document.querySelector(".hContact").innerHTML = "Contactez " + name;
        // console.log(title.innerHTML);
      }
    }
  });

  contactFactory();

  // console.log(document.querySelector(".hContact"));
  // const h2 = document.getElementsByClassName("hContact");
  // h2.innerHTML = "coucou";

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
