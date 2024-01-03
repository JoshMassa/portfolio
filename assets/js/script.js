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

    let scrollDistance;

   if (window.matchMedia("(max-width: 373px)").matches) {
       scrollDistance = getComputedStyle(document.documentElement)
           .getPropertyValue('--scroll-distance-small')
           .trim();
   } else if (window.matchMedia("(min-width: 374px) and (max-width: 500px)").matches) {
       scrollDistance = getComputedStyle(document.documentElement)
           .getPropertyValue('--scroll-distance-medium')
           .trim();
   } else if (window.matchMedia("(min-width: 501px) and (max-width: 712px)").matches) {
    scrollDistance = getComputedStyle(document.documentElement)
        .getPropertyValue('--scroll-distance-large')
        .trim();
   } else {
    scrollDistance = getComputedStyle(document.documentElement)
        .getPropertyValue('--scroll-distance-x-large')
        .trim();
}
   

   return parseFloat(scrollDistance);
}

// // // // // // //      \\ \\ \\ \\ \\ \\ \\ \\
// // // // //  Script for About Me \\ \\ \\ \\ \\
// // // // // // //        \\ \\ \\ \\ \\ \\ \\ \\
document.getElementById('about-heading').addEventListener('click', function() {
    toggleVisibility();
});

document.getElementById('about-content').addEventListener('click', function() {
    toggleVisibility();
});

function toggleVisibility() {
    var aboutHeading = document.getElementById('about-heading');
    var aboutContent = document.getElementById('about-content');
    
    aboutHeading.classList.toggle('hidden');
    aboutContent.classList.toggle('hidden');
}

// // // // // // //      \\ \\ \\ \\ \\ \\ \\ \\
// // //  Script for Smooth Scroll Navbar \\ \\ \\
// // // // // // //        \\ \\ \\ \\ \\ \\ \\ \\
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // // // // // //      \\ \\ \\ \\ \\ \\ \\ \\
// // //  Script for Project Img Overlay  \\ \\ \\
// // // // // // //        \\ \\ \\ \\ \\ \\ \\ \\
var overlays = document.getElementsByClassName('image-overlay');
var shouldShowOverlay = true;

for (let i = 0; i < overlays.length; i++) {
 overlays[i].addEventListener('click', function(event) {
   event.stopPropagation();
   if (shouldShowOverlay) {
     this.classList.add('hide');
   }
   shouldShowOverlay = false;
 });
}

document.addEventListener('click', function() {
 if (!shouldShowOverlay) {
   for (let i = 0; i < overlays.length; i++) {
     overlays[i].classList.remove('hide');
   }
 }
 shouldShowOverlay = true;
});
