selectFunction();

function selectFunction() {
  const selector = document.querySelector(".custom-selector"); // Récupération du label du select (entête du menu déroulant)
  // const ariaSelect = document.querySelector('.ariaSelect');
  // console.log(".custom-selector", selector);

  // selector.addEventListener("change", (e) => {
  //   console.log("changed", e.target.value);
  // });

  selector.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const select = selector.children[0]; // select positionné sur le premier item
    const dropDown = document.createElement("ul"); // Création du menu déroulant avec une liste à puces
    dropDown.className = "selector-options"; // Définit la classe du menu déroulant (dropDown)
    selector.setAttribute("aria-expanded", "true"); // Attribut aria indiquant l'ouverture du menu déroulant
    console.log("[...select.children]", [...select.children]);
    const myTab = [...select.children];
    console.log("myTab", myTab[2]);
    // Pour tous les items du select
    [...select.children].forEach((option) => {
      const dropDownOption = document.createElement("li"); // Créer un élément de la liste à puce
      const arrow = document.createElement("i");
      arrow.setAttribute("class", "fas fa-chevron-up arrow"); // A l'ouverture du menu, l'icône flèche pointe vers le bas
      dropDownOption.textContent = option.textContent; // Chaque élément de la liste à puce récupère l'intitulé de l'item du select correspondant
      // console.log("dropDownOption.textContent", dropDownOption.textContent);

      // Ecoute du clic dès qu'on appuie sur un élément de la liste à puces
      dropDownOption.addEventListener("mousedown", (e) => {
        // console.log("click");
        e.stopPropagation();
        select.value = option.value; // La constante select prend l'intitulé de l'option cliquée
        selector.value = option.value; // La constante selector (entête du menu déroulant) récupère l'intitulé de l'option cliquée
        console.log("select.value, selector.value", select.value, selector.value);
        select.dispatchEvent(new Event("change")); // Renvoie l'événnement pour permettre à la fonction sort de faire le tri
        selector.dispatchEvent(new Event("change"));
        // console.log(select.children[2]);
        // // console.log("a");
        dropDown.remove(); // Effacement de la liste à puces (menu déroulant) quand un élément a été sélectioné
        selector.setAttribute("aria-expanded", "false"); // Attribut aria indiquant la fermeture du menu déroulant
        // arrow.setAttribute("class", "fas fa-chevron-up arrow");
        // console.log("selector.value", selector.value);
      });
      dropDown.appendChild(dropDownOption); // Insertion dans le DOM des éléments de la liste à puce
      dropDown.appendChild(arrow); // Insertion dans le DOM de la flèche vers le haut
    });
    selector.appendChild(dropDown); // Insertion dans le DOM du menu déroulant (liste à puces)

    // Si le clic est à l'extérieur du menu déroulant alors Fermeture du menu déroulant
    document.addEventListener("click", (e) => {
      if (!selector.contains(e.target)) {
        dropDown.remove();
        selector.setAttribute("aria-expanded", "false");
        // arrow.setAttribute("class", "fas fa-chevron-up arrow");
        // console.log("b");
      }
    });
  });

  // selector.addEventListener("keyup", function (e) {
  //   // console.log(e.target);
  //   // console.log("e.key", e.key);
  //   // console.log(e.target.className.includes("buttonCross"));
  //   // if (e.key === "Tab") {
  //   //   function tabDropDown (n) {
  //   //     // SI le numéro d'images dans le tableau est supérieur au nombre d'images
  //   //     if (n > selector.children.length - 1) {
  //   //       // ALORS revenir à la 1ère image (index 0)
  //   //       index = 0;
  //   //       // console.log("début", index);
  //   //     }
  //   //     // SI le numéro d'images dans le tableau est inférieur à 0
  //   //     if (n < 0) {
  //   //       // ALORS aller à la dernière image du tableau
  //   //       index = selector.children.length - 1;
  //   //       // console.log("fin", index);
  //   //     }
  //   //   }

  //     const select = selector.children[0]; // select positionné sur le premier item
  //     const dropDown = document.createElement("ul"); // Création du menu déroulant avec une liste à puces
  //     console.log([...select.children]);
  //     console.log([...select.children].length);
  //     dropDown.className = "selector-options"; // Définit la classe du menu déroulant (dropDown)
  //     selector.setAttribute("aria-expanded", "true"); // Attribut aria indiquant l'ouverture du menu déroulant

  //     // Pour tous les items du select
  //     [...select.children].forEach((option) => {
  //       const dropDownOption = document.createElement("li"); // Créer un élément de la liste à puce
  //       const arrow = document.createElement("i");
  //       arrow.setAttribute("class", "fas fa-chevron-up arrow"); // A l'ouverture du menu, l'icône flèche pointe vers le bas
  //       dropDownOption.textContent = option.textContent; // Chaque élément de la liste à puce récupère l'intitulé de l'item du select correspondant
  //       // const arrow = document.querySelector(".arrow");

  //       // Ecoute du clavier dès qu'on appuie sur un élément de la liste à puces
  //       // document.addEventListener("keydown", function (e) {
  //       //   // console.log("e.key", e.key);
  //       //   if (e.key === "Tab") {
  //       //     displaySlides((index -= 1)); //précédent : on décrémente
  //       //   }
  //       //   if (e.key === "ArrowDown") {
  //       //     displaySlides((index += 1)); //précédent : on incrémente
  //       //   }
  //       // });
  //       if (e.key === "ArrowUp") {
  //         console.log()
  //       }
        

  //       // dropDownOption.addEventListener("keydown", (e) => {
  //       //   console.log("&& e.target", e.target);
  //       //   if (e.key === "Tab" && e.target.getAttribute("tabindex = 75")) {
  //       //     console.log("ok", e.key);
  //       //   }
  //       //   // console.log("click");
  //       //   select.value = option.value; // La constante select prend l'intitulé de l'option cliquée
  //       //   selector.value = option.value; // La constante selector (entête du menu déroulant) récupère l'intitulé de l'option cliquée
  //       //   // console.log(select.value, selector.value);
  //       //   select.dispatchEvent(new Event("change")); // Renvoie l'événnement pour permettre à la fonction sort de faire le tri
  //       //   selector.dispatchEvent(new Event("change"));
  //       //   // console.log(select.children[2]);
  //       //   // // console.log("a");
  //       //   dropDown.remove(); // Effacement de la liste à puces (menu déroulant) quand un élément a été sélectioné
  //       //   selector.setAttribute("aria-expanded", "false"); // Attribut aria indiquant la fermeture du menu déroulant
  //       //   // arrow.setAttribute("class", "fas fa-chevron-up arrow");
  //       //   // console.log("selector.value", selector.value);
  //       // });
  //       dropDown.appendChild(dropDownOption); // Insertion dans le DOM des éléments de la liste à puce
  //       dropDown.appendChild(arrow); // Insertion dans le DOM de la flèche vers le haut
  //     });
  //     selector.appendChild(dropDown); // Insertion dans le DOM du menu déroulant (liste à puces)

  //     }
  // );
}
