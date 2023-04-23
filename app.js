const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
let popup = document.getElementById("contact-form");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function openContactForm() {
  popup.classList.add("open-contact__form--container");
}

function closeContactForm() {
  popup.classList.remove("open-contact__form--container");
}
