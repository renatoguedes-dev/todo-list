import { projectList } from "./newProject";
import { removeAllChildNodes } from "./modals";
import { appendChildren, createDivElement } from "./helperFunctions";
import { handleSidebarClick } from "./displayTasks";
import { openEditProjectModal } from "./editProject";
import { openDeleteProjectModal } from "./eraseProject";

export default function displayProjects() {
    const projects = document.querySelector("#projects");
    removeAllChildNodes(projects);

    for (let project of projectList) {
        const projectDiv = createDivElement("sidebar-nav", "projects-nav");
        projectDiv.innerHTML = `
            
                <div class="project-text-icon">
                    <img class="sidebar-icons" src="${project.icon.src}" alt="${project.icon.alt}">
                    <p class="project-name">${project.title}</p>
                </div>

                <div class="project-edit-erase">
                    <img class="edit-project-button" src="./assets/note-edit-outline.png" alt="edit icon">
                    <img class="erase-project-button" src="./assets/trash-can-outline.png" alt="trash can icon">
                </div>`;

        appendChildren(projects, projectDiv);
        projectDiv.addEventListener("click", handleSidebarClick);
        const editProjectBtn = document.querySelectorAll(
            ".edit-project-button"
        );
        editProjectBtn.forEach((btn) => {
            btn.addEventListener("click", openEditProjectModal);
        });
        const eraseProjectBtn = document.querySelectorAll(
            ".erase-project-button"
        );
        eraseProjectBtn.forEach((btn) => {
            btn.addEventListener("click", openDeleteProjectModal);
        });
    }
    return projects;
}
