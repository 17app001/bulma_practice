// mobile menu

const burgerEl = document.querySelector("#burger");
const navbarMenuEl = document.querySelector("#nav-links");

burgerEl.addEventListener("click", () => {
    navbarMenuEl.classList.toggle('is-active');
});