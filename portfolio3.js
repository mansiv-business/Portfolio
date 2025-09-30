const divs = document.querySelectorAll("div");

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