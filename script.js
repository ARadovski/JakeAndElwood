// alert("TestTest");

const openMenu = document.querySelector(".btn-menu");
const closeMenu = document.querySelector(".btn-close");
const nav = document.querySelector(".nav");

openMenu.addEventListener("click", () => {
    nav.classList.add("menu-open");
});

closeMenu.addEventListener("click", () => {
    nav.classList.remove("menu-open");
});




