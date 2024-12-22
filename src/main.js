let bars = document.querySelector(".bars");
let navbar = document.querySelector(".nav__bar");

bars.addEventListener("click", () => {
  navbar.classList.toggle("active");
})