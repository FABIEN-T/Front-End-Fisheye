async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  photographers.forEach((element) => {
      photographerIndexFactory(element);      
    }); 
}

init();