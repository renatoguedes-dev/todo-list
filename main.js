/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createNewTask.js":
/*!******************************!*\
  !*** ./src/createNewTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTaskToTasks": () => (/* binding */ addTaskToTasks),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
const taskList = [];

class Task {
  constructor(project, title, details, date, priority) {
    this.project = project;
    this.title = title;
    this.details = details;
    this.date = date;
    this.priority = priority;
  }
}

function addTaskToTasks(task) {
  taskList.push(task);
}


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addModalClassList": () => (/* binding */ addModalClassList),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openProjectModal": () => (/* binding */ openProjectModal),
/* harmony export */   "openTaskModal": () => (/* binding */ openTaskModal),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
/* harmony import */ var _newTaskButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskButton */ "./src/newTaskButton.js");
/* harmony import */ var _openProjectModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openProjectModal */ "./src/openProjectModal.js");



const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const sidebarModalItems = document.querySelectorAll(".modal-sidebar-item");
const openProjectButton = document.querySelector("#newProjectBtn");
const openTaskButton = document.querySelector("#newTaskBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function openProjectModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  (0,_openProjectModal__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

function openTaskModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  (0,_newTaskButton__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function checkClassList() {
  for (let i = 0; i < sidebarModalItems.length; i++) {
    if (sidebarModalItems[i].classList.contains("active-section")) {
      sidebarModalItems[i].classList.remove("active-section");
    }
  }
}

function addModalClassList(e) {
  const sidebarModalClicked = e.target;

  if (!sidebarModalClicked.classList.contains("active-section")) {
    checkClassList();
    sidebarModalClicked.classList.add("active-section");
  }
}

overlay.addEventListener("click", closeModal);
openProjectButton.addEventListener("click", openProjectModal);
openTaskButton.addEventListener("click", openTaskModal);
closeModalButton.addEventListener("click", closeModal);


/***/ }),

/***/ "./src/newProjects.js":
/*!****************************!*\
  !*** ./src/newProjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addNewProject": () => (/* binding */ addNewProject),
/* harmony export */   "addProjectToProjects": () => (/* binding */ addProjectToProjects),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "handleIconSelected": () => (/* binding */ handleIconSelected),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");




const projectList = [];

class Project {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
}

function addProjectToProjects(project) {
  projectList.push(project);
}

function createNewProject() {
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
  projects.addEventListener("click", _sidebar__WEBPACK_IMPORTED_MODULE_0__.handleSectionSelected);
}

let selectedProjectIcons = document.querySelectorAll(".project-icon");

function checkIconClassList() {
  selectedProjectIcons = document.querySelectorAll(".project-icon");

  for (let i = 0; i < selectedProjectIcons.length; i++) {
    if (selectedProjectIcons[i].classList.contains("active-icon")) {
      selectedProjectIcons[i].classList.remove("active-icon");
    }
  }
}

function handleIconSelected(e) {
  const iconClicked = e.target;

  if (
    !iconClicked.classList.contains("active-icon") &&
    iconClicked.classList.contains("project-icon")
  ) {
    checkIconClassList();
    iconClicked.classList.add("active-icon");
  } else if (
    iconClicked.parentElement.className === "project-icon active-icon" ||
    iconClicked.parentElement.className === "project-icon"
  ) {
    const clicked = iconClicked.parentElement;
    if (!clicked.classList.contains("active-icon")) {
      checkIconClassList();
      clicked.classList.add("active-icon");
    }
  }
}

function createProjectTitleOnAdd() {
  const contentTitleText = document.querySelector(".content-title-text");
  contentTitleText.innerText = projects.lastChild.innerText;
}

function addNewProject(e) {
  e.preventDefault();

  const projects = document.querySelector("#projects");

  const title = document.getElementById("project-title").value;

  if (title === "") {
    const modalTitleError = document.querySelector(".modal-title-error");
    modalTitleError.classList.remove("hide");
    return;
  }

  let icon = document.getElementsByClassName("active-icon")[0].childNodes[0];

  if (icon.alt === "a wrench and a screwdriver crossed") {
    icon = "./images/projects-icons/wrench-screwdriver-crossed.svg";
  } else if (icon.alt === "a book icon") {
    icon = "./images/projects-icons/book.svg";
  } else if (icon.alt === "a bag of money icon") {
    icon = "./images/projects-icons/money-bag.svg";
  } else if (icon.alt === "a pizza slice icon") {
    icon = "./images/projects-icons/pizza-slice.svg";
  } else if (icon.alt === "a present box icon") {
    icon = "./images/projects-icons/present-box.svg";
  } else if (icon.alt === "a volleyball ball icon") {
    icon = "./images/projects-icons/volleyball-ball.svg";
  } else if (icon.alt === "a person holding two dumbbells icon") {
    icon = "./images/projects-icons/dumbbells-exercise.svg";
  }

  const projectAdded = new Project(title, icon);

  addProjectToProjects(projectAdded);
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)();
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(projects);
  createNewProject();

  (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.checkClassList)();
  projects.lastChild.classList.add("active-section");
  createProjectTitleOnAdd();
  (0,_selectedProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
  // console.log(projects.lastChild);
}


/***/ }),

