document.addEventListener("DOMContentLoaded", function() {


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
        


    // slå dig løs her... 
    
    //eksempel på at udskrive alle overskrifter i services i konsollen:
/* services.forEach(service => { 
        console.log(service.text)
}) */
    
}) // DOMContentLoaded slut