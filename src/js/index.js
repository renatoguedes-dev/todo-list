import "../styles/style.css"
import { icons, projectIcons } from "./images"
import displayProjects from "./displayProjects"
import { projectList, createTemplateProject } from "./newProject"
import { handleSidebarClick } from "./displayTasks"
import { createTemplateTask, taskList } from "./newTask"
import startPage from "./startPage"
import { openModal } from "./modals"

const newProjectBtn = document.querySelector("#newProjectBtn")
const newTaskBtn = document.querySelector("#newTaskBtn")
const sidebarNavs = document.querySelectorAll(".sidebar-nav")

newProjectBtn.addEventListener("click", openModal)

sidebarNavs.forEach((bar) => {
    bar.addEventListener("click", handleSidebarClick)
})




startPage()
