async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  console.log(".photographer_section", photographersSection);
 
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  console.log("tableau", photographers);
  displayData(photographers);
  // const { name, id, portrait, city, country, tagline, price } = photographers
  // console.log("DATA_index", { name, id, portrait, city, country, tagline, price });
}

init();

// linkPhotographer.addEventListener('click', photographerPage());
// const photographersHeader = document.getElementsByClassName(".photograph-header");  
// console.log(".photograph-header", photographersHeader);
// const photographerPageModel = photographerPage(photographer);
// const userCardHeaderDOM = photographerPageModel.getPhotographerPageDOM();
// photographersHeader.appendChild(userCardHeaderDOM);