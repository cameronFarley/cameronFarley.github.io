const button = document.querySelector('#theme-button');
const theme = document.querySelector('#theme-link');
const home_link = document.querySelector('#home-link');
let navAnimationController = null;

function applyTheme(themeName) {
    theme.setAttribute("href", themeName);
    localStorage.setItem("theme", themeName);
    
    if (themeName === "style2.css") { // change the text for the index.html link
        home_link.textContent = "CF";
    } else {
        home_link.textContent = "Home";
    }
    Style1Change();
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('theme') || "style1.css";
    applyTheme(savedTheme);
});

if (button) {
    button.addEventListener("click", function() {
        const nextTheme = theme.getAttribute("href") === "style1.css" ? "style2.css" : "style1.css";
        applyTheme(nextTheme);
    });
}

function Style1Change() { // update nav bar animations (enable/disable)
    const navLinksContainer = document.querySelector('.nav-links');
    const slider = document.querySelector('.nav-slider');
    const links = document.querySelectorAll('.nav-links a');
    const activeLink = document.querySelector('.current-link');

    if (theme.getAttribute("href") !== "style1.css") {
        if (navAnimationController) navAnimationController.abort();
        if (slider) {
            slider.style.opacity = '0';
            slider.style.width = '0'; // reset sizing to fix phantom offset from style1 -> style2
            slider.style.height = '0';
        }
        return; 
    }

    if (navAnimationController) navAnimationController.abort();
    navAnimationController = new AbortController();
    const { signal } = navAnimationController;

    function moveSliderTo(element) {
        if (!element || !slider) return;
        slider.style.opacity = '1';
        slider.style.width = `${element.offsetWidth}px`;
        slider.style.height = `${element.offsetHeight}px`;
        slider.style.transform = `translate(${element.offsetLeft}px, ${element.offsetTop}px)`;
    }

    if (activeLink) moveSliderTo(activeLink);

    links.forEach(link => {
        link.addEventListener('mouseenter', () => moveSliderTo(link), { signal });
    });

    navLinksContainer.addEventListener('mouseleave', () => {
        activeLink ? moveSliderTo(activeLink) : (slider.style.opacity = '0');
    }, { signal });
}