import displayProjects from "./displayProjects"
import { createStartingTasksDiv } from "./displayTasks"
import {
    appendChildren,
    createButtonElement,
    createDivElement,
} from "./helperFunctions"
import keyPressed from "./keyboardKeys"
import { closeModal, removeAllChildNodes } from "./modals"
import { projectList, updateProjectList } from "./newProject"
import { taskList, updateTaskList } from "./newTask"

const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")
let projectToDelete

export function openDeleteProjectModal(e) {
    modal.classList.toggle("active")
    overlay.classList.toggle("active")

    const projectTitle =
        e.composedPath()[2].children[0].lastElementChild.innerText

    createDeleteProjectModal(projectTitle)
    projectToDelete = projectTitle
    window.addEventListener("keydown", keyPressed)
}

function createDeleteProjectModal(projectTitle) {
    const modalContent = document.querySelector(".modal-content")
    const modalHeaderDiv = document.querySelector(".modal-header")
    modalHeaderDiv.classList.add("delete-modal-header")
    const modalHeader = document.querySelector(".modal-header-text")
    modalHeader.textContent = "Delete Project"
    removeAllChildNodes(modalContent)

    // create div
    const eraseText = createDivElement("erase-project-text")
    eraseText.innerHTML = `
        <p>Are you sure?</p>
        <p>Project 
        <span class="project-name-deletion">"${projectTitle}"</span> 
        will be gone forever</p>
    `

    appendChildren(modalContent, eraseText)

    // Create modal buttons div
    const modalButtons = createDivElement("modal-buttons")
    const cancelModalBtn = createButtonElement(
        "Cancel",
        "cancel-delete-modal-btn"
    )
    const deleteProjectBtn = createButtonElement(
        "Delete Project",
        "delete-project-btn"
    )

    appendChildren(modalButtons, cancelModalBtn, deleteProjectBtn)

    appendChildren(modalContent, modalButtons)

    cancelModalBtn.addEventListener("click", closeModal)
    deleteProjectBtn.addEventListener("click", deleteProject)

    return modalContent
}

function deleteProject() {
    const updatedProjectList = projectList.filter(
        (project) => project.title !== projectToDelete
    )
    const updatedTaskList = taskList.filter(
        (task) => task.project.title !== projectToDelete
    )
    updateProjectList(updatedProjectList)
    updateTaskList(updatedTaskList)
    closeModal()
    displayProjects()
    createStartingTasksDiv()
    selectAllSidebar()
}

function selectAllSidebar() {
    const allSidebar = document.querySelector(".sidebar-nav")
    allSidebar.classList.add("active-section")
}
