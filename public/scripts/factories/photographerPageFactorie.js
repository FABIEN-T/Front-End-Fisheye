// FACTORIE : CRÉATION DE L'ENCART DE PRÉSENTATION DU PHOTOGRAPHE SÉLECTIONNÉ

function photographerPageFactory(data) {
  // Récupération des datas du premier objet de l'objet photographers.json et décomposition
  const { name, portrait, city, country, tagline } = data[0];

  getPhotographerPageDOM();

  function getPhotographerPageDOM() {
    // Injection du code HTML dans le DOM en prenant en compte les datas pour chaque photographe
    document.querySelector(".photographHeader").innerHTML = `
        <div class="nameContainer">
            <h1 class="photograpHeaderH1" aria-label="nom du photographe ${name}" role="Header (h1)" tabindex="0">${name}</h1>
            <div class="paragraph" role="Text" tabindex="0">
                <h2 class="location" aria-label="ville et slogan du photographe ${city} ${country}">${city}, ${country}</h2>
                <div class="tagline">${tagline}</div>
            </div>        
        </div> 
        <button class="contactButton focusButton" aria-label="Contactez-moi, ouvrir le formulaire" tabindex="0" onclick="displayModal()">
            Contactez-moi
        </button>
        <div class="imgContainer" tabindex="0">
            <img src="assets/photographers/${portrait}" alt="Portrait de ${name}" role="Image">
        </div>
    `;
  }
}