/***/ "./src/newTaskButton.js":
/*!******************************!*\
  !*** ./src/newTaskButton.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openNewTask)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");


function createNewTask() {
  const modalContent = document.querySelector(".modal-content");

  // modal-content's first child
  const form = document.createElement("form");
  form.action = "#";

  // form tag's first child
  const firstFieldsDiv = document.createElement("div");
  firstFieldsDiv.classList.add("fields");

  // first fields div's first child
  const label = document.createElement("label");
  label.for = "task-title";
  label.textContent = "Title";

  // first fields div's second child
  const input = document.createElement("input");
  input.type = "text";
  input.name = "task-title";
  input.id = "task-title";

  // first fields div's third child
  const paragraphFields = document.createElement("p");
  paragraphFields.classList.add("modal-title-error");
  paragraphFields.classList.add("hide");
  paragraphFields.textContent = "Please fill out this field.";

  // form tag's second child
  const secondFieldsDiv = document.createElement("div");
  secondFieldsDiv.classList.add("fields");
  secondFieldsDiv.classList.add("task-details");

  // second fields div's first child
  const labelTwo = document.createElement("label");
  labelTwo.for = "task-details";
  labelTwo.textContent = "Details";

  // second fields div's second child
  const inputTwo = document.createElement("textarea");
  inputTwo.name = "task-details";
  inputTwo.id = "task-details";

  // second fields div's third child
  const paragraphFieldsTwo = document.createElement("p");
  paragraphFieldsTwo.classList.add("modal-title-error");
  paragraphFieldsTwo.classList.add("hide");
  paragraphFieldsTwo.textContent = "Please fill out this field.";

  // const newTodoDetails = document.createElement("textarea");
  // newTodoDetails.name = "new-todo-details";
  // newTodoDetails.id = "new-todo-details";
  // newTodoDetails.placeholder = "Details: e.g internet, phone, rent.";

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("new-todo-date");

  const newDateText = document.createElement("div");
  newDateText.classList.add("new-date-text");
  newDateText.textContent = "Due date:";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "todo-date";
  dateInput.id = "new-todo-date";

  const priorityLine = document.createElement("div");
  priorityLine.classList.add("priority-line");

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("priority");

  const priorityText = document.createElement("div");
  priorityText.classList.add("priority-text");
  priorityText.textContent = "Priority:";

  const lowPriority = document.createElement("div");
  lowPriority.classList.add("low");
  lowPriority.classList.add("priority-buttons");
  lowPriority.textContent = "Low";

  const mediumPriority = document.createElement("div");
  mediumPriority.classList.add("medium");
  mediumPriority.classList.add("priority-buttons");
  mediumPriority.textContent = "Medium";

  const highPriority = document.createElement("div");
  highPriority.classList.add("high");
  highPriority.classList.add("priority-buttons");
  highPriority.textContent = "High";

  const createTodoBtnDiv = document.createElement("div");
  createTodoBtnDiv.classList.add("modal-buttons");

  const createTodoBtn = document.createElement("button");
  createTodoBtn.classList.add("add-todo-btn");
  createTodoBtn.textContent = "Create Task";

  // modal-content div children

  modalContent.appendChild(form);
  form.appendChild(firstFieldsDiv);
  form.appendChild(secondFieldsDiv);

  // first fields div children
  firstFieldsDiv.appendChild(label);
  firstFieldsDiv.appendChild(input);
  firstFieldsDiv.appendChild(paragraphFields);

  modalContent.appendChild(dateDiv);
  modalContent.appendChild(priorityLine);

  // second fields div children
  secondFieldsDiv.appendChild(labelTwo);
  secondFieldsDiv.appendChild(inputTwo);
  secondFieldsDiv.appendChild(paragraphFieldsTwo);

  // new-todo-date div children
  dateDiv.appendChild(newDateText);
  dateDiv.appendChild(dateInput);

  // priority line div children

  priorityLine.appendChild(priorityDiv);
  priorityLine.appendChild(createTodoBtnDiv);

  // priority div children
  priorityDiv.appendChild(priorityText);
  priorityDiv.appendChild(lowPriority);
  priorityDiv.appendChild(mediumPriority);
  priorityDiv.appendChild(highPriority);

  // create new task button div child
  createTodoBtnDiv.appendChild(createTodoBtn);

  return modalContent;
}

function openNewTask() {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Create a new task";
  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(modalContent);
  modalBody.appendChild(createNewTask());

  return modalContent;
}


/***/ }),

/***/ "./src/openProjectModal.js":
/*!*********************************!*\
  !*** ./src/openProjectModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fillProjectModal)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _newProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjects */ "./src/newProjects.js");



