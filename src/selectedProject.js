import { taskList } from "./createNewTask";
import {
  openTaskModal,
  openDetailsModal,
  openEditTaskModal,
  openEraseTaskModal,
} from "./modal";
import { contentTitleText } from "./projectContent";
import { createMonthDate, createTodayDate, createWeekDate } from "./time";

function removeChildNodesExceptFirst(parent) {
  while (parent.lastChild.id !== parent.firstElementChild.id) {
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
      if (taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      } else if (
        taskList[i].checked === false ||
        taskList[i].checked === undefined
      ) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="task-title">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
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
}

function createTaskListForDates() {
  const dayToday = createTodayDate().getDate();
  const dateToday = createTodayDate().toLocaleDateString();
  const weekFromToday = createWeekDate().toLocaleDateString();
  const month = createMonthDate();

  let weekCount = createWeekDate().getDate() - createTodayDate().getDate();

  const tasksDiv = document.querySelector(".tasks-div");

  for (let i = 0; i < taskList.length; i++) {
    const monthDifference = taskList[i].fullDate.getMonth() - month;

    if (contentTitleText.innerText === "All") {
      if (taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      } else if (
        taskList[i].checked === false ||
        taskList[i].checked === undefined
      ) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="task-title">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      }
    } else if (
      contentTitleText.innerText === "Today" &&
      taskList[i].date === dateToday
    ) {
      if (taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      } else if (
        taskList[i].checked === false ||
        taskList[i].checked === undefined
      ) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="task-title">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      }
    } else if (
      contentTitleText.innerText === "Week" &&
      taskList[i].date <= weekFromToday &&
      monthDifference >= 0
    ) {
      if (taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      } else if (
        taskList[i].checked === false ||
        taskList[i].checked === undefined
      ) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="task-title">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      }
    } else if (
      contentTitleText.innerText === "Important" &&
      taskList[i].priority === "High"
    ) {
      if (taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      } else if (
        taskList[i].checked === false ||
        taskList[i].checked === undefined
      ) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="task-title">${taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${taskList[i].date}</div>
            <div class="images">
              <img
                class="edit-task-button"
                src="./images/note-edit-outline.png"
                alt="edit icon"
              />
              <img
                class="erase-task-button" 
                src="./images/trash-can-outline.png"
                alt="trash can icon"
              />
            </div>
          </div>`;

        newTaskDiv.innerHTML = newTask;
        tasksDiv.appendChild(newTaskDiv);
      }
    } else if (contentTitleText.innerText === "Completed") {
      if (taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
            <div class="left-content">
              <label class="container">
                <input type="checkbox" class="checkbox" name="checkbox" checked/>
                <span class="checkmark"></span>
              </label>
              <p class="task-title completed-task">${taskList[i].title}</p>
            </div>
            <div class="right-content">
              <div class="detail">Details</div>
              <div class="due-date">${taskList[i].date}</div>
              <div class="images">
                <img
                  class="edit-task-button"
                  src="./images/note-edit-outline.png"
                  alt="edit icon"
                />
                <img
                  class="erase-task-button" 
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
}

function createAddTaskButton() {
  const tasksTitle = document.querySelector(".tasks-title");

  const newTaskButtonDiv = document.createElement("div");
  newTaskButtonDiv.id = "newTaskBtn";
  newTaskButtonDiv.classList.add("new-task-button");

  const buttonParagraph = document.createElement("p");
  buttonParagraph.textContent = "+";

  tasksTitle.appendChild(newTaskButtonDiv);
  newTaskButtonDiv.appendChild(buttonParagraph);
  newTaskButtonDiv.addEventListener("click", openTaskModal);
}

function toggleCheckmark(e) {
  const taskClicked = e.composedPath()[2].children[1];
  const checkboxCheck = e.composedPath()[0].checked;

  for (let i = 0; i < taskList.length; i++) {
    if (taskClicked.textContent === taskList[i].title) {
      taskList[i].checked = checkboxCheck;
      fillPageWithTasks();
    }
  }
}

export default function fillPageWithTasks() {
  const tasksDiv = document.querySelector(".tasks-div");
  const tasksTitle = document.querySelector(".tasks-title");

  removeChildNodesExceptFirst(tasksDiv);
  createAddTaskButton();
  if (
    contentTitleText.innerText === "All" ||
    contentTitleText.innerText === "Today" ||
    contentTitleText.innerText === "Week" ||
    contentTitleText.innerText === "Important" ||
    contentTitleText.innerText === "Completed"
  ) {
    removeChildNodesExceptFirst(tasksTitle);
    createTaskListForDates();

    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("click", toggleCheckmark)
    );

    const details = document.querySelectorAll(".detail");
    details.forEach((detail) =>
      detail.addEventListener("click", openDetailsModal)
    );

    const editTaskBtn = document.querySelectorAll(".edit-task-button");
    editTaskBtn.forEach((editTasks) =>
      editTasks.addEventListener("click", openEditTaskModal)
    );

    const eraseTaskBtn = document.querySelectorAll(".erase-task-button");
    eraseTaskBtn.forEach((eraseTask) =>
      eraseTask.addEventListener("click", openEraseTaskModal)
    );
  }

  createTaskListForProject();

  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", toggleCheckmark)
  );

  const details = document.querySelectorAll(".detail");
  details.forEach((detail) =>
    detail.addEventListener("click", openDetailsModal)
  );

  const editTaskBtn = document.querySelectorAll(".edit-task-button");
  editTaskBtn.forEach((editTasks) =>
    editTasks.addEventListener("click", openEditTaskModal)
  );

  const eraseTaskBtn = document.querySelectorAll(".erase-task-button");
  eraseTaskBtn.forEach((eraseTask) =>
    eraseTask.addEventListener("click", openEraseTaskModal)
  );

  updateTasksCount();
}
