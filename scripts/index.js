// ==========================================
// NAVEGACIÓN MÓVIL
// ==========================================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Animación del ícono hamburguesa
    menuToggle.classList.toggle("active");
  });

  // Cerrar menú al hacer click en un enlace
  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ==========================================
// CAMBIO DE NAVBAR AL HACER SCROLL
// ==========================================
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Agregar sombra al navbar cuando se hace scroll
  if (scrollTop > 50) {
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
  }

  lastScrollTop = scrollTop;
});

// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observar las tarjetas de proyectos
document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Observar las tarjetas de tecnología
document.querySelectorAll(".tech-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// ==========================================
// GALERÍA DE PROYECTOS (Cambiar imagen principal)
// ==========================================
document.querySelectorAll(".project-gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    const mainImg =
      this.closest(".project-images").querySelector(".project-img-main");
    const tempSrc = mainImg.src;
    mainImg.src = this.src;
    this.src = tempSrc;
  });
});

// ==========================================
// TYPING EFFECT EN EL HERO (Opcional)
// ==========================================
// Descomenta esta sección si quieres un efecto de escritura en tu subtítulo

const subtitleElement = document.querySelector(".hero-subtitle");
if (subtitleElement) {
  const originalText = subtitleElement.textContent;
  subtitleElement.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < originalText.length) {
      subtitleElement.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  // Iniciar el efecto después de un pequeño delay
  setTimeout(typeWriter, 500);
}

// ==========================================
// CONTADOR DE SCROLL PARA PROGRESS BAR
// ==========================================
// Agregar una barra de progreso en la parte superior

// Crear elemento de progreso
const progressBar = document.createElement("div");
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(to right, #6366f1, #14b8a6);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.pageYOffset / windowHeight) * 100;
  progressBar.style.width = scrolled + "%";
});

// ==========================================
// COPIAR EMAIL AL HACER CLICK
// ==========================================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const email = this.href.replace("mailto:", "");
  });
});

// ==========================================
// CURSOR PERSONALIZADO
// ==========================================

const cursor = document.createElement("div");
cursor.className = "custom-cursor";
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #6366f1;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
`;
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 10 + "px";
  cursor.style.top = e.clientY - 10 + "px";
});

document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(1.5)";
  });
  element.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
  });
});
