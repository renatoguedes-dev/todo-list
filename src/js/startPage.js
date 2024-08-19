import displayProjects from "./displayProjects";
import { createStartingTasksDiv } from "./displayTasks";
import {
    createExampleTaskOne,
    createExampleTaskTwo,
} from "./exampleProjectsAndTasks";

export default function startPage() {
    createExampleTaskOne();
    createExampleTaskTwo();
    displayProjects();
    createStartingTasksDiv();
}
