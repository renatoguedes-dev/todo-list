/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { openProjectModal, openTaskModal, closeModal } from "./modal";
import {
  createNewProject,
  addProjectToProjects,
  projectList,
  Project,
} from "./newProjects";
import { Task, addTaskToTasks, taskList } from "./createNewTask";

const hammerWrench = "./images/projects-icons/wrench-screwdriver-crossed.svg";
const volleyball = "./images/projects-icons/volleyball-ball.svg";
const gymDumbbell = "./images/projects-icons/dumbbells-exercise.svg";

const projectFitness = new Project("Staying Fitness", gymDumbbell);
const projectWork = new Project("Work hard and get rich", hammerWrench);

addProjectToProjects(projectFitness);
addProjectToProjects(projectWork);

createNewProject();

const fitnessTaskOne = new Task(
  "Staying Fitness",
  "Go to the gym",
  "Work out and lift weights at the gym, 3 times a week",
  "31/12/2022",
  "High"
);

const fitnessTaskTwo = new Task(
  "Staying Fitness",
  "Wake up early and run at the street",
  "Run at the street 4 times a week for at least 15 minutes",
  "31/12/2022",
  "High"
);

const projectTestTaskOne = new Task(
  "Project Test",
  "Create a very nice app",
  "Go on VS Code and build a lot of nice features in javascript",
  "15/11/2022",
  "Medium"
);

addTaskToTasks(fitnessTaskOne);
addTaskToTasks(fitnessTaskTwo);
addTaskToTasks(projectTestTaskOne);
