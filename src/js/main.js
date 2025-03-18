AOS.init({
    duration: 1000, // Durasi animasi (ms)
    easing: "ease-out", // Efek animasi smooth
    once: true, // Animasi hanya terjadi sekali
});


window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loading-screen").style.display = "none";
    }, 200);
});

const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTopBtn.classList.remove("opacity-0", "invisible");
        toTopBtn.classList.add("opacity-100");
    } else {
        toTopBtn.classList.remove("opacity-100");
        toTopBtn.classList.add("opacity-0", "invisible");
    }
});

toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-white/85", "shadow-md", 'backdrop-blur-md'); // Background solid dan shadow
        navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.remove("bg-white/85", "shadow-md", 'backdrop-blur-md');
        navbar.classList.add("bg-transparent");
    }
});