import addClassList from "./sidebar";

const projectList = [];

export function createNewProject() {
  const projects = document.querySelector("#projects");

  for (let i = 0; i < projectList.length; i++) {
    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("sidebar-nav");
    newProjectDiv.classList.add("projects-nav");

    const newProject = `
    <div class="project-text-icon">
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

export function addProjectToProjects(project) {
  projectList.push(project);
}
