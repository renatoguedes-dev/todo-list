/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { openModal, closeModal } from "./modal";
import { createNewProject, addProjectToProjects } from "./newproject";

const hammerWrench = "./images/projects-icons/wrench-screwdriver-crossed.svg";
const volleyball = "./images/projects-icons/volleyball-ball.svg";
const gymDumbbell = "./images/projects-icons/dumbbells-exercise.svg";

class Project {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
}

const projectFitness = new Project("Staying Fitness", gymDumbbell);
const projectWork = new Project("Work hard and get rich", hammerWrench);

addProjectToProjects(projectFitness);
addProjectToProjects(projectWork);

createNewProject();
