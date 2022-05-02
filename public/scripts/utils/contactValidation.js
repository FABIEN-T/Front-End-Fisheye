/**
 * DÉCLARATION DES VARIABLES DE VALIDATION
 */
let firstNameValue, lastNameValue, emailValue, messageValue;

function contactValidation() {
  // DÉTECTION DE LA VALEUR POUR CHAQUE INPUT (champ du formulaire)
  const inputsType = document.querySelectorAll(
    'input[type="text"], input[type="email"]'
  );
  inputsType.forEach((inputVar) => {
    inputVar.addEventListener("input", (e) => {
      if (e.target.id == "first") {
        console.log("FIRST", e.target.value);
        e.target.value = e.target.value.replace(/^[\s]/, ""); // supprime les espaces en début de chaîne
        e.target.value = e.target.value.replace(/[\s]+/g, " "); // remplace les espaces successifs au milieu de la chaîne par un seul espace
        e.target.value = e.target.value.replace(/[-]+/g, "-"); // remplace de multiples tirets successifs par un seul tiret
        e.target.value = e.target.value.replace(/[']+/g, "'"); // remplace de multiples apostrophes successifs par un seul apostrophe
        firstNameValue = e.target.value;
      }
      if (e.target.id == "last") {
        console.log("LAST", e.target.value);
        e.target.value = e.target.value.replace(/^[\s]/, ""); // supprime les espaces en début de chaîne
        e.target.value = e.target.value.replace(/[\s]+/g, " "); // remplace les espaces successifs au milieu de la chaîne par un seul espace
        e.target.value = e.target.value.replace(/[-]+/g, "-"); // remplace de multiples tirets successifs par un seul tiret
        e.target.value = e.target.value.replace(/[']+/g, "'"); // remplace de multiples apostrophes successifs par un seul apostrophe
        lastNameValue = e.target.value;
      }
      if (e.target.id == "email") {
        e.target.value = e.target.value.replace(/^[\s]/, ""); // supprime les espaces en début de chaîne
        console.log("EMAIL", e.target.value);
        emailValue = e.target.value;
      }
    });
  });

  // DÉTECTION DU MESSAGE SAISI (zone de texte)
  const message = document.querySelector("textarea");
  message.addEventListener("keyup", function () {
    console.log("MESSAGE", message.value);
    messageValue = message.value;
  });
}

/**
 * VALIDATION DU FORMULAIRE
 */

// Écoute du "click" sur le bouton "C'est parti" (submit : envoi du Formulaire)
document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault(); // empêche l'envoi du formulaire
  // Envoi des valeurs de chaque champ (input) vers la fonction de test et validation
  firstNameChecker(firstNameValue);
  lastNameChecker(lastNameValue);
  mailChecker(emailValue);
  messageChecker(messageValue);
  // SI tous les champs sont corrects
  if (firstNameValue && lastNameValue && emailValue && messageValue) {
    // ALORS Fermeture de la Modale
    closeModal();
    // et Effacement des champs du formulaire
    (firstNameValue = null),
      (lastNameValue = null),
      (emailValue = null),
      document.getElementById("form").reset();
  }
});
