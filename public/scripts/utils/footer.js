async function informationFooter() {
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");
  // console.log("photographerId", photographerId);

  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
    if (photographerId == element.id) {
      
      informationPrice(element.price);
      informationTotalLikes();
      // console.log("PRIX", element.price);
    }
  });
  
  function informationPrice(price) {
    document.querySelector(".pricePerDay").innerHTML = price + "€ / jour";
  }

  function informationTotalLikes() {
    let totalOfLikes = 0;
    // const photographMedia = document.querySelector(".photographMedia");  
    const nbLikes = document.querySelectorAll(".nbLikes");
    nbLikes.forEach((e) => {  
      // console.log("e", e);
      const i = parseInt(e.innerHTML);
      totalOfLikes += i;
      // console.log("totalLikes", totalOfLikes);
      document.querySelector(".totalLikes").innerHTML = totalOfLikes;
    });
  }
}

informationFooter();


