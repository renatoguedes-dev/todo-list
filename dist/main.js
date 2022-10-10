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
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "addTaskToTasks": () => (/* binding */ addTaskToTasks),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _projectContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectContent */ "./src/projectContent.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");




const taskList = [];

class Task {
  constructor(project, title, details, date, fullDate, priority) {
    this.project = project;
    this.title = title;
    this.details = details;
    this.date = date;
    this.fullDate = fullDate;
    this.priority = priority;
  }
}

function addTaskToTasks(task) {
  taskList.push(task);
}

function addNewTask(e) {
  e.preventDefault();

  const project = _projectContent__WEBPACK_IMPORTED_MODULE_1__.contentTitleText.innerText;
  const title = document.getElementById("task-title").value;
  const details = document.getElementById("task-details").value;
  let taskDueDate = document.querySelector("#todo-date").valueAsDate;
  const taskFullDueDate = document.querySelector("#todo-date").valueAsDate;
  let priority = document.querySelector(".active-priority");

  const modalTitleError = document.querySelector(".modal-title-error");
  const modalDetailsError = document.querySelector(".modal-details-error");
  const modalDateError = document.querySelector(".modal-date-error");
  const modalPriorityError = document.querySelector(".modal-priority-error");

  // Title, details, date and priority not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    return;
  }

  // Title filled. Details, date and priority not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Details filled. Title, date and priority not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Date filled. Title, details and priority not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Priority filled. Title, details and date not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Title and details filled. Date and priority not filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Title and date filled. Details and priority not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalDetailsError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Title and priority filled. Details and date not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Details and date filled. Title and priority not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Details and priority filled. Title and date not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Date and priority filled. Title and details not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Title not filled. Details, date and priority filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Details not filled. Title, date and priority filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalDetailsError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Date not filled. Title, details and priority filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalDateError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Priority not filled. Title, details and date filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalPriorityError.classList.remove("hide");
    if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  if (taskDueDate !== null) {
    taskDueDate = taskDueDate.toLocaleDateString();
  }

  if (priority !== null) {
    priority = priority.textContent;
  }

  const taskAdded = new Task(
    project,
    title,
    details,
    taskDueDate,
    taskFullDueDate,
    priority
  );

  addTaskToTasks(taskAdded);
  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
  (0,_selectedProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
}


/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openTaskDetails)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");



function createTaskDetails(taskDetailTitle) {
  const modalContent = document.querySelector(".modal-content");
  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_1__.taskList.length; i++) {
    if (taskDetailTitle === _createNewTask__WEBPACK_IMPORTED_MODULE_1__.taskList[i].title) {
      const projectName = _createNewTask__WEBPACK_IMPORTED_MODULE_1__.taskList[i].project;
      const taskDescription = _createNewTask__WEBPACK_IMPORTED_MODULE_1__.taskList[i].details;
      const dueDateInfo = _createNewTask__WEBPACK_IMPORTED_MODULE_1__.taskList[i].date;
      const priorityInfo = _createNewTask__WEBPACK_IMPORTED_MODULE_1__.taskList[i].priority;

      // project div with project and project text

      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-detail-div");
      projectDiv.classList.add("details-divs");

      const project = document.createElement("p");
      project.classList.add("details-left-column");
      project.textContent = "Project:";

      const projectText = document.createElement("p");
      projectText.classList.add("details-right-column");
      projectText.textContent = `${projectName}`;

      // title div with title and title text
      const taskTitleDiv = document.createElement("div");
      taskTitleDiv.classList.add("task-title-detail");
      taskTitleDiv.classList.add("details-divs");

      const detailTitle = document.createElement("p");
      detailTitle.classList.add("details-left-column");
      detailTitle.textContent = "Title:";

      const detailTitleText = document.createElement("p");
      detailTitleText.classList.add("details-right-column");
      detailTitleText.textContent = `${taskDetailTitle}`;

      // description div with description and description text
      const detailDescriptionDiv = document.createElement("div");
      detailDescriptionDiv.classList.add("task-description-div");
      detailDescriptionDiv.classList.add("details-divs");

      const detailDescription = document.createElement("p");
      detailDescription.classList.add("details-left-column");
      detailDescription.textContent = "Description:";

      const detailDescriptionText = document.createElement("p");
      detailDescriptionText.classList.add("details-right-column");
      detailDescriptionText.textContent = `${taskDescription}`;

      // due date div with due date and due date info

      const dueDateDiv = document.createElement("div");
      dueDateDiv.classList.add("due-date-div");
      dueDateDiv.classList.add("details-divs");

      const dueDate = document.createElement("p");
      dueDate.classList.add("details-left-column");
      dueDate.textContent = "Due Date:";

      const dueDateText = document.createElement("p");
      dueDateText.classList.add("details-right-column");
      dueDateText.textContent = `${dueDateInfo}`;

      // priority div with priority and priority info

      const priorityDiv = document.createElement("div");
      priorityDiv.classList.add("priority-div");
      priorityDiv.classList.add("details-divs");

      const priority = document.createElement("p");
      priority.classList.add("details-left-column");
      priority.textContent = "Priority:";

      const priorityText = document.createElement("p");
      priorityText.classList.add("details-right-column");
      priorityText.textContent = `${priorityInfo}`;

      modalContent.appendChild(projectDiv);
      modalContent.appendChild(taskTitleDiv);
      modalContent.appendChild(detailDescriptionDiv);
      modalContent.appendChild(dueDateDiv);
      modalContent.appendChild(priorityDiv);

      projectDiv.appendChild(project);
      projectDiv.appendChild(projectText);

      taskTitleDiv.appendChild(detailTitle);
      taskTitleDiv.appendChild(detailTitleText);

      detailDescriptionDiv.appendChild(detailDescription);
      detailDescriptionDiv.appendChild(detailDescriptionText);

      dueDateDiv.appendChild(dueDate);
      dueDateDiv.appendChild(dueDateText);

      priorityDiv.appendChild(priority);
      priorityDiv.appendChild(priorityText);

      return modalContent;
    }
  }
  return modalContent;
}

function openTaskDetails(taskDetailTitle) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Task details";

  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(modalContent);

  modalBody.appendChild(createTaskDetails(taskDetailTitle));
}


/***/ }),

/***/ "./src/editProject.js":
/*!****************************!*\
  !*** ./src/editProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEditProject": () => (/* binding */ createEditProject),
/* harmony export */   "openEditProject": () => (/* binding */ openEditProject)
/* harmony export */ });
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _newProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProjects */ "./src/newProjects.js");




let projectName;

function createFilledProject(projectTitle) {
  let altText;
  for (let i = 0; i < _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList.length; i++) {
    if (projectTitle === _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].title) {
      projectName = _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].title;

      if (
        _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].icon ===
        "./images/projects-icons/wrench-screwdriver-crossed.svg"
      ) {
        altText = "a wrench and a screwdriver crossed";
      } else if (_newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].icon === "./images/projects-icons/book.svg") {
        altText = "a book icon";
      } else if (
        _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].icon === "./images/projects-icons/money-bag.svg"
      ) {
        altText = "a bag of money icon";
      } else if (
        _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].icon === "./images/projects-icons/pizza-slice.svg"
      ) {
        altText = "a pizza slice icon";
      } else if (
        _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].icon === "./images/projects-icons/present-box.svg"
      ) {
        altText = "a present box icon";
      } else if (
        _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].icon === "./images/projects-icons/volleyball-ball.svg"
      ) {
        altText = "a volleyball ball icon";
      } else if (
        _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].icon === "./images/projects-icons/dumbbells-exercise.svg"
      ) {
        altText = "a person holding two dumbbells icon";
      }
    }
  }

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
  input.value = projectName;

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

  if (altText === toolsIconImg.alt) {
    toolsIcon.classList.add("active-icon");
  } else if (altText === bookIconImg.alt) {
    bookIcon.classList.add("active-icon");
  } else if (altText === moneyBagIconImg.alt) {
    moneyBagIcon.classList.add("active-icon");
  } else if (altText === pizzaIconImg.alt) {
    pizzaIcon.classList.add("active-icon");
  } else if (altText === presentBoxIconImg.alt) {
    presentBoxIcon.classList.add("active-icon");
  } else if (altText === volleyBallIconImg.alt) {
    volleyBallIcon.classList.add("active-icon");
  } else if (altText === gymIconImg.alt) {
    gymIcon.classList.add("active-icon");
  }

  // modal-content's second child
  const modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-modal-btn");
  cancelModalBtn.textContent = "Cancel";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-btn");
  addProjectBtn.textContent = "Edit Project";

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

function editProject() {
  const projects = document.querySelector("#projects");
  const title = document.getElementById("project-title").value;
  let icon = document.getElementsByClassName("active-icon")[0].childNodes[0];

  if (title === "") {
    const modalTitleError = document.querySelector(".modal-title-error");
    modalTitleError.classList.remove("hide");
    return;
  }

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

  // this will match the right project to their tasks and make sure it's all
  // changed in both objects when edited
  for (let i = 0; i < _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList.length; i++) {
    if (_newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].title === projectName) {
      for (let j = 0; j < _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList.length; j++) {
        if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[j].project === projectName) {
          _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].title = title;
          _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].icon = icon;
          _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[j].project = title;
        }
      }
    }
  }

  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)();
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(projects);
  (0,_newProjects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)();
}

function createEditProject(projectTitle) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");

  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(modalContent);

  modalBody.appendChild(createFilledProject(projectTitle));

  const selectedProjectIcons = document.querySelectorAll(".project-icon");
  selectedProjectIcons.forEach((selectedProjectIcon) =>
    selectedProjectIcon.addEventListener("click", _newProjects__WEBPACK_IMPORTED_MODULE_2__.handleIconSelected)
  );

  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
  cancelModalBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.closeModal);

  const addProjectBtn = document.querySelector(".add-project-btn");
  addProjectBtn.addEventListener("click", editProject);
}

function openEditProject(projectTitle) {
  const modalHeader = document.querySelector(".modal-header-text");
  modalHeader.textContent = "Edit project";

  createEditProject(projectTitle);
}


/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openEditTask)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");





let taskName;

function createFilledTask(
  taskName,
  taskDescription,
  dueDateInfo,
  priorityInfo
) {
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
  label.htmlFor = "task-title";

  // first fields div's second child
  const input = document.createElement("input");
  input.type = "text";
  input.name = "task-title";
  input.id = "task-title";
  input.value = taskName;

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
  labelTwo.textContent = "Description";
  labelTwo.htmlFor = "task-details";

  // second fields div's second child
  const inputTwo = document.createElement("textarea");
  inputTwo.name = "task-details";
  inputTwo.id = "task-details";
  inputTwo.value = taskDescription;

  // second fields div's third child
  const paragraphFieldsTwo = document.createElement("p");
  paragraphFieldsTwo.classList.add("modal-details-error");
  paragraphFieldsTwo.classList.add("hide");
  paragraphFieldsTwo.textContent = "Please fill out this field.";

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("new-todo-date");

  const newDateText = document.createElement("label");
  newDateText.classList.add("new-date-text");
  newDateText.textContent = "Due date";
  newDateText.htmlFor = "todo-date";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "todo-date";
  dateInput.id = "todo-date";
  dateInput.valueAsDate = dueDateInfo;

  const dateError = document.createElement("p");
  dateError.classList.add("modal-date-error");
  dateError.classList.add("hide");
  dateError.textContent = "Please choose a date.";

  const priorityLine = document.createElement("div");
  priorityLine.classList.add("priority-line");

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("priority");

  const priorityText = document.createElement("div");
  priorityText.classList.add("priority-text");
  priorityText.textContent = "Priority";

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

  if (priorityInfo === lowPriority.textContent) {
    lowPriority.classList.add("active-priority");
  } else if (priorityInfo === mediumPriority.textContent) {
    mediumPriority.classList.add("active-priority");
  } else if (priorityInfo === highPriority.textContent) {
    highPriority.classList.add("active-priority");
  }

  const priorityError = document.createElement("p");
  priorityError.classList.add("modal-priority-error");
  priorityError.classList.add("hide");
  priorityError.textContent = "Please select the priority.";

  const createTodoBtnDiv = document.createElement("div");
  createTodoBtnDiv.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-modal-btn");
  cancelModalBtn.textContent = "Cancel";

  const createTodoBtn = document.createElement("button");
  createTodoBtn.classList.add("add-todo-btn");
  createTodoBtn.textContent = "Edit Task";

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
  dateDiv.appendChild(dateError);

  // priority line div children

  priorityLine.appendChild(priorityDiv);
  priorityLine.appendChild(priorityError);
  priorityLine.appendChild(createTodoBtnDiv);

  // priority div children
  priorityDiv.appendChild(priorityText);
  priorityDiv.appendChild(lowPriority);
  priorityDiv.appendChild(mediumPriority);
  priorityDiv.appendChild(highPriority);

  // create new task button div child
  createTodoBtnDiv.appendChild(cancelModalBtn);
  createTodoBtnDiv.appendChild(createTodoBtn);

  return modalContent;
}

function editTask() {
  const title = document.getElementById("task-title").value;
  const details = document.getElementById("task-details").value;
  let taskDueDate = document.querySelector("#todo-date").valueAsDate;
  const taskFullDueDate = document.querySelector("#todo-date").valueAsDate;
  let priority = document.querySelector(".active-priority");

  const modalTitleError = document.querySelector(".modal-title-error");
  const modalDetailsError = document.querySelector(".modal-details-error");
  const modalDateError = document.querySelector(".modal-date-error");
  const modalPriorityError = document.querySelector(".modal-priority-error");

  // Title, details, date and priority not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    return;
  }

  // Title filled. Details, date and priority not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Details filled. Title, date and priority not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Date filled. Title, details and priority not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Priority filled. Title, details and date not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Title and details filled. Date and priority not filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Title and date filled. Details and priority not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalDetailsError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Title and priority filled. Details and date not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Details and date filled. Title and priority not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Details and priority filled. Title and date not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Date and priority filled. Title and details not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Title not filled. Details, date and priority filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Details not filled. Title, date and priority filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalDetailsError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Date not filled. Title, details and priority filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalDateError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Priority not filled. Title, details and date filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalPriorityError.classList.remove("hide");
    if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  if (taskDueDate !== null) {
    taskDueDate = taskDueDate.toLocaleDateString();
  }

  if (priority !== null) {
    priority = priority.textContent;
  }

  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList.length; i++) {
    if (_createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].title === taskName) {
      _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].title = title;
      _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].details = details;
      _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].date = taskDueDate;
      _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].fullDate = taskFullDueDate;
      _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].priority = priority;
      console.log(_createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i]);
    }
  }

  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
  (0,_selectedProject__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

function openFilledTask(taskName, taskDescription, dueDateInfo, priorityInfo) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");

  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(modalContent);
  modalBody.appendChild(
    createFilledTask(taskName, taskDescription, dueDateInfo, priorityInfo)
  );

  const selectPriorities = document.querySelectorAll(".priority-buttons");
  selectPriorities.forEach((selectPriority) =>
    selectPriority.addEventListener("click", _newTask__WEBPACK_IMPORTED_MODULE_1__.handlePrioritySelected)
  );

  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
  cancelModalBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.closeModal);

  const addTaskBtn = document.querySelector(".add-todo-btn");
  addTaskBtn.addEventListener("click", editTask);
}

