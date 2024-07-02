import keyPressed from "./keyboardKeys";
import { projectList } from "./newProject";

const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

export function openDetailsModal(e) {
    modal.classList.toggle("active");
    overlay.classList.toggle("active");

    const taskTitle = e.composedPath()[2].children[0].children[1].innerText;
    const { projectName, selectedTask } = findTask(taskTitle);
    createDetailsModal(projectName, selectedTask);

    window.addEventListener("keydown", keyPressed);
}

function createDetailsModal(projectName, selectedTask) {
    const modalHeader = document.querySelector(".modal-header-text");
    modalHeader.textContent = "Task Details";
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `
        <div class="project-detail-div details-divs">
            <p class="details-left-column">Project:</p>
            <p class="details-right-column">${projectName}</p>
        </div>
        <div class="task-title-detail details-divs">
            <p class="details-left-column">Title:</p>
            <p class="details-right-column">${selectedTask.title}</p>
        </div>
        <div class="task-description-div details-divs">
            <p class="details-left-column">Description:</p>
            <p class="details-right-column">${selectedTask.description}</p>
        </div>
        <div class="due-date-div details-divs">
            <p class="details-left-column">Due Date:</p>
            <p class="details-right-column">${selectedTask.date}</p>
        </div>
        <div class="priority-div details-divs">
            <p class="details-left-column">Priority:</p>
            <p class="details-right-column">${selectedTask.priority}</p></div>
    `;
}

function findTask(taskTitle) {
    // find task and project
    let projectName;
    let selectedTask;
    for (let project of projectList) {
        project.tasks.forEach((task) => {
            if (task.title === taskTitle) {
                selectedTask = task;
                projectName = project.title;
            }
        });
        if (selectedTask) {
            break;
        }
    }
    return { projectName, selectedTask };
}
