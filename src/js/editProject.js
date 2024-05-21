import { addNewProject } from "./addProject"
import createProjectModal from "./createProjectModal"
import displayProjects from "./displayProjects"
import { displayTasks } from "./displayTasks"
import { projectIcons } from "./images"
import keyPressed from "./keyboardKeys"
import { closeModal } from "./modals"
import { projectList } from "./newProject"

const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")
let oldTitle

export function openEditProjectModal(e) {
    modal.classList.toggle("active")
    overlay.classList.toggle("active")
    createProjectModal()

    const projectTitle =
        e.composedPath()[2].children[0].lastElementChild.innerText

    const iconAlt = e.composedPath()[2].children[0].children[0].alt

    const selectedIcon = projectIcons.find((icon) => icon.alt === iconAlt)

    updateProjectModal(projectTitle, selectedIcon)
    window.addEventListener("keydown", keyPressed)
}

export function updateProjectModal(title, icon) {
    // change the header text to Edit Project
    const modalHeader = document.querySelector(".modal-header-text")
    modalHeader.textContent = "Edit Project"

    // fill the input with the name of the project clicked
    const projectTitleDiv = document.querySelector("#project-title")
    projectTitleDiv.value = title

    // update global variable that will be used as reference on the updateProject
    oldTitle = title

    // update the active icon to the project's icon
    const projectIconDiv = document.querySelectorAll(".project-icon")
    projectIconDiv.forEach((div) => {
        div.classList.remove("active-icon")

        if (icon.alt === div.children[0].alt) {
            div.classList.add("active-icon")
        }
    })

    // change the "add project" button text to "edit project"
    const addProjectBtn = document.querySelector(".add-project-btn")
    addProjectBtn.textContent = "Edit Project"
    addProjectBtn.removeEventListener("click", addNewProject)
    addProjectBtn.addEventListener("click", updateProject)
}

function updateProject() {
    const projectTitle = document.querySelector("#project-title")
    const selectedIcon = document.querySelector(".project-icon.active-icon")
    const title = projectTitle.value
    const selectedIconAlt = selectedIcon.children[0].alt
    const icon = projectIcons.find((icon) => icon.alt === selectedIconAlt)

    for (let project of projectList) {
        // find the project on the project list and once it is found update
        if (project.title === oldTitle) {
            project.title = title
            project.icon = icon
            break
        }
    }

    closeModal()
    displayProjects()
    selectEditProject(title)
}

export function selectEditProject(title) {
    const projectNavs = document.querySelectorAll(".projects-nav")
    let projectDiv

    projectNavs.forEach((sidebar) => {
        sidebar.classList.remove("active-section")

        if (title === sidebar.children[0].children[1].textContent) {
            sidebar.classList.add("active-section")
            projectDiv = sidebar
        }
    })

    displayTasks(projectDiv)
}
