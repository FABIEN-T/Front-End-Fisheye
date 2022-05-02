// FOOTER : 
// - RÉCUPÉRATION DU PRIX POUR LE PHOTOGRAPHE SÉLECTIONNÉ ET AFFICHAGE DASN LE FOOTER
// - RÉCUPÉRATION DDU NOMBRE DE LIKES POUR CHAQUE MEDIA CALCUL DU TOTAL ET AFFICHAGE DASN LE FOOTER

async function informationFooter() {
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");

  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
    if (photographerId == element.id) {      
      informationPrice(element.price);
      informationTotalLikes();
    }
  });
  
  function informationPrice(price) {
    document.querySelector(".pricePerDay").innerHTML = price + "€ / jour";
  }

  function informationTotalLikes() {
    let totalOfLikes = 0;
    const nbLikes = document.querySelectorAll(".nbLikes"); // Récupération du nombre de likes pour chaque média
    nbLikes.forEach((e) => { 
      const i = parseInt(e.innerHTML); // Transformation du type string en type integer
      totalOfLikes += i; 
      document.querySelector(".totalLikes").setAttribute("aria-label","total des likes")
      document.querySelector(".totalLikes").innerHTML = totalOfLikes;
    });
  }
}

informationFooter();


