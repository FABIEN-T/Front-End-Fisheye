function contactFactory() {
    
    // DÉTECTION DE LA VALEUR POUR CHAQUE INPUT (champ du formulaire)
    const inputsType = document.querySelectorAll(
        'input[type="text"], input[type="email"]'
    );
    inputsType.forEach((inputVar) => {
      inputVar.addEventListener("input", (e) => {
        if (e.target.id == "first") {
          console.log("FIRST", e.target.value);
          // nameChecker(e.target.value);
        }
        if (e.target.id == "last") {
          console.log("LAST", e.target.value);
          // nameChecker(e.target.value); 
        }
        if (e.target.id ==  "email") {
          console.log("EMAIL", e.target.value);
          // mailChecker(e.target.value);
        }            
        }        
      );
    });
    
    // DÉTECTION DU MESSAGE SAISI (zone de texte)
    const message = document.querySelector('textarea');
    message.addEventListener('keyup', function () {
			console.log("MESSAGE", message.value);      
		});

    // DÉTECTION DU BOUTON ENVOYER
    document.querySelector("#form").addEventListener("submit", (e) => {
      e.preventDefault(); 
      document.getElementById("form").reset(); 
      closeModal();
    });  
}
