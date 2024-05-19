import "../styles/style.css"
import openModal from "./modals"
import { icons, projectIcons } from "./images";
import displayProjects from "./displayProjects";
import { projectList, createTemplateProject } from "./newProject"
import { handleSidebarClick } from "./displayTasks";
import { createTemplateTask, taskList } from "./newTask";
import startPage from "./startPage";



const newProjectBtn = document.querySelector("#newProjectBtn")
const newTaskBtn = document.querySelector("#newTaskBtn")
const sidebarNavs = document.querySelectorAll(".sidebar-nav")

newProjectBtn.addEventListener("click", openModal)
newTaskBtn.addEventListener("click", openModal)
sidebarNavs.forEach(bar => {
    bar.addEventListener("click", handleSidebarClick)
})


startPage()




