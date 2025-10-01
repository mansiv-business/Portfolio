const divs = document.querySelectorAll("h1,h2,h3,h4,p");
const img = document.querySelector(".portfolio-images");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
},{
    threshold: 0.5
})

divs.forEach(div => observer.observe(div))

img.addEventListener('wheel', (e) => {
  // Prevent vertical scroll
  e.preventDefault();

  // Scroll horizontally
  img.scrollLeft += e.deltaY * 10;
}, { passive: false }); // Important to allow preventDefault
