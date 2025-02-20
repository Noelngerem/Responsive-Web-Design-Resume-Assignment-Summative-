// Toggle mobile navigation menu
function toggleMenu() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

// Ensure menu hides when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav").classList.remove("active");
    });
});

// Responsive Footer Icons
function adjustFooterIcons() {
    const mediaIcons = document.querySelector(".media-icons");
    if (window.innerWidth <= 600) {
        mediaIcons.classList.add("mobile-footer");
    } else {
        mediaIcons.classList.remove("mobile-footer");
    }
}

// Run on page load and window resize
window.addEventListener("load", adjustFooterIcons);
window.addEventListener("resize", adjustFooterIcons);
