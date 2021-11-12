const MobileMenu = document.querySelector(".mobile-menu");
const Menu = document.querySelector(".menu");

MobileMenu.addEventListener("click", function () {
  MobileMenu.classList.toggle("fa-times");
  MobileMenu.classList.toggle("fa-bars");
  Menu.style.display = Menu.style.display == "flex" ? "none" : "flex";
});
