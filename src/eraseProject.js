import { taskList, updateTaskList } from "./createNewTask";
import { closeModal, removeAllChildNodes } from "./modal";
import {
  createNewProject,
  projectList,
  updateProjectList,
} from "./newProjects";
import fillPageWithTasks from "./selectedProject";
import { checkClassList } from "./sidebar";

let project;

export let projectListTwo;
export let taskListTwo;

function createContentTitleOnDelete() {
  const contentTitleText = document.querySelector(".content-title-text");
  const contentTitleImg = document.querySelector(".content-title-img");

  contentTitleText.innerText = "All";
  contentTitleImg.src = "./images/calendar-month-outline.svg";
}

export function removeAndUpdateProjectList() {
  const projects = document.querySelector("#projects");
  const sidebar = document.querySelector(".sidebar");

  projectListTwo = projectList;
  taskListTwo = taskList;

  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].title === project) {
      projectListTwo = projectListTwo.filter((item) => item.title !== project);
    }
  }

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].project === project) {
      taskListTwo = taskListTwo.filter((item) => item.project !== project);
    }
  }

  removeAllChildNodes(projects);
  updateProjectList(projectListTwo);
  updateTaskList(taskListTwo);
  createNewProject(projectListTwo);
  checkClassList();
  sidebar.firstElementChild.firstElementChild.classList.add("active-section");
  createContentTitleOnDelete();
  fillPageWithTasks();
  closeModal();
}

function createFilledEraseProjectModal(projectTitle) {
  const modalContent = document.querySelector(".modal-content");

  // modal-content's first child
  const textDiv = document.createElement("div");
  textDiv.classList.add("erase-project-text");

  // erase project text' first child
  const paragraphOne = document.createElement("p");
  paragraphOne.textContent = "Are you sure?";

  const paragraphTwo = document.createElement("p");
  paragraphTwo.innerHTML = `Project <span class="project-name-deletion">"${projectTitle}"</span> will be gone forever`;

  // modal-content's second child
  const modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-delete-modal-btn");
  cancelModalBtn.textContent = "Cancel";

  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.add("delete-project-btn");
  deleteProjectBtn.textContent = "Delete Project";

  // modal-content div children
  modalContent.appendChild(textDiv);
  modalContent.appendChild(modalButtons);

  // erase project text child
  textDiv.appendChild(paragraphOne);
  textDiv.appendChild(paragraphTwo);

  // modal-buttons children
  modalButtons.appendChild(cancelModalBtn);
  modalButtons.appendChild(deleteProjectBtn);

  return modalContent;
}

function createEraseProject(projectTitle) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");

  removeAllChildNodes(modalContent);

  modalBody.appendChild(createFilledEraseProjectModal(projectTitle));

  const cancelModalBtn = document.querySelector(".cancel-delete-modal-btn");
  cancelModalBtn.addEventListener("click", closeModal);

  const deleteProjectBtn = document.querySelector(".delete-project-btn");
  deleteProjectBtn.addEventListener("click", removeAndUpdateProjectList);
}

export function openEraseProject(projectTitle) {
  const modalHeader = document.querySelector(".modal-header");
  const modalHeaderText = document.querySelector(".modal-header-text");
  modalHeaderText.textContent = "Delete Project";

  if (!modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.add("delete-modal-header");
  }

  project = projectTitle;
  createEraseProject(projectTitle);
}
