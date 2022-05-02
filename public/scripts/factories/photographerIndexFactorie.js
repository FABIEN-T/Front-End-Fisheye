// FACTORIE : CRÉATION DE L'INDEX DES PHOTOGRAPHES

function photographerIndexFactory(data) {
  // Récupération des datas l'objet photographers.json et décomposition
  const { name, id, portrait, city, country, tagline, price } = data;
  getUserCardDOM();

  function getUserCardDOM() {
    // Injection du code HTML dans le DOM en prenant en compte les datas pour chaque photographe
    document.querySelector(".photographerSection").innerHTML += `
    <article aria-label="carte du photographe ${name}">
          <a class="linkPhotographer" href="./photographer.html?id=${id}" role="Link(h2) + image" aria-label="${name}">
            <div class="linkContainer">
              <div class="imgContainer">
                <img src="assets/photographers/${portrait}" alt="Portrait de ${name}">
              </div>
              <h2 aria-label="nom du photographe">${name}</h2>
            </div>
          </a>
          <div class="informationPhotograph" role="Text paragraph" tabindex="0">
            <div class="location" aria-label="ville du photographe">${city}, ${country}</div> 
            <div class="tagline" aria-label="slogan du du photographe">${tagline}</div>
            <div class="price" aria-label="prix">${price}€/jour</div>
          </div>          
        </article>  
    `;

    // A la création de la page : donner le focus au lien Fisheye
    document.querySelector(".logo").focus();
  }
}
