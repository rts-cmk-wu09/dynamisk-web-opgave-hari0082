document.addEventListener("DOMContentLoaded", function() {

    // hero

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

    // services

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

    // facilities

    let facilitySection = document.querySelector(".facilities");

    let heading = document.createElement("h2");
    heading.textContent = facilities.headline

    facilitySection.append(heading)
    
    let facilitiesWrapper = document.createElement("div")
    facilitiesWrapper.classList = "faciWrap";

    facilitySection.append(facilitiesWrapper);

    //------ Det her kan man også gøre // 
    /* document.querySelector('.facilities').innerHTML = `
    <h2>${facilities.headline}</h2>
    ` */
    //------
   
    facilities.options.forEach((option) => { 
        let card = document.createElement("section");
        card.classList = "facility-section";
        let image = document.createElement("img");
        let title = document.createElement("h3");
        let tekst = document.createElement("p");
        let show = document.createElement("a");

        image.src = option.icon
        title.textContent = option.headline;
        tekst.textContent = option.text;
        show.textContent = option.a;

        card.append(image);
        card.append(title);
        card.append(tekst);
        card.append(show);

        facilitiesWrapper.append(card)

    });

    // sites

    let siteSection = document.querySelector(".sites");

    let aside = document.createElement("div")
    aside.classList = "aside"
    siteSection.append(aside)

    let headline = document.createElement("h2");
    headline.textContent = sites.headline;
    aside.append(headline)

    let text = document.createElement("p");
    text.textContent = sites.text;
    aside.append(text)

    let btn = document.createElement("button");
    btn.innerHTML = `<img src="${sites.btnicon}">Start`;
    aside.append(btn); 
    
    let siteWrapper = document.createElement("div")
    siteWrapper.classList = "siteWrap";
    siteSection.append(siteWrapper);


    sites.places.forEach((place) => { 
        let card = document.createElement("section");
        card.classList = "site-section";
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let city = document.createElement("p");
        let view = document.createElement("a");

        image.src = place.img;
        name.textContent = place.name;
        city.textContent = place.city;
        view.textContent = place.a;

        card.append(image);
        card.append(name);
        card.append(city);
        card.append(view);

        siteWrapper.append(card)

    });


}) // DOMContentLoaded slut