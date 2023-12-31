const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})




const mainLogo = document.getElementById('main-logo');

mainLogo.addEventListener('mouseover', function () {
    toggleLogo(true); // Pass true to indicate mouseover
});

mainLogo.addEventListener('mouseout', function () {
    toggleLogo(false); // Pass false to indicate mouseout
});

mainLogo.addEventListener('touchstart', function (event) {
    event.preventDefault(); // Prevent default touch behavior
    toggleLogo(true);
});

mainLogo.addEventListener('touchend', function (event) {
    event.preventDefault();
    toggleLogo(false);
});

function toggleLogo(isMouseover) {
    if (isMouseover) {
        mainLogo.style.opacity = 0; // Set opacity to 0 for a smooth transition
        
        mainLogo.src = isMouseover
        ? './assets/images/company-logo.png'
        : './assets/images/coffee-icon.png';

    // Force a reflow before changing opacity to trigger the transition
    void mainLogo.offsetWidth;

    mainLogo.style.opacity = 1;
}}