function createEditTask(taskTitle) {
  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList.length; i++) {
    if (taskTitle === _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].title) {
      taskName = _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].title;
      const taskDescription = _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].details;
      const dueDateInfo = _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].fullDate;
      const priorityInfo = _createNewTask__WEBPACK_IMPORTED_MODULE_2__.taskList[i].priority;

      openFilledTask(taskName, taskDescription, dueDateInfo, priorityInfo);
    }
  }
}

function openEditTask(taskTitle) {
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Edit task";

  createEditTask(taskTitle);
}


/***/ }),

/***/ "./src/keyboardkeys.js":
/*!*****************************!*\
  !*** ./src/keyboardkeys.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keyPressed)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");


function keyPressed(e) {
  const pressedKey = e.key;

  if (pressedKey === "Escape") {
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
  }
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
/* harmony export */   "openDetailsModal": () => (/* binding */ openDetailsModal),
/* harmony export */   "openEditProjectModal": () => (/* binding */ openEditProjectModal),
/* harmony export */   "openEditTaskModal": () => (/* binding */ openEditTaskModal),
/* harmony export */   "openProjectModal": () => (/* binding */ openProjectModal),
/* harmony export */   "openTaskModal": () => (/* binding */ openTaskModal),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
/* harmony import */ var _openProjectModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openProjectModal */ "./src/openProjectModal.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details */ "./src/details.js");
/* harmony import */ var _keyboardkeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboardkeys */ "./src/keyboardkeys.js");
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editTask */ "./src/editTask.js");
/* harmony import */ var _editProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editProject */ "./src/editProject.js");







const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const sidebarModalItems = document.querySelectorAll(".modal-sidebar-item");
const openProjectButton = document.querySelector("#newProjectBtn");
const openTaskButton = document.querySelector("#newTaskBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");
const editTaskBtn = document.querySelector(".edit-task-button");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function openProjectModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  (0,_openProjectModal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  window.addEventListener("keydown", _keyboardkeys__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

function openTaskModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  (0,_newTask__WEBPACK_IMPORTED_MODULE_0__.openNewTask)();
  window.addEventListener("keydown", _keyboardkeys__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

function openDetailsModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const taskDetailTitle =
    e.composedPath()[2].children[0].lastElementChild.innerText;

  (0,_details__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDetailTitle);
  window.addEventListener("keydown", _keyboardkeys__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

function openEditTaskModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const taskTitle = e.composedPath()[3].children[0].lastElementChild.innerText;

  (0,_editTask__WEBPACK_IMPORTED_MODULE_4__["default"])(taskTitle);
  window.addEventListener("keydown", _keyboardkeys__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

function openEditProjectModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const projectTitle =
    e.composedPath()[2].children[0].lastElementChild.innerText;

  (0,_editProject__WEBPACK_IMPORTED_MODULE_5__.openEditProject)(projectTitle);
  window.addEventListener("keydown", _keyboardkeys__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
    let altText;
    if (
      projectList[i].icon ===
      "./images/projects-icons/wrench-screwdriver-crossed.svg"
    ) {
      altText = "a wrench and a screwdriver crossed";
    } else if (projectList[i].icon === "./images/projects-icons/book.svg") {
      altText = "a book icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/money-bag.svg"
    ) {
      altText = "a bag of money icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/pizza-slice.svg"
    ) {
      altText = "a pizza slice icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/present-box.svg"
    ) {
      altText = "a present box icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/volleyball-ball.svg"
    ) {
      altText = "a volleyball ball icon";
    } else if (
      projectList[i].icon === "./images/projects-icons/dumbbells-exercise.svg"
    ) {
      altText = "a person holding two dumbbells icon";
    }

    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("sidebar-nav");
    newProjectDiv.classList.add("projects-nav");

    const newProject = `
    <div class="project-text-icon">
      <img
        class="sidebar-icons"
        src="${projectList[i].icon}"
        alt="${altText}"
      />
      <p class="project-name">${projectList[i].title}</p>
    </div>
      
    <div class="project-edit-erase">
      <img
        class="edit-project-button"
        src="./images/note-edit-outline.png"
        alt="edit icon"
      />
      <img
        class="erase-project-button"
        src="./images/trash-can-outline.png"
        alt="trash can icon"
      />
    </div>`;

    newProjectDiv.innerHTML = newProject;
    projects.appendChild(newProjectDiv);
  }
  projects.addEventListener("click", _sidebar__WEBPACK_IMPORTED_MODULE_0__.handleSectionSelected);
  const editProjectBtns = document.querySelectorAll(".edit-project-button");
  editProjectBtns.forEach((editProjectBtn) =>
    editProjectBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openEditProjectModal)
  );
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
  const projects = document.querySelector("#projects");
  const contentTitleText = document.querySelector(".content-title-text");
  contentTitleText.innerText = projects.lastChild.innerText;
}

function addNewProject(e) {
  e.preventDefault();

  const projects = document.querySelector("#projects");

  const title = document.getElementById("project-title").value;
  let icon = document.getElementsByClassName("active-icon")[0].childNodes[0];

  if (title === "") {
    const modalTitleError = document.querySelector(".modal-title-error");
    modalTitleError.classList.remove("hide");
    return;
  }

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
}


/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlePrioritySelected": () => (/* binding */ handlePrioritySelected),
/* harmony export */   "openNewTask": () => (/* binding */ openNewTask)
/* harmony export */ });
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");



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
  label.htmlFor = "task-title";

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
  labelTwo.textContent = "Description";
  labelTwo.htmlFor = "task-details";

  // second fields div's second child
  const inputTwo = document.createElement("textarea");
  inputTwo.name = "task-details";
  inputTwo.id = "task-details";

  // second fields div's third child
  const paragraphFieldsTwo = document.createElement("p");
  paragraphFieldsTwo.classList.add("modal-details-error");
  paragraphFieldsTwo.classList.add("hide");
  paragraphFieldsTwo.textContent = "Please fill out this field.";

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("new-todo-date");

  const newDateText = document.createElement("label");
  newDateText.classList.add("new-date-text");
  newDateText.textContent = "Due date";
  newDateText.htmlFor = "todo-date";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "todo-date";
  dateInput.id = "todo-date";

  const dateError = document.createElement("p");
  dateError.classList.add("modal-date-error");
  dateError.classList.add("hide");
  dateError.textContent = "Please choose a date.";

  const priorityLine = document.createElement("div");
  priorityLine.classList.add("priority-line");

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("priority");

  const priorityText = document.createElement("div");
  priorityText.classList.add("priority-text");
  priorityText.textContent = "Priority";

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

  const priorityError = document.createElement("p");
  priorityError.classList.add("modal-priority-error");
  priorityError.classList.add("hide");
  priorityError.textContent = "Please select the priority.";

  const createTodoBtnDiv = document.createElement("div");
  createTodoBtnDiv.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-modal-btn");
  cancelModalBtn.textContent = "Cancel";

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
  dateDiv.appendChild(dateError);

  // priority line div children

  priorityLine.appendChild(priorityDiv);
  priorityLine.appendChild(priorityError);
  priorityLine.appendChild(createTodoBtnDiv);

  // priority div children
  priorityDiv.appendChild(priorityText);
  priorityDiv.appendChild(lowPriority);
  priorityDiv.appendChild(mediumPriority);
  priorityDiv.appendChild(highPriority);

  // create new task button div child
  createTodoBtnDiv.appendChild(cancelModalBtn);
  createTodoBtnDiv.appendChild(createTodoBtn);

  return modalContent;
}

function checkPriorityClassList() {
  const selectPriority = document.querySelectorAll(".priority-buttons");

  for (let i = 0; i < selectPriority.length; i++) {
    if (selectPriority[i].classList.contains("active-priority")) {
      selectPriority[i].classList.remove("active-priority");
    }
  }
}

function handlePrioritySelected(e) {
  e.preventDefault();
  const priorityClicked = e.target;

  if (!priorityClicked.classList.contains("active-priority")) {
    checkPriorityClassList();
    priorityClicked.classList.add("active-priority");
  }
}

