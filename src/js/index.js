import "../styles/style.css"
import { icons, projectIcons } from "./images"
import displayProjects from "./displayProjects"
import { projectList, createTemplateProject } from "./newProject"
import { handleSidebarClick } from "./displayTasks"
import { createTemplateTask, taskList } from "./newTask"
import startPage from "./startPage"
import { openModal } from "./modals"
import toggleMenu from "./menuBtn"

const newProjectBtn = document.querySelector("#newProjectBtn")
const sidebarNavs = document.querySelectorAll(".sidebar-nav")
const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.getElementById("menu-overlay");

newProjectBtn.addEventListener("click", openModal)

sidebarNavs.forEach((bar) => {
    bar.addEventListener("click", handleSidebarClick)
})

menuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

startPage()
