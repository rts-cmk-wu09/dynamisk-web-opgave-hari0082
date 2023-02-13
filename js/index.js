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

    let facilitySection = document.querySelector(".facilities");

    document.querySelector('.facilities').innerHTML = `
    <h2>${facilities.headline}</h2>
    `
    // du er nået hertil.
    // det her virker ikke endnu...
    options.forEach((option) => { 
        let card = document.createElement("section");
        card.classList = "facility-section";
        let image = document.createElement("img");
        let tekst = document.createElement("p");
        let link = document.createElement("a");

        image.src = option.icon
        titel.textContent = option.headline;
        tekst.textContent = option.text;

        card.append(image);
        card.append(this.title);
        card.append(tekst);
        
        options.append(card);

    });
    
}) // DOMContentLoaded slut