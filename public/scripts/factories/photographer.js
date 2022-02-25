function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
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

        img.setAttribute("src", picture)
        h2.textContent = name;
        cityCountry.textContent = city+','+' '+country;
        slogan.textContent = tagline;
        cost.textContent = price+"€/jour";

        article.appendChild(imgContainer);
        imgContainer.appendChild(img);
        article.appendChild(h2);
        article.appendChild(cityCountry);
        article.appendChild(slogan);
        article.appendChild(cost);
        
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}