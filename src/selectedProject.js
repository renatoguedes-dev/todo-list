import { taskList } from "./createNewTask";
import { contentTitleText } from "./projectContent";

function removeChildNodesExceptFirst(parent) {
  while (parent.lastChild.id !== "tasksTitle") {
    parent.removeChild(parent.lastChild);
  }
}

function updateTasksCount() {
  const tasksCount = document.querySelector(".tasks-count");
  const tasksDiv = document.querySelector(".tasks-div");
  tasksCount.textContent = tasksDiv.children.length - 1;
}

function createTaskListForProject() {
  const tasksDiv = document.querySelector(".tasks-div");

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].project === contentTitleText.innerText) {
      const newTaskDiv = document.createElement("div");
      newTaskDiv.id = "content";
      newTaskDiv.classList.add("content");

      const newTask = `
        <div class="left-content">
          <div class="checkbox"></div>
          <p class="task-title">${taskList[i].title}</p>
        </div>
        <div class="right-content">
          <div class="detail">Details</div>
          <div class="due-date">${taskList[i].date}</div>
          <div class="images">
            <img src="./images/note-edit-outline.png" alt="edit icon" />
            <img
              src="./images/trash-can-outline.png"
              alt="trash can icon"
            />
          </div>
        </div>`;

      newTaskDiv.innerHTML = newTask;
      tasksDiv.appendChild(newTaskDiv);
    }
  }
}

function createTaskListForDates() {
  const tasksDiv = document.querySelector(".tasks-div");

  for (let i = 0; i < taskList.length; i++) {
    const newTaskDiv = document.createElement("div");
    newTaskDiv.id = "content";
    newTaskDiv.classList.add("content");

    const newTask = `
      <div class="left-content">
        <div class="checkbox"></div>
        <p class="task-title">${taskList[i].title}</p>
      </div>
      <div class="right-content">
        <div class="detail">Details</div>
        <div class="due-date">${taskList[i].date}</div>
        <div class="images">
          <img src="./images/note-edit-outline.png" alt="edit icon" />
          <img
            src="./images/trash-can-outline.png"
            alt="trash can icon"
          />
        </div>
      </div>`;

    newTaskDiv.innerHTML = newTask;
    tasksDiv.appendChild(newTaskDiv);
  }
}

export default function fillProjectWithTasks() {
  const tasksDiv = document.querySelector(".tasks-div");

  removeChildNodesExceptFirst(tasksDiv);
  createTaskListForProject();
  updateTasksCount();
}
