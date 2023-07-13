const navToggle = document.querySelector(".abrir");
const navMenu = document.querySelector(".nav-principal");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})
