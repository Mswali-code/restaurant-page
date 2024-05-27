import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about-us.js";
import renderContact from "./contact-us.js";

document.addEventListener("DOMContentLoaded", function() {

    const homeButtons = document.querySelectorAll("#home-button");
    const menuButtons = document.querySelectorAll("#menu-button");
    const aboutButtons = document.querySelectorAll("#about-button");
    const contactButtons = document.querySelectorAll("#contact-button");
    const hamburgerButton = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-navigation");
    const divContent = document.querySelector("#content");

    homeButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            clearContent();
            renderHome();
        });
    });

    menuButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            clearContent();
            renderMenu();
        });
    });

    aboutButtons.forEach(function(button) {
        button.addEventListener("click", function(){
            clearContent();
            renderAbout();
        });
    });

    contactButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            clearContent();
            renderContact();
        });
    });

    hamburgerButton.addEventListener("click", function () {
        hamburgerButton.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    renderHome();

    function clearContent() {

        divContent.innerHTML = "";
    };

});