/* CONFIGURAÇÃO: altere os links e o número nesta área. */
// TROQUE PELO SEU NÚMERO: use código do país + DDD + número, sem espaços.
const WHATSAPP_NUMBER = "5517999999999";
const INSTAGRAM_URL = "https://instagram.com/";
const GITHUB_URL = "https://github.com/";
const PROJECT_LINKS = {
  "BELLA NAPOLI": "#BELLA-NAPOLI",
  "DOM BLACK": "#DOM-BLACK",
  "URBAN 12": "#URBAN-12",
  "VITRINE": "#VITRINE"
};

function openWhatsApp(message) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message || "Olá! Vi seu portfólio e gostaria de saber mais sobre um site.")}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Links de contato compartilham a mesma função e a mesma mensagem configurável.
document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp(link.dataset.message);
  });
});

// Menu mobile acessível.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function closeMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    mainNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });
  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

// Projetos demonstrativos: avisa antes de navegar para links ainda não publicados.
const toast = document.querySelector(".toast");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3300);
}

document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const name = link.dataset.project;
    const url = PROJECT_LINKS[name];
    const isPlaceholder = !url || url.startsWith("#");
    if (isPlaceholder) {
      event.preventDefault();
      showToast("Projeto demonstrativo. O link do projeto será adicionado aqui.");
      return;
    }
    link.href = url;
  });
});

// Perfis sociais em um único lugar para facilitar a edição.
document.querySelectorAll('[data-social="instagram"]').forEach((link) => link.href = INSTAGRAM_URL);
document.querySelectorAll('[data-social="github"]').forEach((link) => link.href = GITHUB_URL);

// Entrada suave dos elementos, com fallback para navegadores sem IntersectionObserver.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
