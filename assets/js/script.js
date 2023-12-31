const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})




const mainLogo = document.getElementById('main-logo');
let isCompanyLogo = false;

mainLogo.addEventListener('click', function () {
    isCompanyLogo = !isCompanyLogo;
    toggleLogo(isCompanyLogo);
});

if (window.innerWidth > 1023) {
    mainLogo.addEventListener('mouseover', function () {
        toggleLogo(true);
    });

    mainLogo.addEventListener('mouseout', function () {
        toggleLogo(false);
    });
} else {
    mainLogo.addEventListener('touchstart', function (event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            isCompanyLogo = !isCompanyLogo;
            toggleLogo(isCompanyLogo);
        }
    });
}

function toggleLogo(isCompanyLogo) {
    mainLogo.style.opacity = 0;

    mainLogo.src = isCompanyLogo
        ? './assets/images/company-logo.png'
        : './assets/images/coffee-icon.png';

    mainLogo.classList.toggle('larger', isCompanyLogo);

    requestAnimationFrame(() => {
        mainLogo.style.opacity = 1;
    });
}