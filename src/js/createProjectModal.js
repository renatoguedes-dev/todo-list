import { projectIcons } from "./images"
import { closeModal, removeAllChildNodes } from "./modals"
import {
    createDivElement,
    createLabelElement,
    createInputElement,
    createParagraphElement,
    createButtonElement,
    appendChildren,
} from "./helperFunctions"
import { addNewProject } from "./addProject"

export default function createProjectModal() {
    const modalContent = document.querySelector(".modal-content")
    const modalHeaderDiv = document.querySelector(".modal-header")
    modalHeaderDiv.classList.remove("delete-modal-header")
    const modalHeader = document.querySelector(".modal-header-text")
    modalHeader.textContent = "Create a new project"
    removeAllChildNodes(modalContent)

    // Create the form element
    const form = document.createElement("form")
    form.action = "#"

    // Create fields div
    const fieldsDiv = createDivElement("fields")

    // Create title label and input
    const titleLabel = createLabelElement("project-title", "Title")
    const titleInput = createInputElement(
        "text",
        "project-title",
        "project-title"
    )
    const titleError = createParagraphElement(
        "Please fill out this field.",
        "modal-title-error",
        "hide"
    )

    // Append label, input, and paragraph to fields div
    appendChildren(fieldsDiv, titleLabel, titleInput, titleError)

    // Create icon selection div
    const iconSelectionDiv = createDivElement("icon-selection")

    // Create paragraph for icon selection
    const iconSelectionParagraph = document.createElement("p")
    iconSelectionParagraph.textContent = "Choose an Icon"

    // Create project icons div
    const projectIconsDiv = createDivElement("project-icons")

    // Loop through the projectIcons array and create icon elements
    projectIcons.forEach((icon, index) => {
        const iconDiv = createDivElement("project-icon")
        if (index === 0) {
            iconDiv.classList.add("active-icon")
        }

        const iconImg = document.createElement("img")
        iconImg.src = icon.src
        iconImg.alt = icon.alt

        iconDiv.appendChild(iconImg)
        projectIconsDiv.appendChild(iconDiv)
    })

    // Append paragraph and project icons div to icon selection div
    appendChildren(iconSelectionDiv, iconSelectionParagraph, projectIconsDiv)

    // Append fields div and icon selection div to form
    appendChildren(form, fieldsDiv, iconSelectionDiv)

    // Append form to modal content
    modalContent.appendChild(form)

    // Create modal buttons div
    const modalButtons = createDivElement("modal-buttons")
    const cancelModalBtn = createButtonElement("Cancel", "cancel-modal-btn")
    const addProjectBtn = createButtonElement("Add Project", "add-project-btn")

    appendChildren(modalButtons, cancelModalBtn, addProjectBtn)

    modalContent.appendChild(modalButtons)

    cancelModalBtn.addEventListener("click", closeModal)
    addProjectBtn.addEventListener("click", addNewProject)
    const projectIconDiv = document.querySelectorAll(".project-icon")
    projectIconDiv.forEach((div) => {
        div.addEventListener("click", handleIcons)
    })
    

    return modalContent
}

export function handleIcons(e) {
    const targetBar = e.currentTarget
    const projectIconDiv = document.querySelectorAll(".project-icon")
    projectIconDiv.forEach((div) => {
        div.classList.toggle("active-icon", div === targetBar)
    })
}




