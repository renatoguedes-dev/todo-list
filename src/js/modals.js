import keyPressed from "./keyboardKeys"
import createProjectModal from "./createProjectModal"
import createTaskModal from "./createTaskModal"

const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")
const modalCloseBtn = document.querySelector("#modalCloseBtn")

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

export function openModal(e) {
    const target = e.currentTarget.id
    modal.classList.toggle("active")
    overlay.classList.toggle("active")

    if (target === "newProjectBtn") {
        createProjectModal()
    } else if (target === "newTaskBtn") {
        createTaskModal()
    }

    window.addEventListener("keydown", keyPressed)
}

export function closeModal() {
    modal.classList.remove("active")
    overlay.classList.remove("active")
}



modalCloseBtn.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)
