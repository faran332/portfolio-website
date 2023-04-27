const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const serviceID = "service_4pu43vt";
const templateID = "template_c5nb9sd";
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

function sendMessage() {
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message-box").value,
  };

  emailjs
    .send(serviceID, templateID, templateParams)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message-box").value = "";
      console.log(res);
      alert("Your message has been sent successfully. Thank you.");
    })
    .catch((err) => console.log(err));
}
