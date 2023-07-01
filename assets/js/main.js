/*=============== SHOW MENU ===============*/
const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const nav = document.querySelector("#nav");

bar.addEventListener("click", () => menu.classList.add("show-menu"));

close.addEventListener("click", () => menu.classList.remove("show-menu"));

/*=============== CHANGE BACKGROUND HEADER ===============*/
document.addEventListener("scroll", () => window.scrollY > 50 ? nav.classList.add("bg-visible") : nav.classList.remove("bg-visible"));
