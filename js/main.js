const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-button");
const toggleMenu = (Event) => {
  menu.classList.toggle("is-open");
};

menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);
