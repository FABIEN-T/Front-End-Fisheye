//Mettre le code JavaScript lié à la page photographer.html
async function displayData(photographer) {
  // const photographersSection = document.querySelector(".photographer_section");
  // console.log(".photographer_section", photographersSection);
  const photographersHeader = document.querySelector(".photograph-header");
  // console.log(".photograph-header", photographersHeader);
  console.log("async", photographer);
  

  // photographer_Id.forEach((photographer) => {
       const photographerModel = photographerPageFactory(photographer);
       const userPhotographerCardDOM = photographerModel.getPhotographerPageDOM();
       photographersHeader.appendChild(userPhotographerCardDOM);
  //   const photographerPageModel = photographerPageFactory(photographer);
  //   const userCardHeaderDOM = photographerPageModel.getPhotographerPageDOM();
  //   photographersHeader.appendChild(userCardHeaderDOM);
  // });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  console.log("tableau", photographers);
  console.log("list id", photographers.map(e => `${e.id}`));
  let params = (new URL(document.location)).searchParams;
  let photographerId = params.get('id');  
   
  photographers.forEach((element) => {
    if (photographerId == element.id ) {
      console.log(element.id);
      console.log(element.name);
      console.log(element.city);
      console.log(element.country);
      console.log(element.tagline);
      let photographerData = element;
      // console.log("DATA", photographerData);
      displayData(photographerData);     
    }
    // displayData(element);
  })  
  // displayData(photographers);
  // displayData([element.id, element.name, element.city, element.country, element.tagline ]);
}

init();



// let name = params.get('nom');
