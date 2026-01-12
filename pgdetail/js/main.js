// Scroll suave
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });

    // cerrar menú móvil al hacer clic
    navMenu.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

// Toggle del menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  hamburger.classList.toggle("active");
});
