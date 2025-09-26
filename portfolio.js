const Darkmode = document.querySelector(".nav-btn__1");
const Lightmode = document.querySelector(".nav-btn__2");


    let body = document.querySelector("body");
    let texts = body.querySelectorAll("p");
    let headings = body.querySelectorAll("h1,h2,h3,h4");
    let cards = body.querySelectorAll(".card");
    let links = body.querySelectorAll("a");

    let footer = body.querySelector(".footer")
    let nav = body.querySelector(".navbar");


Darkmode.addEventListener("click" , () => {
    body.classList.add("darkBody");
    cards.forEach((card) => card.classList.add("darkCard"));
    texts.forEach((text) => text.classList.add("darkParagraph"));
    headings.forEach((heading) => heading.classList.add("darkHeading"));
    links.forEach((link) => link.classList.add("darkParagraph"));

    footer.classList.add("darkFooter");
    nav.classList.add("darkCard");
})

Lightmode.addEventListener("click" , () =>{

    body.classList.remove("darkBody");
    cards.forEach((card) => card.classList.remove("darkCard"));
    texts.forEach((text) => text.classList.remove("darkParagraph"));
    headings.forEach((heading) => heading.classList.remove("darkHeading"));
    links.forEach((link) => link.classList.remove("darkParagraph"))

    footer.classList.remove("darkFooter");
    nav.classList.remove("darkCard");

})