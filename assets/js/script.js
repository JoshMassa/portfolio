const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})




const mainLogo = document.getElementById('main-logo');

mainLogo.addEventListener('mouseover', function () {
    toggleLogo(true);
});

mainLogo.addEventListener('mouseout', function () {
    toggleLogo(false);
});

mainLogo.addEventListener('touchstart', function (event) {
    event.preventDefault();
    toggleLogo(true);
});

mainLogo.addEventListener('touchend', function (event) {
    event.preventDefault();
    toggleLogo(false);
});

function toggleLogo(isMouseover) {
    mainLogo.style.opacity = 0;

    mainLogo.src = isMouseover
        ? './assets/images/company-logo.png'
        : './assets/images/coffee-icon.png';

    mainLogo.addEventListener('transitionend', function onTransitionEnd() {
        mainLogo.removeEventListener('transitionend', onTransitionEnd);

        // Set opacity to 1 after the transition is complete
        mainLogo.style.opacity = 1;
    });
}