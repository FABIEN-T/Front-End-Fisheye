//FONCTION DE MISE EN FORME DES DATAS DU HEADER
function photographerPageFactory(data) {
    const { name, portrait, city, country, tagline} = data;    
    
    getPhotographerPageDOM();

    function getPhotographerPageDOM() {   
        // Déclaration des variables pour la création d'éléments HTML
        const photographHeader= document.querySelector(".photographHeader");
        // const article = document.createElement( 'article' );
        const nameContainer = document.createElement( 'div' );
        nameContainer.classList.add( 'nameContainer' );
        const h2 = document.createElement( 'h2' );
        const cityCountry = document.createElement( 'div' );
        cityCountry.classList.add( 'location' );
        const slogan = document.createElement( 'div' );
        slogan.classList.add( 'tagline' );
        // const button = document.createElement( 'button' );
        // button.classList.add( 'contact_button' );
        const img = document.createElement( 'img' );
        const imgContainer = document.createElement( 'div' );
        imgContainer.classList.add( 'imgContainer');

        // Création des attributs
        const picture = `assets/photographers/${portrait}`;        
        img.setAttribute('src', picture );
        img.setAttribute('alt', "Portrait de " + name );
        
        photographHeader.setAttribute('arialabel', 'HEADER présentation du photographe')

        h2.textContent = name;
        h2.setAttribute('arialabel', 'nom du photographe');
    
        cityCountry.textContent = city+','+' '+country;
        cityCountry.setAttribute('arialabel', 'ville du photographe');
    
        slogan.textContent = tagline;
        slogan.setAttribute('arialabel', 'slogan du photographe');

        // button.textContent = "Contactez-moi";
        // button.setAttribute('onclick', 'displayModal()')
                
        // Création des éléments HTML
        photographHeader.appendChild(nameContainer);       
        nameContainer.appendChild(h2);
        nameContainer.appendChild(cityCountry);
        nameContainer.appendChild(slogan);
        // photographHeader.appendChild(button);
        photographHeader.appendChild(imgContainer);
        imgContainer.appendChild(img);       
        // return (photographHeader);
    }
    
    // return { name, city, country, tagline, getPhotographerPageDOM }
}


