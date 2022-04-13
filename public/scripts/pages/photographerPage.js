async function initPhotographer() {
  // Récupère l'ID dans l'URL
  let params = new URL(document.location).searchParams;
  let photographerIdUrl = params.get("id");
  
  // Récupère les datas et les medias des photographes
  const { photographers, media } = await getPhotographers();
  // Récupère les datas et les medias DU photographe choisi
  const thisMedias = [];
  const thisPhotographer = [];
  
  // Récupère les medias des photographes
  function getThisPhotographer(){
    photographers.forEach((element) => {
      if (photographerIdUrl == element.id) {
        thisPhotographer.push(element)
      }
    });
  }
  // console.log("currentPhotographer",thisPhotographer);
  
  // Récupère les datas des médias pour le photographe sélectionné
  function getThisMedias(){
    media.forEach((element) => {
      if (photographerIdUrl == element.photographerId) {
        thisMedias.push(element);
      }      
    });
  }
  // console.log("currentMedias",thisMedias);

  function sort(){
    // let select = document.querySelector('#sortingSelect');
    // let value = document.getElementById("sortingSelect").value;
    // document.getElementById("demo").innerHTML = "You selected: " + x;
    let select = document.getElementById('sortingSelect');    
    let value = "popularity"; 
    
    typeSort(value);
        
    select.addEventListener('change', function (e) {
      // console.log("e.target.value", e.target.value);
      // typeSort(this.value);
      typeSort(e.target.value);
      // console.log("type de tri", e.target.value);
    });
        
    function typeSort(value) {
      console.log("typeSort", value);
      if(value === 'popularity'){
        thisMedias.sort((a, b) => {
          // console.log("a b", a, b);
          return a.likes > b.likes ? -1 : 1;
        })  
        console.log("tm popularity", thisMedias);    
      }  
      if(value === 'date'){
        thisMedias.sort((a, b) => {
          return a.date < b.date ? -1 : 1;
        })
        console.log("tm date", thisMedias);
      }
      // console.log("2", value);
      if(value === 'title'){
        thisMedias.sort((a, b) => {
          return a.title < b.title ? -1 : 1;
        })
        console.log("tm title", thisMedias);
      } 
      // console.log("s1", value);
      // console.log("1", value)
  
      let htmlMedias = Array.from(document.querySelector("#gallery").children)
      htmlMedias.forEach((media) => {
        media.remove();      
      })
      console.log("thisMedias", thisMedias);
      photographerMediaFactory(thisMedias);
      lightbox();
      // console.log("end", value);
    }
    
  }

  /*Appel des fonctions*/
  getThisPhotographer();
  getThisMedias();
  sort();
  photographerPageFactory(thisPhotographer);
  photographerMediaFactory(thisMedias);
  increment();
  lightbox();
}


initPhotographer();

// increment();

function increment() {
  // gallery.onclick = function(e) {
  gallery.addEventListener("click", function (e) {
    if (e.target.className.includes("iconHeart")) {
      // console.log(event.target.className);
      let nbLikes = e.target.previousSibling;
      //let plus = event.target.closest('.nbLikes');
      if (nbLikes.classList.contains("unClick")) {
        nbLikes.classList.replace("unClick", "click");
        nbLikes.innerHTML++;
        e.target.setAttribute("class", "fas fa-heart iconHeart");
      } else {
        nbLikes.classList.replace("click", "unClick");
        nbLikes.innerHTML--;
        e.target.setAttribute("class", "far fa-heart iconHeart");
      }
      informationFooter();
    }
  });
}
