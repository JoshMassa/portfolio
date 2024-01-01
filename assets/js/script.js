// // // // // // //      \\ \\ \\ \\ \\ \\ \\ \\
// // // //   Script for Nav Bar Menu  \\ \\ \\ \\
// // // // // // //        \\ \\ \\ \\ \\ \\ \\ \\
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})


// // // // // // //      \\ \\ \\ \\ \\ \\ \\ \\
// // // //   Script for Logo Toggle   \\ \\ \\ \\
// // // // // // //        \\ \\ \\ \\ \\ \\ \\ \\
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

// // // // // // //      \\ \\ \\ \\ \\ \\ \\ \\
// // // //  Script for Gallery Scroll \\ \\ \\ \\
// // // // // // //        \\ \\ \\ \\ \\ \\ \\ \\
let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    const scrollDistance =calculateScrollDistance();
    scrollContainer.scrollLeft += scrollDistance;
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    const scrollDistance =calculateScrollDistance();
    scrollContainer.scrollLeft -= scrollDistance;
})

function calculateScrollDistance() {

    const baseScrollDistance = 950;
    const minScreenSize = 320;
    const maxScreenSize = 1440;

    const scaleFactor = Math.max(0.2468, (window.innerWidth - minScreenSize) / (maxScreenSize - minScreenSize));

    return baseScrollDistance * scaleFactor;
}