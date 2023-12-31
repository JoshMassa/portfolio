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

    // Set the new image source
    mainLogo.src = isMouseover
        ? './assets/images/company-logo.png'
        : './assets/images/coffee-icon.png';

    if (isMouseover) {
        // For transitioning to company logo
        requestAnimationFrame(() => {
            mainLogo.style.opacity = 1;
        });
    } else {
        // For transitioning back to main logo
        requestAnimationFrame(() => {
            mainLogo.style.opacity = 1;
            requestAnimationFrame(() => {
                mainLogo.style.opacity = 0;
                mainLogo.src = './assets/images/coffee-icon.png';
                requestAnimationFrame(() => {
                    mainLogo.style.opacity = 1;
                });
            });
        });
    }
}