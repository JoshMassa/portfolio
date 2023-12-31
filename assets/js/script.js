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

function toggleLogo(isMouseover) {
    if (isMouseover) {
        mainLogo.style.opacity = 0; // Set opacity to 0 for a smooth transition
        setTimeout(() => {
            mainLogo.src = './assets/images/company-logo.png'; // Replace with the path to your company logo
            mainLogo.style.opacity = 1; // Set opacity back to 1
        }, 300); // Wait for 300 milliseconds (matching the transition duration)
    } else {
        mainLogo.style.opacity = 0;
        setTimeout(() => {
            mainLogo.src = './assets/images/coffee-icon.png'; // Replace with the path to your main logo
            mainLogo.style.opacity = 1;
        }, 300);
    }
}