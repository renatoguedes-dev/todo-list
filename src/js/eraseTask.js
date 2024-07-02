import { createTasksDiv, selectedSidebarNav } from "./displayTasks";
import {
    appendChildren,
    createButtonElement,
    createDivElement,
} from "./helperFunctions";
import keyPressed from "./keyboardKeys";
import { closeModal, removeAllChildNodes } from "./modals";
import { projectList } from "./newProject";
import { taskList, updateTaskList } from "./newTask";

const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
let tasktoDelete;

export function openDeleteTaskModal(e) {
    modal.classList.toggle("active");
    overlay.classList.toggle("active");

    const taskTitle = e.composedPath()[3].children[0].children[1].innerText;
    createDeleteTaskModal(taskTitle);
    tasktoDelete = taskTitle;

    window.addEventListener("keydown", keyPressed);
}

function createDeleteTaskModal(taskTitle) {
    const modalContent = document.querySelector(".modal-content");
    const modalHeaderDiv = document.querySelector(".modal-header");
    modalHeaderDiv.classList.add("delete-modal-header");
    const modalHeader = document.querySelector(".modal-header-text");
    modalHeader.textContent = "Delete Task";
    removeAllChildNodes(modalContent);

    // create div
    const eraseText = createDivElement("erase-task-text");
    eraseText.innerHTML = `
        <p>Are you sure?</p>
        <p>Task 
        <span class="task-name-deletion">"${taskTitle}"</span> 
        will be gone forever</p>
    `;

    appendChildren(modalContent, eraseText);

    // Create modal buttons div
    const modalButtons = createDivElement("modal-buttons");
    const cancelModalBtn = createButtonElement(
        "Cancel",
        "cancel-delete-modal-btn"
    );
    const deleteTaskBtn = createButtonElement("Delete Task", "delete-task-btn");

    appendChildren(modalButtons, cancelModalBtn, deleteTaskBtn);
    appendChildren(modalContent, modalButtons);

    cancelModalBtn.addEventListener("click", closeModal);
    deleteTaskBtn.addEventListener("click", deleteTask);

    return modalContent;
}

function deleteTask() {
    const mainContent = document.querySelector("#mainContent");

    // update projects tasks
    for (let project of projectList) {
        project.tasks.forEach((task) => {
            if (task.title === tasktoDelete) {
                project.removeTask(task);
            }
        });
    }

    // update taskList
    const updatedTaskList = taskList.filter(
        (task) => task.title !== tasktoDelete
    );
    updateTaskList(updatedTaskList);

    closeModal();

    // update tasks display
    removeAllChildNodes(mainContent);
    createTasksDiv(taskList, selectedSidebarNav);
}
