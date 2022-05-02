/**
 * MESSAGE D'ERREUR APPELÉ PAR LES FONCTIONS DE VALIDATION DES CHAMPS (INPUTS)
 */
function errorMessage(tag, message, valid) {
  const constClass = document.querySelector("." + tag); // Ajout du "." avant le nom de classe
  const constSpan = document.querySelector("." + tag + "> span"); // Balise span de la classe donnée
  if (!valid) {
    // Si non valide : Ecriture du message d'erreur dans la balise span du document HTML
    constSpan.textContent = message;
  } else {
    // Si valide : Suppression de la classe "error" et
    // Ecriture du message (vide) dans la balise span du document HTML
    constSpan.textContent = message;
  }
}

/**
 * FONCTIONS DE VALIDATION DES CHAMPS (INPUTS)
 */

/**
 * CONTRÔLE DU PRENOM
 * Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
 */
function firstNameChecker(value) {
  // console.log("first", value);
  if (!value) {
    //Si la valeur n'est pas bonne, attribuer "null" à firstNameValue
    errorMessage("firstName", "Le champ Prénom doit être rempli.");
    firstNameValue = null;
  } else if (value.length > 0 && (value.length < 2 || value.length > 40)) {
    errorMessage(
      "firstName",
      "Veuillez entrer entre 2 et 40 caractères pour le champ Prénom."
    );
    firstNameValue = null;
  } else if (!value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g)) {
    // regex exluant les caractères spéciaux et les chiffres
    errorMessage(
      "firstName",
      "Il ne doit pas y avoir de caractères spéciaux ou de chiffres."
    );
    firstNameValue = null;
    // Sinon attribuer "true" pour que errorMessage enlève la classe "error" et le message
  } else {
    errorMessage("firstName", "", true);
    firstNameValue = value.trim();
  }
}

/**
 * CONTRÔLE DU NOM
 * Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
 */
function lastNameChecker(value) {
  if (!value) {
    errorMessage("lastName", "Le champ Nom doit être rempli.");
    lastNameValue = null;
  } else if (value.length > 0 && (value.length < 2 || value.length > 40)) {
    errorMessage(
      "lastName",
      "Veuillez entrer entre 2 et 40 caractères pour le champ Nom."
    );
    lastNameValue = null;
  } else if (!value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g)) {
    errorMessage(
      "lastName",
      "Il ne doit pas y avoir de caractères spéciaux ou de chiffres."
    );
    lastNameValue = null;
  } else {
    errorMessage("lastName", "", true);
    lastNameValue = value.trim();
  }
}

/**
 * CONTRÔLE DE L'EMAIL
 * L'adresse électronique est valide.
 */
function mailChecker(value) {
  if (!value) {
    emailValue = null;
    errorMessage("address", "Le champ Email doit être rempli.");
  } else if (!value.match(/^[\w._-]+@[\w-]+\.[a-z]{2,4}$/g)) {
    errorMessage(
      "address",
      "L'adresse du courriel n'est pas valide (ne pas mettre d'espace ni de caractères accentués)."
    );
    emailValue = null;
  } else {
    errorMessage("address", "", true);
    emailValue = value.trim();
  }
}

/**
 * CONTRÔLE DU TEXTAREA
 * Un message doit être saisi.
 */
function messageChecker(value) {
  if (!value) {
    messageValue = null;
    console.log("MESSAGE", value);
    errorMessage("message", "Vous devez saisir un message !");
  } else {
    errorMessage("message", "", true);
  }
}
