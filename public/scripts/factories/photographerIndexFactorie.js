function photographerIndexFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    getUserCardDOM();

    function getUserCardDOM() {   
        // Déclaration des variables pour la création d'éléments HTML
        const photographersSection = document.querySelector(".photographerSection");
        const article = document.createElement( 'article' );  
        const linkPhotographer = document.createElement( 'a' );
        linkPhotographer.classList.add( 'linkPhotographer' );
        const linkContainer = document.createElement( 'div' );
        linkContainer.classList.add( 'linkContainer' );
        const imgContainer = document.createElement( 'div' );
        imgContainer.classList.add( 'imgContainer');
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const cityCountry = document.createElement( 'div' );
        cityCountry.classList.add( 'location' );
        const slogan = document.createElement( 'div' );
        slogan.classList.add( 'tagline' );
        const cost = document.createElement( 'div' );
        cost.classList.add( 'price');
        const link = `photographer.html?id=${id}`
        // console.log("LIEN", link);

        // Création des attributs
        linkPhotographer.setAttribute( 'href', link );
        // linkPhotographer.setAttribute( '', id );
        linkPhotographer.setAttribute("arialabel", "page du photographe" );

        article.setAttribute("aria-label", "carte du photographe " + name);

        img.setAttribute( 'src', picture );
        img.setAttribute( 'alt', "Portrait de " + name ); 

        h2.textContent = name;
        h2.setAttribute( 'arialabel', 'nom du photographe' );

        cityCountry.textContent = city+','+' '+country;
        cityCountry.setAttribute( 'arialabel', 'ville du photographe' );

        slogan.textContent = tagline;
        slogan.setAttribute( 'arialabel', 'slogan du photographe' );

        cost.textContent = price+'€/jour';
        cost.setAttribute( 'arialabel', 'prix' );
        
        // Création des éléments HTML
        photographersSection.appendChild(article);
        article.appendChild(linkPhotographer);
        linkPhotographer.appendChild(linkContainer);
        linkContainer.appendChild(imgContainer);
        imgContainer.appendChild(img);
        linkContainer.appendChild(h2);
        article.appendChild(cityCountry);
        article.appendChild(slogan);
        article.appendChild(cost);
        // return (article);
    }
    // return { name, city, country, tagline, price, getUserCardDOM }
    // return { getUserCardDOM }
}





