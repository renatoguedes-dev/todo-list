import displayProjects from "./displayProjects";
import { createStartingTasksDiv } from "./displayTasks";
import {
    createExampleTaskOne,
    createExampleTaskTwo,
} from "./exampleProjectsAndTasks";
import { projectList } from "./newProject";
import { taskList } from "./newTask";

export default function startPage() {
    createExampleTaskOne();
    createExampleTaskTwo();
    displayProjects();
    createStartingTasksDiv();
}
