import displayProjects from "./displayProjects";
import { projectIcons } from "./images";
import { closeModal } from "./modals";
import { createProject, selectCreatedProject } from "./newProject";

export function addNewProject() {
    const projectTitle = document.querySelector("#project-title");
    const selectedIcon = document.querySelector(".project-icon.active-icon");
    const title = projectTitle.value;
    const selectedIconAlt = selectedIcon.children[0].alt;
    const icon = projectIcons.find((icon) => icon.alt === selectedIconAlt);

    if (!title) {
        const errorTitle = document.querySelector(".modal-title-error");
        errorTitle.classList.remove("hide");
        errorTitle.classList.add("show");
        return;
    }

    createProject(title, icon);
    closeModal();
    displayProjects();
    selectCreatedProject();
}
