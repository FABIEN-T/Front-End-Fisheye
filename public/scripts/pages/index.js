// INITIALISATION DE LA PAGE INDEX

async function init() {
  // Récupère les datas de tous les photographes
  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
    photographerIndexFactory(element); // Création de l'index des photographes
  });
}

init();
