import "../styles/style.css";
import { handleSidebarClick } from "./displayTasks";
import startPage from "./startPage";
import { openModal } from "./modals";
import toggleMenu from "./menuBtn";

const newProjectBtn = document.querySelector("#newProjectBtn");
const sidebarNavs = document.querySelectorAll(".sidebar-nav");
const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.getElementById("menu-overlay");

newProjectBtn.addEventListener("click", openModal);

sidebarNavs.forEach((bar) => {
    bar.addEventListener("click", handleSidebarClick);
});

menuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

startPage();
