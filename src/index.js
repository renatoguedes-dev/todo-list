/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { openModal, closeModal } from "./modal";
import addClassList from "./sidebar";
import openNewTodo from "./newtodo";

const projectList = [];

const openModalButton = document.querySelector("#newTodoBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");
const overlay = document.getElementById("overlay");
const sidebarItems = document.querySelectorAll(".sidebar-nav");
const hammerWrench = "./images/projects-icons/wrench-screwdriver-crossed.svg";
const volleyball = "./images/projects-icons/volleyball-ball.svg";
const gymDumbbell = "./images/projects-icons/dumbbells-exercise.svg";

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

sidebarItems.forEach((sidebarItem) =>
  sidebarItem.addEventListener("click", addClassList)
);

class Project {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
}

const projectFitness = new Project("Staying Fitness", gymDumbbell);
const projectWork = new Project("Work hard and get rich", hammerWrench);

function addProjectToProjects(project) {
  projectList.push(project);
}

addProjectToProjects(projectFitness);
addProjectToProjects(projectWork);

function createNewProject() {
  const projects = document.querySelector("#projects");

  for (let i = 0; i < projectList.length; i++) {
    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("sidebar-nav");
    newProjectDiv.classList.add("projects-nav");
    let newProject;

    newProject = `
      <img
        class="sidebar-icons"
        src="${projectList[i].icon}"
        alt="A hammer and a screwdriver crossed"
      />
      <p class="project-name">${projectList[i].title}</p>
      <div class="project-edit-erase">
        <img src="./images/note-edit-outline.png" alt="edit icon" />
        <img
          src="./images/trash-can-outline.png"
          alt="trash can icon"
        />
      </div>`;

    newProjectDiv.innerHTML = newProject;
    projects.appendChild(newProjectDiv);
  }
  projects.addEventListener("click", addClassList);
}

createNewProject();
