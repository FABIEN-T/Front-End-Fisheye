async function insert() {
  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");
  // console.log("photographerId", photographerId);

  const { photographers, media } = await getPhotographers();
  photographers.forEach((element) => {
    if (photographerId == element.id) {
      insertPrice(element.price);
      insertTotalLikes();
      // console.log("PRIX", element.price);
    }
  });

  function insertPrice(price) {
    document.querySelector(".pricePerDay").innerHTML = price + "€ / jour";
  }
  
  function insertTotalLikes() {
    let totalOfLikes = 0;
    const photographMedia = document.querySelector(".photographMedia");  
    const nbLikes = photographMedia.querySelectorAll(".nbLikes");
    nbLikes.forEach((e) => {  
      console.log("e", e);
      const i = parseInt(e.innerHTML);
      totalOfLikes += i;
      console.log("totalLikes", totalOfLikes);
      document.querySelector(".totalLikes").innerHTML = totalOfLikes;
    });
  }
  // function insertLikes()

 
  
}

insert();

// function totalLikes() {
//   // let totalOfLikes = 0;
//   const photographMedia = document.querySelector(".photographMedia");
//   // console.log("photographMedia", photographMedia);
//   // const likesHeart = photographMedia.querySelectorAll(".likesHeart");
//   // console.log("likesHeart", likesHeart);
//   const nbLikes = photographMedia.querySelectorAll(".nbLikes");
//   // console.log("nbLikes", nbLikes);
//   // const nbLikes2 = document.querySelectorAll(".nbLikes");
//   // console.log("nbLikes2", nbLikes2);

//   // const nbLikes3 = photographMedia.getElementsByClassName("nbLikes");
//   // console.log("nbLikes3", nbLikes3);

//   // const nbLikes4 = document.getElementsByClassName("nbLikes");
//   // console.log("nbLikes4", nbLikes4);
//   nbLikes.forEach((e) => {  
//     console.log("e", e.likes);
//   //   // const i = parseInt(e.previousElementSibling.innerHTML);

//   //   // totalOfLikes += i;
//   //   // console.log("totalLikes", totalLikes);
//   });
// }




// totalLikes();






// function totalOfLikes() {
//   let totalOfLikes = 0;
//   const nbLikes = document.querySelectorAll(".nbLikes");
//   console.log("nbLikes", nbLikes);
//   nbLikes.forEach((heart) => {
//     const i = parseInt(heart.previousElementSibling.innerHTML);
//     totalOfLikes += i;
//     console.log("totalOfLikes", totalOfLikes);
//   });
// }

// totalOfLikes();







// document.querySelector(".headerModal").getElementByClassName("hContact");
// function recoveryName(name) {
//   // console.log(name);
//   const title = document.querySelector(".hContact");
//   title.innerHTML = "Contactez " + name;
//   // header.setAttribute( 'arialabel', 'nom du photographe' );
//   // console.log(title.innerHTML);
// }