function createProjectModal() {
  const modalContent = document.querySelector(".modal-content");

  // modal-content's first child
  const form = document.createElement("form");
  form.action = "#";

  // form tag's first child
  const fieldsDiv = document.createElement("div");
  fieldsDiv.classList.add("fields");

  // fields div's first child
  const label = document.createElement("label");
  label.for = "project-title";
  label.textContent = "Title";

  // fields div's second child
  const input = document.createElement("input");
  input.type = "text";
  input.name = "project-title";
  input.id = "project-title";

  // fields div's third child
  const paragraphFields = document.createElement("p");
  paragraphFields.classList.add("modal-title-error");
  paragraphFields.classList.add("hide");
  paragraphFields.textContent = "Please fill out this field.";

  // form tag's second child
  const iconSelectionDiv = document.createElement("div");
  iconSelectionDiv.classList.add("icon-selection");

  // icon-selection div's first child
  const paragraphIconSelection = document.createElement("p");
  paragraphIconSelection.textContent = "Choose an Icon";

  // icon-selection div's second child
  const projectIconsDiv = document.createElement("div");
  projectIconsDiv.classList.add("project-icons");

  // project-icons div children
  const toolsIcon = document.createElement("div");
  toolsIcon.classList.add("project-icon");
  toolsIcon.classList.add("active-icon");

  const bookIcon = document.createElement("div");
  bookIcon.classList.add("project-icon");

  const moneyBagIcon = document.createElement("div");
  moneyBagIcon.classList.add("project-icon");

  const pizzaIcon = document.createElement("div");
  pizzaIcon.classList.add("project-icon");

  const presentBoxIcon = document.createElement("div");
  presentBoxIcon.classList.add("project-icon");

  const volleyBallIcon = document.createElement("div");
  volleyBallIcon.classList.add("project-icon");

  const gymIcon = document.createElement("div");
  gymIcon.classList.add("project-icon");

  const toolsIconImg = document.createElement("img");
  toolsIconImg.src = "./images/projects-icons/wrench-screwdriver-crossed.svg";
  toolsIconImg.alt = "a wrench and a screwdriver crossed";

  const bookIconImg = document.createElement("img");
  bookIconImg.src = "./images/projects-icons/book.svg";
  bookIconImg.alt = "a book icon";

  const moneyBagIconImg = document.createElement("img");
  moneyBagIconImg.src = "./images/projects-icons/money-bag.svg";
  moneyBagIconImg.alt = "a bag of money icon";

  const pizzaIconImg = document.createElement("img");
  pizzaIconImg.src = "./images/projects-icons/pizza-slice.svg";
  pizzaIconImg.alt = "a pizza slice icon";

  const presentBoxIconImg = document.createElement("img");
  presentBoxIconImg.src = "./images/projects-icons/present-box.svg";
  presentBoxIconImg.alt = "a present box icon";

  const volleyBallIconImg = document.createElement("img");
  volleyBallIconImg.src = "./images/projects-icons/volleyball-ball.svg";
  volleyBallIconImg.alt = "a volleyball ball icon";

  const gymIconImg = document.createElement("img");
  gymIconImg.src = "./images/projects-icons/dumbbells-exercise.svg";
  gymIconImg.alt = "a person holding two dumbbells icon";

  // modal-content's second child
  const modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-modal-btn");
  cancelModalBtn.textContent = "Cancel";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-btn");
  addProjectBtn.textContent = "Add Project";

  // modal-content div children
  modalContent.appendChild(form);
  modalContent.appendChild(modalButtons);

  // form tag children
  form.appendChild(fieldsDiv);
  form.appendChild(iconSelectionDiv);

  // modal-buttons children
  modalButtons.appendChild(cancelModalBtn);
  modalButtons.appendChild(addProjectBtn);

  // fields div children
  fieldsDiv.appendChild(label);
  fieldsDiv.appendChild(input);
  fieldsDiv.appendChild(paragraphFields);

  // icon-selection div children
  iconSelectionDiv.appendChild(paragraphIconSelection);
  iconSelectionDiv.appendChild(projectIconsDiv);

  // project-icon div children
  projectIconsDiv.appendChild(toolsIcon);
  projectIconsDiv.appendChild(bookIcon);
  projectIconsDiv.appendChild(moneyBagIcon);
  projectIconsDiv.appendChild(pizzaIcon);
  projectIconsDiv.appendChild(presentBoxIcon);
  projectIconsDiv.appendChild(volleyBallIcon);
  projectIconsDiv.appendChild(gymIcon);

  // project-icon imgs
  toolsIcon.appendChild(toolsIconImg);
  bookIcon.appendChild(bookIconImg);
  moneyBagIcon.appendChild(moneyBagIconImg);
  pizzaIcon.appendChild(pizzaIconImg);
  presentBoxIcon.appendChild(presentBoxIconImg);
  volleyBallIcon.appendChild(volleyBallIconImg);
  gymIcon.appendChild(gymIconImg);

  return modalContent;
}

function fillProjectModal() {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Create a new project";
  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(modalContent);
  modalBody.appendChild(createProjectModal());

  const addProjectBtn = document.querySelector(".add-project-btn");
  const selectedProjectIcons = document.querySelectorAll(".project-icon");
  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
  cancelModalBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.closeModal);
  selectedProjectIcons.forEach((selectedProjectIcon) =>
    selectedProjectIcon.addEventListener("click", _newProjects__WEBPACK_IMPORTED_MODULE_1__.handleIconSelected)
  );
  addProjectBtn.addEventListener("click", _newProjects__WEBPACK_IMPORTED_MODULE_1__.addNewProject);
}


/***/ }),

/***/ "./src/projectContent.js":
/*!*******************************!*\
  !*** ./src/projectContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentTitleText": () => (/* binding */ contentTitleText),
/* harmony export */   "createProjectTitle": () => (/* binding */ createProjectTitle)
/* harmony export */ });
const contentTitleText = document.querySelector(".content-title-text");

// eslint-disable-next-line import/prefer-default-export
function createProjectTitle(e) {
  const selectedProject = e.composedPath();

  if (
    selectedProject[0].innerText === "" &&
    selectedProject[1].innerText === ""
  ) {
    contentTitleText.innerText = selectedProject[2].innerText;
  }
  if (selectedProject[0] !== "") {
    contentTitleText.innerText = selectedProject[0].innerText;
  }
  return contentTitleText;
}


/***/ }),

/***/ "./src/selectedProject.js":
/*!********************************!*\
  !*** ./src/selectedProject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fillProjectWithTasks)
/* harmony export */ });
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");
/* harmony import */ var _projectContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectContent */ "./src/projectContent.js");



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

  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++) {
    if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].project === _projectContent__WEBPACK_IMPORTED_MODULE_1__.contentTitleText.innerText) {
      const newTaskDiv = document.createElement("div");
      newTaskDiv.id = "content";
      newTaskDiv.classList.add("content");

      const newTask = `
        <div class="left-content">
          <div class="checkbox"></div>
          <p class="task-title">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
        </div>
        <div class="right-content">
          <div class="detail">Details</div>
          <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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

  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++) {
    const newTaskDiv = document.createElement("div");
    newTaskDiv.id = "content";
    newTaskDiv.classList.add("content");

    const newTask = `
      <div class="left-content">
        <div class="checkbox"></div>
        <p class="task-title">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
      </div>
      <div class="right-content">
        <div class="detail">Details</div>
        <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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

function fillProjectWithTasks() {
  const tasksDiv = document.querySelector(".tasks-div");

  removeChildNodesExceptFirst(tasksDiv);
  createTaskListForProject();
  updateTasksCount();
}


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkClassList": () => (/* binding */ checkClassList),
/* harmony export */   "handleSectionSelected": () => (/* binding */ handleSectionSelected)
/* harmony export */ });
/* harmony import */ var _projectContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectContent */ "./src/projectContent.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable no-constant-condition */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */




