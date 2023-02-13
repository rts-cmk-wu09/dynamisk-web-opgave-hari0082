document.addEventListener("DOMContentLoaded", function() {

    hero.headline = hero.headline.replace(
        "save your time",
        "<span>save your time</span>"
    );

    document.querySelector('.hero').innerHTML = `
    <figure class="hero-pic">
    <img src="${hero.image}" alt="">
    </figure>
    <section class="hero-container">
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <button class="hero-btn">
    <img src="${hero.icon}" alt="">
        <p>Explore</p>
    </button>
    </section>
    `

    let serviceSection = document.querySelector(".services");

    services.forEach((service) => { 
        let card = document.createElement("article");
        card.classList = "article-cards";
        let image = document.createElement("img");
        let titel = document.createElement("h3");
        let tekst = document.createElement("p");
        let link = document.createElement("a");

        image.src = service.illustration;
        titel.textContent = service.headline;
        tekst.textContent = service.text;
        link.textContent = service.linktext;

        card.append(image);
        card.append(titel);
        card.append(tekst);
        card.append(link);  
        serviceSection.append(card);

    });

    
    
}) // DOMContentLoaded slut