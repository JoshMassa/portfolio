const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})




const mainLogo = document.getElementById('main-logo');
let isCompanyLogo = false;

mainLogo.addEventListener('mouseover', function () {
    toggleLogo(true);
});

mainLogo.addEventListener('mouseout', function () {
    toggleLogo(false);
});

mainLogo.addEventListener('touchstart', function (event) {
    event.preventDefault(); // Prevent default touch behavior
    isCompanyLogo = !isCompanyLogo;
    toggleLogo(isCompanyLogo);
});

function toggleLogo(isCompanyLogo) {
    mainLogo.style.opacity = 0;

    mainLogo.src = isCompanyLogo
        ? './assets/images/company-logo.png'
        : './assets/images/coffee-icon.png';

    // Add or remove the 'larger' class based on the logo being displayed
    mainLogo.classList.toggle('larger', isCompanyLogo);

    requestAnimationFrame(() => {
        mainLogo.style.opacity = 1;
    });
}