import { removeAllChildNodes } from "./modal";
import { createNewProject, projectList } from "./newProjects";
import fillPageWithTasks from "./selectedProject";

export default function startPage() {
  const projects = document.querySelector("#projects");
  removeAllChildNodes(projects);
  createNewProject(projectList);
  fillPageWithTasks();
}