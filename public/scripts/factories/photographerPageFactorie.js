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
        const h1 = document.createElement( 'h1' );
        const paragraph = document.createElement( 'p' );
        paragraph.classList.add( 'paragraph' );
        const cityCountry = document.createElement( 'h2' );
        cityCountry.classList.add( 'location' );
        const slogan = document.createElement( 'div' );
        slogan.classList.add( 'tagline' );
        // const button = document.createElement( 'button' );
        // button.classList.add( 'contact_button' );
        const img = document.createElement( 'img' );
        const imgContainer = document.createElement( 'div' );
        imgContainer.classList.add( 'imgContainer' );
        const picture = `assets/photographers/${portrait}`; 

        // Création des attributs

        imgContainer.setAttribute("tabindex", "60");      
        img.setAttribute('src', picture );
        img.setAttribute('alt', "Portrait de " + name );
        img.setAttribute('role', 'Image');
        // img.setAttribute("tabindex", "60");
        
        // photographHeader.setAttribute('aria-label', 'présentation du photographe')

        h1.textContent = name;
        h1.setAttribute('aria-label', 'nom du photographe');
        h1.setAttribute('role', 'Header (h1)');
        h1.setAttribute("tabindex", "20");
        
        paragraph.setAttribute('role', 'Text');
        paragraph.setAttribute("tabindex", "30");

        cityCountry.textContent = city+','+' '+country;
        cityCountry.setAttribute('aria-label', 'ville du photographe');
    
        slogan.textContent = tagline;
        slogan.setAttribute('aria-label', 'slogan du photographe');

        // button.textContent = "Contactez-moi";
        // button.setAttribute('onclick', 'displayModal()')
                
        // Création des éléments HTML
        photographHeader.appendChild(nameContainer);       
        nameContainer.appendChild(h1);
        nameContainer.appendChild(paragraph);
        paragraph.appendChild(cityCountry);
        paragraph.appendChild(slogan);
        // photographHeader.appendChild(button);
        photographHeader.appendChild(imgContainer);
        imgContainer.appendChild(img);       
        // return (photographHeader);
    }
    
    // return { name, city, country, tagline, getPhotographerPageDOM }
}


