/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import toggleMenu from "./menuBtn";
import { openProjectModal, openTaskModal, closeModal } from "./modal";
import {
  createNewProject,
  addProjectToProjects,
  projectList,
  Project,
} from "./newProjects";
import { Task, addTaskToTasks, taskList } from "./createNewTask";
import startPage from "./startPage";
import { createTodayDate, createWeekDate } from "./time";

const hammerWrench = "./images/projects-icons/wrench-screwdriver-crossed.svg";
const volleyball = "./images/projects-icons/volleyball-ball.svg";
const gymDumbbell = "./images/projects-icons/dumbbells-exercise.svg";

const projectFitness = new Project("Staying Fitness", gymDumbbell);
const projectWork = new Project("Work hard and get rich", hammerWrench);
const dateNow = createTodayDate().toLocaleDateString();

addProjectToProjects(projectFitness);
addProjectToProjects(projectWork);

const fitnessTaskOne = new Task(
  "Staying Fitness",
  "Go to the gym",
  "Work out and lift weights at the gym, 3 times a week",
  "25/11/2022",
  new Date(2022, 10, 25),
  "High"
);

const fitnessTaskTwo = new Task(
  "Staying Fitness",
  "Wake up early and run at the street",
  "Run at the street 4 times a week for at least 15 minutes",
  "31/12/2022",
  new Date(2022, 11, 31),
  "Medium"
);

const projectTestTaskOne = new Task(
  "Work hard and get rich",
  "Create a very nice app",
  "Go on VS Code and build a lot of nice features in javascript",
  dateNow,
  new Date(),
  "High"
);

addTaskToTasks(fitnessTaskOne);
addTaskToTasks(fitnessTaskTwo);
addTaskToTasks(projectTestTaskOne);

startPage();