function openNewTask() {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Create a new task";
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(modalContent);
  modalBody.appendChild(createNewTask());

  const selectPriorities = document.querySelectorAll(".priority-buttons");
  selectPriorities.forEach((selectPriority) =>
    selectPriority.addEventListener("click", handlePrioritySelected)
  );

  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
  cancelModalBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.closeModal);

  const addTaskBtn = document.querySelector(".add-todo-btn");
  addTaskBtn.addEventListener("click", _createNewTask__WEBPACK_IMPORTED_MODULE_0__.addNewTask);
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

  const selectedProjectIcons = document.querySelectorAll(".project-icon");
  selectedProjectIcons.forEach((selectedProjectIcon) =>
    selectedProjectIcon.addEventListener("click", _newProjects__WEBPACK_IMPORTED_MODULE_1__.handleIconSelected)
  );

  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
  cancelModalBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.closeModal);

  const addProjectBtn = document.querySelector(".add-project-btn");
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
  const contentTitleImg = document.querySelector(".content-title-img");
  let imgElement;
  const selectedProject = e.composedPath();

  // if user clicks on the calendar img element at the sidebar
  if (
    selectedProject[0].innerText === "" &&
    selectedProject[1].innerText === ""
  ) {
    contentTitleText.innerText = selectedProject[2].innerText;
  }
  // if the user clicks on the p element or the div element at the sidebar
  if (selectedProject[0].innerText !== "") {
    contentTitleText.innerText = selectedProject[0].innerText;
  }

  // if the user clicks the p element at the sidebar and it's not a project
  if (
    selectedProject[0].tagName === "P" &&
    selectedProject[0].className !== "project-name"
  ) {
    imgElement = selectedProject[1].firstElementChild.firstElementChild;
  }

  // if the user clicks the img element at the sidebar and it's not a project
  if (
    selectedProject[0].tagName === "IMG" &&
    selectedProject[1].className === "sidebar-link"
  ) {
    imgElement = selectedProject[0];
  }

  // if the user clicks the div element at the sidebar and it's not a project
  if (
    selectedProject[0].tagName === "DIV" &&
    !selectedProject[0].classList.contains("projects-nav")
  ) {
    imgElement = selectedProject[0].firstElementChild.firstElementChild;
  }

  if (
    selectedProject[0].tagName === "P" &&
    selectedProject[0].className === "project-name"
  ) {
    imgElement = selectedProject[1].firstElementChild;
  }

  if (
    selectedProject[0].tagName === "IMG" &&
    (selectedProject[0].className !== "edit-project-button" ||
      selectedProject[0].className !== "erase-project-button") &&
    selectedProject[3].className === "projects"
  ) {
    imgElement = selectedProject[0];
  }

  if (
    selectedProject[0].tagName === "IMG" &&
    (selectedProject[0].className === "erase-project-button" ||
      selectedProject[0].className === "edit-project-button") &&
    selectedProject[3].className === "projects"
  ) {
    imgElement = selectedProject[2].firstElementChild.firstElementChild;
  }

  if (
    selectedProject[0].tagName === "DIV" &&
    selectedProject[0].classList.contains("projects-nav")
  ) {
    imgElement = selectedProject[0].firstElementChild.firstElementChild;
  }

  if (imgElement.alt === "month calendar") {
    contentTitleImg.src = "./images/calendar-month-outline.svg";
  } else if (imgElement.alt === "day calendar") {
    contentTitleImg.src = "./images/calendar-today-outline.svg";
  } else if (imgElement.alt === "week calendar") {
    contentTitleImg.src = "./images/calendar-week-outline.svg";
  } else if (imgElement.alt === "calendar with alert") {
    contentTitleImg.src = "./images/calendar-alert-outline.svg";
  } else if (imgElement.alt === "calendar with checkmark") {
    contentTitleImg.src = "./images/calendar-check-outline.svg";
  }

  if (imgElement.alt === "a wrench and a screwdriver crossed") {
    contentTitleImg.src =
      "./images/projects-icons/wrench-screwdriver-crossed.svg";
  } else if (imgElement.alt === "a book icon") {
    contentTitleImg.src = "./images/projects-icons/book.svg";
  } else if (imgElement.alt === "a bag of money icon") {
    contentTitleImg.src = "./images/projects-icons/money-bag.svg";
  } else if (imgElement.alt === "a pizza slice icon") {
    contentTitleImg.src = "./images/projects-icons/pizza-slice.svg";
  } else if (imgElement.alt === "a present box icon") {
    contentTitleImg.src = "./images/projects-icons/present-box.svg";
  } else if (imgElement.alt === "a volleyball ball icon") {
    contentTitleImg.src = "./images/projects-icons/volleyball-ball.svg";
  } else if (imgElement.alt === "a person holding two dumbbells icon") {
    contentTitleImg.src = "./images/projects-icons/dumbbells-exercise.svg";
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
/* harmony export */   "default": () => (/* binding */ fillPageWithTasks)
/* harmony export */ });
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _projectContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectContent */ "./src/projectContent.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time */ "./src/time.js");





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

  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++) {
    if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].project === _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText) {
      if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === false ||
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === undefined
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
            <p class="task-title">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
  const dayToday = (0,_time__WEBPACK_IMPORTED_MODULE_3__.createTodayDate)().getDate();
  const dateToday = (0,_time__WEBPACK_IMPORTED_MODULE_3__.createTodayDate)().toLocaleDateString();
  const weekFromToday = (0,_time__WEBPACK_IMPORTED_MODULE_3__.createWeekDate)().toLocaleDateString();
  const month = (0,_time__WEBPACK_IMPORTED_MODULE_3__.createMonthDate)();

  let weekCount = (0,_time__WEBPACK_IMPORTED_MODULE_3__.createWeekDate)().getDate() - (0,_time__WEBPACK_IMPORTED_MODULE_3__.createTodayDate)().getDate();

  const tasksDiv = document.querySelector(".tasks-div");

  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++) {
    const monthDifference = _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].fullDate.getMonth() - month;

    if (_projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "All") {
      if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === false ||
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === undefined
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
            <p class="task-title">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
      _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "Today" &&
      _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date === dateToday
    ) {
      if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === false ||
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === undefined
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
            <p class="task-title">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
      _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "Week" &&
      _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date <= weekFromToday &&
      monthDifference >= 0
    ) {
      if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === false ||
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === undefined
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
            <p class="task-title">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
      _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "Important" &&
      _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].priority === "High"
    ) {
      if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
          <div class="left-content">
            <label class="container">
              <input type="checkbox" class="checkbox" name="checkbox" checked/>
              <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === false ||
        _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === undefined
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
            <p class="task-title">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
          </div>
          <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
    } else if (_projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "Completed") {
      if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked === true) {
        const newTaskDiv = document.createElement("div");
        newTaskDiv.id = "content";
        newTaskDiv.classList.add("content");

        const newTask = `
            <div class="left-content">
              <label class="container">
                <input type="checkbox" class="checkbox" name="checkbox" checked/>
                <span class="checkmark"></span>
              </label>
              <p class="task-title completed-task">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title}</p>
            </div>
            <div class="right-content">
              <div class="detail">Details</div>
              <div class="due-date">${_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].date}</div>
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
  newTaskButtonDiv.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openTaskModal);
}

function toggleCheckmark(e) {
  const taskClicked = e.composedPath()[2].children[1];
  const checkboxCheck = e.composedPath()[0].checked;
  console.log(e.composedPath());
  console.log(taskClicked);
  console.log(checkboxCheck);

  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++) {
    if (taskClicked.textContent === _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title) {
      _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].checked = checkboxCheck;
      console.log(_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i]);
      fillPageWithTasks();
    }
  }
}

function fillPageWithTasks() {
  const tasksDiv = document.querySelector(".tasks-div");
  const tasksTitle = document.querySelector(".tasks-title");

  removeChildNodesExceptFirst(tasksDiv);
  createAddTaskButton();
  if (
    _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "All" ||
    _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "Today" ||
    _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "Week" ||
    _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "Important" ||
    _projectContent__WEBPACK_IMPORTED_MODULE_2__.contentTitleText.innerText === "Completed"
  ) {
    removeChildNodesExceptFirst(tasksTitle);
    createTaskListForDates();

    const details = document.querySelectorAll(".detail");
    details.forEach((detail) =>
      detail.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openDetailsModal)
    );

    const editTaskBtn = document.querySelectorAll(".edit-task-button");
    editTaskBtn.forEach((editTasks) =>
      editTasks.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openEditTaskModal)
    );

    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("click", toggleCheckmark)
    );
  }

  createTaskListForProject();

  const details = document.querySelectorAll(".detail");
  details.forEach((detail) =>
    detail.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openDetailsModal)
  );

  const editTaskBtn = document.querySelectorAll(".edit-task-button");
  editTaskBtn.forEach((editTasks) =>
    editTasks.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openEditTaskModal)
  );

  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", toggleCheckmark)
  );

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


/***/ }),

/***/ "./src/startPage.js":
/*!**************************!*\
  !*** ./src/startPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startPage)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _newProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjects */ "./src/newProjects.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");




function startPage() {
  const projects = document.querySelector("#projects");
  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(projects);
  (0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();
  (0,_selectedProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMonthDate": () => (/* binding */ createMonthDate),
/* harmony export */   "createTodayDate": () => (/* binding */ createTodayDate),
/* harmony export */   "createWeekDate": () => (/* binding */ createWeekDate),
/* harmony export */   "createYearDate": () => (/* binding */ createYearDate)
/* harmony export */ });
function createTodayDate() {
  const dateNow = new Date();

  return dateNow;
}

function createWeekDate() {
  const dateNow = new Date();

  dateNow.setDate(dateNow.getDate() + 7);
  const weekFromNow = dateNow;

  return weekFromNow;
}

function createMonthDate() {
  const dateNow = new Date();

  const month = dateNow.getMonth();

  return month;
}

function createYearDate() {}


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
/* harmony import */ var _startPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startPage */ "./src/startPage.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time */ "./src/time.js");
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */






const hammerWrench = "./images/projects-icons/wrench-screwdriver-crossed.svg";
const volleyball = "./images/projects-icons/volleyball-ball.svg";
const gymDumbbell = "./images/projects-icons/dumbbells-exercise.svg";

const projectFitness = new _newProjects__WEBPACK_IMPORTED_MODULE_1__.Project("Staying Fitness", gymDumbbell);
const projectWork = new _newProjects__WEBPACK_IMPORTED_MODULE_1__.Project("Work hard and get rich", hammerWrench);
// const dateNow = new Date().toLocaleDateString();
const dateNow = (0,_time__WEBPACK_IMPORTED_MODULE_4__.createTodayDate)().toLocaleDateString();

(0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjects)(projectFitness);
(0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjects)(projectWork);

const fitnessTaskOne = new _createNewTask__WEBPACK_IMPORTED_MODULE_2__.Task(
  "Staying Fitness",
  "Go to the gym",
  "Work out and lift weights at the gym, 3 times a week",
  "25/11/2022",
  new Date(2022, 10, 25),
  "High"
);

const fitnessTaskTwo = new _createNewTask__WEBPACK_IMPORTED_MODULE_2__.Task(
  "Staying Fitness",
  "Wake up early and run at the street",
  "Run at the street 4 times a week for at least 15 minutes",
  "31/12/2022",
  new Date(2022, 11, 31),
  "Medium"
);

const projectTestTaskOne = new _createNewTask__WEBPACK_IMPORTED_MODULE_2__.Task(
  "Work hard and get rich",
  "Create a very nice app",
  "Go on VS Code and build a lot of nice features in javascript",
  dateNow,
  new Date(),
  "High"
);

(0,_createNewTask__WEBPACK_IMPORTED_MODULE_2__.addTaskToTasks)(fitnessTaskOne);
(0,_createNewTask__WEBPACK_IMPORTED_MODULE_2__.addTaskToTasks)(fitnessTaskTwo);
(0,_createNewTask__WEBPACK_IMPORTED_MODULE_2__.addTaskToTasks)(projectTestTaskOne);

(0,_startPage__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNlO0FBQ0Y7QUFDbEQ7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUEwQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQVU7QUFDWixFQUFFLDREQUFpQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwVDhDO0FBQ0g7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksMkRBQWUsRUFBRTtBQUN2Qyw0QkFBNEIsb0RBQVE7QUFDcEMsMEJBQTBCLG9EQUFRO0FBQ2xDLDhCQUE4QixvREFBUTtBQUN0QywwQkFBMEIsb0RBQVE7QUFDbEMsMkJBQTJCLG9EQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBbUI7QUFDckI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckgyQztBQUNlO0FBS25DO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSw0REFBa0IsRUFBRTtBQUMxQyx5QkFBeUIscURBQVc7QUFDcEMsb0JBQW9CLHFEQUFXO0FBQy9CO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFFBQVEsU0FBUyxxREFBVztBQUM1QjtBQUNBLFFBQVE7QUFDUixRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSxxREFBVztBQUNuQjtBQUNBO0FBQ0EsUUFBUTtBQUNSLFFBQVEscURBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSxxREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSw0REFBa0IsRUFBRTtBQUMxQyxRQUFRLHFEQUFXO0FBQ25CLHNCQUFzQixJQUFJLDJEQUFlLEVBQUU7QUFDM0MsWUFBWSxvREFBUTtBQUNwQixVQUFVLHFEQUFXO0FBQ3JCLFVBQVUscURBQVc7QUFDckIsVUFBVSxvREFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBVTtBQUNaLEVBQUUsMkRBQW1CO0FBQ3JCLEVBQUUsOERBQWdCO0FBQ2xCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNERBQWtCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFIwRDtBQUNQO0FBQ1I7QUFDTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDJEQUFlLEVBQUU7QUFDdkMsUUFBUSxvREFBUTtBQUNoQixNQUFNLG9EQUFRO0FBQ2QsTUFBTSxvREFBUTtBQUNkLE1BQU0sb0RBQVE7QUFDZCxNQUFNLG9EQUFRO0FBQ2QsTUFBTSxvREFBUTtBQUNkLGtCQUFrQixvREFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1osRUFBRSw0REFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDREQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsOENBQVU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksMkRBQWUsRUFBRTtBQUN2QyxzQkFBc0Isb0RBQVE7QUFDOUIsaUJBQWlCLG9EQUFRO0FBQ3pCLDhCQUE4QixvREFBUTtBQUN0QywwQkFBMEIsb0RBQVE7QUFDbEMsMkJBQTJCLG9EQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdmZxQztBQUNyQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBVTtBQUNkO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSd0M7QUFDVTtBQUNWO0FBQ0E7QUFDRjtBQUNVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEVBQUUsNkRBQWdCO0FBQ2xCLHFDQUFxQyxxREFBVTtBQUMvQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsRUFBRSxxREFBVztBQUNiLHFDQUFxQyxxREFBVTtBQUMvQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBZTtBQUNqQixxQ0FBcUMscURBQVU7QUFDL0M7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFZO0FBQ2QscUNBQXFDLHFEQUFVO0FBQy9DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFlO0FBQ2pCLHFDQUFxQyxxREFBVTtBQUMvQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhCQUE4QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RmtFO0FBQ2M7QUFDM0I7QUFDckQ7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJEQUFxQjtBQUMxRDtBQUNBO0FBQ0EsNkNBQTZDLHdEQUFvQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQVU7QUFDWixFQUFFLDJEQUFtQjtBQUNyQjtBQUNBO0FBQ0EsRUFBRSx3REFBYztBQUNoQjtBQUNBO0FBQ0EsRUFBRSw0REFBb0I7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLNkM7QUFDYTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFVO0FBQ3JEO0FBQ0E7QUFDQSx1Q0FBdUMsc0RBQVU7QUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk0wRDtBQUNRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0REFBa0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFVO0FBQ3JEO0FBQ0E7QUFDQSwwQ0FBMEMsdURBQWE7QUFDdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2S087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUcyQztBQUNrQztBQUN6QjtBQUNzQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDJEQUFlLEVBQUU7QUFDdkMsUUFBUSxvREFBUSxnQkFBZ0IsdUVBQTBCO0FBQzFELFVBQVUsb0RBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0RBQVEsVUFBVTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVEsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLG9EQUFRO0FBQ2hCLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvREFBUSxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvREFBUSxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFlO0FBQ2xDLG9CQUFvQixzREFBZTtBQUNuQyx3QkFBd0IscURBQWM7QUFDdEMsZ0JBQWdCLHNEQUFlO0FBQy9CO0FBQ0Esa0JBQWtCLHFEQUFjLGVBQWUsc0RBQWU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksMkRBQWUsRUFBRTtBQUN2Qyw0QkFBNEIsb0RBQVE7QUFDcEM7QUFDQSxRQUFRLHVFQUEwQjtBQUNsQyxVQUFVLG9EQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9EQUFRLFVBQVU7QUFDckU7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9EQUFRLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSxvREFBUTtBQUNoQixRQUFRLG9EQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVEsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVEsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0sdUVBQTBCO0FBQ2hDLE1BQU0sb0RBQVE7QUFDZDtBQUNBLFVBQVUsb0RBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0RBQVEsVUFBVTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVEsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLG9EQUFRO0FBQ2hCLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvREFBUSxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvREFBUSxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sTUFBTSx1RUFBMEI7QUFDaEMsTUFBTSxvREFBUTtBQUNkO0FBQ0E7QUFDQSxVQUFVLG9EQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9EQUFRLFVBQVU7QUFDckU7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9EQUFRLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSxvREFBUTtBQUNoQixRQUFRLG9EQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVEsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVEsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0sdUVBQTBCO0FBQ2hDLE1BQU0sb0RBQVE7QUFDZDtBQUNBLFVBQVUsb0RBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0RBQVEsVUFBVTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVEsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLG9EQUFRO0FBQ2hCLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvREFBUSxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvREFBUSxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsdUVBQTBCO0FBQ3pDLFVBQVUsb0RBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsb0RBQVEsVUFBVTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0RBQVEsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaURBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksMkRBQWUsRUFBRTtBQUN2QyxvQ0FBb0Msb0RBQVE7QUFDNUMsTUFBTSxvREFBUTtBQUNkLGtCQUFrQixvREFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUEwQjtBQUM5QixJQUFJLHVFQUEwQjtBQUM5QixJQUFJLHVFQUEwQjtBQUM5QixJQUFJLHVFQUEwQjtBQUM5QixJQUFJLHVFQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0RBQWdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFEQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0RBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFEQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRDtBQUNKO0FBQ2xEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFrQjtBQUN0QixJQUFJLDREQUFpQjtBQUNyQixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUFrQjtBQUN4QixNQUFNLDREQUFpQjtBQUN2QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUFrQjtBQUN4QixNQUFNLDREQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEU4QztBQUNHO0FBQ0M7QUFDbEQ7QUFDZTtBQUNmO0FBQ0EsRUFBRSwyREFBbUI7QUFDckIsRUFBRSw4REFBZ0I7QUFDbEIsRUFBRSw0REFBaUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7O1VDdkJQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ3NFO0FBTS9DO0FBQzBDO0FBQzdCO0FBQ3FCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaURBQU87QUFDbEMsd0JBQXdCLGlEQUFPO0FBQy9CO0FBQ0EsZ0JBQWdCLHNEQUFlO0FBQy9CO0FBQ0Esa0VBQW9CO0FBQ3BCLGtFQUFvQjtBQUNwQjtBQUNBLDJCQUEyQixnREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0RBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUFjO0FBQ2QsOERBQWM7QUFDZCw4REFBYztBQUNkO0FBQ0Esc0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGV0YWlscy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9rZXlib2FyZGtleXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvb3BlblByb2plY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NlbGVjdGVkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RhcnRQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90aW1lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IHsgY29udGVudFRpdGxlVGV4dCB9IGZyb20gXCIuL3Byb2plY3RDb250ZW50XCI7XHJcbmltcG9ydCBmaWxsUGFnZVdpdGhUYXNrcyBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0YXNrTGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHByb2plY3QsIHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBmdWxsRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuZnVsbERhdGUgPSBmdWxsRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9UYXNrcyh0YXNrKSB7XHJcbiAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1Rhc2soZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdCA9IGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0O1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsc1wiKS52YWx1ZTtcclxuICBsZXQgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGF0ZVwiKS52YWx1ZUFzRGF0ZTtcclxuICBjb25zdCB0YXNrRnVsbER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGF0ZVwiKS52YWx1ZUFzRGF0ZTtcclxuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wcmlvcml0eVwiKTtcclxuXHJcbiAgY29uc3QgbW9kYWxUaXRsZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC10aXRsZS1lcnJvclwiKTtcclxuICBjb25zdCBtb2RhbERldGFpbHNFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZGV0YWlscy1lcnJvclwiKTtcclxuICBjb25zdCBtb2RhbERhdGVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZGF0ZS1lcnJvclwiKTtcclxuICBjb25zdCBtb2RhbFByaW9yaXR5RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXByaW9yaXR5LWVycm9yXCIpO1xyXG5cclxuICAvLyBUaXRsZSwgZGV0YWlscywgZGF0ZSBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaXRsZSBmaWxsZWQuIERldGFpbHMsIGRhdGUgYW5kIHByaW9yaXR5IG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEZXRhaWxzIGZpbGxlZC4gVGl0bGUsIGRhdGUgYW5kIHByaW9yaXR5IG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERhdGUgZmlsbGVkLiBUaXRsZSwgZGV0YWlscyBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gUHJpb3JpdHkgZmlsbGVkLiBUaXRsZSwgZGV0YWlscyBhbmQgZGF0ZSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGl0bGUgYW5kIGRldGFpbHMgZmlsbGVkLiBEYXRlIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgIT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaXRsZSBhbmQgZGF0ZSBmaWxsZWQuIERldGFpbHMgYW5kIHByaW9yaXR5IG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgIT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRpdGxlIGFuZCBwcmlvcml0eSBmaWxsZWQuIERldGFpbHMgYW5kIGRhdGUgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgIT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERldGFpbHMgYW5kIGRhdGUgZmlsbGVkLiBUaXRsZSBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEZXRhaWxzIGFuZCBwcmlvcml0eSBmaWxsZWQuIFRpdGxlIGFuZCBkYXRlIG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERhdGUgYW5kIHByaW9yaXR5IGZpbGxlZC4gVGl0bGUgYW5kIGRldGFpbHMgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgIT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGl0bGUgbm90IGZpbGxlZC4gRGV0YWlscywgZGF0ZSBhbmQgcHJpb3JpdHkgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgIT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERldGFpbHMgbm90IGZpbGxlZC4gVGl0bGUsIGRhdGUgYW5kIHByaW9yaXR5IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgIT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGF0ZSBub3QgZmlsbGVkLiBUaXRsZSwgZGV0YWlscyBhbmQgcHJpb3JpdHkgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgIT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBQcmlvcml0eSBub3QgZmlsbGVkLiBUaXRsZSwgZGV0YWlscyBhbmQgZGF0ZSBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgIT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRhc2tEdWVEYXRlICE9PSBudWxsKSB7XHJcbiAgICB0YXNrRHVlRGF0ZSA9IHRhc2tEdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHByaW9yaXR5ICE9PSBudWxsKSB7XHJcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5LnRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFza0FkZGVkID0gbmV3IFRhc2soXHJcbiAgICBwcm9qZWN0LFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXRhaWxzLFxyXG4gICAgdGFza0R1ZURhdGUsXHJcbiAgICB0YXNrRnVsbER1ZURhdGUsXHJcbiAgICBwcmlvcml0eVxyXG4gICk7XHJcblxyXG4gIGFkZFRhc2tUb1Rhc2tzKHRhc2tBZGRlZCk7XHJcbiAgY2xvc2VNb2RhbCgpO1xyXG4gIGZpbGxQYWdlV2l0aFRhc2tzKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTmV3VGFza1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0RldGFpbHModGFza0RldGFpbFRpdGxlKSB7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0YXNrRGV0YWlsVGl0bGUgPT09IHRhc2tMaXN0W2ldLnRpdGxlKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGFza0xpc3RbaV0ucHJvamVjdDtcclxuICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFza0xpc3RbaV0uZGV0YWlscztcclxuICAgICAgY29uc3QgZHVlRGF0ZUluZm8gPSB0YXNrTGlzdFtpXS5kYXRlO1xyXG4gICAgICBjb25zdCBwcmlvcml0eUluZm8gPSB0YXNrTGlzdFtpXS5wcmlvcml0eTtcclxuXHJcbiAgICAgIC8vIHByb2plY3QgZGl2IHdpdGggcHJvamVjdCBhbmQgcHJvamVjdCB0ZXh0XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXRhaWwtZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRpdnNcIik7XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtbGVmdC1jb2x1bW5cIik7XHJcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1yaWdodC1jb2x1bW5cIik7XHJcbiAgICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWV9YDtcclxuXHJcbiAgICAgIC8vIHRpdGxlIGRpdiB3aXRoIHRpdGxlIGFuZCB0aXRsZSB0ZXh0XHJcbiAgICAgIGNvbnN0IHRhc2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRhc2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZS1kZXRhaWxcIik7XHJcbiAgICAgIHRhc2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1kaXZzXCIpO1xyXG5cclxuICAgICAgY29uc3QgZGV0YWlsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgZGV0YWlsVGl0bGUuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtbGVmdC1jb2x1bW5cIik7XHJcbiAgICAgIGRldGFpbFRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcclxuXHJcbiAgICAgIGNvbnN0IGRldGFpbFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBkZXRhaWxUaXRsZVRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtcmlnaHQtY29sdW1uXCIpO1xyXG4gICAgICBkZXRhaWxUaXRsZVRleHQudGV4dENvbnRlbnQgPSBgJHt0YXNrRGV0YWlsVGl0bGV9YDtcclxuXHJcbiAgICAgIC8vIGRlc2NyaXB0aW9uIGRpdiB3aXRoIGRlc2NyaXB0aW9uIGFuZCBkZXNjcmlwdGlvbiB0ZXh0XHJcbiAgICAgIGNvbnN0IGRldGFpbERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGV0YWlsRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY3JpcHRpb24tZGl2XCIpO1xyXG4gICAgICBkZXRhaWxEZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1kaXZzXCIpO1xyXG5cclxuICAgICAgY29uc3QgZGV0YWlsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgZGV0YWlsRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRldGFpbHMtbGVmdC1jb2x1bW5cIik7XHJcbiAgICAgIGRldGFpbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcclxuXHJcbiAgICAgIGNvbnN0IGRldGFpbERlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBkZXRhaWxEZXNjcmlwdGlvblRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtcmlnaHQtY29sdW1uXCIpO1xyXG4gICAgICBkZXRhaWxEZXNjcmlwdGlvblRleHQudGV4dENvbnRlbnQgPSBgJHt0YXNrRGVzY3JpcHRpb259YDtcclxuXHJcbiAgICAgIC8vIGR1ZSBkYXRlIGRpdiB3aXRoIGR1ZSBkYXRlIGFuZCBkdWUgZGF0ZSBpbmZvXHJcblxyXG4gICAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtZGl2XCIpO1xyXG4gICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRpdnNcIik7XHJcblxyXG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtbGVmdC1jb2x1bW5cIik7XHJcbiAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xyXG5cclxuICAgICAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtcmlnaHQtY29sdW1uXCIpO1xyXG4gICAgICBkdWVEYXRlVGV4dC50ZXh0Q29udGVudCA9IGAke2R1ZURhdGVJbmZvfWA7XHJcblxyXG4gICAgICAvLyBwcmlvcml0eSBkaXYgd2l0aCBwcmlvcml0eSBhbmQgcHJpb3JpdHkgaW5mb1xyXG5cclxuICAgICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktZGl2XCIpO1xyXG4gICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1kaXZzXCIpO1xyXG5cclxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtbGVmdC1jb2x1bW5cIik7XHJcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcclxuXHJcbiAgICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBwcmlvcml0eVRleHQuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtcmlnaHQtY29sdW1uXCIpO1xyXG4gICAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBgJHtwcmlvcml0eUluZm99YDtcclxuXHJcbiAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHRhc2tUaXRsZURpdik7XHJcbiAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkZXRhaWxEZXNjcmlwdGlvbkRpdik7XHJcbiAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcclxuICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuXHJcbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xyXG5cclxuICAgICAgdGFza1RpdGxlRGl2LmFwcGVuZENoaWxkKGRldGFpbFRpdGxlKTtcclxuICAgICAgdGFza1RpdGxlRGl2LmFwcGVuZENoaWxkKGRldGFpbFRpdGxlVGV4dCk7XHJcblxyXG4gICAgICBkZXRhaWxEZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXRhaWxEZXNjcmlwdGlvbik7XHJcbiAgICAgIGRldGFpbERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRldGFpbERlc2NyaXB0aW9uVGV4dCk7XHJcblxyXG4gICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KTtcclxuXHJcbiAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcclxuXHJcbiAgICAgIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5UYXNrRGV0YWlscyh0YXNrRGV0YWlsVGl0bGUpIHtcclxuICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJvZHlcIik7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXItdGV4dFwiKTtcclxuXHJcbiAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2sgZGV0YWlsc1wiO1xyXG5cclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcblxyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRGV0YWlscyh0YXNrRGV0YWlsVGl0bGUpKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZU5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCwgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTmV3UHJvamVjdCxcclxuICBoYW5kbGVJY29uU2VsZWN0ZWQsXHJcbiAgcHJvamVjdExpc3QsXHJcbn0gZnJvbSBcIi4vbmV3UHJvamVjdHNcIjtcclxuXHJcbmxldCBwcm9qZWN0TmFtZTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGxlZFByb2plY3QocHJvamVjdFRpdGxlKSB7XHJcbiAgbGV0IGFsdFRleHQ7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHByb2plY3RUaXRsZSA9PT0gcHJvamVjdExpc3RbaV0udGl0bGUpIHtcclxuICAgICAgcHJvamVjdE5hbWUgPSBwcm9qZWN0TGlzdFtpXS50aXRsZTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBwcm9qZWN0TGlzdFtpXS5pY29uID09PVxyXG4gICAgICAgIFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvd3JlbmNoLXNjcmV3ZHJpdmVyLWNyb3NzZWQuc3ZnXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWx0VGV4dCA9IFwiYSB3cmVuY2ggYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb2plY3RMaXN0W2ldLmljb24gPT09IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvYm9vay5zdmdcIikge1xyXG4gICAgICAgIGFsdFRleHQgPSBcImEgYm9vayBpY29uXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9tb25leS1iYWcuc3ZnXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWx0VGV4dCA9IFwiYSBiYWcgb2YgbW9uZXkgaWNvblwiO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHByb2plY3RMaXN0W2ldLmljb24gPT09IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWx0VGV4dCA9IFwiYSBwaXp6YSBzbGljZSBpY29uXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9wcmVzZW50LWJveC5zdmdcIlxyXG4gICAgICApIHtcclxuICAgICAgICBhbHRUZXh0ID0gXCJhIHByZXNlbnQgYm94IGljb25cIjtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBwcm9qZWN0TGlzdFtpXS5pY29uID09PSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIlxyXG4gICAgICApIHtcclxuICAgICAgICBhbHRUZXh0ID0gXCJhIHZvbGxleWJhbGwgYmFsbCBpY29uXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9kdW1iYmVsbHMtZXhlcmNpc2Uuc3ZnXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWx0VGV4dCA9IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcclxuXHJcbiAgLy8gZm9ybSB0YWcncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcblxyXG4gIC8vIGZpZWxkcyBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsLmZvciA9IFwicHJvamVjdC10aXRsZVwiO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xyXG4gIGlucHV0LnZhbHVlID0gcHJvamVjdE5hbWU7XHJcblxyXG4gIC8vIGZpZWxkcyBkaXYncyB0aGlyZCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaEZpZWxkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGUtZXJyb3JcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQuXCI7XHJcblxyXG4gIC8vIGZvcm0gdGFnJ3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaWNvblNlbGVjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaWNvblNlbGVjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaWNvbi1zZWxlY3Rpb25cIik7XHJcblxyXG4gIC8vIGljb24tc2VsZWN0aW9uIGRpdidzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgcGFyYWdyYXBoSWNvblNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaEljb25TZWxlY3Rpb24udGV4dENvbnRlbnQgPSBcIkNob29zZSBhbiBJY29uXCI7XHJcblxyXG4gIC8vIGljb24tc2VsZWN0aW9uIGRpdidzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IHByb2plY3RJY29uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEljb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25zXCIpO1xyXG5cclxuICAvLyBwcm9qZWN0LWljb25zIGRpdiBjaGlsZHJlblxyXG4gIGNvbnN0IHRvb2xzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9vbHNJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib29rSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vbmV5QmFnSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwaXp6YUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBpenphSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwcmVzZW50Qm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJlc2VudEJveEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3Qgdm9sbGV5QmFsbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHZvbGxleUJhbGxJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IGd5bUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGd5bUljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3QgdG9vbHNJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB0b29sc0ljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuICB0b29sc0ljb25JbWcuYWx0ID0gXCJhIHdyZW5jaCBhbmQgYSBzY3Jld2RyaXZlciBjcm9zc2VkXCI7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBib29rSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCI7XHJcbiAgYm9va0ljb25JbWcuYWx0ID0gXCJhIGJvb2sgaWNvblwiO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1vbmV5QmFnSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL21vbmV5LWJhZy5zdmdcIjtcclxuICBtb25leUJhZ0ljb25JbWcuYWx0ID0gXCJhIGJhZyBvZiBtb25leSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHBpenphSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGl6emFJY29uSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCI7XHJcbiAgcGl6emFJY29uSW1nLmFsdCA9IFwiYSBwaXp6YSBzbGljZSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHByZXNlbnRCb3hJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBwcmVzZW50Qm94SWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ByZXNlbnQtYm94LnN2Z1wiO1xyXG4gIHByZXNlbnRCb3hJY29uSW1nLmFsdCA9IFwiYSBwcmVzZW50IGJveCBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHZvbGxleUJhbGxJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5hbHQgPSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIjtcclxuXHJcbiAgY29uc3QgZ3ltSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgZ3ltSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuICBneW1JY29uSW1nLmFsdCA9IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIjtcclxuXHJcbiAgaWYgKGFsdFRleHQgPT09IHRvb2xzSWNvbkltZy5hbHQpIHtcclxuICAgIHRvb2xzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcbiAgfSBlbHNlIGlmIChhbHRUZXh0ID09PSBib29rSWNvbkltZy5hbHQpIHtcclxuICAgIGJvb2tJY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICB9IGVsc2UgaWYgKGFsdFRleHQgPT09IG1vbmV5QmFnSWNvbkltZy5hbHQpIHtcclxuICAgIG1vbmV5QmFnSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcbiAgfSBlbHNlIGlmIChhbHRUZXh0ID09PSBwaXp6YUljb25JbWcuYWx0KSB7XHJcbiAgICBwaXp6YUljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1pY29uXCIpO1xyXG4gIH0gZWxzZSBpZiAoYWx0VGV4dCA9PT0gcHJlc2VudEJveEljb25JbWcuYWx0KSB7XHJcbiAgICBwcmVzZW50Qm94SWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcbiAgfSBlbHNlIGlmIChhbHRUZXh0ID09PSB2b2xsZXlCYWxsSWNvbkltZy5hbHQpIHtcclxuICAgIHZvbGxleUJhbGxJY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICB9IGVsc2UgaWYgKGFsdFRleHQgPT09IGd5bUljb25JbWcuYWx0KSB7XHJcbiAgICBneW1JY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICB9XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vZGFsQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYnV0dG9uc1wiKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xyXG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgUHJvamVjdFwiO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50IGRpdiBjaGlsZHJlblxyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCdXR0b25zKTtcclxuXHJcbiAgLy8gZm9ybSB0YWcgY2hpbGRyZW5cclxuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc0Rpdik7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChpY29uU2VsZWN0aW9uRGl2KTtcclxuXHJcbiAgLy8gbW9kYWwtYnV0dG9ucyBjaGlsZHJlblxyXG4gIG1vZGFsQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxNb2RhbEJ0bik7XHJcbiAgbW9kYWxCdXR0b25zLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2IGNoaWxkcmVuXHJcbiAgZmllbGRzRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBmaWVsZHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gIGZpZWxkc0Rpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhGaWVsZHMpO1xyXG5cclxuICAvLyBpY29uLXNlbGVjdGlvbiBkaXYgY2hpbGRyZW5cclxuICBpY29uU2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaEljb25TZWxlY3Rpb24pO1xyXG4gIGljb25TZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJvamVjdEljb25zRGl2KTtcclxuXHJcbiAgLy8gcHJvamVjdC1pY29uIGRpdiBjaGlsZHJlblxyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZCh0b29sc0ljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChib29rSWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKG1vbmV5QmFnSWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKHBpenphSWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKHByZXNlbnRCb3hJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQodm9sbGV5QmFsbEljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChneW1JY29uKTtcclxuXHJcbiAgLy8gcHJvamVjdC1pY29uIGltZ3NcclxuICB0b29sc0ljb24uYXBwZW5kQ2hpbGQodG9vbHNJY29uSW1nKTtcclxuICBib29rSWNvbi5hcHBlbmRDaGlsZChib29rSWNvbkltZyk7XHJcbiAgbW9uZXlCYWdJY29uLmFwcGVuZENoaWxkKG1vbmV5QmFnSWNvbkltZyk7XHJcbiAgcGl6emFJY29uLmFwcGVuZENoaWxkKHBpenphSWNvbkltZyk7XHJcbiAgcHJlc2VudEJveEljb24uYXBwZW5kQ2hpbGQocHJlc2VudEJveEljb25JbWcpO1xyXG4gIHZvbGxleUJhbGxJY29uLmFwcGVuZENoaWxkKHZvbGxleUJhbGxJY29uSW1nKTtcclxuICBneW1JY29uLmFwcGVuZENoaWxkKGd5bUljb25JbWcpO1xyXG5cclxuICByZXR1cm4gbW9kYWxDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIikudmFsdWU7XHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlLWljb25cIilbMF0uY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgaWYgKHRpdGxlID09PSBcIlwiKSB7XHJcbiAgICBjb25zdCBtb2RhbFRpdGxlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGljb24uYWx0ID09PSBcImEgd3JlbmNoIGFuZCBhIHNjcmV3ZHJpdmVyIGNyb3NzZWRcIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvd3JlbmNoLXNjcmV3ZHJpdmVyLWNyb3NzZWQuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIGJvb2sgaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9ib29rLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaWNvbi5hbHQgPT09IFwiYSBiYWcgb2YgbW9uZXkgaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9tb25leS1iYWcuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIHBpenphIHNsaWNlIGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIHByZXNlbnQgYm94IGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcHJlc2VudC1ib3guc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIHZvbGxleWJhbGwgYmFsbCBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgcGVyc29uIGhvbGRpbmcgdHdvIGR1bWJiZWxscyBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuICB9XHJcblxyXG4gIC8vIHRoaXMgd2lsbCBtYXRjaCB0aGUgcmlnaHQgcHJvamVjdCB0byB0aGVpciB0YXNrcyBhbmQgbWFrZSBzdXJlIGl0J3MgYWxsXHJcbiAgLy8gY2hhbmdlZCBpbiBib3RoIG9iamVjdHMgd2hlbiBlZGl0ZWRcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocHJvamVjdExpc3RbaV0udGl0bGUgPT09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAodGFza0xpc3Rbal0ucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgIHByb2plY3RMaXN0W2ldLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICBwcm9qZWN0TGlzdFtpXS5pY29uID0gaWNvbjtcclxuICAgICAgICAgIHRhc2tMaXN0W2pdLnByb2plY3QgPSB0aXRsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKTtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKHByb2plY3RzKTtcclxuICBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcclxuICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJvZHlcIik7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcblxyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVGaWxsZWRQcm9qZWN0KHByb2plY3RUaXRsZSkpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pY29uXCIpO1xyXG4gIHNlbGVjdGVkUHJvamVjdEljb25zLmZvckVhY2goKHNlbGVjdGVkUHJvamVjdEljb24pID0+XHJcbiAgICBzZWxlY3RlZFByb2plY3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVJY29uU2VsZWN0ZWQpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xyXG5cclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idG5cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVkaXRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXItdGV4dFwiKTtcclxuICBtb2RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiRWRpdCBwcm9qZWN0XCI7XHJcblxyXG4gIGNyZWF0ZUVkaXRQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGhhbmRsZVByaW9yaXR5U2VsZWN0ZWQgfSBmcm9tIFwiLi9uZXdUYXNrXCI7XHJcbmltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTmV3VGFza1wiO1xyXG5pbXBvcnQgZmlsbFBhZ2VXaXRoVGFza3MgZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0XCI7XHJcblxyXG5sZXQgdGFza05hbWU7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGaWxsZWRUYXNrKFxyXG4gIHRhc2tOYW1lLFxyXG4gIHRhc2tEZXNjcmlwdGlvbixcclxuICBkdWVEYXRlSW5mbyxcclxuICBwcmlvcml0eUluZm9cclxuKSB7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcclxuXHJcbiAgLy8gZm9ybSB0YWcncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZpcnN0RmllbGRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmaXJzdEZpZWxkc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZmllbGRzXCIpO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbC5mb3IgPSBcInRhc2stdGl0bGVcIjtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcclxuICBsYWJlbC5odG1sRm9yID0gXCJ0YXNrLXRpdGxlXCI7XHJcblxyXG4gIC8vIGZpcnN0IGZpZWxkcyBkaXYncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgaW5wdXQubmFtZSA9IFwidGFzay10aXRsZVwiO1xyXG4gIGlucHV0LmlkID0gXCJ0YXNrLXRpdGxlXCI7XHJcbiAgaW5wdXQudmFsdWUgPSB0YXNrTmFtZTtcclxuXHJcbiAgLy8gZmlyc3QgZmllbGRzIGRpdidzIHRoaXJkIGNoaWxkXHJcbiAgY29uc3QgcGFyYWdyYXBoRmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZS1lcnJvclwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC5cIjtcclxuXHJcbiAgLy8gZm9ybSB0YWcncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBzZWNvbmRGaWVsZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlY29uZEZpZWxkc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZmllbGRzXCIpO1xyXG4gIHNlY29uZEZpZWxkc0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzXCIpO1xyXG5cclxuICAvLyBzZWNvbmQgZmllbGRzIGRpdidzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgbGFiZWxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxUd28uZm9yID0gXCJ0YXNrLWRldGFpbHNcIjtcclxuICBsYWJlbFR3by50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICBsYWJlbFR3by5odG1sRm9yID0gXCJ0YXNrLWRldGFpbHNcIjtcclxuXHJcbiAgLy8gc2Vjb25kIGZpZWxkcyBkaXYncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBpbnB1dFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBpbnB1dFR3by5uYW1lID0gXCJ0YXNrLWRldGFpbHNcIjtcclxuICBpbnB1dFR3by5pZCA9IFwidGFzay1kZXRhaWxzXCI7XHJcbiAgaW5wdXRUd28udmFsdWUgPSB0YXNrRGVzY3JpcHRpb247XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHNUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHNUd28uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRldGFpbHMtZXJyb3JcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzVHdvLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkc1R3by50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQuXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWRhdGVcIik7XHJcblxyXG4gIGNvbnN0IG5ld0RhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIG5ld0RhdGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJuZXctZGF0ZS10ZXh0XCIpO1xyXG4gIG5ld0RhdGVUZXh0LnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZVwiO1xyXG4gIG5ld0RhdGVUZXh0Lmh0bWxGb3IgPSBcInRvZG8tZGF0ZVwiO1xyXG5cclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICBkYXRlSW5wdXQubmFtZSA9IFwidG9kby1kYXRlXCI7XHJcbiAgZGF0ZUlucHV0LmlkID0gXCJ0b2RvLWRhdGVcIjtcclxuICBkYXRlSW5wdXQudmFsdWVBc0RhdGUgPSBkdWVEYXRlSW5mbztcclxuXHJcbiAgY29uc3QgZGF0ZUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1kYXRlLWVycm9yXCIpO1xyXG4gIGRhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBkYXRlRXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBjaG9vc2UgYSBkYXRlLlwiO1xyXG5cclxuICBjb25zdCBwcmlvcml0eUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaW9yaXR5TGluZS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbGluZVwiKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eVRleHQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXRleHRcIik7XHJcbiAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xyXG5cclxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImxvd1wiKTtcclxuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktYnV0dG9uc1wiKTtcclxuICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcblxyXG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibWVkaXVtXCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcclxuXHJcbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XHJcbiAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xyXG5cclxuICBpZiAocHJpb3JpdHlJbmZvID09PSBsb3dQcmlvcml0eS50ZXh0Q29udGVudCkge1xyXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcmlvcml0eVwiKTtcclxuICB9IGVsc2UgaWYgKHByaW9yaXR5SW5mbyA9PT0gbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQpIHtcclxuICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJpb3JpdHlcIik7XHJcbiAgfSBlbHNlIGlmIChwcmlvcml0eUluZm8gPT09IGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCkge1xyXG4gICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJpb3JpdHlcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmlvcml0eUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtcHJpb3JpdHktZXJyb3JcIik7XHJcbiAgcHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwcmlvcml0eUVycm9yLnRleHRDb250ZW50ID0gXCJQbGVhc2Ugc2VsZWN0IHRoZSBwcmlvcml0eS5cIjtcclxuXHJcbiAgY29uc3QgY3JlYXRlVG9kb0J0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY3JlYXRlVG9kb0J0bkRpdi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYnV0dG9uc1wiKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuXHJcbiAgY29uc3QgY3JlYXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY3JlYXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvZG8tYnRuXCIpO1xyXG4gIGNyZWF0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50IGRpdiBjaGlsZHJlblxyXG5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdEZpZWxkc0Rpdik7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzZWNvbmRGaWVsZHNEaXYpO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2IGNoaWxkcmVuXHJcbiAgZmlyc3RGaWVsZHNEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGZpcnN0RmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBmaXJzdEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhGaWVsZHMpO1xyXG5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGluZSk7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2IGNoaWxkcmVuXHJcbiAgc2Vjb25kRmllbGRzRGl2LmFwcGVuZENoaWxkKGxhYmVsVHdvKTtcclxuICBzZWNvbmRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXRUd28pO1xyXG4gIHNlY29uZEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhGaWVsZHNUd28pO1xyXG5cclxuICAvLyBuZXctdG9kby1kYXRlIGRpdiBjaGlsZHJlblxyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQobmV3RGF0ZVRleHQpO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVFcnJvcik7XHJcblxyXG4gIC8vIHByaW9yaXR5IGxpbmUgZGl2IGNoaWxkcmVuXHJcblxyXG4gIHByaW9yaXR5TGluZS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XHJcbiAgcHJpb3JpdHlMaW5lLmFwcGVuZENoaWxkKHByaW9yaXR5RXJyb3IpO1xyXG4gIHByaW9yaXR5TGluZS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvQnRuRGl2KTtcclxuXHJcbiAgLy8gcHJpb3JpdHkgZGl2IGNoaWxkcmVuXHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XHJcblxyXG4gIC8vIGNyZWF0ZSBuZXcgdGFzayBidXR0b24gZGl2IGNoaWxkXHJcbiAgY3JlYXRlVG9kb0J0bkRpdi5hcHBlbmRDaGlsZChjYW5jZWxNb2RhbEJ0bik7XHJcbiAgY3JlYXRlVG9kb0J0bkRpdi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvQnRuKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2soKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWxzXCIpLnZhbHVlO1xyXG4gIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpLnZhbHVlQXNEYXRlO1xyXG4gIGNvbnN0IHRhc2tGdWxsRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpLnZhbHVlQXNEYXRlO1xyXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBtb2RhbFRpdGxlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIGNvbnN0IG1vZGFsRGV0YWlsc0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1kZXRhaWxzLWVycm9yXCIpO1xyXG4gIGNvbnN0IG1vZGFsRGF0ZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1kYXRlLWVycm9yXCIpO1xyXG4gIGNvbnN0IG1vZGFsUHJpb3JpdHlFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtcHJpb3JpdHktZXJyb3JcIik7XHJcblxyXG4gIC8vIFRpdGxlLCBkZXRhaWxzLCBkYXRlIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRpdGxlIGZpbGxlZC4gRGV0YWlscywgZGF0ZSBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERldGFpbHMgZmlsbGVkLiBUaXRsZSwgZGF0ZSBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGF0ZSBmaWxsZWQuIFRpdGxlLCBkZXRhaWxzIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBQcmlvcml0eSBmaWxsZWQuIFRpdGxlLCBkZXRhaWxzIGFuZCBkYXRlIG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaXRsZSBhbmQgZGV0YWlscyBmaWxsZWQuIERhdGUgYW5kIHByaW9yaXR5IG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRpdGxlIGFuZCBkYXRlIGZpbGxlZC4gRGV0YWlscyBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGl0bGUgYW5kIHByaW9yaXR5IGZpbGxlZC4gRGV0YWlscyBhbmQgZGF0ZSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGV0YWlscyBhbmQgZGF0ZSBmaWxsZWQuIFRpdGxlIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgIT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERldGFpbHMgYW5kIHByaW9yaXR5IGZpbGxlZC4gVGl0bGUgYW5kIGRhdGUgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgIT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGF0ZSBhbmQgcHJpb3JpdHkgZmlsbGVkLiBUaXRsZSBhbmQgZGV0YWlscyBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaXRsZSBub3QgZmlsbGVkLiBEZXRhaWxzLCBkYXRlIGFuZCBwcmlvcml0eSBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgIT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGV0YWlscyBub3QgZmlsbGVkLiBUaXRsZSwgZGF0ZSBhbmQgcHJpb3JpdHkgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEYXRlIG5vdCBmaWxsZWQuIFRpdGxlLCBkZXRhaWxzIGFuZCBwcmlvcml0eSBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFByaW9yaXR5IG5vdCBmaWxsZWQuIFRpdGxlLCBkZXRhaWxzIGFuZCBkYXRlIGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAodGFza0R1ZURhdGUgIT09IG51bGwpIHtcclxuICAgIHRhc2tEdWVEYXRlID0gdGFza0R1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAocHJpb3JpdHkgIT09IG51bGwpIHtcclxuICAgIHByaW9yaXR5ID0gcHJpb3JpdHkudGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodGFza0xpc3RbaV0udGl0bGUgPT09IHRhc2tOYW1lKSB7XHJcbiAgICAgIHRhc2tMaXN0W2ldLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRhc2tMaXN0W2ldLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgICB0YXNrTGlzdFtpXS5kYXRlID0gdGFza0R1ZURhdGU7XHJcbiAgICAgIHRhc2tMaXN0W2ldLmZ1bGxEYXRlID0gdGFza0Z1bGxEdWVEYXRlO1xyXG4gICAgICB0YXNrTGlzdFtpXS5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKCk7XHJcbiAgZmlsbFBhZ2VXaXRoVGFza3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkZpbGxlZFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZUluZm8sIHByaW9yaXR5SW5mbykge1xyXG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMobW9kYWxDb250ZW50KTtcclxuICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVGaWxsZWRUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGR1ZURhdGVJbmZvLCBwcmlvcml0eUluZm8pXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdGllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHktYnV0dG9uc1wiKTtcclxuICBzZWxlY3RQcmlvcml0aWVzLmZvckVhY2goKHNlbGVjdFByaW9yaXR5KSA9PlxyXG4gICAgc2VsZWN0UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByaW9yaXR5U2VsZWN0ZWQpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xyXG5cclxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1idG5cIik7XHJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFZGl0VGFzayh0YXNrVGl0bGUpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodGFza1RpdGxlID09PSB0YXNrTGlzdFtpXS50aXRsZSkge1xyXG4gICAgICB0YXNrTmFtZSA9IHRhc2tMaXN0W2ldLnRpdGxlO1xyXG4gICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrTGlzdFtpXS5kZXRhaWxzO1xyXG4gICAgICBjb25zdCBkdWVEYXRlSW5mbyA9IHRhc2tMaXN0W2ldLmZ1bGxEYXRlO1xyXG4gICAgICBjb25zdCBwcmlvcml0eUluZm8gPSB0YXNrTGlzdFtpXS5wcmlvcml0eTtcclxuXHJcbiAgICAgIG9wZW5GaWxsZWRUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGR1ZURhdGVJbmZvLCBwcmlvcml0eUluZm8pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlbkVkaXRUYXNrKHRhc2tUaXRsZSkge1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXItdGV4dFwiKTtcclxuXHJcbiAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIkVkaXQgdGFza1wiO1xyXG5cclxuICBjcmVhdGVFZGl0VGFzayh0YXNrVGl0bGUpO1xyXG59XHJcbiIsImltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2V5UHJlc3NlZChlKSB7XHJcbiAgY29uc3QgcHJlc3NlZEtleSA9IGUua2V5O1xyXG5cclxuICBpZiAocHJlc3NlZEtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBvcGVuTmV3VGFzayB9IGZyb20gXCIuL25ld1Rhc2tcIjtcclxuaW1wb3J0IGZpbGxQcm9qZWN0TW9kYWwgZnJvbSBcIi4vb3BlblByb2plY3RNb2RhbFwiO1xyXG5pbXBvcnQgb3BlblRhc2tEZXRhaWxzIGZyb20gXCIuL2RldGFpbHNcIjtcclxuaW1wb3J0IGtleVByZXNzZWQgZnJvbSBcIi4va2V5Ym9hcmRrZXlzXCI7XHJcbmltcG9ydCBvcGVuRWRpdFRhc2sgZnJvbSBcIi4vZWRpdFRhc2tcIjtcclxuaW1wb3J0IHsgb3BlbkVkaXRQcm9qZWN0IH0gZnJvbSBcIi4vZWRpdFByb2plY3RcIjtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcclxuY29uc3Qgc2lkZWJhck1vZGFsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsLXNpZGViYXItaXRlbVwiKTtcclxuY29uc3Qgb3BlblByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2plY3RCdG5cIik7XHJcbmNvbnN0IG9wZW5UYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrQnRuXCIpO1xyXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbENsb3NlQnRuXCIpO1xyXG5jb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWJ1dHRvblwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xyXG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGZpbGxQcm9qZWN0TW9kYWwoKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5UHJlc3NlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuVGFza01vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG9wZW5OZXdUYXNrKCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleVByZXNzZWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkRldGFpbHNNb2RhbChlKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgY29uc3QgdGFza0RldGFpbFRpdGxlID1cclxuICAgIGUuY29tcG9zZWRQYXRoKClbMl0uY2hpbGRyZW5bMF0ubGFzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblxyXG4gIG9wZW5UYXNrRGV0YWlscyh0YXNrRGV0YWlsVGl0bGUpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FZGl0VGFza01vZGFsKGUpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBjb25zdCB0YXNrVGl0bGUgPSBlLmNvbXBvc2VkUGF0aCgpWzNdLmNoaWxkcmVuWzBdLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0O1xyXG5cclxuICBvcGVuRWRpdFRhc2sodGFza1RpdGxlKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5UHJlc3NlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuRWRpdFByb2plY3RNb2RhbChlKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID1cclxuICAgIGUuY29tcG9zZWRQYXRoKClbMl0uY2hpbGRyZW5bMF0ubGFzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblxyXG4gIG9wZW5FZGl0UHJvamVjdChwcm9qZWN0VGl0bGUpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ2xhc3NMaXN0KCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZWJhck1vZGFsSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzaWRlYmFyTW9kYWxJdGVtc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgICBzaWRlYmFyTW9kYWxJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kYWxDbGFzc0xpc3QoZSkge1xyXG4gIGNvbnN0IHNpZGViYXJNb2RhbENsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKCFzaWRlYmFyTW9kYWxDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICBjaGVja0NsYXNzTGlzdCgpO1xyXG4gICAgc2lkZWJhck1vZGFsQ2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgfVxyXG59XHJcblxyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxub3BlblByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9qZWN0TW9kYWwpO1xyXG5vcGVuVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblRhc2tNb2RhbCk7XHJcbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xyXG4iLCJpbXBvcnQgeyBoYW5kbGVTZWN0aW9uU2VsZWN0ZWQsIGNoZWNrQ2xhc3NMaXN0IH0gZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgeyBjbG9zZU1vZGFsLCBvcGVuRWRpdFByb2plY3RNb2RhbCwgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCBmaWxsUHJvamVjdFdpdGhUYXNrcyBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBpY29uKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RUb1Byb2plY3RzKHByb2plY3QpIHtcclxuICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBhbHRUZXh0O1xyXG4gICAgaWYgKFxyXG4gICAgICBwcm9qZWN0TGlzdFtpXS5pY29uID09PVxyXG4gICAgICBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3dyZW5jaC1zY3Jld2RyaXZlci1jcm9zc2VkLnN2Z1wiXHJcbiAgICApIHtcclxuICAgICAgYWx0VGV4dCA9IFwiYSB3cmVuY2ggYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiO1xyXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0TGlzdFtpXS5pY29uID09PSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCIpIHtcclxuICAgICAgYWx0VGV4dCA9IFwiYSBib29rIGljb25cIjtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHByb2plY3RMaXN0W2ldLmljb24gPT09IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvbW9uZXktYmFnLnN2Z1wiXHJcbiAgICApIHtcclxuICAgICAgYWx0VGV4dCA9IFwiYSBiYWcgb2YgbW9uZXkgaWNvblwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9waXp6YS1zbGljZS5zdmdcIlxyXG4gICAgKSB7XHJcbiAgICAgIGFsdFRleHQgPSBcImEgcGl6emEgc2xpY2UgaWNvblwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9wcmVzZW50LWJveC5zdmdcIlxyXG4gICAgKSB7XHJcbiAgICAgIGFsdFRleHQgPSBcImEgcHJlc2VudCBib3ggaWNvblwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy92b2xsZXliYWxsLWJhbGwuc3ZnXCJcclxuICAgICkge1xyXG4gICAgICBhbHRUZXh0ID0gXCJhIHZvbGxleWJhbGwgYmFsbCBpY29uXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBwcm9qZWN0TGlzdFtpXS5pY29uID09PSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIlxyXG4gICAgKSB7XHJcbiAgICAgIGFsdFRleHQgPSBcImEgcGVyc29uIGhvbGRpbmcgdHdvIGR1bWJiZWxscyBpY29uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLW5hdlwiKTtcclxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLW5hdlwiKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGV4dC1pY29uXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz1cInNpZGViYXItaWNvbnNcIlxyXG4gICAgICAgIHNyYz1cIiR7cHJvamVjdExpc3RbaV0uaWNvbn1cIlxyXG4gICAgICAgIGFsdD1cIiR7YWx0VGV4dH1cIlxyXG4gICAgICAvPlxyXG4gICAgICA8cCBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdExpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZWRpdC1lcmFzZVwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3M9XCJlZGl0LXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBzcmM9XCIuL2ltYWdlcy9ub3RlLWVkaXQtb3V0bGluZS5wbmdcIlxyXG4gICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz1cImVyYXNlLXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gICAgbmV3UHJvamVjdERpdi5pbm5lckhUTUwgPSBuZXdQcm9qZWN0O1xyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XHJcbiAgfVxyXG4gIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTZWN0aW9uU2VsZWN0ZWQpO1xyXG4gIGNvbnN0IGVkaXRQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICBlZGl0UHJvamVjdEJ0bnMuZm9yRWFjaCgoZWRpdFByb2plY3RCdG4pID0+XHJcbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRQcm9qZWN0TW9kYWwpXHJcbiAgKTtcclxufVxyXG5cclxubGV0IHNlbGVjdGVkUHJvamVjdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWljb25cIik7XHJcblxyXG5mdW5jdGlvbiBjaGVja0ljb25DbGFzc0xpc3QoKSB7XHJcbiAgc2VsZWN0ZWRQcm9qZWN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFByb2plY3RJY29ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdEljb25zW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1pY29uXCIpKSB7XHJcbiAgICAgIHNlbGVjdGVkUHJvamVjdEljb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtaWNvblwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVJY29uU2VsZWN0ZWQoZSkge1xyXG4gIGNvbnN0IGljb25DbGlja2VkID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmIChcclxuICAgICFpY29uQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtaWNvblwiKSAmJlxyXG4gICAgaWNvbkNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1pY29uXCIpXHJcbiAgKSB7XHJcbiAgICBjaGVja0ljb25DbGFzc0xpc3QoKTtcclxuICAgIGljb25DbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgaWNvbkNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwicHJvamVjdC1pY29uIGFjdGl2ZS1pY29uXCIgfHxcclxuICAgIGljb25DbGlja2VkLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInByb2plY3QtaWNvblwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjbGlja2VkID0gaWNvbkNsaWNrZWQucGFyZW50RWxlbWVudDtcclxuICAgIGlmICghY2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtaWNvblwiKSkge1xyXG4gICAgICBjaGVja0ljb25DbGFzc0xpc3QoKTtcclxuICAgICAgY2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0VGl0bGVPbkFkZCgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcbiAgY29uc3QgY29udGVudFRpdGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10aXRsZS10ZXh0XCIpO1xyXG4gIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID0gcHJvamVjdHMubGFzdENoaWxkLmlubmVyVGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmUtaWNvblwiKVswXS5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICBpZiAodGl0bGUgPT09IFwiXCIpIHtcclxuICAgIGNvbnN0IG1vZGFsVGl0bGVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtdGl0bGUtZXJyb3JcIik7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaWNvbi5hbHQgPT09IFwiYSB3cmVuY2ggYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgYm9vayBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIGJhZyBvZiBtb25leSBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL21vbmV5LWJhZy5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgcGl6emEgc2xpY2UgaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9waXp6YS1zbGljZS5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgcHJlc2VudCBib3ggaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9wcmVzZW50LWJveC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvdm9sbGV5YmFsbC1iYWxsLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaWNvbi5hbHQgPT09IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvZHVtYmJlbGxzLWV4ZXJjaXNlLnN2Z1wiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdEFkZGVkID0gbmV3IFByb2plY3QodGl0bGUsIGljb24pO1xyXG5cclxuICBhZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0QWRkZWQpO1xyXG4gIGNsb3NlTW9kYWwoKTtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKHByb2plY3RzKTtcclxuICBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcblxyXG4gIGNoZWNrQ2xhc3NMaXN0KCk7XHJcbiAgcHJvamVjdHMubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICBjcmVhdGVQcm9qZWN0VGl0bGVPbkFkZCgpO1xyXG4gIGZpbGxQcm9qZWN0V2l0aFRhc2tzKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkTmV3VGFzayB9IGZyb20gXCIuL2NyZWF0ZU5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCdzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uYWN0aW9uID0gXCIjXCI7XHJcblxyXG4gIC8vIGZvcm0gdGFnJ3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmaXJzdEZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmlyc3RGaWVsZHNEaXYuY2xhc3NMaXN0LmFkZChcImZpZWxkc1wiKTtcclxuXHJcbiAgLy8gZmlyc3QgZmllbGRzIGRpdidzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWwuZm9yID0gXCJ0YXNrLXRpdGxlXCI7XHJcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XHJcbiAgbGFiZWwuaHRtbEZvciA9IFwidGFzay10aXRsZVwiO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInRhc2stdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLlwiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IHNlY29uZEZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBsYWJlbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFR3by5mb3IgPSBcInRhc2stZGV0YWlsc1wiO1xyXG4gIGxhYmVsVHdvLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gIGxhYmVsVHdvLmh0bWxGb3IgPSBcInRhc2stZGV0YWlsc1wiO1xyXG5cclxuICAvLyBzZWNvbmQgZmllbGRzIGRpdidzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IGlucHV0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGlucHV0VHdvLm5hbWUgPSBcInRhc2stZGV0YWlsc1wiO1xyXG4gIGlucHV0VHdvLmlkID0gXCJ0YXNrLWRldGFpbHNcIjtcclxuXHJcbiAgLy8gc2Vjb25kIGZpZWxkcyBkaXYncyB0aGlyZCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaEZpZWxkc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkc1R3by5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGV0YWlscy1lcnJvclwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHNUd28uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzVHdvLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC5cIjtcclxuXHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tZGF0ZVwiKTtcclxuXHJcbiAgY29uc3QgbmV3RGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbmV3RGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcIm5ldy1kYXRlLXRleHRcIik7XHJcbiAgbmV3RGF0ZVRleHQudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlXCI7XHJcbiAgbmV3RGF0ZVRleHQuaHRtbEZvciA9IFwidG9kby1kYXRlXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGRhdGVJbnB1dC5uYW1lID0gXCJ0b2RvLWRhdGVcIjtcclxuICBkYXRlSW5wdXQuaWQgPSBcInRvZG8tZGF0ZVwiO1xyXG5cclxuICBjb25zdCBkYXRlRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRhdGUtZXJyb3JcIik7XHJcbiAgZGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIGRhdGVFcnJvci50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGNob29zZSBhIGRhdGUuXCI7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlMaW5lLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1saW5lXCIpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaW9yaXR5VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiKTtcclxuICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuXHJcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1wcmlvcml0eS1lcnJvclwiKTtcclxuICBwcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIHByaW9yaXR5RXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBzZWxlY3QgdGhlIHByaW9yaXR5LlwiO1xyXG5cclxuICBjb25zdCBjcmVhdGVUb2RvQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjcmVhdGVUb2RvQnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5cclxuICBjb25zdCBjcmVhdGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjcmVhdGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1idG5cIik7XHJcbiAgY3JlYXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCBkaXYgY2hpbGRyZW5cclxuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3RGaWVsZHNEaXYpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc2Vjb25kRmllbGRzRGl2KTtcclxuXHJcbiAgLy8gZmlyc3QgZmllbGRzIGRpdiBjaGlsZHJlblxyXG4gIGZpcnN0RmllbGRzRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBmaXJzdEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgZmlyc3RGaWVsZHNEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRmllbGRzKTtcclxuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUxpbmUpO1xyXG5cclxuICAvLyBzZWNvbmQgZmllbGRzIGRpdiBjaGlsZHJlblxyXG4gIHNlY29uZEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChsYWJlbFR3byk7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0VHdvKTtcclxuICBzZWNvbmRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRmllbGRzVHdvKTtcclxuXHJcbiAgLy8gbmV3LXRvZG8tZGF0ZSBkaXYgY2hpbGRyZW5cclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKG5ld0RhdGVUZXh0KTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlRXJyb3IpO1xyXG5cclxuICAvLyBwcmlvcml0eSBsaW5lIGRpdiBjaGlsZHJlblxyXG5cclxuICBwcmlvcml0eUxpbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG4gIHByaW9yaXR5TGluZS5hcHBlbmRDaGlsZChwcmlvcml0eUVycm9yKTtcclxuICBwcmlvcml0eUxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bkRpdik7XHJcblxyXG4gIC8vIHByaW9yaXR5IGRpdiBjaGlsZHJlblxyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xyXG5cclxuICAvLyBjcmVhdGUgbmV3IHRhc2sgYnV0dG9uIGRpdiBjaGlsZFxyXG4gIGNyZWF0ZVRvZG9CdG5EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsTW9kYWxCdG4pO1xyXG4gIGNyZWF0ZVRvZG9CdG5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bik7XHJcblxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJpb3JpdHlDbGFzc0xpc3QoKSB7XHJcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ1dHRvbnNcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0UHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzZWxlY3RQcmlvcml0eVtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtcHJpb3JpdHlcIikpIHtcclxuICAgICAgc2VsZWN0UHJpb3JpdHlbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcmlvcml0eVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcmlvcml0eVNlbGVjdGVkKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcHJpb3JpdHlDbGlja2VkID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmICghcHJpb3JpdHlDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1wcmlvcml0eVwiKSkge1xyXG4gICAgY2hlY2tQcmlvcml0eUNsYXNzTGlzdCgpO1xyXG4gICAgcHJpb3JpdHlDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJpb3JpdHlcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3Blbk5ld1Rhc2soKSB7XHJcbiAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1ib2R5XCIpO1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcclxuICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaGVhZGVyLXRleHRcIik7XHJcblxyXG4gIG1vZGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBuZXcgdGFza1wiO1xyXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMobW9kYWxDb250ZW50KTtcclxuICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VGFzaygpKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdGllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHktYnV0dG9uc1wiKTtcclxuICBzZWxlY3RQcmlvcml0aWVzLmZvckVhY2goKHNlbGVjdFByaW9yaXR5KSA9PlxyXG4gICAgc2VsZWN0UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByaW9yaXR5U2VsZWN0ZWQpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xyXG5cclxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1idG5cIik7XHJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3VGFzayk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGFkZE5ld1Byb2plY3QsIGhhbmRsZUljb25TZWxlY3RlZCB9IGZyb20gXCIuL25ld1Byb2plY3RzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcclxuXHJcbiAgLy8gZm9ybSB0YWcncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcblxyXG4gIC8vIGZpZWxkcyBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsLmZvciA9IFwicHJvamVjdC10aXRsZVwiO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLlwiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IGljb25TZWxlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGljb25TZWxlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcImljb24tc2VsZWN0aW9uXCIpO1xyXG5cclxuICAvLyBpY29uLXNlbGVjdGlvbiBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaEljb25TZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhJY29uU2VsZWN0aW9uLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYW4gSWNvblwiO1xyXG5cclxuICAvLyBpY29uLXNlbGVjdGlvbiBkaXYncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBwcm9qZWN0SWNvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RJY29uc0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uc1wiKTtcclxuXHJcbiAgLy8gcHJvamVjdC1pY29ucyBkaXYgY2hpbGRyZW5cclxuICBjb25zdCB0b29sc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvb2xzSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG4gIHRvb2xzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib29rSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vbmV5QmFnSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwaXp6YUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBpenphSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwcmVzZW50Qm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJlc2VudEJveEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3Qgdm9sbGV5QmFsbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHZvbGxleUJhbGxJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IGd5bUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGd5bUljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3QgdG9vbHNJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB0b29sc0ljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuICB0b29sc0ljb25JbWcuYWx0ID0gXCJhIHdyZW5jaCBhbmQgYSBzY3Jld2RyaXZlciBjcm9zc2VkXCI7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBib29rSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCI7XHJcbiAgYm9va0ljb25JbWcuYWx0ID0gXCJhIGJvb2sgaWNvblwiO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1vbmV5QmFnSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL21vbmV5LWJhZy5zdmdcIjtcclxuICBtb25leUJhZ0ljb25JbWcuYWx0ID0gXCJhIGJhZyBvZiBtb25leSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHBpenphSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGl6emFJY29uSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCI7XHJcbiAgcGl6emFJY29uSW1nLmFsdCA9IFwiYSBwaXp6YSBzbGljZSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHByZXNlbnRCb3hJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBwcmVzZW50Qm94SWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ByZXNlbnQtYm94LnN2Z1wiO1xyXG4gIHByZXNlbnRCb3hJY29uSW1nLmFsdCA9IFwiYSBwcmVzZW50IGJveCBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHZvbGxleUJhbGxJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5hbHQgPSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIjtcclxuXHJcbiAgY29uc3QgZ3ltSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgZ3ltSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuICBneW1JY29uSW1nLmFsdCA9IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCdzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbW9kYWxCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5cclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idG5cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCBkaXYgY2hpbGRyZW5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQnV0dG9ucyk7XHJcblxyXG4gIC8vIGZvcm0gdGFnIGNoaWxkcmVuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNEaXYpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaWNvblNlbGVjdGlvbkRpdik7XHJcblxyXG4gIC8vIG1vZGFsLWJ1dHRvbnMgY2hpbGRyZW5cclxuICBtb2RhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsTW9kYWxCdG4pO1xyXG4gIG1vZGFsQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcclxuXHJcbiAgLy8gZmllbGRzIGRpdiBjaGlsZHJlblxyXG4gIGZpZWxkc0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgZmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBmaWVsZHNEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRmllbGRzKTtcclxuXHJcbiAgLy8gaWNvbi1zZWxlY3Rpb24gZGl2IGNoaWxkcmVuXHJcbiAgaWNvblNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhJY29uU2VsZWN0aW9uKTtcclxuICBpY29uU2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByb2plY3RJY29uc0Rpdik7XHJcblxyXG4gIC8vIHByb2plY3QtaWNvbiBkaXYgY2hpbGRyZW5cclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQodG9vbHNJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQoYm9va0ljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChtb25leUJhZ0ljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChwaXp6YUljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChwcmVzZW50Qm94SWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKHZvbGxleUJhbGxJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQoZ3ltSWNvbik7XHJcblxyXG4gIC8vIHByb2plY3QtaWNvbiBpbWdzXHJcbiAgdG9vbHNJY29uLmFwcGVuZENoaWxkKHRvb2xzSWNvbkltZyk7XHJcbiAgYm9va0ljb24uYXBwZW5kQ2hpbGQoYm9va0ljb25JbWcpO1xyXG4gIG1vbmV5QmFnSWNvbi5hcHBlbmRDaGlsZChtb25leUJhZ0ljb25JbWcpO1xyXG4gIHBpenphSWNvbi5hcHBlbmRDaGlsZChwaXp6YUljb25JbWcpO1xyXG4gIHByZXNlbnRCb3hJY29uLmFwcGVuZENoaWxkKHByZXNlbnRCb3hJY29uSW1nKTtcclxuICB2b2xsZXlCYWxsSWNvbi5hcHBlbmRDaGlsZCh2b2xsZXlCYWxsSWNvbkltZyk7XHJcbiAgZ3ltSWNvbi5hcHBlbmRDaGlsZChneW1JY29uSW1nKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsbFByb2plY3RNb2RhbCgpIHtcclxuICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJvZHlcIik7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXItdGV4dFwiKTtcclxuXHJcbiAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIG5ldyBwcm9qZWN0XCI7XHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhtb2RhbENvbnRlbnQpO1xyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0TW9kYWwoKSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWljb25cIik7XHJcbiAgc2VsZWN0ZWRQcm9qZWN0SWNvbnMuZm9yRWFjaCgoc2VsZWN0ZWRQcm9qZWN0SWNvbikgPT5cclxuICAgIHNlbGVjdGVkUHJvamVjdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUljb25TZWxlY3RlZClcclxuICApO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLW1vZGFsLWJ0blwiKTtcclxuICBjYW5jZWxNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWJ0blwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdQcm9qZWN0KTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY29udGVudFRpdGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10aXRsZS10ZXh0XCIpO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUaXRsZShlKSB7XHJcbiAgY29uc3QgY29udGVudFRpdGxlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXRpdGxlLWltZ1wiKTtcclxuICBsZXQgaW1nRWxlbWVudDtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBlLmNvbXBvc2VkUGF0aCgpO1xyXG5cclxuICAvLyBpZiB1c2VyIGNsaWNrcyBvbiB0aGUgY2FsZW5kYXIgaW1nIGVsZW1lbnQgYXQgdGhlIHNpZGViYXJcclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMF0uaW5uZXJUZXh0ID09PSBcIlwiICYmXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMV0uaW5uZXJUZXh0ID09PSBcIlwiXHJcbiAgKSB7XHJcbiAgICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9IHNlbGVjdGVkUHJvamVjdFsyXS5pbm5lclRleHQ7XHJcbiAgfVxyXG4gIC8vIGlmIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcCBlbGVtZW50IG9yIHRoZSBkaXYgZWxlbWVudCBhdCB0aGUgc2lkZWJhclxyXG4gIGlmIChzZWxlY3RlZFByb2plY3RbMF0uaW5uZXJUZXh0ICE9PSBcIlwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9IHNlbGVjdGVkUHJvamVjdFswXS5pbm5lclRleHQ7XHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHAgZWxlbWVudCBhdCB0aGUgc2lkZWJhciBhbmQgaXQncyBub3QgYSBwcm9qZWN0XHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzBdLnRhZ05hbWUgPT09IFwiUFwiICYmXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMF0uY2xhc3NOYW1lICE9PSBcInByb2plY3QtbmFtZVwiXHJcbiAgKSB7XHJcbiAgICBpbWdFbGVtZW50ID0gc2VsZWN0ZWRQcm9qZWN0WzFdLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBpbWcgZWxlbWVudCBhdCB0aGUgc2lkZWJhciBhbmQgaXQncyBub3QgYSBwcm9qZWN0XHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzBdLnRhZ05hbWUgPT09IFwiSU1HXCIgJiZcclxuICAgIHNlbGVjdGVkUHJvamVjdFsxXS5jbGFzc05hbWUgPT09IFwic2lkZWJhci1saW5rXCJcclxuICApIHtcclxuICAgIGltZ0VsZW1lbnQgPSBzZWxlY3RlZFByb2plY3RbMF07XHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGUgdXNlciBjbGlja3MgdGhlIGRpdiBlbGVtZW50IGF0IHRoZSBzaWRlYmFyIGFuZCBpdCdzIG5vdCBhIHByb2plY3RcclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMF0udGFnTmFtZSA9PT0gXCJESVZcIiAmJlxyXG4gICAgIXNlbGVjdGVkUHJvamVjdFswXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0cy1uYXZcIilcclxuICApIHtcclxuICAgIGltZ0VsZW1lbnQgPSBzZWxlY3RlZFByb2plY3RbMF0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMF0udGFnTmFtZSA9PT0gXCJQXCIgJiZcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS5jbGFzc05hbWUgPT09IFwicHJvamVjdC1uYW1lXCJcclxuICApIHtcclxuICAgIGltZ0VsZW1lbnQgPSBzZWxlY3RlZFByb2plY3RbMV0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMF0udGFnTmFtZSA9PT0gXCJJTUdcIiAmJlxyXG4gICAgKHNlbGVjdGVkUHJvamVjdFswXS5jbGFzc05hbWUgIT09IFwiZWRpdC1wcm9qZWN0LWJ1dHRvblwiIHx8XHJcbiAgICAgIHNlbGVjdGVkUHJvamVjdFswXS5jbGFzc05hbWUgIT09IFwiZXJhc2UtcHJvamVjdC1idXR0b25cIikgJiZcclxuICAgIHNlbGVjdGVkUHJvamVjdFszXS5jbGFzc05hbWUgPT09IFwicHJvamVjdHNcIlxyXG4gICkge1xyXG4gICAgaW1nRWxlbWVudCA9IHNlbGVjdGVkUHJvamVjdFswXTtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS50YWdOYW1lID09PSBcIklNR1wiICYmXHJcbiAgICAoc2VsZWN0ZWRQcm9qZWN0WzBdLmNsYXNzTmFtZSA9PT0gXCJlcmFzZS1wcm9qZWN0LWJ1dHRvblwiIHx8XHJcbiAgICAgIHNlbGVjdGVkUHJvamVjdFswXS5jbGFzc05hbWUgPT09IFwiZWRpdC1wcm9qZWN0LWJ1dHRvblwiKSAmJlxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzNdLmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0c1wiXHJcbiAgKSB7XHJcbiAgICBpbWdFbGVtZW50ID0gc2VsZWN0ZWRQcm9qZWN0WzJdLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzBdLnRhZ05hbWUgPT09IFwiRElWXCIgJiZcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0cy1uYXZcIilcclxuICApIHtcclxuICAgIGltZ0VsZW1lbnQgPSBzZWxlY3RlZFByb2plY3RbMF0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgfVxyXG5cclxuICBpZiAoaW1nRWxlbWVudC5hbHQgPT09IFwibW9udGggY2FsZW5kYXJcIikge1xyXG4gICAgY29udGVudFRpdGxlSW1nLnNyYyA9IFwiLi9pbWFnZXMvY2FsZW5kYXItbW9udGgtb3V0bGluZS5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImRheSBjYWxlbmRhclwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9jYWxlbmRhci10b2RheS1vdXRsaW5lLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaW1nRWxlbWVudC5hbHQgPT09IFwid2VlayBjYWxlbmRhclwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9jYWxlbmRhci13ZWVrLW91dGxpbmUuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJjYWxlbmRhciB3aXRoIGFsZXJ0XCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL2NhbGVuZGFyLWFsZXJ0LW91dGxpbmUuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJjYWxlbmRhciB3aXRoIGNoZWNrbWFya1wiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9jYWxlbmRhci1jaGVjay1vdXRsaW5lLnN2Z1wiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImEgd3JlbmNoIGFuZCBhIHNjcmV3ZHJpdmVyIGNyb3NzZWRcIikge1xyXG4gICAgY29udGVudFRpdGxlSW1nLnNyYyA9XHJcbiAgICAgIFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvd3JlbmNoLXNjcmV3ZHJpdmVyLWNyb3NzZWQuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJhIGJvb2sgaWNvblwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9ib29rLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaW1nRWxlbWVudC5hbHQgPT09IFwiYSBiYWcgb2YgbW9uZXkgaWNvblwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9tb25leS1iYWcuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJhIHBpenphIHNsaWNlIGljb25cIikge1xyXG4gICAgY29udGVudFRpdGxlSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJhIHByZXNlbnQgYm94IGljb25cIikge1xyXG4gICAgY29udGVudFRpdGxlSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcHJlc2VudC1ib3guc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJhIHZvbGxleWJhbGwgYmFsbCBpY29uXCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImEgcGVyc29uIGhvbGRpbmcgdHdvIGR1bWJiZWxscyBpY29uXCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250ZW50VGl0bGVUZXh0O1xyXG59XHJcbiIsImltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTmV3VGFza1wiO1xyXG5pbXBvcnQgeyBvcGVuVGFza01vZGFsLCBvcGVuRGV0YWlsc01vZGFsLCBvcGVuRWRpdFRhc2tNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGNvbnRlbnRUaXRsZVRleHQgfSBmcm9tIFwiLi9wcm9qZWN0Q29udGVudFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNb250aERhdGUsIGNyZWF0ZVRvZGF5RGF0ZSwgY3JlYXRlV2Vla0RhdGUgfSBmcm9tIFwiLi90aW1lXCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzRXhjZXB0Rmlyc3QocGFyZW50KSB7XHJcbiAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQuaWQgIT09IHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZC5pZCkge1xyXG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGFza3NDb3VudCgpIHtcclxuICBjb25zdCB0YXNrc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb3VudFwiKTtcclxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtZGl2XCIpO1xyXG4gIHRhc2tzQ291bnQudGV4dENvbnRlbnQgPSB0YXNrc0Rpdi5jaGlsZHJlbi5sZW5ndGggLSAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrTGlzdEZvclByb2plY3QoKSB7XHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWRpdlwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHRhc2tMaXN0W2ldLnByb2plY3QgPT09IGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0KSB7XHJcbiAgICAgIGlmICh0YXNrTGlzdFtpXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5pZCA9IFwiY29udGVudFwiO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrYm94XCIgY2hlY2tlZC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZSBjb21wbGV0ZWQtdGFza1wiPiR7dGFza0xpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+RGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVyYXNlLXRhc2stYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IGZhbHNlIHx8XHJcbiAgICAgICAgdGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFza0xpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+RGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVyYXNlLXRhc2stYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrTGlzdEZvckRhdGVzKCkge1xyXG4gIGNvbnN0IGRheVRvZGF5ID0gY3JlYXRlVG9kYXlEYXRlKCkuZ2V0RGF0ZSgpO1xyXG4gIGNvbnN0IGRhdGVUb2RheSA9IGNyZWF0ZVRvZGF5RGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gIGNvbnN0IHdlZWtGcm9tVG9kYXkgPSBjcmVhdGVXZWVrRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gIGNvbnN0IG1vbnRoID0gY3JlYXRlTW9udGhEYXRlKCk7XHJcblxyXG4gIGxldCB3ZWVrQ291bnQgPSBjcmVhdGVXZWVrRGF0ZSgpLmdldERhdGUoKSAtIGNyZWF0ZVRvZGF5RGF0ZSgpLmdldERhdGUoKTtcclxuXHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWRpdlwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbW9udGhEaWZmZXJlbmNlID0gdGFza0xpc3RbaV0uZnVsbERhdGUuZ2V0TW9udGgoKSAtIG1vbnRoO1xyXG5cclxuICAgIGlmIChjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJBbGxcIikge1xyXG4gICAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgY29tcGxldGVkLXRhc2tcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0YXNrTGlzdFtpXS5jaGVja2VkID09PSBmYWxzZSB8fFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuZXdUYXNrRGl2LmlkID0gXCJjb250ZW50XCI7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQgPT09IFwiVG9kYXlcIiAmJlxyXG4gICAgICB0YXNrTGlzdFtpXS5kYXRlID09PSBkYXRlVG9kYXlcclxuICAgICkge1xyXG4gICAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgY29tcGxldGVkLXRhc2tcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0YXNrTGlzdFtpXS5jaGVja2VkID09PSBmYWxzZSB8fFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuZXdUYXNrRGl2LmlkID0gXCJjb250ZW50XCI7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQgPT09IFwiV2Vla1wiICYmXHJcbiAgICAgIHRhc2tMaXN0W2ldLmRhdGUgPD0gd2Vla0Zyb21Ub2RheSAmJlxyXG4gICAgICBtb250aERpZmZlcmVuY2UgPj0gMFxyXG4gICAgKSB7XHJcbiAgICAgIGlmICh0YXNrTGlzdFtpXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5pZCA9IFwiY29udGVudFwiO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrYm94XCIgY2hlY2tlZC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZSBjb21wbGV0ZWQtdGFza1wiPiR7dGFza0xpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+RGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVyYXNlLXRhc2stYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IGZhbHNlIHx8XHJcbiAgICAgICAgdGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFza0xpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+RGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVyYXNlLXRhc2stYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJJbXBvcnRhbnRcIiAmJlxyXG4gICAgICB0YXNrTGlzdFtpXS5wcmlvcml0eSA9PT0gXCJIaWdoXCJcclxuICAgICkge1xyXG4gICAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgY29tcGxldGVkLXRhc2tcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0YXNrTGlzdFtpXS5jaGVja2VkID09PSBmYWxzZSB8fFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuZXdUYXNrRGl2LmlkID0gXCJjb250ZW50XCI7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJDb21wbGV0ZWRcIikge1xyXG4gICAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgY29tcGxldGVkLXRhc2tcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy9ub3RlLWVkaXQtb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ0cmFzaCBjYW4gaWNvblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBuZXdUYXNrRGl2LmlubmVySFRNTCA9IG5ld1Rhc2s7XHJcbiAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdXR0b24oKSB7XHJcbiAgY29uc3QgdGFza3NUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtdGl0bGVcIik7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld1Rhc2tCdXR0b25EaXYuaWQgPSBcIm5ld1Rhc2tCdG5cIjtcclxuICBuZXdUYXNrQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJuZXctdGFzay1idXR0b25cIik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGJ1dHRvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICB0YXNrc1RpdGxlLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b25EaXYpO1xyXG4gIG5ld1Rhc2tCdXR0b25EaXYuYXBwZW5kQ2hpbGQoYnV0dG9uUGFyYWdyYXBoKTtcclxuICBuZXdUYXNrQnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuVGFza01vZGFsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2hlY2ttYXJrKGUpIHtcclxuICBjb25zdCB0YXNrQ2xpY2tlZCA9IGUuY29tcG9zZWRQYXRoKClbMl0uY2hpbGRyZW5bMV07XHJcbiAgY29uc3QgY2hlY2tib3hDaGVjayA9IGUuY29tcG9zZWRQYXRoKClbMF0uY2hlY2tlZDtcclxuICBjb25zb2xlLmxvZyhlLmNvbXBvc2VkUGF0aCgpKTtcclxuICBjb25zb2xlLmxvZyh0YXNrQ2xpY2tlZCk7XHJcbiAgY29uc29sZS5sb2coY2hlY2tib3hDaGVjayk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0YXNrQ2xpY2tlZC50ZXh0Q29udGVudCA9PT0gdGFza0xpc3RbaV0udGl0bGUpIHtcclxuICAgICAgdGFza0xpc3RbaV0uY2hlY2tlZCA9IGNoZWNrYm94Q2hlY2s7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldKTtcclxuICAgICAgZmlsbFBhZ2VXaXRoVGFza3MoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbGxQYWdlV2l0aFRhc2tzKCkge1xyXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1kaXZcIik7XHJcbiAgY29uc3QgdGFza3NUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtdGl0bGVcIik7XHJcblxyXG4gIHJlbW92ZUNoaWxkTm9kZXNFeGNlcHRGaXJzdCh0YXNrc0Rpdik7XHJcbiAgY3JlYXRlQWRkVGFza0J1dHRvbigpO1xyXG4gIGlmIChcclxuICAgIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID09PSBcIkFsbFwiIHx8XHJcbiAgICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJUb2RheVwiIHx8XHJcbiAgICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJXZWVrXCIgfHxcclxuICAgIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID09PSBcIkltcG9ydGFudFwiIHx8XHJcbiAgICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJDb21wbGV0ZWRcIlxyXG4gICkge1xyXG4gICAgcmVtb3ZlQ2hpbGROb2Rlc0V4Y2VwdEZpcnN0KHRhc2tzVGl0bGUpO1xyXG4gICAgY3JlYXRlVGFza0xpc3RGb3JEYXRlcygpO1xyXG5cclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbFwiKTtcclxuICAgIGRldGFpbHMuZm9yRWFjaCgoZGV0YWlsKSA9PlxyXG4gICAgICBkZXRhaWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5EZXRhaWxzTW9kYWwpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LXRhc2stYnV0dG9uXCIpO1xyXG4gICAgZWRpdFRhc2tCdG4uZm9yRWFjaCgoZWRpdFRhc2tzKSA9PlxyXG4gICAgICBlZGl0VGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0VGFza01vZGFsKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcclxuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+XHJcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDaGVja21hcmspXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGFza0xpc3RGb3JQcm9qZWN0KCk7XHJcblxyXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbFwiKTtcclxuICBkZXRhaWxzLmZvckVhY2goKGRldGFpbCkgPT5cclxuICAgIGRldGFpbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkRldGFpbHNNb2RhbClcclxuICApO1xyXG5cclxuICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC10YXNrLWJ1dHRvblwiKTtcclxuICBlZGl0VGFza0J0bi5mb3JFYWNoKChlZGl0VGFza3MpID0+XHJcbiAgICBlZGl0VGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0VGFza01vZGFsKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xyXG4gIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2hlY2ttYXJrKVxyXG4gICk7XHJcblxyXG4gIHVwZGF0ZVRhc2tzQ291bnQoKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFRpdGxlIH0gZnJvbSBcIi4vcHJvamVjdENvbnRlbnRcIjtcclxuaW1wb3J0IGZpbGxQYWdlV2l0aFRhc2tzIGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdFwiO1xyXG5cclxubGV0IHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1uYXZcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDbGFzc0xpc3QoKSB7XHJcbiAgc2lkZWJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLW5hdlwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlYmFySXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzaWRlYmFySXRlbXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgc2lkZWJhckl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTZWN0aW9uU2VsZWN0ZWQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBzaWRlYmFyQ2xpY2tlZCA9IGUudGFyZ2V0O1xyXG5cclxuICBpZiAoXHJcbiAgICAhc2lkZWJhckNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikgJiZcclxuICAgIHNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcInNpZGViYXItbmF2XCIpXHJcbiAgKSB7XHJcbiAgICBjaGVja0NsYXNzTGlzdCgpO1xyXG4gICAgc2lkZWJhckNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgY3JlYXRlUHJvamVjdFRpdGxlKGUpO1xyXG4gICAgZmlsbFBhZ2VXaXRoVGFza3MoKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXZcIiB8fFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXYgcHJvamVjdHMtbmF2XCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaWYgKCFjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIGNoZWNrQ2xhc3NMaXN0KCk7XHJcbiAgICAgIGNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgICBjcmVhdGVQcm9qZWN0VGl0bGUoZSk7XHJcbiAgICAgIGZpbGxQYWdlV2l0aFRhc2tzKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXZcIiB8fFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PT1cclxuICAgICAgXCJzaWRlYmFyLW5hdiBwcm9qZWN0cy1uYXZcIlxyXG4gICkge1xyXG4gICAgY29uc3QgY2xpY2tlZCA9IHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgICAgY2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgICAgIGNyZWF0ZVByb2plY3RUaXRsZShlKTtcclxuICAgICAgZmlsbFBhZ2VXaXRoVGFza3MoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnNpZGViYXJJdGVtcy5mb3JFYWNoKChzaWRlYmFySXRlbSkgPT5cclxuICBzaWRlYmFySXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlU2VjdGlvblNlbGVjdGVkKVxyXG4pO1xyXG4iLCJpbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gXCIuL25ld1Byb2plY3RzXCI7XHJcbmltcG9ydCBmaWxsUGFnZVdpdGhUYXNrcyBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0UGFnZSgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhwcm9qZWN0cyk7XHJcbiAgY3JlYXRlTmV3UHJvamVjdCgpO1xyXG4gIGZpbGxQYWdlV2l0aFRhc2tzKCk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kYXlEYXRlKCkge1xyXG4gIGNvbnN0IGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICByZXR1cm4gZGF0ZU5vdztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlZWtEYXRlKCkge1xyXG4gIGNvbnN0IGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBkYXRlTm93LnNldERhdGUoZGF0ZU5vdy5nZXREYXRlKCkgKyA3KTtcclxuICBjb25zdCB3ZWVrRnJvbU5vdyA9IGRhdGVOb3c7XHJcblxyXG4gIHJldHVybiB3ZWVrRnJvbU5vdztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vbnRoRGF0ZSgpIHtcclxuICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgY29uc3QgbW9udGggPSBkYXRlTm93LmdldE1vbnRoKCk7XHJcblxyXG4gIHJldHVybiBtb250aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVllYXJEYXRlKCkge31cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jdGlvbi1wYXJlbi1uZXdsaW5lICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cclxuaW1wb3J0IHsgb3BlblByb2plY3RNb2RhbCwgb3BlblRhc2tNb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTmV3UHJvamVjdCxcclxuICBhZGRQcm9qZWN0VG9Qcm9qZWN0cyxcclxuICBwcm9qZWN0TGlzdCxcclxuICBQcm9qZWN0LFxyXG59IGZyb20gXCIuL25ld1Byb2plY3RzXCI7XHJcbmltcG9ydCB7IFRhc2ssIGFkZFRhc2tUb1Rhc2tzLCB0YXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZU5ld1Rhc2tcIjtcclxuaW1wb3J0IHN0YXJ0UGFnZSBmcm9tIFwiLi9zdGFydFBhZ2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlVG9kYXlEYXRlLCBjcmVhdGVXZWVrRGF0ZSB9IGZyb20gXCIuL3RpbWVcIjtcclxuXHJcbmNvbnN0IGhhbW1lcldyZW5jaCA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvd3JlbmNoLXNjcmV3ZHJpdmVyLWNyb3NzZWQuc3ZnXCI7XHJcbmNvbnN0IHZvbGxleWJhbGwgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuY29uc3QgZ3ltRHVtYmJlbGwgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuXHJcbmNvbnN0IHByb2plY3RGaXRuZXNzID0gbmV3IFByb2plY3QoXCJTdGF5aW5nIEZpdG5lc3NcIiwgZ3ltRHVtYmJlbGwpO1xyXG5jb25zdCBwcm9qZWN0V29yayA9IG5ldyBQcm9qZWN0KFwiV29yayBoYXJkIGFuZCBnZXQgcmljaFwiLCBoYW1tZXJXcmVuY2gpO1xyXG4vLyBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuY29uc3QgZGF0ZU5vdyA9IGNyZWF0ZVRvZGF5RGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG5cclxuYWRkUHJvamVjdFRvUHJvamVjdHMocHJvamVjdEZpdG5lc3MpO1xyXG5hZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0V29yayk7XHJcblxyXG5jb25zdCBmaXRuZXNzVGFza09uZSA9IG5ldyBUYXNrKFxyXG4gIFwiU3RheWluZyBGaXRuZXNzXCIsXHJcbiAgXCJHbyB0byB0aGUgZ3ltXCIsXHJcbiAgXCJXb3JrIG91dCBhbmQgbGlmdCB3ZWlnaHRzIGF0IHRoZSBneW0sIDMgdGltZXMgYSB3ZWVrXCIsXHJcbiAgXCIyNS8xMS8yMDIyXCIsXHJcbiAgbmV3IERhdGUoMjAyMiwgMTAsIDI1KSxcclxuICBcIkhpZ2hcIlxyXG4pO1xyXG5cclxuY29uc3QgZml0bmVzc1Rhc2tUd28gPSBuZXcgVGFzayhcclxuICBcIlN0YXlpbmcgRml0bmVzc1wiLFxyXG4gIFwiV2FrZSB1cCBlYXJseSBhbmQgcnVuIGF0IHRoZSBzdHJlZXRcIixcclxuICBcIlJ1biBhdCB0aGUgc3RyZWV0IDQgdGltZXMgYSB3ZWVrIGZvciBhdCBsZWFzdCAxNSBtaW51dGVzXCIsXHJcbiAgXCIzMS8xMi8yMDIyXCIsXHJcbiAgbmV3IERhdGUoMjAyMiwgMTEsIDMxKSxcclxuICBcIk1lZGl1bVwiXHJcbik7XHJcblxyXG5jb25zdCBwcm9qZWN0VGVzdFRhc2tPbmUgPSBuZXcgVGFzayhcclxuICBcIldvcmsgaGFyZCBhbmQgZ2V0IHJpY2hcIixcclxuICBcIkNyZWF0ZSBhIHZlcnkgbmljZSBhcHBcIixcclxuICBcIkdvIG9uIFZTIENvZGUgYW5kIGJ1aWxkIGEgbG90IG9mIG5pY2UgZmVhdHVyZXMgaW4gamF2YXNjcmlwdFwiLFxyXG4gIGRhdGVOb3csXHJcbiAgbmV3IERhdGUoKSxcclxuICBcIkhpZ2hcIlxyXG4pO1xyXG5cclxuYWRkVGFza1RvVGFza3MoZml0bmVzc1Rhc2tPbmUpO1xyXG5hZGRUYXNrVG9UYXNrcyhmaXRuZXNzVGFza1R3byk7XHJcbmFkZFRhc2tUb1Rhc2tzKHByb2plY3RUZXN0VGFza09uZSk7XHJcblxyXG5zdGFydFBhZ2UoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9