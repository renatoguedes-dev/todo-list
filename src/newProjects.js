import { handleSectionSelected, checkClassList } from "./sidebar";
import { closeModal, openEditProjectModal, removeAllChildNodes } from "./modal";
import fillProjectWithTasks from "./selectedProject";

export const projectList = [];

export class Project {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
}

export function addProjectToProjects(project) {
  projectList.push(project);
}

export function createNewProject() {
  const projects = document.querySelector("#projects");

  for (let i = 0; i < projectList.length; i++) {
    let altText;
    if (
      projectList[i].icon ===
      "./images/projects-icons/wrench-screwdriver-crossed.svg"
    ) {
      altText = "a wrench and a screwdriver crossed";
    } else if (projectList[i].icon === "./images/projects-icons/book.svg") {
      altText = "a book icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/money-bag.svg"
    ) {
      altText = "a bag of money icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/pizza-slice.svg"
    ) {
      altText = "a pizza slice icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/present-box.svg"
    ) {
      altText = "a present box icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/volleyball-ball.svg"
    ) {
      altText = "a volleyball ball icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/dumbbells-exercise.svg"
    ) {
      altText = "a person holding two dumbbells icon";
    }

    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("sidebar-nav");
    newProjectDiv.classList.add("projects-nav");

    const newProject = `
    <div class="project-text-icon">
      <img
        class="sidebar-icons"
        src="${projectList[i].icon}"
        alt="${altText}"
      />
      <p class="project-name">${projectList[i].title}</p>
    </div>
      
    <div class="project-edit-erase">
      <img
        class="edit-project-button"
        src="./images/note-edit-outline.png"
        alt="edit icon"
      />
      <img
        class="erase-project-button"
        src="./images/trash-can-outline.png"
        alt="trash can icon"
      />
    </div>`;

    newProjectDiv.innerHTML = newProject;
    projects.appendChild(newProjectDiv);
  }
  projects.addEventListener("click", handleSectionSelected);
  const editProjectBtns = document.querySelectorAll(".edit-project-button");
  editProjectBtns.forEach((editProjectBtn) =>
    editProjectBtn.addEventListener("click", openEditProjectModal)
  );
}

let selectedProjectIcons = document.querySelectorAll(".project-icon");

function checkIconClassList() {
  selectedProjectIcons = document.querySelectorAll(".project-icon");

  for (let i = 0; i < selectedProjectIcons.length; i++) {
    if (selectedProjectIcons[i].classList.contains("active-icon")) {
      selectedProjectIcons[i].classList.remove("active-icon");
    }
  }
}

export function handleIconSelected(e) {
  const iconClicked = e.target;

  if (
    !iconClicked.classList.contains("active-icon") &&
    iconClicked.classList.contains("project-icon")
  ) {
    checkIconClassList();
    iconClicked.classList.add("active-icon");
  } else if (
    iconClicked.parentElement.className === "project-icon active-icon" ||
    iconClicked.parentElement.className === "project-icon"
  ) {
    const clicked = iconClicked.parentElement;
    if (!clicked.classList.contains("active-icon")) {
      checkIconClassList();
      clicked.classList.add("active-icon");
    }
  }
}

function createProjectTitleOnAdd() {
  const projects = document.querySelector("#projects");
  const contentTitleText = document.querySelector(".content-title-text");
  contentTitleText.innerText = projects.lastChild.innerText;
}

export function addNewProject(e) {
  e.preventDefault();

  const projects = document.querySelector("#projects");

  const title = document.getElementById("project-title").value;
  let icon = document.getElementsByClassName("active-icon")[0].childNodes[0];

  if (title === "") {
    const modalTitleError = document.querySelector(".modal-title-error");
    modalTitleError.classList.remove("hide");
    return;
  }

  if (icon.alt === "a wrench and a screwdriver crossed") {
    icon = "./images/projects-icons/wrench-screwdriver-crossed.svg";
  } else if (icon.alt === "a book icon") {
    icon = "./images/projects-icons/book.svg";
  } else if (icon.alt === "a bag of money icon") {
    icon = "./images/projects-icons/money-bag.svg";
  } else if (icon.alt === "a pizza slice icon") {
    icon = "./images/projects-icons/pizza-slice.svg";
  } else if (icon.alt === "a present box icon") {
    icon = "./images/projects-icons/present-box.svg";
  } else if (icon.alt === "a volleyball ball icon") {
    icon = "./images/projects-icons/volleyball-ball.svg";
  } else if (icon.alt === "a person holding two dumbbells icon") {
    icon = "./images/projects-icons/dumbbells-exercise.svg";
  }

  const projectAdded = new Project(title, icon);

  addProjectToProjects(projectAdded);
  closeModal();
  removeAllChildNodes(projects);
  createNewProject();

  checkClassList();
  projects.lastChild.classList.add("active-section");
  createProjectTitleOnAdd();
  fillProjectWithTasks();
}
