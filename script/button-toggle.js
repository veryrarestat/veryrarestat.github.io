import { body, homePage } from './cover-toggle.js';

const button = document.querySelector('.back-to-cover');

button.addEventListener('click', () => {
    console.log("Clicked");

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    body.style.overflowY = "hidden";
    homePage.style.display = "block";

    homePage.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        homePage.style.opacity = 1;
    }, 100);
});
