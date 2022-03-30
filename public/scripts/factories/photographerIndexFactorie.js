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
        const informationPhotograph = document.createElement( 'div' );
        informationPhotograph.classList.add( 'informationPhotograph' );
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
        linkPhotographer.setAttribute( "role", "Link(h2) + image" );
        linkPhotographer.setAttribute("aria-label", name );

        article.setAttribute("aria-label", "carte du photographe " + name);

        img.setAttribute( 'src', picture );
        img.setAttribute( 'alt', 'Portrait de ' + name ); 

        h2.textContent = name;
        h2.setAttribute( 'aria-label', 'nom du photographe' );

        informationPhotograph.setAttribute('role', 'Text paragraph');
        informationPhotograph.setAttribute( 'tabindex', '0')

        cityCountry.textContent = city+','+' '+country;
        cityCountry.setAttribute( 'aria-label', 'ville du photographe' );

        slogan.textContent = tagline;
        slogan.setAttribute( 'aria-label', 'slogan du photographe' );

        cost.textContent = price+'€/jour';
        cost.setAttribute( 'aria-label', 'prix' );
        
        // Création des éléments HTML
        photographersSection.appendChild(article);
        article.appendChild(linkPhotographer);
        linkPhotographer.appendChild(linkContainer);
        linkContainer.appendChild(imgContainer);
        imgContainer.appendChild(img);
        linkContainer.appendChild(h2);
        article.appendChild(informationPhotograph);
        informationPhotograph.appendChild(cityCountry);
        informationPhotograph.appendChild(slogan);
        informationPhotograph.appendChild(cost);
        // return (article);

        document.querySelector('.logo').focus();
        // if (e.key === "Tab") {  
        //     focusInModal(e);
        //   }


    }
    // return { name, city, country, tagline, price, getUserCardDOM }
    // return { getUserCardDOM }
}





