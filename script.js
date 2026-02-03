window.onload = function () {

    const img = document.querySelector('.hero-img');
    const intro = document.querySelector('.Intro');

    // Initial state
    img.style.opacity = "0";
    img.style.transform = "translateY(40px)";
    intro.style.opacity = "0";
    intro.style.transform = "translateY(40px)";

    // Image animation
    setTimeout(() => {
        img.style.transition = "all 1s ease";
        img.style.opacity = "1";
        img.style.transform = "translateY(0)";
    }, 300);

    // Text animation
    setTimeout(() => {
        intro.style.transition = "all 1s ease";
        intro.style.opacity = "1";
        intro.style.transform = "translateY(0)";
    }, 700);

};