let sidebarItems = document.querySelectorAll(".sidebar-nav");

function checkClassList() {
  sidebarItems = document.querySelectorAll(".sidebar-nav");

  for (let i = 0; i < sidebarItems.length; i++) {
    if (sidebarItems[i].classList.contains("active-section")) {
      sidebarItems[i].classList.remove("active-section");
    }
  }
}

function handleSectionSelected(e) {
  e.preventDefault();
  const sidebarClicked = e.target;

  if (
    !sidebarClicked.classList.contains("active-section") &&
    sidebarClicked.classList.contains("sidebar-nav")
  ) {
    checkClassList();
    sidebarClicked.classList.add("active-section");
    (0,_projectContent__WEBPACK_IMPORTED_MODULE_0__.createProjectTitle)(e);
    (0,_selectedProject__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (
    sidebarClicked.parentElement.className === "sidebar-nav" ||
    sidebarClicked.parentElement.className === "sidebar-nav projects-nav"
  ) {
    const clicked = sidebarClicked.parentElement;
    if (!clicked.classList.contains("active-section")) {
      checkClassList();
      clicked.classList.add("active-section");
      (0,_projectContent__WEBPACK_IMPORTED_MODULE_0__.createProjectTitle)(e);
      (0,_selectedProject__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  } else if (
    sidebarClicked.parentElement.parentElement.className === "sidebar-nav" ||
    sidebarClicked.parentElement.parentElement.className ===
      "sidebar-nav projects-nav"
  ) {
    const clicked = sidebarClicked.parentElement.parentElement;
    if (!clicked.classList.contains("active-section")) {
      checkClassList();
      clicked.classList.add("active-section");
      (0,_projectContent__WEBPACK_IMPORTED_MODULE_0__.createProjectTitle)(e);
      (0,_selectedProject__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  }
}

sidebarItems.forEach((sidebarItem) =>
  sidebarItem.addEventListener("click", handleSectionSelected)
);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _newProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjects */ "./src/newProjects.js");
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */




const hammerWrench = "./images/projects-icons/wrench-screwdriver-crossed.svg";
const volleyball = "./images/projects-icons/volleyball-ball.svg";
const gymDumbbell = "./images/projects-icons/dumbbells-exercise.svg";

const projectFitness = new _newProjects__WEBPACK_IMPORTED_MODULE_1__.Project("Staying Fitness", gymDumbbell);
const projectWork = new _newProjects__WEBPACK_IMPORTED_MODULE_1__.Project("Work hard and get rich", hammerWrench);

(0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjects)(projectFitness);
(0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjects)(projectWork);

(0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();

const fitnessTaskOne = new _createNewTask__WEBPACK_IMPORTED_MODULE_2__.Task(
  "Staying Fitness",
  "Go to the gym",
  "Work out and lift weights at the gym, 3 times a week",
  "31/12/2022",
  "High"
);

const fitnessTaskTwo = new _createNewTask__WEBPACK_IMPORTED_MODULE_2__.Task(
  "Staying Fitness",
  "Wake up early and run at the street",
  "Run at the street 4 times a week for at least 15 minutes",
  "31/12/2022",
  "High"
);

const projectTestTaskOne = new _createNewTask__WEBPACK_IMPORTED_MODULE_2__.Task(
  "Project Test",
  "Create a very nice app",
  "Go on VS Code and build a lot of nice features in javascript",
  "15/11/2022",
  "Medium"
);

(0,_createNewTask__WEBPACK_IMPORTED_MODULE_2__.addTaskToTasks)(fitnessTaskOne);
(0,_createNewTask__WEBPACK_IMPORTED_MODULE_2__.addTaskToTasks)(fitnessTaskTwo);
(0,_createNewTask__WEBPACK_IMPORTED_MODULE_2__.addTaskToTasks)(projectTestTaskOne);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKMEQ7QUFDUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ3BCO0FBQ0EsOERBQWdCO0FBQ2hCO0FBQ0EsMkJBQTJCLGdEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdEQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQWM7QUFDZCw4REFBYztBQUNkLDhEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZU5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VGFza0J1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb3BlblByb2plY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NlbGVjdGVkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRhc2tMaXN0ID0gW107XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IocHJvamVjdCwgdGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza1RvVGFza3ModGFzaykge1xyXG4gIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbn1cclxuIiwiaW1wb3J0IG9wZW5OZXdUYXNrIGZyb20gXCIuL25ld1Rhc2tCdXR0b25cIjtcclxuaW1wb3J0IGZpbGxQcm9qZWN0TW9kYWwgZnJvbSBcIi4vb3BlblByb2plY3RNb2RhbFwiO1xyXG5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xyXG5jb25zdCBzaWRlYmFyTW9kYWxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtc2lkZWJhci1pdGVtXCIpO1xyXG5jb25zdCBvcGVuUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3UHJvamVjdEJ0blwiKTtcclxuY29uc3Qgb3BlblRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tCdG5cIik7XHJcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsQ2xvc2VCdG5cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcclxuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3RNb2RhbCgpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBmaWxsUHJvamVjdE1vZGFsKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuVGFza01vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG9wZW5OZXdUYXNrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0NsYXNzTGlzdCgpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGViYXJNb2RhbEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc2lkZWJhck1vZGFsSXRlbXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgc2lkZWJhck1vZGFsSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGFsQ2xhc3NMaXN0KGUpIHtcclxuICBjb25zdCBzaWRlYmFyTW9kYWxDbGlja2VkID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmICghc2lkZWJhck1vZGFsQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJNb2RhbENsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gIH1cclxufVxyXG5cclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XHJcbm9wZW5Qcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvamVjdE1vZGFsKTtcclxub3BlblRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5UYXNrTW9kYWwpO1xyXG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxuIiwiaW1wb3J0IHsgaGFuZGxlU2VjdGlvblNlbGVjdGVkLCBjaGVja0NsYXNzTGlzdCB9IGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCwgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCBmaWxsUHJvamVjdFdpdGhUYXNrcyBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBpY29uKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RUb1Byb2plY3RzKHByb2plY3QpIHtcclxuICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1uYXZcIik7XHJcbiAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1uYXZcIik7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRleHQtaWNvblwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3M9XCJzaWRlYmFyLWljb25zXCJcclxuICAgICAgICBzcmM9XCIke3Byb2plY3RMaXN0W2ldLmljb259XCJcclxuICAgICAgICBhbHQ9XCJBIGhhbW1lciBhbmQgYSBzY3Jld2RyaXZlciBjcm9zc2VkXCJcclxuICAgICAgLz5cclxuICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3RMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZWRpdC1lcmFzZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCIgYWx0PVwiZWRpdCBpY29uXCIgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgbmV3UHJvamVjdERpdi5pbm5lckhUTUwgPSBuZXdQcm9qZWN0O1xyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XHJcbiAgfVxyXG4gIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTZWN0aW9uU2VsZWN0ZWQpO1xyXG59XHJcblxyXG5sZXQgc2VsZWN0ZWRQcm9qZWN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaWNvblwiKTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWNvbkNsYXNzTGlzdCgpIHtcclxuICBzZWxlY3RlZFByb2plY3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUHJvamVjdEljb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0SWNvbnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWljb25cIikpIHtcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0SWNvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1pY29uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUljb25TZWxlY3RlZChlKSB7XHJcbiAgY29uc3QgaWNvbkNsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKFxyXG4gICAgIWljb25DbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1pY29uXCIpICYmXHJcbiAgICBpY29uQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWljb25cIilcclxuICApIHtcclxuICAgIGNoZWNrSWNvbkNsYXNzTGlzdCgpO1xyXG4gICAgaWNvbkNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1pY29uXCIpO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBpY29uQ2xpY2tlZC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0LWljb24gYWN0aXZlLWljb25cIiB8fFxyXG4gICAgaWNvbkNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwicHJvamVjdC1pY29uXCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBpY29uQ2xpY2tlZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaWYgKCFjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1pY29uXCIpKSB7XHJcbiAgICAgIGNoZWNrSWNvbkNsYXNzTGlzdCgpO1xyXG4gICAgICBjbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUaXRsZU9uQWRkKCkge1xyXG4gIGNvbnN0IGNvbnRlbnRUaXRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdGl0bGUtdGV4dFwiKTtcclxuICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9IHByb2plY3RzLmxhc3RDaGlsZC5pbm5lclRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIikudmFsdWU7XHJcblxyXG4gIGlmICh0aXRsZSA9PT0gXCJcIikge1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC10aXRsZS1lcnJvclwiKTtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZS1pY29uXCIpWzBdLmNoaWxkTm9kZXNbMF07XHJcblxyXG4gIGlmIChpY29uLmFsdCA9PT0gXCJhIHdyZW5jaCBhbmQgYSBzY3Jld2RyaXZlciBjcm9zc2VkXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3dyZW5jaC1zY3Jld2RyaXZlci1jcm9zc2VkLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaWNvbi5hbHQgPT09IFwiYSBib29rIGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvYm9vay5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgYmFnIG9mIG1vbmV5IGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvbW9uZXktYmFnLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaWNvbi5hbHQgPT09IFwiYSBwaXp6YSBzbGljZSBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3BpenphLXNsaWNlLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaWNvbi5hbHQgPT09IFwiYSBwcmVzZW50IGJveCBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ByZXNlbnQtYm94LnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaWNvbi5hbHQgPT09IFwiYSB2b2xsZXliYWxsIGJhbGwgaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy92b2xsZXliYWxsLWJhbGwuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIHBlcnNvbiBob2xkaW5nIHR3byBkdW1iYmVsbHMgaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9kdW1iYmVsbHMtZXhlcmNpc2Uuc3ZnXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0QWRkZWQgPSBuZXcgUHJvamVjdCh0aXRsZSwgaWNvbik7XHJcblxyXG4gIGFkZFByb2plY3RUb1Byb2plY3RzKHByb2plY3RBZGRlZCk7XHJcbiAgY2xvc2VNb2RhbCgpO1xyXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMocHJvamVjdHMpO1xyXG4gIGNyZWF0ZU5ld1Byb2plY3QoKTtcclxuXHJcbiAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICBwcm9qZWN0cy5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gIGNyZWF0ZVByb2plY3RUaXRsZU9uQWRkKCk7XHJcbiAgZmlsbFByb2plY3RXaXRoVGFza3MoKTtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cy5sYXN0Q2hpbGQpO1xyXG59XHJcbiIsImltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzaygpIHtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmFjdGlvbiA9IFwiI1wiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgZmlyc3RGaWVsZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZpcnN0RmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcblxyXG4gIC8vIGZpcnN0IGZpZWxkcyBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsLmZvciA9IFwidGFzay10aXRsZVwiO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInRhc2stdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLlwiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IHNlY29uZEZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBsYWJlbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFR3by5mb3IgPSBcInRhc2stZGV0YWlsc1wiO1xyXG4gIGxhYmVsVHdvLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgaW5wdXRUd28ubmFtZSA9IFwidGFzay1kZXRhaWxzXCI7XHJcbiAgaW5wdXRUd28uaWQgPSBcInRhc2stZGV0YWlsc1wiO1xyXG5cclxuICAvLyBzZWNvbmQgZmllbGRzIGRpdidzIHRoaXJkIGNoaWxkXHJcbiAgY29uc3QgcGFyYWdyYXBoRmllbGRzVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzVHdvLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZS1lcnJvclwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHNUd28uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzVHdvLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC5cIjtcclxuXHJcbiAgLy8gY29uc3QgbmV3VG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgLy8gbmV3VG9kb0RldGFpbHMubmFtZSA9IFwibmV3LXRvZG8tZGV0YWlsc1wiO1xyXG4gIC8vIG5ld1RvZG9EZXRhaWxzLmlkID0gXCJuZXctdG9kby1kZXRhaWxzXCI7XHJcbiAgLy8gbmV3VG9kb0RldGFpbHMucGxhY2Vob2xkZXIgPSBcIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWRhdGVcIik7XHJcblxyXG4gIGNvbnN0IG5ld0RhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwibmV3LWRhdGUtdGV4dFwiKTtcclxuICBuZXdEYXRlVGV4dC50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6XCI7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGRhdGVJbnB1dC5uYW1lID0gXCJ0b2RvLWRhdGVcIjtcclxuICBkYXRlSW5wdXQuaWQgPSBcIm5ldy10b2RvLWRhdGVcIjtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eUxpbmUuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxpbmVcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS10ZXh0XCIpO1xyXG4gIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuXHJcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRvZG9CdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNyZWF0ZVRvZG9CdG5EaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJ1dHRvbnNcIik7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNyZWF0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWJ0blwiKTtcclxuICBjcmVhdGVUb2RvQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50IGRpdiBjaGlsZHJlblxyXG5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdEZpZWxkc0Rpdik7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzZWNvbmRGaWVsZHNEaXYpO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2IGNoaWxkcmVuXHJcbiAgZmlyc3RGaWVsZHNEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGZpcnN0RmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBmaXJzdEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhGaWVsZHMpO1xyXG5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGluZSk7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2IGNoaWxkcmVuXHJcbiAgc2Vjb25kRmllbGRzRGl2LmFwcGVuZENoaWxkKGxhYmVsVHdvKTtcclxuICBzZWNvbmRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXRUd28pO1xyXG4gIHNlY29uZEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhGaWVsZHNUd28pO1xyXG5cclxuICAvLyBuZXctdG9kby1kYXRlIGRpdiBjaGlsZHJlblxyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQobmV3RGF0ZVRleHQpO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgLy8gcHJpb3JpdHkgbGluZSBkaXYgY2hpbGRyZW5cclxuXHJcbiAgcHJpb3JpdHlMaW5lLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuICBwcmlvcml0eUxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bkRpdik7XHJcblxyXG4gIC8vIHByaW9yaXR5IGRpdiBjaGlsZHJlblxyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xyXG5cclxuICAvLyBjcmVhdGUgbmV3IHRhc2sgYnV0dG9uIGRpdiBjaGlsZFxyXG4gIGNyZWF0ZVRvZG9CdG5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bik7XHJcblxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5OZXdUYXNrKCkge1xyXG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcbiAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWhlYWRlci10ZXh0XCIpO1xyXG5cclxuICBtb2RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgbmV3IHRhc2tcIjtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcbiAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Rhc2soKSk7XHJcblxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QsIGhhbmRsZUljb25TZWxlY3RlZCB9IGZyb20gXCIuL25ld1Byb2plY3RzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcclxuXHJcbiAgLy8gZm9ybSB0YWcncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcblxyXG4gIC8vIGZpZWxkcyBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsLmZvciA9IFwicHJvamVjdC10aXRsZVwiO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLlwiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IGljb25TZWxlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGljb25TZWxlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcImljb24tc2VsZWN0aW9uXCIpO1xyXG5cclxuICAvLyBpY29uLXNlbGVjdGlvbiBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaEljb25TZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhJY29uU2VsZWN0aW9uLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYW4gSWNvblwiO1xyXG5cclxuICAvLyBpY29uLXNlbGVjdGlvbiBkaXYncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBwcm9qZWN0SWNvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RJY29uc0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uc1wiKTtcclxuXHJcbiAgLy8gcHJvamVjdC1pY29ucyBkaXYgY2hpbGRyZW5cclxuICBjb25zdCB0b29sc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvb2xzSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG4gIHRvb2xzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib29rSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vbmV5QmFnSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwaXp6YUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBpenphSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwcmVzZW50Qm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJlc2VudEJveEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3Qgdm9sbGV5QmFsbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHZvbGxleUJhbGxJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IGd5bUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGd5bUljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3QgdG9vbHNJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB0b29sc0ljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuICB0b29sc0ljb25JbWcuYWx0ID0gXCJhIHdyZW5jaCBhbmQgYSBzY3Jld2RyaXZlciBjcm9zc2VkXCI7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBib29rSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCI7XHJcbiAgYm9va0ljb25JbWcuYWx0ID0gXCJhIGJvb2sgaWNvblwiO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1vbmV5QmFnSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL21vbmV5LWJhZy5zdmdcIjtcclxuICBtb25leUJhZ0ljb25JbWcuYWx0ID0gXCJhIGJhZyBvZiBtb25leSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHBpenphSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGl6emFJY29uSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCI7XHJcbiAgcGl6emFJY29uSW1nLmFsdCA9IFwiYSBwaXp6YSBzbGljZSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHByZXNlbnRCb3hJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBwcmVzZW50Qm94SWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ByZXNlbnQtYm94LnN2Z1wiO1xyXG4gIHByZXNlbnRCb3hJY29uSW1nLmFsdCA9IFwiYSBwcmVzZW50IGJveCBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHZvbGxleUJhbGxJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5hbHQgPSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIjtcclxuXHJcbiAgY29uc3QgZ3ltSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgZ3ltSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuICBneW1JY29uSW1nLmFsdCA9IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCdzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbW9kYWxCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5cclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idG5cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCBkaXYgY2hpbGRyZW5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQnV0dG9ucyk7XHJcblxyXG4gIC8vIGZvcm0gdGFnIGNoaWxkcmVuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNEaXYpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaWNvblNlbGVjdGlvbkRpdik7XHJcblxyXG4gIC8vIG1vZGFsLWJ1dHRvbnMgY2hpbGRyZW5cclxuICBtb2RhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsTW9kYWxCdG4pO1xyXG4gIG1vZGFsQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcclxuXHJcbiAgLy8gZmllbGRzIGRpdiBjaGlsZHJlblxyXG4gIGZpZWxkc0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgZmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBmaWVsZHNEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRmllbGRzKTtcclxuXHJcbiAgLy8gaWNvbi1zZWxlY3Rpb24gZGl2IGNoaWxkcmVuXHJcbiAgaWNvblNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhJY29uU2VsZWN0aW9uKTtcclxuICBpY29uU2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByb2plY3RJY29uc0Rpdik7XHJcblxyXG4gIC8vIHByb2plY3QtaWNvbiBkaXYgY2hpbGRyZW5cclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQodG9vbHNJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQoYm9va0ljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChtb25leUJhZ0ljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChwaXp6YUljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChwcmVzZW50Qm94SWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKHZvbGxleUJhbGxJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQoZ3ltSWNvbik7XHJcblxyXG4gIC8vIHByb2plY3QtaWNvbiBpbWdzXHJcbiAgdG9vbHNJY29uLmFwcGVuZENoaWxkKHRvb2xzSWNvbkltZyk7XHJcbiAgYm9va0ljb24uYXBwZW5kQ2hpbGQoYm9va0ljb25JbWcpO1xyXG4gIG1vbmV5QmFnSWNvbi5hcHBlbmRDaGlsZChtb25leUJhZ0ljb25JbWcpO1xyXG4gIHBpenphSWNvbi5hcHBlbmRDaGlsZChwaXp6YUljb25JbWcpO1xyXG4gIHByZXNlbnRCb3hJY29uLmFwcGVuZENoaWxkKHByZXNlbnRCb3hJY29uSW1nKTtcclxuICB2b2xsZXlCYWxsSWNvbi5hcHBlbmRDaGlsZCh2b2xsZXlCYWxsSWNvbkltZyk7XHJcbiAgZ3ltSWNvbi5hcHBlbmRDaGlsZChneW1JY29uSW1nKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsbFByb2plY3RNb2RhbCgpIHtcclxuICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJvZHlcIik7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXItdGV4dFwiKTtcclxuXHJcbiAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIG5ldyBwcm9qZWN0XCI7XHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhtb2RhbENvbnRlbnQpO1xyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0TW9kYWwoKSk7XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ0blwiKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pY29uXCIpO1xyXG4gIGNvbnN0IGNhbmNlbE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxuICBzZWxlY3RlZFByb2plY3RJY29ucy5mb3JFYWNoKChzZWxlY3RlZFByb2plY3RJY29uKSA9PlxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlSWNvblNlbGVjdGVkKVxyXG4gICk7XHJcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3UHJvamVjdCk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdGl0bGUtdGV4dFwiKTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0VGl0bGUoZSkge1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGUuY29tcG9zZWRQYXRoKCk7XHJcblxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS5pbm5lclRleHQgPT09IFwiXCIgJiZcclxuICAgIHNlbGVjdGVkUHJvamVjdFsxXS5pbm5lclRleHQgPT09IFwiXCJcclxuICApIHtcclxuICAgIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRQcm9qZWN0WzJdLmlubmVyVGV4dDtcclxuICB9XHJcbiAgaWYgKHNlbGVjdGVkUHJvamVjdFswXSAhPT0gXCJcIikge1xyXG4gICAgY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQgPSBzZWxlY3RlZFByb2plY3RbMF0uaW5uZXJUZXh0O1xyXG4gIH1cclxuICByZXR1cm4gY29udGVudFRpdGxlVGV4dDtcclxufVxyXG4iLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZU5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgY29udGVudFRpdGxlVGV4dCB9IGZyb20gXCIuL3Byb2plY3RDb250ZW50XCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzRXhjZXB0Rmlyc3QocGFyZW50KSB7XHJcbiAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQuaWQgIT09IFwidGFza3NUaXRsZVwiKSB7XHJcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrc0NvdW50KCkge1xyXG4gIGNvbnN0IHRhc2tzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvdW50XCIpO1xyXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1kaXZcIik7XHJcbiAgdGFza3NDb3VudC50ZXh0Q29udGVudCA9IHRhc2tzRGl2LmNoaWxkcmVuLmxlbmd0aCAtIDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tMaXN0Rm9yUHJvamVjdCgpIHtcclxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtZGl2XCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodGFza0xpc3RbaV0ucHJvamVjdCA9PT0gY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQpIHtcclxuICAgICAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+PC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7dGFza0xpc3RbaV0uZGF0ZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9ub3RlLWVkaXQtb3V0bGluZS5wbmdcIiBhbHQ9XCJlZGl0IGljb25cIiAvPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJ0cmFzaCBjYW4gaWNvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tMaXN0Rm9yRGF0ZXMoKSB7XHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWRpdlwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdUYXNrRGl2LmlkID0gXCJjb250ZW50XCI7XHJcbiAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlc1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9ub3RlLWVkaXQtb3V0bGluZS5wbmdcIiBhbHQ9XCJlZGl0IGljb25cIiAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJ0cmFzaCBjYW4gaWNvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsbFByb2plY3RXaXRoVGFza3MoKSB7XHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWRpdlwiKTtcclxuXHJcbiAgcmVtb3ZlQ2hpbGROb2Rlc0V4Y2VwdEZpcnN0KHRhc2tzRGl2KTtcclxuICBjcmVhdGVUYXNrTGlzdEZvclByb2plY3QoKTtcclxuICB1cGRhdGVUYXNrc0NvdW50KCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGZ1bmN0aW9uLXBhcmVuLW5ld2xpbmUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcGxpY2l0LWFycm93LWxpbmVicmVhayAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RUaXRsZSB9IGZyb20gXCIuL3Byb2plY3RDb250ZW50XCI7XHJcbmltcG9ydCBmaWxsUHJvamVjdFdpdGhUYXNrcyBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RcIjtcclxuXHJcbmxldCBzaWRlYmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItbmF2XCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2xhc3NMaXN0KCkge1xyXG4gIHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1uYXZcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZWJhckl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc2lkZWJhckl0ZW1zW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIHNpZGViYXJJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2VjdGlvblNlbGVjdGVkKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgc2lkZWJhckNsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKFxyXG4gICAgIXNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpICYmXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW5hdlwiKVxyXG4gICkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgIGNyZWF0ZVByb2plY3RUaXRsZShlKTtcclxuICAgIGZpbGxQcm9qZWN0V2l0aFRhc2tzKCk7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInNpZGViYXItbmF2XCIgfHxcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInNpZGViYXItbmF2IHByb2plY3RzLW5hdlwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjbGlja2VkID0gc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudDtcclxuICAgIGlmICghY2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgICBjaGVja0NsYXNzTGlzdCgpO1xyXG4gICAgICBjbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgICAgY3JlYXRlUHJvamVjdFRpdGxlKGUpO1xyXG4gICAgICBmaWxsUHJvamVjdFdpdGhUYXNrcygpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInNpZGViYXItbmF2XCIgfHxcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09XHJcbiAgICAgIFwic2lkZWJhci1uYXYgcHJvamVjdHMtbmF2XCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpZiAoIWNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgICAgY2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgICAgIGNyZWF0ZVByb2plY3RUaXRsZShlKTtcclxuICAgICAgZmlsbFByb2plY3RXaXRoVGFza3MoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnNpZGViYXJJdGVtcy5mb3JFYWNoKChzaWRlYmFySXRlbSkgPT5cclxuICBzaWRlYmFySXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2VjdGlvblNlbGVjdGVkKVxyXG4pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmN0aW9uLXBhcmVuLW5ld2xpbmUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcGxpY2l0LWFycm93LWxpbmVicmVhayAqL1xyXG5pbXBvcnQgeyBvcGVuUHJvamVjdE1vZGFsLCBvcGVuVGFza01vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVOZXdQcm9qZWN0LFxyXG4gIGFkZFByb2plY3RUb1Byb2plY3RzLFxyXG4gIHByb2plY3RMaXN0LFxyXG4gIFByb2plY3QsXHJcbn0gZnJvbSBcIi4vbmV3UHJvamVjdHNcIjtcclxuaW1wb3J0IHsgVGFzaywgYWRkVGFza1RvVGFza3MsIHRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTmV3VGFza1wiO1xyXG5cclxuY29uc3QgaGFtbWVyV3JlbmNoID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuY29uc3Qgdm9sbGV5YmFsbCA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvdm9sbGV5YmFsbC1iYWxsLnN2Z1wiO1xyXG5jb25zdCBneW1EdW1iYmVsbCA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvZHVtYmJlbGxzLWV4ZXJjaXNlLnN2Z1wiO1xyXG5cclxuY29uc3QgcHJvamVjdEZpdG5lc3MgPSBuZXcgUHJvamVjdChcIlN0YXlpbmcgRml0bmVzc1wiLCBneW1EdW1iYmVsbCk7XHJcbmNvbnN0IHByb2plY3RXb3JrID0gbmV3IFByb2plY3QoXCJXb3JrIGhhcmQgYW5kIGdldCByaWNoXCIsIGhhbW1lcldyZW5jaCk7XHJcblxyXG5hZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0Rml0bmVzcyk7XHJcbmFkZFByb2plY3RUb1Byb2plY3RzKHByb2plY3RXb3JrKTtcclxuXHJcbmNyZWF0ZU5ld1Byb2plY3QoKTtcclxuXHJcbmNvbnN0IGZpdG5lc3NUYXNrT25lID0gbmV3IFRhc2soXHJcbiAgXCJTdGF5aW5nIEZpdG5lc3NcIixcclxuICBcIkdvIHRvIHRoZSBneW1cIixcclxuICBcIldvcmsgb3V0IGFuZCBsaWZ0IHdlaWdodHMgYXQgdGhlIGd5bSwgMyB0aW1lcyBhIHdlZWtcIixcclxuICBcIjMxLzEyLzIwMjJcIixcclxuICBcIkhpZ2hcIlxyXG4pO1xyXG5cclxuY29uc3QgZml0bmVzc1Rhc2tUd28gPSBuZXcgVGFzayhcclxuICBcIlN0YXlpbmcgRml0bmVzc1wiLFxyXG4gIFwiV2FrZSB1cCBlYXJseSBhbmQgcnVuIGF0IHRoZSBzdHJlZXRcIixcclxuICBcIlJ1biBhdCB0aGUgc3RyZWV0IDQgdGltZXMgYSB3ZWVrIGZvciBhdCBsZWFzdCAxNSBtaW51dGVzXCIsXHJcbiAgXCIzMS8xMi8yMDIyXCIsXHJcbiAgXCJIaWdoXCJcclxuKTtcclxuXHJcbmNvbnN0IHByb2plY3RUZXN0VGFza09uZSA9IG5ldyBUYXNrKFxyXG4gIFwiUHJvamVjdCBUZXN0XCIsXHJcbiAgXCJDcmVhdGUgYSB2ZXJ5IG5pY2UgYXBwXCIsXHJcbiAgXCJHbyBvbiBWUyBDb2RlIGFuZCBidWlsZCBhIGxvdCBvZiBuaWNlIGZlYXR1cmVzIGluIGphdmFzY3JpcHRcIixcclxuICBcIjE1LzExLzIwMjJcIixcclxuICBcIk1lZGl1bVwiXHJcbik7XHJcblxyXG5hZGRUYXNrVG9UYXNrcyhmaXRuZXNzVGFza09uZSk7XHJcbmFkZFRhc2tUb1Rhc2tzKGZpdG5lc3NUYXNrVHdvKTtcclxuYWRkVGFza1RvVGFza3MocHJvamVjdFRlc3RUYXNrT25lKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9