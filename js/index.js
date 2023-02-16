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


    // advantages

    let advantagesSection = document.querySelector(".advantages");
    
    let titel = document.createElement("h2");
    titel.textContent = "Our Advantages";
    advantagesSection.append(titel);

    let adWrapper = document.createElement("div")
    adWrapper.classList = "adWrap";
    advantagesSection.append(adWrapper);

    advantages.forEach((advantage) => { 
        let card = document.createElement("section");
        card.classList = "advantage-section";
        let image = document.createElement("img");
        let title = document.createElement("h3");
        let tekst = document.createElement("p");

        image.src = advantage.icon
        title.textContent = advantage.headline;
        tekst.textContent = advantage.text;

        card.append(image);
        card.append(title);
        card.append(tekst);

        adWrapper.append(card)

    });

    // footer

    let body = document.querySelector("body")

    let footer = document.createElement("footer");
    footer.classList = "footer";
    body.append(footer);

    let container = document.createElement("div")
    container.classList = "fotter-con";
    footer.append(container)

    let rightside = document.createElement("div")
    rightside.classList = "rightside"
    container.append(rightside)

    let overskrift = document.createElement("h4");
    overskrift.textContent = footerdata.headline;
    rightside.append(overskrift)

    let tekst = document.createElement("p");
    tekst.textContent = footerdata.text;
    rightside.append(tekst)

    // wrapper til infos
    let infoWrap = document.createElement("section");
    infoWrap.classList = "info-wrapper";
    container.append(infoWrap);


    // løkke til mine array
    
    footerdata.infos.forEach((info) => { 
        let card = document.createElement("section");
        infoWrap.append(card)
        card.classList = "info-section";
        
        let title = document.createElement("h4");
        title.textContent = info.title;
        card.append(title);

        let list = document.createElement("ul")
        card.append(list)
        
        info.links.forEach((link) => {

            let item = document.createElement("li");
            list.append(item) 
            let a = document.createElement("a");
            item.append(a)
            a.innerText = link
            a.href = "#"
        })
        
    });


    // wrapper til footer bottom info
    let fotterBottom = document.createElement("section");
    fotterBottom.classList = "footer-bot";
    footer.append(fotterBottom);

    let right = document.createElement("p");
    right.textContent = footerdata.rights;
    fotterBottom.append(right)

    let bottomlist = document.createElement("ul")
    fotterBottom.append(bottomlist)
    footerdata.bottomlinks.forEach((link) => {

        let item = document.createElement("li");
        bottomlist.append(item) 

        let a = document.createElement("a");
        item.append(a)
        a.innerText = link
        a.href = "#"
    });
    
    

}) // DOMContentLoaded slut