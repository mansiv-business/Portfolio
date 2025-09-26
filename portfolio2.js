let navIcon = document.querySelector("#nav-icon");
let nav = document.querySelector(".navbar");

navIcon.addEventListener("click", () => nav.classList.toggle("clicked-nav"))



let projectLink = document.querySelector(".portfolio-link");
let span = document.querySelector("span");

projectLink.addEventListener("mouseenter" , () =>  span.classList.add("project-desc"))
projectLink.addEventListener("mouseleave" , () =>  span.classList.remove("project-desc"))