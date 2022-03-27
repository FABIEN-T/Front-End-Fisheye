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
      function recoveryName(name) {
        // console.log(name);
        const contactPhotographe = document.querySelector("#contactPhotographer");
        contactPhotographe.innerHTML = "Contactez " + name;        
        contactPhotographe.setAttribute( 'arialabel', 'contactez ' + name);
      }
    }
  });

  contactFactory();
  }

const closeModalCross = document.querySelector(".closeModalCross");
closeModalCross.addEventListener("click", closeModal);


function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.getElementById("form").reset(); // Effacement des champs à la fermeture de la Modale
  // Boucle de suppression de la classe error
  const constCloseClass = document.querySelectorAll(".formData"); 
  const constCloseSpan = document.querySelectorAll  (".formData > span");
  for (element of constCloseClass) {
    element.classList.remove("error");
  } 
  // Boucle de suppression des messages d'erreurs
  for (element of constCloseSpan) {
    element.textContent = "";
  }
}


