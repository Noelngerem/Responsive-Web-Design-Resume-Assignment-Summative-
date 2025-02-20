// a toggle for mobile navigation menu
function toggleMenu() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

// this block of code is going to hide the menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav").classList.remove("active");
    });
});

function adjustFooterIcons() {
    const mediaIcons = document.querySelector(".media-icons");
    if (window.innerWidth <= 600) {
        mediaIcons.classList.add("mobile-footer");
    } else {
        mediaIcons.classList.remove("mobile-footer");
    }
}

window.addEventListener("load", adjustFooterIcons);
window.addEventListener("resize", adjustFooterIcons);
