function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {       
        const article = document.createElement( 'article' );  
        const linkPhotographer = document.createElement( 'a' );
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
        
        linkPhotographer.setAttribute("href", "#" );
        // linkPhotographer.setAttribute("arialabel", "lien du photographe" );

        img.setAttribute("src", picture);
        img.setAttribute("alt", name); // comment insérer "portrait de" ?

        h2.textContent = name;
        h2.setAttribute("arialabel", "nom du photographe");

        cityCountry.textContent = city+','+' '+country;
        cityCountry.setAttribute("arialabel", "ville du photographe");

        slogan.textContent = tagline;
        slogan.setAttribute("arialabel", "slogan du photographe");

        cost.textContent = price+"€/jour";
        cost.setAttribute("arialabel", "prix");
        
        // article.appendChild(imgContainer);
        article.appendChild(linkPhotographer);
        linkPhotographer.appendChild(linkContainer);
        linkContainer.appendChild(imgContainer);
        imgContainer.appendChild(img);
        linkContainer.appendChild(h2);
        article.appendChild(cityCountry);
        article.appendChild(slogan);
        article.appendChild(cost);

        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}