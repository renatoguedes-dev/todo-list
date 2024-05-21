const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.getElementById("menu-overlay");
const sidebar = document.getElementById("sidebar");

export default function toggleMenu() {
  menuBtn.classList.toggle("open");
  menuOverlay.classList.toggle("menu-active");
  sidebar.classList.toggle("menu-active");
}

menuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);