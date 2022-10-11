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
/* harmony export */   "taskList": () => (/* binding */ taskList),
/* harmony export */   "updateTaskList": () => (/* binding */ updateTaskList)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _projectContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectContent */ "./src/projectContent.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");




let taskList = [];

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

function updateTaskList(updatedTaskList) {
  taskList = updatedTaskList.map((x) => x);
  console.log(taskList);
  
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
  const modalHeaderText = document.querySelector(".modal-header-text");
  const modalHeader = document.querySelector(".modal-header");

  if (modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.remove("delete-modal-header");
  }

  modalHeaderText.textContent = "Task Details";

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
  const modalHeaderText = document.querySelector(".modal-header-text");
  modalHeaderText.textContent = "Edit Project";

  const modalHeader = document.querySelector(".modal-header");

  if (modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.remove("delete-modal-header");
  }

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
  const modalHeaderText = document.querySelector(".modal-header-text");
  const modalHeader = document.querySelector(".modal-header");

  if (modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.remove("delete-modal-header");
  }

  modalHeaderText.textContent = "Edit Task";

  createEditTask(taskTitle);
}


/***/ }),

/***/ "./src/eraseProject.js":
/*!*****************************!*\
  !*** ./src/eraseProject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openEraseProject": () => (/* binding */ openEraseProject),
/* harmony export */   "projectListTwo": () => (/* binding */ projectListTwo),
/* harmony export */   "removeAndUpdateProjectList": () => (/* binding */ removeAndUpdateProjectList),
/* harmony export */   "taskListTwo": () => (/* binding */ taskListTwo)
/* harmony export */ });
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _newProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProjects */ "./src/newProjects.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");






let project;

let projectListTwo;
let taskListTwo;

function createContentTitleOnDelete() {
  const contentTitleText = document.querySelector(".content-title-text");
  const contentTitleImg = document.querySelector(".content-title-img");

  contentTitleText.innerText = "All";
  contentTitleImg.src = "./images/calendar-month-outline.svg";
}

function removeAndUpdateProjectList() {
  const projects = document.querySelector("#projects");
  const sidebar = document.querySelector(".sidebar");

  projectListTwo = _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList;
  taskListTwo = _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList;

  for (let i = 0; i < _newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList.length; i++) {
    if (_newProjects__WEBPACK_IMPORTED_MODULE_2__.projectList[i].title === project) {
      projectListTwo = projectListTwo.filter((item) => item.title !== project);
    }
  }

  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++) {
    if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].project === project) {
      taskListTwo = taskListTwo.filter((item) => item.project !== project);
    }
  }

  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(projects);
  (0,_newProjects__WEBPACK_IMPORTED_MODULE_2__.updateProjectList)(projectListTwo);
  (0,_createNewTask__WEBPACK_IMPORTED_MODULE_0__.updateTaskList)(taskListTwo);
  (0,_newProjects__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectListTwo);
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__.checkClassList)();
  sidebar.firstElementChild.firstElementChild.classList.add("active-section");
  createContentTitleOnDelete();
  (0,_selectedProject__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)();
}

function createFilledEraseProjectModal(projectTitle) {
  const modalContent = document.querySelector(".modal-content");

  // modal-content's first child
  const textDiv = document.createElement("div");
  textDiv.classList.add("erase-project-text");

  // erase project text' first child
  const paragraphOne = document.createElement("p");
  paragraphOne.textContent = "Are you sure?";

  const paragraphTwo = document.createElement("p");
  paragraphTwo.innerHTML = `Project <span class="project-name-deletion">"${projectTitle}"</span> will be gone forever`;

  // modal-content's second child
  const modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-delete-modal-btn");
  cancelModalBtn.textContent = "Cancel";

  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.classList.add("delete-project-btn");
  deleteProjectBtn.textContent = "Delete Project";

  // modal-content div children
  modalContent.appendChild(textDiv);
  modalContent.appendChild(modalButtons);

  // erase project text child
  textDiv.appendChild(paragraphOne);
  textDiv.appendChild(paragraphTwo);

  // modal-buttons children
  modalButtons.appendChild(cancelModalBtn);
  modalButtons.appendChild(deleteProjectBtn);

  return modalContent;
}

function createEraseProject(projectTitle) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");

  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(modalContent);

  modalBody.appendChild(createFilledEraseProjectModal(projectTitle));

  const cancelModalBtn = document.querySelector(".cancel-delete-modal-btn");
  cancelModalBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.closeModal);

  const deleteProjectBtn = document.querySelector(".delete-project-btn");
  deleteProjectBtn.addEventListener("click", removeAndUpdateProjectList);
}

function openEraseProject(projectTitle) {
  const modalHeader = document.querySelector(".modal-header");
  const modalHeaderText = document.querySelector(".modal-header-text");
  modalHeaderText.textContent = "Delete Project";

  if (!modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.add("delete-modal-header");
  }

  project = projectTitle;
  createEraseProject(projectTitle);
}


/***/ }),

/***/ "./src/eraseTask.js":
/*!**************************!*\
  !*** ./src/eraseTask.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEraseTask": () => (/* binding */ createEraseTask),
/* harmony export */   "openEraseTask": () => (/* binding */ openEraseTask),
/* harmony export */   "taskListThree": () => (/* binding */ taskListThree)
/* harmony export */ });
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewTask */ "./src/createNewTask.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");




let taskListThree;
let task;

function removeAndUpdateTaskList() {
  taskListThree = _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList;

  for (let i = 0; i < _createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++) {
    if (_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i].title === task) {
      taskListThree = taskListThree.filter((item) => item.title !== task);
      console.log(_createNewTask__WEBPACK_IMPORTED_MODULE_0__.taskList[i]);
    }
  }

  (0,_createNewTask__WEBPACK_IMPORTED_MODULE_0__.updateTaskList)(taskListThree);
  (0,_selectedProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)();
}

function createFilledEraseTaskModal(taskTitle) {
  const modalContent = document.querySelector(".modal-content");

  // modal-content's first child
  const textDiv = document.createElement("div");
  textDiv.classList.add("erase-task-text");

  // erase task text' first child
  const paragraphOne = document.createElement("p");
  paragraphOne.textContent = "Are you sure?";

  const paragraphTwo = document.createElement("p");
  paragraphTwo.innerHTML = `Task <span class="task-name-deletion">"${taskTitle}"</span> will be gone forever`;

  // modal-content's second child
  const modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-delete-modal-btn");
  cancelModalBtn.textContent = "Cancel";

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.classList.add("delete-task-btn");
  deleteTaskBtn.textContent = "Delete Task";

  // modal-content div children
  modalContent.appendChild(textDiv);
  modalContent.appendChild(modalButtons);

  // erase task text child
  textDiv.appendChild(paragraphOne);
  textDiv.appendChild(paragraphTwo);

  // modal-buttons children
  modalButtons.appendChild(cancelModalBtn);
  modalButtons.appendChild(deleteTaskBtn);

  return modalContent;
}

function createEraseTask(taskTitle) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");

  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(modalContent);

  modalBody.appendChild(createFilledEraseTaskModal(taskTitle));

  const cancelModalBtn = document.querySelector(".cancel-delete-modal-btn");
  cancelModalBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.closeModal);

  const deleteTaskBtn = document.querySelector(".delete-task-btn");
  deleteTaskBtn.addEventListener("click", removeAndUpdateTaskList);
}

function openEraseTask(taskTitle) {
  const modalHeader = document.querySelector(".modal-header");
  const modalHeaderText = document.querySelector(".modal-header-text");
  modalHeaderText.textContent = "Delete Task";

  if (!modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.add("delete-modal-header");
  }

  task = taskTitle;
  createEraseTask(taskTitle);
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
/* harmony export */   "openEraseProjectModal": () => (/* binding */ openEraseProjectModal),
/* harmony export */   "openEraseTaskModal": () => (/* binding */ openEraseTaskModal),
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
/* harmony import */ var _eraseProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eraseProject */ "./src/eraseProject.js");
/* harmony import */ var _eraseTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eraseTask */ "./src/eraseTask.js");









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

function openEraseProjectModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const projectTitle =
    e.composedPath()[2].children[0].lastElementChild.innerText;

  (0,_eraseProject__WEBPACK_IMPORTED_MODULE_6__.openEraseProject)(projectTitle);
  window.addEventListener("keydown", _keyboardkeys__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

function openEraseTaskModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const taskTitle = e.composedPath()[3].children[0].lastElementChild.innerText;

  (0,_eraseTask__WEBPACK_IMPORTED_MODULE_7__.openEraseTask)(taskTitle);
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
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "updateProjectList": () => (/* binding */ updateProjectList)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _selectedProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedProject */ "./src/selectedProject.js");




let projectList = [];

class Project {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
}

function updateProjectList(updatedProjectList) {
  projectList = updatedProjectList.map((x) => x);
}

function addProjectToProjects(project) {
  projectList.push(project);
}

function createNewProject(projectArray) {
  const projects = document.querySelector("#projects");

  for (let i = 0; i < projectArray.length; i++) {
    let altText;
    if (
      projectArray[i].icon ===
      "./images/projects-icons/wrench-screwdriver-crossed.svg"
    ) {
      altText = "a wrench and a screwdriver crossed";
    } else if (projectArray[i].icon === "./images/projects-icons/book.svg") {
      altText = "a book icon";
    } else if (
      projectArray[i].icon === "./images/projects-icons/money-bag.svg"
    ) {
      altText = "a bag of money icon";
    } else if (
      projectArray[i].icon === "./images/projects-icons/pizza-slice.svg"
    ) {
      altText = "a pizza slice icon";
    } else if (
      projectArray[i].icon === "./images/projects-icons/present-box.svg"
    ) {
      altText = "a present box icon";
    } else if (
      projectArray[i].icon === "./images/projects-icons/volleyball-ball.svg"
    ) {
      altText = "a volleyball ball icon";
    } else if (
      projectArray[i].icon === "./images/projects-icons/dumbbells-exercise.svg"
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

  const eraseProjectBtns = document.querySelectorAll(".erase-project-button");
  eraseProjectBtns.forEach((eraseProjectBtn) =>
    eraseProjectBtn.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openEraseProjectModal)
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

function createProjectTitleOnAdd(icon) {
  const projects = document.querySelector("#projects");
  const contentTitleText = document.querySelector(".content-title-text");
  const contentTitleImg = document.querySelector(".content-title-img");

  contentTitleText.innerText = projects.lastChild.innerText;
  contentTitleImg.src = icon;
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
  createNewProject(projectList);

  (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.checkClassList)();
  projects.lastChild.classList.add("active-section");
  createProjectTitleOnAdd(icon);
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
  const modalHeaderText = document.querySelector(".modal-header-text");
  const modalHeader = document.querySelector(".modal-header");

  if (modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.remove("delete-modal-header");
  }

  modalHeaderText.textContent = "Create a new task";
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
  const modalHeaderText = document.querySelector(".modal-header-text");
  const modalHeader = document.querySelector(".modal-header");

  if (modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.remove("delete-modal-header");
  }

  modalHeaderText.textContent = "Create a new project";
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

    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("click", toggleCheckmark)
    );

    const details = document.querySelectorAll(".detail");
    details.forEach((detail) =>
      detail.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openDetailsModal)
    );

    const editTaskBtn = document.querySelectorAll(".edit-task-button");
    editTaskBtn.forEach((editTasks) =>
      editTasks.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openEditTaskModal)
    );

    const eraseTaskBtn = document.querySelectorAll(".erase-task-button");
    eraseTaskBtn.forEach((eraseTask) =>
      eraseTask.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openEraseTaskModal)
    );
  }

  createTaskListForProject();

  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", toggleCheckmark)
  );

  const details = document.querySelectorAll(".detail");
  details.forEach((detail) =>
    detail.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openDetailsModal)
  );

  const editTaskBtn = document.querySelectorAll(".edit-task-button");
  editTaskBtn.forEach((editTasks) =>
    editTasks.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openEditTaskModal)
  );

  const eraseTaskBtn = document.querySelectorAll(".erase-task-button");
  eraseTaskBtn.forEach((eraseTask) =>
    eraseTask.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_1__.openEraseTaskModal)
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
  (0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(_newProjects__WEBPACK_IMPORTED_MODULE_1__.projectList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDZTtBQUNGO0FBQ2xEO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQix1RUFBMEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1osRUFBRSw0REFBaUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVQ4QztBQUNIO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDJEQUFlLEVBQUU7QUFDdkMsNEJBQTRCLG9EQUFRO0FBQ3BDLDBCQUEwQixvREFBUTtBQUNsQyw4QkFBOEIsb0RBQVE7QUFDdEMsMEJBQTBCLG9EQUFRO0FBQ2xDLDJCQUEyQixvREFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSDJDO0FBQ2U7QUFLbkM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDREQUFrQixFQUFFO0FBQzFDLHlCQUF5QixxREFBVztBQUNwQyxvQkFBb0IscURBQVc7QUFDL0I7QUFDQTtBQUNBLFFBQVEscURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxTQUFTLHFEQUFXO0FBQzVCO0FBQ0EsUUFBUTtBQUNSLFFBQVEscURBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSxxREFBVztBQUNuQjtBQUNBO0FBQ0EsUUFBUTtBQUNSLFFBQVEscURBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDREQUFrQixFQUFFO0FBQzFDLFFBQVEscURBQVc7QUFDbkIsc0JBQXNCLElBQUksMkRBQWUsRUFBRTtBQUMzQyxZQUFZLG9EQUFRO0FBQ3BCLFVBQVUscURBQVc7QUFDckIsVUFBVSxxREFBVztBQUNyQixVQUFVLG9EQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1osRUFBRSwyREFBbUI7QUFDckIsRUFBRSw4REFBZ0I7QUFDbEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0REFBa0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UjBEO0FBQ1A7QUFDUjtBQUNPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksMkRBQWUsRUFBRTtBQUN2QyxRQUFRLG9EQUFRO0FBQ2hCLE1BQU0sb0RBQVE7QUFDZCxNQUFNLG9EQUFRO0FBQ2QsTUFBTSxvREFBUTtBQUNkLE1BQU0sb0RBQVE7QUFDZCxNQUFNLG9EQUFRO0FBQ2Qsa0JBQWtCLG9EQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQVU7QUFDWixFQUFFLDREQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNERBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSwyREFBZSxFQUFFO0FBQ3ZDLHNCQUFzQixvREFBUTtBQUM5QixpQkFBaUIsb0RBQVE7QUFDekIsOEJBQThCLG9EQUFRO0FBQ3RDLDBCQUEwQixvREFBUTtBQUNsQywyQkFBMkIsb0RBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVmMkQ7QUFDRDtBQUtuQztBQUMyQjtBQUNQO0FBQzNDO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBVztBQUM5QixnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQSxrQkFBa0IsSUFBSSw0REFBa0IsRUFBRTtBQUMxQyxRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksMkRBQWUsRUFBRTtBQUN2QyxRQUFRLG9EQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBbUI7QUFDckIsRUFBRSwrREFBaUI7QUFDbkIsRUFBRSw4REFBYztBQUNoQixFQUFFLDhEQUFnQjtBQUNsQixFQUFFLHdEQUFjO0FBQ2hCO0FBQ0E7QUFDQSxFQUFFLDREQUFpQjtBQUNuQixFQUFFLGtEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIMkQ7QUFDRDtBQUNSO0FBQ2xEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQVE7QUFDMUI7QUFDQSxrQkFBa0IsSUFBSSwyREFBZSxFQUFFO0FBQ3ZDLFFBQVEsb0RBQVE7QUFDaEI7QUFDQSxrQkFBa0Isb0RBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBYztBQUNoQixFQUFFLDREQUFpQjtBQUNuQixFQUFFLGtEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxVQUFVO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekZxQztBQUNyQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBVTtBQUNkO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUndDO0FBQ1U7QUFDVjtBQUNBO0FBQ0Y7QUFDVTtBQUNFO0FBQ047QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsRUFBRSw2REFBZ0I7QUFDbEIscUNBQXFDLHFEQUFVO0FBQy9DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxFQUFFLHFEQUFXO0FBQ2IscUNBQXFDLHFEQUFVO0FBQy9DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFlO0FBQ2pCLHFDQUFxQyxxREFBVTtBQUMvQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVk7QUFDZCxxQ0FBcUMscURBQVU7QUFDL0M7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQWU7QUFDakIscUNBQXFDLHFEQUFVO0FBQy9DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFnQjtBQUNsQixxQ0FBcUMscURBQVU7QUFDL0M7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFhO0FBQ2YscUNBQXFDLHFEQUFVO0FBQy9DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsOEJBQThCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R2tFO0FBTWpEO0FBQ29DO0FBQ3JEO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJEQUFxQjtBQUMxRDtBQUNBO0FBQ0EsNkNBQTZDLHdEQUFvQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx5REFBcUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQ0FBaUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1osRUFBRSwyREFBbUI7QUFDckI7QUFDQTtBQUNBLEVBQUUsd0RBQWM7QUFDaEI7QUFDQTtBQUNBLEVBQUUsNERBQW9CO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TDZDO0FBQ2E7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsOENBQVU7QUFDckQ7QUFDQTtBQUNBLHVDQUF1QyxzREFBVTtBQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TTBEO0FBQ1E7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNzRTtBQU0vQztBQUMwQztBQUM3QjtBQUNxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFPO0FBQ2xDLHdCQUF3QixpREFBTztBQUMvQjtBQUNBLGdCQUFnQixzREFBZTtBQUMvQjtBQUNBLGtFQUFvQjtBQUNwQixrRUFBb0I7QUFDcEI7QUFDQSwyQkFBMkIsZ0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdEQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBYztBQUNkLDhEQUFjO0FBQ2QsOERBQWM7QUFDZDtBQUNBLHNEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZU5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXJhc2VQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lcmFzZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2tleWJvYXJka2V5cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vcGVuUHJvamVjdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2VsZWN0ZWRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdGFydFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RpbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5pbXBvcnQgeyBjb250ZW50VGl0bGVUZXh0IH0gZnJvbSBcIi4vcHJvamVjdENvbnRlbnRcIjtcclxuaW1wb3J0IGZpbGxQYWdlV2l0aFRhc2tzIGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGxldCB0YXNrTGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHByb2plY3QsIHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBmdWxsRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMuZnVsbERhdGUgPSBmdWxsRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9UYXNrcyh0YXNrKSB7XHJcbiAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tMaXN0KHVwZGF0ZWRUYXNrTGlzdCkge1xyXG4gIHRhc2tMaXN0ID0gdXBkYXRlZFRhc2tMaXN0Lm1hcCgoeCkgPT4geCk7XHJcbiAgY29uc29sZS5sb2codGFza0xpc3QpO1xyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3VGFzayhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQ7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWxzXCIpLnZhbHVlO1xyXG4gIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpLnZhbHVlQXNEYXRlO1xyXG4gIGNvbnN0IHRhc2tGdWxsRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpLnZhbHVlQXNEYXRlO1xyXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBtb2RhbFRpdGxlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIGNvbnN0IG1vZGFsRGV0YWlsc0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1kZXRhaWxzLWVycm9yXCIpO1xyXG4gIGNvbnN0IG1vZGFsRGF0ZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1kYXRlLWVycm9yXCIpO1xyXG4gIGNvbnN0IG1vZGFsUHJpb3JpdHlFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtcHJpb3JpdHktZXJyb3JcIik7XHJcblxyXG4gIC8vIFRpdGxlLCBkZXRhaWxzLCBkYXRlIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRpdGxlIGZpbGxlZC4gRGV0YWlscywgZGF0ZSBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERldGFpbHMgZmlsbGVkLiBUaXRsZSwgZGF0ZSBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGF0ZSBmaWxsZWQuIFRpdGxlLCBkZXRhaWxzIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBQcmlvcml0eSBmaWxsZWQuIFRpdGxlLCBkZXRhaWxzIGFuZCBkYXRlIG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaXRsZSBhbmQgZGV0YWlscyBmaWxsZWQuIERhdGUgYW5kIHByaW9yaXR5IG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRpdGxlIGFuZCBkYXRlIGZpbGxlZC4gRGV0YWlscyBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGl0bGUgYW5kIHByaW9yaXR5IGZpbGxlZC4gRGV0YWlscyBhbmQgZGF0ZSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGV0YWlscyBhbmQgZGF0ZSBmaWxsZWQuIFRpdGxlIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgIT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERldGFpbHMgYW5kIHByaW9yaXR5IGZpbGxlZC4gVGl0bGUgYW5kIGRhdGUgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgIT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGF0ZSBhbmQgcHJpb3JpdHkgZmlsbGVkLiBUaXRsZSBhbmQgZGV0YWlscyBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaXRsZSBub3QgZmlsbGVkLiBEZXRhaWxzLCBkYXRlIGFuZCBwcmlvcml0eSBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgIT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGV0YWlscyBub3QgZmlsbGVkLiBUaXRsZSwgZGF0ZSBhbmQgcHJpb3JpdHkgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEYXRlIG5vdCBmaWxsZWQuIFRpdGxlLCBkZXRhaWxzIGFuZCBwcmlvcml0eSBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFByaW9yaXR5IG5vdCBmaWxsZWQuIFRpdGxlLCBkZXRhaWxzIGFuZCBkYXRlIGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAodGFza0R1ZURhdGUgIT09IG51bGwpIHtcclxuICAgIHRhc2tEdWVEYXRlID0gdGFza0R1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAocHJpb3JpdHkgIT09IG51bGwpIHtcclxuICAgIHByaW9yaXR5ID0gcHJpb3JpdHkudGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0YXNrQWRkZWQgPSBuZXcgVGFzayhcclxuICAgIHByb2plY3QsXHJcbiAgICB0aXRsZSxcclxuICAgIGRldGFpbHMsXHJcbiAgICB0YXNrRHVlRGF0ZSxcclxuICAgIHRhc2tGdWxsRHVlRGF0ZSxcclxuICAgIHByaW9yaXR5XHJcbiAgKTtcclxuXHJcbiAgYWRkVGFza1RvVGFza3ModGFza0FkZGVkKTtcclxuICBjbG9zZU1vZGFsKCk7XHJcbiAgZmlsbFBhZ2VXaXRoVGFza3MoKTtcclxufVxyXG4iLCJpbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVOZXdUYXNrXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGV0YWlscyh0YXNrRGV0YWlsVGl0bGUpIHtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHRhc2tEZXRhaWxUaXRsZSA9PT0gdGFza0xpc3RbaV0udGl0bGUpIHtcclxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0YXNrTGlzdFtpXS5wcm9qZWN0O1xyXG4gICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrTGlzdFtpXS5kZXRhaWxzO1xyXG4gICAgICBjb25zdCBkdWVEYXRlSW5mbyA9IHRhc2tMaXN0W2ldLmRhdGU7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5SW5mbyA9IHRhc2tMaXN0W2ldLnByaW9yaXR5O1xyXG5cclxuICAgICAgLy8gcHJvamVjdCBkaXYgd2l0aCBwcm9qZWN0IGFuZCBwcm9qZWN0IHRleHRcclxuXHJcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRldGFpbC1kaXZcIik7XHJcbiAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtZGl2c1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1sZWZ0LWNvbHVtblwiKTtcclxuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDpcIjtcclxuXHJcbiAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLXJpZ2h0LWNvbHVtblwiKTtcclxuICAgICAgcHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZX1gO1xyXG5cclxuICAgICAgLy8gdGl0bGUgZGl2IHdpdGggdGl0bGUgYW5kIHRpdGxlIHRleHRcclxuICAgICAgY29uc3QgdGFza1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGFza1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlLWRldGFpbFwiKTtcclxuICAgICAgdGFza1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRpdnNcIik7XHJcblxyXG4gICAgICBjb25zdCBkZXRhaWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBkZXRhaWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1sZWZ0LWNvbHVtblwiKTtcclxuICAgICAgZGV0YWlsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xyXG5cclxuICAgICAgY29uc3QgZGV0YWlsVGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGRldGFpbFRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1yaWdodC1jb2x1bW5cIik7XHJcbiAgICAgIGRldGFpbFRpdGxlVGV4dC50ZXh0Q29udGVudCA9IGAke3Rhc2tEZXRhaWxUaXRsZX1gO1xyXG5cclxuICAgICAgLy8gZGVzY3JpcHRpb24gZGl2IHdpdGggZGVzY3JpcHRpb24gYW5kIGRlc2NyaXB0aW9uIHRleHRcclxuICAgICAgY29uc3QgZGV0YWlsRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkZXRhaWxEZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvbi1kaXZcIik7XHJcbiAgICAgIGRldGFpbERlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRpdnNcIik7XHJcblxyXG4gICAgICBjb25zdCBkZXRhaWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBkZXRhaWxEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1sZWZ0LWNvbHVtblwiKTtcclxuICAgICAgZGV0YWlsRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xyXG5cclxuICAgICAgY29uc3QgZGV0YWlsRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGRldGFpbERlc2NyaXB0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1yaWdodC1jb2x1bW5cIik7XHJcbiAgICAgIGRldGFpbERlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IGAke3Rhc2tEZXNjcmlwdGlvbn1gO1xyXG5cclxuICAgICAgLy8gZHVlIGRhdGUgZGl2IHdpdGggZHVlIGRhdGUgYW5kIGR1ZSBkYXRlIGluZm9cclxuXHJcbiAgICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZS1kaXZcIik7XHJcbiAgICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtZGl2c1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1sZWZ0LWNvbHVtblwiKTtcclxuICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XHJcblxyXG4gICAgICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1yaWdodC1jb2x1bW5cIik7XHJcbiAgICAgIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gYCR7ZHVlRGF0ZUluZm99YDtcclxuXHJcbiAgICAgIC8vIHByaW9yaXR5IGRpdiB3aXRoIHByaW9yaXR5IGFuZCBwcmlvcml0eSBpbmZvXHJcblxyXG4gICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1kaXZcIik7XHJcbiAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRpdnNcIik7XHJcblxyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1sZWZ0LWNvbHVtblwiKTtcclxuICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xyXG5cclxuICAgICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIHByaW9yaXR5VGV4dC5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1yaWdodC1jb2x1bW5cIik7XHJcbiAgICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IGAke3ByaW9yaXR5SW5mb31gO1xyXG5cclxuICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG4gICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlRGl2KTtcclxuICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGRldGFpbERlc2NyaXB0aW9uRGl2KTtcclxuICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xyXG4gICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG5cclxuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XHJcblxyXG4gICAgICB0YXNrVGl0bGVEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsVGl0bGUpO1xyXG4gICAgICB0YXNrVGl0bGVEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsVGl0bGVUZXh0KTtcclxuXHJcbiAgICAgIGRldGFpbERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRldGFpbERlc2NyaXB0aW9uKTtcclxuICAgICAgZGV0YWlsRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGV0YWlsRGVzY3JpcHRpb25UZXh0KTtcclxuXHJcbiAgICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xyXG5cclxuICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xyXG5cclxuICAgICAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlblRhc2tEZXRhaWxzKHRhc2tEZXRhaWxUaXRsZSkge1xyXG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcbiAgY29uc3QgbW9kYWxIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXItdGV4dFwiKTtcclxuICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICBpZiAobW9kYWxIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLW1vZGFsLWhlYWRlclwiKSkge1xyXG4gICAgbW9kYWxIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlbGV0ZS1tb2RhbC1oZWFkZXJcIik7XHJcbiAgfVxyXG5cclxuICBtb2RhbEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIlRhc2sgRGV0YWlsc1wiO1xyXG5cclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcblxyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRGV0YWlscyh0YXNrRGV0YWlsVGl0bGUpKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZU5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCwgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTmV3UHJvamVjdCxcclxuICBoYW5kbGVJY29uU2VsZWN0ZWQsXHJcbiAgcHJvamVjdExpc3QsXHJcbn0gZnJvbSBcIi4vbmV3UHJvamVjdHNcIjtcclxuXHJcbmxldCBwcm9qZWN0TmFtZTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGxlZFByb2plY3QocHJvamVjdFRpdGxlKSB7XHJcbiAgbGV0IGFsdFRleHQ7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHByb2plY3RUaXRsZSA9PT0gcHJvamVjdExpc3RbaV0udGl0bGUpIHtcclxuICAgICAgcHJvamVjdE5hbWUgPSBwcm9qZWN0TGlzdFtpXS50aXRsZTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBwcm9qZWN0TGlzdFtpXS5pY29uID09PVxyXG4gICAgICAgIFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvd3JlbmNoLXNjcmV3ZHJpdmVyLWNyb3NzZWQuc3ZnXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWx0VGV4dCA9IFwiYSB3cmVuY2ggYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb2plY3RMaXN0W2ldLmljb24gPT09IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvYm9vay5zdmdcIikge1xyXG4gICAgICAgIGFsdFRleHQgPSBcImEgYm9vayBpY29uXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9tb25leS1iYWcuc3ZnXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWx0VGV4dCA9IFwiYSBiYWcgb2YgbW9uZXkgaWNvblwiO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHByb2plY3RMaXN0W2ldLmljb24gPT09IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWx0VGV4dCA9IFwiYSBwaXp6YSBzbGljZSBpY29uXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9wcmVzZW50LWJveC5zdmdcIlxyXG4gICAgICApIHtcclxuICAgICAgICBhbHRUZXh0ID0gXCJhIHByZXNlbnQgYm94IGljb25cIjtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBwcm9qZWN0TGlzdFtpXS5pY29uID09PSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIlxyXG4gICAgICApIHtcclxuICAgICAgICBhbHRUZXh0ID0gXCJhIHZvbGxleWJhbGwgYmFsbCBpY29uXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgcHJvamVjdExpc3RbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9kdW1iYmVsbHMtZXhlcmNpc2Uuc3ZnXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWx0VGV4dCA9IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcclxuXHJcbiAgLy8gZm9ybSB0YWcncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcblxyXG4gIC8vIGZpZWxkcyBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsLmZvciA9IFwicHJvamVjdC10aXRsZVwiO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xyXG4gIGlucHV0LnZhbHVlID0gcHJvamVjdE5hbWU7XHJcblxyXG4gIC8vIGZpZWxkcyBkaXYncyB0aGlyZCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaEZpZWxkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGl0bGUtZXJyb3JcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQuXCI7XHJcblxyXG4gIC8vIGZvcm0gdGFnJ3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaWNvblNlbGVjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaWNvblNlbGVjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaWNvbi1zZWxlY3Rpb25cIik7XHJcblxyXG4gIC8vIGljb24tc2VsZWN0aW9uIGRpdidzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgcGFyYWdyYXBoSWNvblNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaEljb25TZWxlY3Rpb24udGV4dENvbnRlbnQgPSBcIkNob29zZSBhbiBJY29uXCI7XHJcblxyXG4gIC8vIGljb24tc2VsZWN0aW9uIGRpdidzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IHByb2plY3RJY29uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEljb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25zXCIpO1xyXG5cclxuICAvLyBwcm9qZWN0LWljb25zIGRpdiBjaGlsZHJlblxyXG4gIGNvbnN0IHRvb2xzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9vbHNJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib29rSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vbmV5QmFnSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwaXp6YUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBpenphSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwcmVzZW50Qm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJlc2VudEJveEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3Qgdm9sbGV5QmFsbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHZvbGxleUJhbGxJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IGd5bUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGd5bUljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3QgdG9vbHNJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB0b29sc0ljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuICB0b29sc0ljb25JbWcuYWx0ID0gXCJhIHdyZW5jaCBhbmQgYSBzY3Jld2RyaXZlciBjcm9zc2VkXCI7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBib29rSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCI7XHJcbiAgYm9va0ljb25JbWcuYWx0ID0gXCJhIGJvb2sgaWNvblwiO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1vbmV5QmFnSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL21vbmV5LWJhZy5zdmdcIjtcclxuICBtb25leUJhZ0ljb25JbWcuYWx0ID0gXCJhIGJhZyBvZiBtb25leSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHBpenphSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGl6emFJY29uSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCI7XHJcbiAgcGl6emFJY29uSW1nLmFsdCA9IFwiYSBwaXp6YSBzbGljZSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHByZXNlbnRCb3hJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBwcmVzZW50Qm94SWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ByZXNlbnQtYm94LnN2Z1wiO1xyXG4gIHByZXNlbnRCb3hJY29uSW1nLmFsdCA9IFwiYSBwcmVzZW50IGJveCBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHZvbGxleUJhbGxJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5hbHQgPSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIjtcclxuXHJcbiAgY29uc3QgZ3ltSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgZ3ltSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuICBneW1JY29uSW1nLmFsdCA9IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIjtcclxuXHJcbiAgaWYgKGFsdFRleHQgPT09IHRvb2xzSWNvbkltZy5hbHQpIHtcclxuICAgIHRvb2xzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcbiAgfSBlbHNlIGlmIChhbHRUZXh0ID09PSBib29rSWNvbkltZy5hbHQpIHtcclxuICAgIGJvb2tJY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICB9IGVsc2UgaWYgKGFsdFRleHQgPT09IG1vbmV5QmFnSWNvbkltZy5hbHQpIHtcclxuICAgIG1vbmV5QmFnSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcbiAgfSBlbHNlIGlmIChhbHRUZXh0ID09PSBwaXp6YUljb25JbWcuYWx0KSB7XHJcbiAgICBwaXp6YUljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1pY29uXCIpO1xyXG4gIH0gZWxzZSBpZiAoYWx0VGV4dCA9PT0gcHJlc2VudEJveEljb25JbWcuYWx0KSB7XHJcbiAgICBwcmVzZW50Qm94SWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcbiAgfSBlbHNlIGlmIChhbHRUZXh0ID09PSB2b2xsZXlCYWxsSWNvbkltZy5hbHQpIHtcclxuICAgIHZvbGxleUJhbGxJY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICB9IGVsc2UgaWYgKGFsdFRleHQgPT09IGd5bUljb25JbWcuYWx0KSB7XHJcbiAgICBneW1JY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICB9XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vZGFsQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYnV0dG9uc1wiKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xyXG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgUHJvamVjdFwiO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50IGRpdiBjaGlsZHJlblxyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCdXR0b25zKTtcclxuXHJcbiAgLy8gZm9ybSB0YWcgY2hpbGRyZW5cclxuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc0Rpdik7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChpY29uU2VsZWN0aW9uRGl2KTtcclxuXHJcbiAgLy8gbW9kYWwtYnV0dG9ucyBjaGlsZHJlblxyXG4gIG1vZGFsQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxNb2RhbEJ0bik7XHJcbiAgbW9kYWxCdXR0b25zLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2IGNoaWxkcmVuXHJcbiAgZmllbGRzRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBmaWVsZHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gIGZpZWxkc0Rpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhGaWVsZHMpO1xyXG5cclxuICAvLyBpY29uLXNlbGVjdGlvbiBkaXYgY2hpbGRyZW5cclxuICBpY29uU2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaEljb25TZWxlY3Rpb24pO1xyXG4gIGljb25TZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocHJvamVjdEljb25zRGl2KTtcclxuXHJcbiAgLy8gcHJvamVjdC1pY29uIGRpdiBjaGlsZHJlblxyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZCh0b29sc0ljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChib29rSWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKG1vbmV5QmFnSWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKHBpenphSWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKHByZXNlbnRCb3hJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQodm9sbGV5QmFsbEljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChneW1JY29uKTtcclxuXHJcbiAgLy8gcHJvamVjdC1pY29uIGltZ3NcclxuICB0b29sc0ljb24uYXBwZW5kQ2hpbGQodG9vbHNJY29uSW1nKTtcclxuICBib29rSWNvbi5hcHBlbmRDaGlsZChib29rSWNvbkltZyk7XHJcbiAgbW9uZXlCYWdJY29uLmFwcGVuZENoaWxkKG1vbmV5QmFnSWNvbkltZyk7XHJcbiAgcGl6emFJY29uLmFwcGVuZENoaWxkKHBpenphSWNvbkltZyk7XHJcbiAgcHJlc2VudEJveEljb24uYXBwZW5kQ2hpbGQocHJlc2VudEJveEljb25JbWcpO1xyXG4gIHZvbGxleUJhbGxJY29uLmFwcGVuZENoaWxkKHZvbGxleUJhbGxJY29uSW1nKTtcclxuICBneW1JY29uLmFwcGVuZENoaWxkKGd5bUljb25JbWcpO1xyXG5cclxuICByZXR1cm4gbW9kYWxDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIikudmFsdWU7XHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlLWljb25cIilbMF0uY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgaWYgKHRpdGxlID09PSBcIlwiKSB7XHJcbiAgICBjb25zdCBtb2RhbFRpdGxlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGljb24uYWx0ID09PSBcImEgd3JlbmNoIGFuZCBhIHNjcmV3ZHJpdmVyIGNyb3NzZWRcIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvd3JlbmNoLXNjcmV3ZHJpdmVyLWNyb3NzZWQuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIGJvb2sgaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9ib29rLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaWNvbi5hbHQgPT09IFwiYSBiYWcgb2YgbW9uZXkgaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9tb25leS1iYWcuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIHBpenphIHNsaWNlIGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIHByZXNlbnQgYm94IGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcHJlc2VudC1ib3guc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIHZvbGxleWJhbGwgYmFsbCBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgcGVyc29uIGhvbGRpbmcgdHdvIGR1bWJiZWxscyBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuICB9XHJcblxyXG4gIC8vIHRoaXMgd2lsbCBtYXRjaCB0aGUgcmlnaHQgcHJvamVjdCB0byB0aGVpciB0YXNrcyBhbmQgbWFrZSBzdXJlIGl0J3MgYWxsXHJcbiAgLy8gY2hhbmdlZCBpbiBib3RoIG9iamVjdHMgd2hlbiBlZGl0ZWRcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocHJvamVjdExpc3RbaV0udGl0bGUgPT09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAodGFza0xpc3Rbal0ucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgIHByb2plY3RMaXN0W2ldLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICBwcm9qZWN0TGlzdFtpXS5pY29uID0gaWNvbjtcclxuICAgICAgICAgIHRhc2tMaXN0W2pdLnByb2plY3QgPSB0aXRsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKTtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKHByb2plY3RzKTtcclxuICBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcclxuICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJvZHlcIik7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcblxyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVGaWxsZWRQcm9qZWN0KHByb2plY3RUaXRsZSkpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pY29uXCIpO1xyXG4gIHNlbGVjdGVkUHJvamVjdEljb25zLmZvckVhY2goKHNlbGVjdGVkUHJvamVjdEljb24pID0+XHJcbiAgICBzZWxlY3RlZFByb2plY3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVJY29uU2VsZWN0ZWQpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xyXG5cclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1idG5cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVkaXRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaGVhZGVyLXRleHRcIik7XHJcbiAgbW9kYWxIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3RcIjtcclxuXHJcbiAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWhlYWRlclwiKTtcclxuXHJcbiAgaWYgKG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1tb2RhbC1oZWFkZXJcIikpIHtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWxldGUtbW9kYWwtaGVhZGVyXCIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWRpdFByb2plY3QocHJvamVjdFRpdGxlKTtcclxufVxyXG4iLCJpbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IHsgaGFuZGxlUHJpb3JpdHlTZWxlY3RlZCB9IGZyb20gXCIuL25ld1Rhc2tcIjtcclxuaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVOZXdUYXNrXCI7XHJcbmltcG9ydCBmaWxsUGFnZVdpdGhUYXNrcyBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RcIjtcclxuXHJcbmxldCB0YXNrTmFtZTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGxlZFRhc2soXHJcbiAgdGFza05hbWUsXHJcbiAgdGFza0Rlc2NyaXB0aW9uLFxyXG4gIGR1ZURhdGVJbmZvLFxyXG4gIHByaW9yaXR5SW5mb1xyXG4pIHtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmFjdGlvbiA9IFwiI1wiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgZmlyc3RGaWVsZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZpcnN0RmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcblxyXG4gIC8vIGZpcnN0IGZpZWxkcyBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsLmZvciA9IFwidGFzay10aXRsZVwiO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG4gIGxhYmVsLmh0bWxGb3IgPSBcInRhc2stdGl0bGVcIjtcclxuXHJcbiAgLy8gZmlyc3QgZmllbGRzIGRpdidzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICBpbnB1dC5uYW1lID0gXCJ0YXNrLXRpdGxlXCI7XHJcbiAgaW5wdXQuaWQgPSBcInRhc2stdGl0bGVcIjtcclxuICBpbnB1dC52YWx1ZSA9IHRhc2tOYW1lO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLlwiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IHNlY29uZEZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBsYWJlbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFR3by5mb3IgPSBcInRhc2stZGV0YWlsc1wiO1xyXG4gIGxhYmVsVHdvLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gIGxhYmVsVHdvLmh0bWxGb3IgPSBcInRhc2stZGV0YWlsc1wiO1xyXG5cclxuICAvLyBzZWNvbmQgZmllbGRzIGRpdidzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IGlucHV0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGlucHV0VHdvLm5hbWUgPSBcInRhc2stZGV0YWlsc1wiO1xyXG4gIGlucHV0VHdvLmlkID0gXCJ0YXNrLWRldGFpbHNcIjtcclxuICBpbnB1dFR3by52YWx1ZSA9IHRhc2tEZXNjcmlwdGlvbjtcclxuXHJcbiAgLy8gc2Vjb25kIGZpZWxkcyBkaXYncyB0aGlyZCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaEZpZWxkc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkc1R3by5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGV0YWlscy1lcnJvclwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHNUd28uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzVHdvLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC5cIjtcclxuXHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tZGF0ZVwiKTtcclxuXHJcbiAgY29uc3QgbmV3RGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbmV3RGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcIm5ldy1kYXRlLXRleHRcIik7XHJcbiAgbmV3RGF0ZVRleHQudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlXCI7XHJcbiAgbmV3RGF0ZVRleHQuaHRtbEZvciA9IFwidG9kby1kYXRlXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGRhdGVJbnB1dC5uYW1lID0gXCJ0b2RvLWRhdGVcIjtcclxuICBkYXRlSW5wdXQuaWQgPSBcInRvZG8tZGF0ZVwiO1xyXG4gIGRhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IGR1ZURhdGVJbmZvO1xyXG5cclxuICBjb25zdCBkYXRlRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRhdGUtZXJyb3JcIik7XHJcbiAgZGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIGRhdGVFcnJvci50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGNob29zZSBhIGRhdGUuXCI7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlMaW5lLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1saW5lXCIpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaW9yaXR5VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiKTtcclxuICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuXHJcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGlmIChwcmlvcml0eUluZm8gPT09IGxvd1ByaW9yaXR5LnRleHRDb250ZW50KSB7XHJcbiAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByaW9yaXR5XCIpO1xyXG4gIH0gZWxzZSBpZiAocHJpb3JpdHlJbmZvID09PSBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCkge1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcmlvcml0eVwiKTtcclxuICB9IGVsc2UgaWYgKHByaW9yaXR5SW5mbyA9PT0gaGlnaFByaW9yaXR5LnRleHRDb250ZW50KSB7XHJcbiAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcmlvcml0eVwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1wcmlvcml0eS1lcnJvclwiKTtcclxuICBwcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIHByaW9yaXR5RXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBzZWxlY3QgdGhlIHByaW9yaXR5LlwiO1xyXG5cclxuICBjb25zdCBjcmVhdGVUb2RvQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjcmVhdGVUb2RvQnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5cclxuICBjb25zdCBjcmVhdGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjcmVhdGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1idG5cIik7XHJcbiAgY3JlYXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQgZGl2IGNoaWxkcmVuXHJcblxyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGZpcnN0RmllbGRzRGl2KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHNlY29uZEZpZWxkc0Rpdik7XHJcblxyXG4gIC8vIGZpcnN0IGZpZWxkcyBkaXYgY2hpbGRyZW5cclxuICBmaXJzdEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgZmlyc3RGaWVsZHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gIGZpcnN0RmllbGRzRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaEZpZWxkcyk7XHJcblxyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaW5lKTtcclxuXHJcbiAgLy8gc2Vjb25kIGZpZWxkcyBkaXYgY2hpbGRyZW5cclxuICBzZWNvbmRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQobGFiZWxUd28pO1xyXG4gIHNlY29uZEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChpbnB1dFR3byk7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaEZpZWxkc1R3byk7XHJcblxyXG4gIC8vIG5ldy10b2RvLWRhdGUgZGl2IGNoaWxkcmVuXHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChuZXdEYXRlVGV4dCk7XHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUVycm9yKTtcclxuXHJcbiAgLy8gcHJpb3JpdHkgbGluZSBkaXYgY2hpbGRyZW5cclxuXHJcbiAgcHJpb3JpdHlMaW5lLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuICBwcmlvcml0eUxpbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlFcnJvcik7XHJcbiAgcHJpb3JpdHlMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9CdG5EaXYpO1xyXG5cclxuICAvLyBwcmlvcml0eSBkaXYgY2hpbGRyZW5cclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcclxuXHJcbiAgLy8gY3JlYXRlIG5ldyB0YXNrIGJ1dHRvbiBkaXYgY2hpbGRcclxuICBjcmVhdGVUb2RvQnRuRGl2LmFwcGVuZENoaWxkKGNhbmNlbE1vZGFsQnRuKTtcclxuICBjcmVhdGVUb2RvQnRuRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9CdG4pO1xyXG5cclxuICByZXR1cm4gbW9kYWxDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VGFzaygpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRldGFpbHNcIikudmFsdWU7XHJcbiAgbGV0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIikudmFsdWVBc0RhdGU7XHJcbiAgY29uc3QgdGFza0Z1bGxEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIikudmFsdWVBc0RhdGU7XHJcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtcHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IG1vZGFsVGl0bGVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtdGl0bGUtZXJyb3JcIik7XHJcbiAgY29uc3QgbW9kYWxEZXRhaWxzRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRldGFpbHMtZXJyb3JcIik7XHJcbiAgY29uc3QgbW9kYWxEYXRlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRhdGUtZXJyb3JcIik7XHJcbiAgY29uc3QgbW9kYWxQcmlvcml0eUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wcmlvcml0eS1lcnJvclwiKTtcclxuXHJcbiAgLy8gVGl0bGUsIGRldGFpbHMsIGRhdGUgYW5kIHByaW9yaXR5IG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGl0bGUgZmlsbGVkLiBEZXRhaWxzLCBkYXRlIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGV0YWlscyBmaWxsZWQuIFRpdGxlLCBkYXRlIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgIT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEYXRlIGZpbGxlZC4gVGl0bGUsIGRldGFpbHMgYW5kIHByaW9yaXR5IG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgIT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFByaW9yaXR5IGZpbGxlZC4gVGl0bGUsIGRldGFpbHMgYW5kIGRhdGUgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzID09PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgIT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsUHJpb3JpdHlFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRpdGxlIGFuZCBkZXRhaWxzIGZpbGxlZC4gRGF0ZSBhbmQgcHJpb3JpdHkgbm90IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgPT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGl0bGUgYW5kIGRhdGUgZmlsbGVkLiBEZXRhaWxzIGFuZCBwcmlvcml0eSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgPT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaXRsZSBhbmQgcHJpb3JpdHkgZmlsbGVkLiBEZXRhaWxzIGFuZCBkYXRlIG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgPT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEZXRhaWxzIGFuZCBkYXRlIGZpbGxlZC4gVGl0bGUgYW5kIHByaW9yaXR5IG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyAhPT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgIT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ID09PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gRGV0YWlscyBhbmQgcHJpb3JpdHkgZmlsbGVkLiBUaXRsZSBhbmQgZGF0ZSBub3QgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgPT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgIT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlID09PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSAhPT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBpZiAoIW1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEYXRlIGFuZCBwcmlvcml0eSBmaWxsZWQuIFRpdGxlIGFuZCBkZXRhaWxzIG5vdCBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSA9PT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgIT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRpdGxlIG5vdCBmaWxsZWQuIERldGFpbHMsIGRhdGUgYW5kIHByaW9yaXR5IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlID09PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgIT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEZXRhaWxzIG5vdCBmaWxsZWQuIFRpdGxlLCBkYXRlIGFuZCBwcmlvcml0eSBmaWxsZWRcclxuICBpZiAoXHJcbiAgICB0aXRsZSAhPT0gXCJcIiAmJlxyXG4gICAgZGV0YWlscyA9PT0gXCJcIiAmJlxyXG4gICAgdGFza0R1ZURhdGUgIT09IG51bGwgJiZcclxuICAgIHByaW9yaXR5ICE9PSBudWxsXHJcbiAgKSB7XHJcbiAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGlmICghbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEYXRlRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERhdGUgbm90IGZpbGxlZC4gVGl0bGUsIGRldGFpbHMgYW5kIHByaW9yaXR5IGZpbGxlZFxyXG4gIGlmIChcclxuICAgIHRpdGxlICE9PSBcIlwiICYmXHJcbiAgICBkZXRhaWxzICE9PSBcIlwiICYmXHJcbiAgICB0YXNrRHVlRGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgcHJpb3JpdHkgIT09IG51bGxcclxuICApIHtcclxuICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbFByaW9yaXR5RXJyb3IuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGV0YWlsc0Vycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcclxuICAgICAgbW9kYWxUaXRsZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gUHJpb3JpdHkgbm90IGZpbGxlZC4gVGl0bGUsIGRldGFpbHMgYW5kIGRhdGUgZmlsbGVkXHJcbiAgaWYgKFxyXG4gICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgIGRldGFpbHMgIT09IFwiXCIgJiZcclxuICAgIHRhc2tEdWVEYXRlICE9PSBudWxsICYmXHJcbiAgICBwcmlvcml0eSA9PT0gbnVsbFxyXG4gICkge1xyXG4gICAgbW9kYWxQcmlvcml0eUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgaWYgKCFtb2RhbERhdGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsRGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSBlbHNlIGlmICghbW9kYWxEZXRhaWxzRXJyb3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xyXG4gICAgICBtb2RhbERldGFpbHNFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoIW1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XHJcbiAgICAgIG1vZGFsVGl0bGVFcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICh0YXNrRHVlRGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgdGFza0R1ZURhdGUgPSB0YXNrRHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGlmIChwcmlvcml0eSAhPT0gbnVsbCkge1xyXG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eS50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0YXNrTGlzdFtpXS50aXRsZSA9PT0gdGFza05hbWUpIHtcclxuICAgICAgdGFza0xpc3RbaV0udGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGFza0xpc3RbaV0uZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICAgIHRhc2tMaXN0W2ldLmRhdGUgPSB0YXNrRHVlRGF0ZTtcclxuICAgICAgdGFza0xpc3RbaV0uZnVsbERhdGUgPSB0YXNrRnVsbER1ZURhdGU7XHJcbiAgICAgIHRhc2tMaXN0W2ldLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKTtcclxuICBmaWxsUGFnZVdpdGhUYXNrcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuRmlsbGVkVGFzayh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCBkdWVEYXRlSW5mbywgcHJpb3JpdHlJbmZvKSB7XHJcbiAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1ib2R5XCIpO1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhtb2RhbENvbnRlbnQpO1xyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUZpbGxlZFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZUluZm8sIHByaW9yaXR5SW5mbylcclxuICApO1xyXG5cclxuICBjb25zdCBzZWxlY3RQcmlvcml0aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIHNlbGVjdFByaW9yaXRpZXMuZm9yRWFjaCgoc2VsZWN0UHJpb3JpdHkpID0+XHJcbiAgICBzZWxlY3RQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJpb3JpdHlTZWxlY3RlZClcclxuICApO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLW1vZGFsLWJ0blwiKTtcclxuICBjYW5jZWxNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLWJ0blwiKTtcclxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVkaXRUYXNrKHRhc2tUaXRsZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0YXNrVGl0bGUgPT09IHRhc2tMaXN0W2ldLnRpdGxlKSB7XHJcbiAgICAgIHRhc2tOYW1lID0gdGFza0xpc3RbaV0udGl0bGU7XHJcbiAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tMaXN0W2ldLmRldGFpbHM7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGVJbmZvID0gdGFza0xpc3RbaV0uZnVsbERhdGU7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5SW5mbyA9IHRhc2tMaXN0W2ldLnByaW9yaXR5O1xyXG5cclxuICAgICAgb3BlbkZpbGxlZFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZUluZm8sIHByaW9yaXR5SW5mbyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVuRWRpdFRhc2sodGFza1RpdGxlKSB7XHJcbiAgY29uc3QgbW9kYWxIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXItdGV4dFwiKTtcclxuICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaGVhZGVyXCIpO1xyXG5cclxuICBpZiAobW9kYWxIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLW1vZGFsLWhlYWRlclwiKSkge1xyXG4gICAgbW9kYWxIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlbGV0ZS1tb2RhbC1oZWFkZXJcIik7XHJcbiAgfVxyXG5cclxuICBtb2RhbEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xyXG5cclxuICBjcmVhdGVFZGl0VGFzayh0YXNrVGl0bGUpO1xyXG59XHJcbiIsImltcG9ydCB7IHRhc2tMaXN0LCB1cGRhdGVUYXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZU5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCwgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTmV3UHJvamVjdCxcclxuICBwcm9qZWN0TGlzdCxcclxuICB1cGRhdGVQcm9qZWN0TGlzdCxcclxufSBmcm9tIFwiLi9uZXdQcm9qZWN0c1wiO1xyXG5pbXBvcnQgZmlsbFBhZ2VXaXRoVGFza3MgZnJvbSBcIi4vc2VsZWN0ZWRQcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNoZWNrQ2xhc3NMaXN0IH0gZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5cclxubGV0IHByb2plY3Q7XHJcblxyXG5leHBvcnQgbGV0IHByb2plY3RMaXN0VHdvO1xyXG5leHBvcnQgbGV0IHRhc2tMaXN0VHdvO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudFRpdGxlT25EZWxldGUoKSB7XHJcbiAgY29uc3QgY29udGVudFRpdGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10aXRsZS10ZXh0XCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRUaXRsZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10aXRsZS1pbWdcIik7XHJcblxyXG4gIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID0gXCJBbGxcIjtcclxuICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9jYWxlbmRhci1tb250aC1vdXRsaW5lLnN2Z1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQW5kVXBkYXRlUHJvamVjdExpc3QoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xyXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XHJcblxyXG4gIHByb2plY3RMaXN0VHdvID0gcHJvamVjdExpc3Q7XHJcbiAgdGFza0xpc3RUd28gPSB0YXNrTGlzdDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHByb2plY3RMaXN0W2ldLnRpdGxlID09PSBwcm9qZWN0KSB7XHJcbiAgICAgIHByb2plY3RMaXN0VHdvID0gcHJvamVjdExpc3RUd28uZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRpdGxlICE9PSBwcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0YXNrTGlzdFtpXS5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XHJcbiAgICAgIHRhc2tMaXN0VHdvID0gdGFza0xpc3RUd28uZmlsdGVyKChpdGVtKSA9PiBpdGVtLnByb2plY3QgIT09IHByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhwcm9qZWN0cyk7XHJcbiAgdXBkYXRlUHJvamVjdExpc3QocHJvamVjdExpc3RUd28pO1xyXG4gIHVwZGF0ZVRhc2tMaXN0KHRhc2tMaXN0VHdvKTtcclxuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0VHdvKTtcclxuICBjaGVja0NsYXNzTGlzdCgpO1xyXG4gIHNpZGViYXIuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gIGNyZWF0ZUNvbnRlbnRUaXRsZU9uRGVsZXRlKCk7XHJcbiAgZmlsbFBhZ2VXaXRoVGFza3MoKTtcclxuICBjbG9zZU1vZGFsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGxlZEVyYXNlUHJvamVjdE1vZGFsKHByb2plY3RUaXRsZSkge1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCdzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiZXJhc2UtcHJvamVjdC10ZXh0XCIpO1xyXG5cclxuICAvLyBlcmFzZSBwcm9qZWN0IHRleHQnIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgcGFyYWdyYXBoT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGFyYWdyYXBoT25lLnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmU/XCI7XHJcblxyXG4gIGNvbnN0IHBhcmFncmFwaFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaFR3by5pbm5lckhUTUwgPSBgUHJvamVjdCA8c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZS1kZWxldGlvblwiPlwiJHtwcm9qZWN0VGl0bGV9XCI8L3NwYW4+IHdpbGwgYmUgZ29uZSBmb3JldmVyYDtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCdzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbW9kYWxCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1kZWxldGUtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xyXG4gIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQgZGl2IGNoaWxkcmVuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJ1dHRvbnMpO1xyXG5cclxuICAvLyBlcmFzZSBwcm9qZWN0IHRleHQgY2hpbGRcclxuICB0ZXh0RGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaE9uZSk7XHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhUd28pO1xyXG5cclxuICAvLyBtb2RhbC1idXR0b25zIGNoaWxkcmVuXHJcbiAgbW9kYWxCdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbE1vZGFsQnRuKTtcclxuICBtb2RhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XHJcblxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVyYXNlUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcclxuICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJvZHlcIik7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcblxyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVGaWxsZWRFcmFzZVByb2plY3RNb2RhbChwcm9qZWN0VGl0bGUpKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1kZWxldGUtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXByb2plY3QtYnRuXCIpO1xyXG4gIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUFuZFVwZGF0ZVByb2plY3RMaXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FcmFzZVByb2plY3QocHJvamVjdFRpdGxlKSB7XHJcbiAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWhlYWRlclwiKTtcclxuICBjb25zdCBtb2RhbEhlYWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWhlYWRlci10ZXh0XCIpO1xyXG4gIG1vZGFsSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFByb2plY3RcIjtcclxuXHJcbiAgaWYgKCFtb2RhbEhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtbW9kYWwtaGVhZGVyXCIpKSB7XHJcbiAgICBtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLW1vZGFsLWhlYWRlclwiKTtcclxuICB9XHJcblxyXG4gIHByb2plY3QgPSBwcm9qZWN0VGl0bGU7XHJcbiAgY3JlYXRlRXJhc2VQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFza0xpc3QsIHVwZGF0ZVRhc2tMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTmV3VGFza1wiO1xyXG5pbXBvcnQgeyBjbG9zZU1vZGFsLCByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IGZpbGxQYWdlV2l0aFRhc2tzIGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGxldCB0YXNrTGlzdFRocmVlO1xyXG5sZXQgdGFzaztcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFuZFVwZGF0ZVRhc2tMaXN0KCkge1xyXG4gIHRhc2tMaXN0VGhyZWUgPSB0YXNrTGlzdDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHRhc2tMaXN0W2ldLnRpdGxlID09PSB0YXNrKSB7XHJcbiAgICAgIHRhc2tMaXN0VGhyZWUgPSB0YXNrTGlzdFRocmVlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50aXRsZSAhPT0gdGFzayk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRhc2tMaXN0KHRhc2tMaXN0VGhyZWUpO1xyXG4gIGZpbGxQYWdlV2l0aFRhc2tzKCk7XHJcbiAgY2xvc2VNb2RhbCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGaWxsZWRFcmFzZVRhc2tNb2RhbCh0YXNrVGl0bGUpIHtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRleHREaXYuY2xhc3NMaXN0LmFkZChcImVyYXNlLXRhc2stdGV4dFwiKTtcclxuXHJcbiAgLy8gZXJhc2UgdGFzayB0ZXh0JyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaE9uZS50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBzdXJlP1wiO1xyXG5cclxuICBjb25zdCBwYXJhZ3JhcGhUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhUd28uaW5uZXJIVE1MID0gYFRhc2sgPHNwYW4gY2xhc3M9XCJ0YXNrLW5hbWUtZGVsZXRpb25cIj5cIiR7dGFza1RpdGxlfVwiPC9zcGFuPiB3aWxsIGJlIGdvbmUgZm9yZXZlcmA7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vZGFsQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYnV0dG9uc1wiKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtZGVsZXRlLW1vZGFsLWJ0blwiKTtcclxuICBjYW5jZWxNb2RhbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrLWJ0blwiKTtcclxuICBkZWxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGUgVGFza1wiO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50IGRpdiBjaGlsZHJlblxyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCdXR0b25zKTtcclxuXHJcbiAgLy8gZXJhc2UgdGFzayB0ZXh0IGNoaWxkXHJcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhPbmUpO1xyXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoVHdvKTtcclxuXHJcbiAgLy8gbW9kYWwtYnV0dG9ucyBjaGlsZHJlblxyXG4gIG1vZGFsQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxNb2RhbEJ0bik7XHJcbiAgbW9kYWxCdXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xyXG5cclxuICByZXR1cm4gbW9kYWxDb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXJhc2VUYXNrKHRhc2tUaXRsZSkge1xyXG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMobW9kYWxDb250ZW50KTtcclxuXHJcbiAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZpbGxlZEVyYXNlVGFza01vZGFsKHRhc2tUaXRsZSkpO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWRlbGV0ZS1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xyXG5cclxuICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtdGFzay1idG5cIik7XHJcbiAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlQW5kVXBkYXRlVGFza0xpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVyYXNlVGFzayh0YXNrVGl0bGUpIHtcclxuICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaGVhZGVyXCIpO1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtaGVhZGVyLXRleHRcIik7XHJcbiAgbW9kYWxIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJEZWxldGUgVGFza1wiO1xyXG5cclxuICBpZiAoIW1vZGFsSGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1tb2RhbC1oZWFkZXJcIikpIHtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtbW9kYWwtaGVhZGVyXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFzayA9IHRhc2tUaXRsZTtcclxuICBjcmVhdGVFcmFzZVRhc2sodGFza1RpdGxlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleVByZXNzZWQoZSkge1xyXG4gIGNvbnN0IHByZXNzZWRLZXkgPSBlLmtleTtcclxuXHJcbiAgaWYgKHByZXNzZWRLZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgIGNsb3NlTW9kYWwoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgb3Blbk5ld1Rhc2sgfSBmcm9tIFwiLi9uZXdUYXNrXCI7XHJcbmltcG9ydCBmaWxsUHJvamVjdE1vZGFsIGZyb20gXCIuL29wZW5Qcm9qZWN0TW9kYWxcIjtcclxuaW1wb3J0IG9wZW5UYXNrRGV0YWlscyBmcm9tIFwiLi9kZXRhaWxzXCI7XHJcbmltcG9ydCBrZXlQcmVzc2VkIGZyb20gXCIuL2tleWJvYXJka2V5c1wiO1xyXG5pbXBvcnQgb3BlbkVkaXRUYXNrIGZyb20gXCIuL2VkaXRUYXNrXCI7XHJcbmltcG9ydCB7IG9wZW5FZGl0UHJvamVjdCB9IGZyb20gXCIuL2VkaXRQcm9qZWN0XCI7XHJcbmltcG9ydCB7IG9wZW5FcmFzZVByb2plY3QgfSBmcm9tIFwiLi9lcmFzZVByb2plY3RcIjtcclxuaW1wb3J0IHsgb3BlbkVyYXNlVGFzayB9IGZyb20gXCIuL2VyYXNlVGFza1wiO1xyXG5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xyXG5jb25zdCBzaWRlYmFyTW9kYWxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtc2lkZWJhci1pdGVtXCIpO1xyXG5jb25zdCBvcGVuUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3UHJvamVjdEJ0blwiKTtcclxuY29uc3Qgb3BlblRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tCdG5cIik7XHJcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsQ2xvc2VCdG5cIik7XHJcbmNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stYnV0dG9uXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XHJcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qcm9qZWN0TW9kYWwoKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZmlsbFByb2plY3RNb2RhbCgpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5UYXNrTW9kYWwoKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgb3Blbk5ld1Rhc2soKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5UHJlc3NlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuRGV0YWlsc01vZGFsKGUpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBjb25zdCB0YXNrRGV0YWlsVGl0bGUgPVxyXG4gICAgZS5jb21wb3NlZFBhdGgoKVsyXS5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHJcbiAgb3BlblRhc2tEZXRhaWxzKHRhc2tEZXRhaWxUaXRsZSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleVByZXNzZWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVkaXRUYXNrTW9kYWwoZSkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGUuY29tcG9zZWRQYXRoKClbM10uY2hpbGRyZW5bMF0ubGFzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XHJcblxyXG4gIG9wZW5FZGl0VGFzayh0YXNrVGl0bGUpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FZGl0UHJvamVjdE1vZGFsKGUpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBjb25zdCBwcm9qZWN0VGl0bGUgPVxyXG4gICAgZS5jb21wb3NlZFBhdGgoKVsyXS5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHJcbiAgb3BlbkVkaXRQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleVByZXNzZWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVyYXNlUHJvamVjdE1vZGFsKGUpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBjb25zdCBwcm9qZWN0VGl0bGUgPVxyXG4gICAgZS5jb21wb3NlZFBhdGgoKVsyXS5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHJcbiAgb3BlbkVyYXNlUHJvamVjdChwcm9qZWN0VGl0bGUpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FcmFzZVRhc2tNb2RhbChlKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgY29uc3QgdGFza1RpdGxlID0gZS5jb21wb3NlZFBhdGgoKVszXS5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcclxuXHJcbiAgb3BlbkVyYXNlVGFzayh0YXNrVGl0bGUpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ2xhc3NMaXN0KCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZWJhck1vZGFsSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzaWRlYmFyTW9kYWxJdGVtc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgICBzaWRlYmFyTW9kYWxJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kYWxDbGFzc0xpc3QoZSkge1xyXG4gIGNvbnN0IHNpZGViYXJNb2RhbENsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKCFzaWRlYmFyTW9kYWxDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICBjaGVja0NsYXNzTGlzdCgpO1xyXG4gICAgc2lkZWJhck1vZGFsQ2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgfVxyXG59XHJcblxyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxub3BlblByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9qZWN0TW9kYWwpO1xyXG5vcGVuVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblRhc2tNb2RhbCk7XHJcbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xyXG4iLCJpbXBvcnQgeyBoYW5kbGVTZWN0aW9uU2VsZWN0ZWQsIGNoZWNrQ2xhc3NMaXN0IH0gZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQge1xyXG4gIGNsb3NlTW9kYWwsXHJcbiAgb3BlbkVkaXRQcm9qZWN0TW9kYWwsXHJcbiAgb3BlbkVyYXNlUHJvamVjdE1vZGFsLFxyXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMsXHJcbn0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IGZpbGxQcm9qZWN0V2l0aFRhc2tzIGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGxldCBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBpY29uKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KHVwZGF0ZWRQcm9qZWN0TGlzdCkge1xyXG4gIHByb2plY3RMaXN0ID0gdXBkYXRlZFByb2plY3RMaXN0Lm1hcCgoeCkgPT4geCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdEFycmF5KSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGFsdFRleHQ7XHJcbiAgICBpZiAoXHJcbiAgICAgIHByb2plY3RBcnJheVtpXS5pY29uID09PVxyXG4gICAgICBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3dyZW5jaC1zY3Jld2RyaXZlci1jcm9zc2VkLnN2Z1wiXHJcbiAgICApIHtcclxuICAgICAgYWx0VGV4dCA9IFwiYSB3cmVuY2ggYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiO1xyXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0QXJyYXlbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9ib29rLnN2Z1wiKSB7XHJcbiAgICAgIGFsdFRleHQgPSBcImEgYm9vayBpY29uXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBwcm9qZWN0QXJyYXlbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9tb25leS1iYWcuc3ZnXCJcclxuICAgICkge1xyXG4gICAgICBhbHRUZXh0ID0gXCJhIGJhZyBvZiBtb25leSBpY29uXCI7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBwcm9qZWN0QXJyYXlbaV0uaWNvbiA9PT0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9waXp6YS1zbGljZS5zdmdcIlxyXG4gICAgKSB7XHJcbiAgICAgIGFsdFRleHQgPSBcImEgcGl6emEgc2xpY2UgaWNvblwiO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgcHJvamVjdEFycmF5W2ldLmljb24gPT09IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcHJlc2VudC1ib3guc3ZnXCJcclxuICAgICkge1xyXG4gICAgICBhbHRUZXh0ID0gXCJhIHByZXNlbnQgYm94IGljb25cIjtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHByb2plY3RBcnJheVtpXS5pY29uID09PSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIlxyXG4gICAgKSB7XHJcbiAgICAgIGFsdFRleHQgPSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIjtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHByb2plY3RBcnJheVtpXS5pY29uID09PSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIlxyXG4gICAgKSB7XHJcbiAgICAgIGFsdFRleHQgPSBcImEgcGVyc29uIGhvbGRpbmcgdHdvIGR1bWJiZWxscyBpY29uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLW5hdlwiKTtcclxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLW5hdlwiKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGV4dC1pY29uXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz1cInNpZGViYXItaWNvbnNcIlxyXG4gICAgICAgIHNyYz1cIiR7cHJvamVjdExpc3RbaV0uaWNvbn1cIlxyXG4gICAgICAgIGFsdD1cIiR7YWx0VGV4dH1cIlxyXG4gICAgICAvPlxyXG4gICAgICA8cCBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdExpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZWRpdC1lcmFzZVwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3M9XCJlZGl0LXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBzcmM9XCIuL2ltYWdlcy9ub3RlLWVkaXQtb3V0bGluZS5wbmdcIlxyXG4gICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz1cImVyYXNlLXByb2plY3QtYnV0dG9uXCJcclxuICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gICAgbmV3UHJvamVjdERpdi5pbm5lckhUTUwgPSBuZXdQcm9qZWN0O1xyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XHJcbiAgfVxyXG4gIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTZWN0aW9uU2VsZWN0ZWQpO1xyXG4gIGNvbnN0IGVkaXRQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICBlZGl0UHJvamVjdEJ0bnMuZm9yRWFjaCgoZWRpdFByb2plY3RCdG4pID0+XHJcbiAgICBlZGl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRQcm9qZWN0TW9kYWwpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZXJhc2VQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXJhc2UtcHJvamVjdC1idXR0b25cIik7XHJcbiAgZXJhc2VQcm9qZWN0QnRucy5mb3JFYWNoKChlcmFzZVByb2plY3RCdG4pID0+XHJcbiAgICBlcmFzZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FcmFzZVByb2plY3RNb2RhbClcclxuICApO1xyXG59XHJcblxyXG5sZXQgc2VsZWN0ZWRQcm9qZWN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaWNvblwiKTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWNvbkNsYXNzTGlzdCgpIHtcclxuICBzZWxlY3RlZFByb2plY3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkUHJvamVjdEljb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0SWNvbnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWljb25cIikpIHtcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0SWNvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1pY29uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUljb25TZWxlY3RlZChlKSB7XHJcbiAgY29uc3QgaWNvbkNsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKFxyXG4gICAgIWljb25DbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1pY29uXCIpICYmXHJcbiAgICBpY29uQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWljb25cIilcclxuICApIHtcclxuICAgIGNoZWNrSWNvbkNsYXNzTGlzdCgpO1xyXG4gICAgaWNvbkNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1pY29uXCIpO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBpY29uQ2xpY2tlZC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0LWljb24gYWN0aXZlLWljb25cIiB8fFxyXG4gICAgaWNvbkNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwicHJvamVjdC1pY29uXCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBpY29uQ2xpY2tlZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaWYgKCFjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1pY29uXCIpKSB7XHJcbiAgICAgIGNoZWNrSWNvbkNsYXNzTGlzdCgpO1xyXG4gICAgICBjbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaWNvblwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUaXRsZU9uQWRkKGljb24pIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcbiAgY29uc3QgY29udGVudFRpdGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10aXRsZS10ZXh0XCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRUaXRsZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10aXRsZS1pbWdcIik7XHJcblxyXG4gIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID0gcHJvamVjdHMubGFzdENoaWxkLmlubmVyVGV4dDtcclxuICBjb250ZW50VGl0bGVJbWcuc3JjID0gaWNvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmUtaWNvblwiKVswXS5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICBpZiAodGl0bGUgPT09IFwiXCIpIHtcclxuICAgIGNvbnN0IG1vZGFsVGl0bGVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtdGl0bGUtZXJyb3JcIik7XHJcbiAgICBtb2RhbFRpdGxlRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaWNvbi5hbHQgPT09IFwiYSB3cmVuY2ggYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgYm9vayBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpY29uLmFsdCA9PT0gXCJhIGJhZyBvZiBtb25leSBpY29uXCIpIHtcclxuICAgIGljb24gPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL21vbmV5LWJhZy5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgcGl6emEgc2xpY2UgaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9waXp6YS1zbGljZS5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgcHJlc2VudCBib3ggaWNvblwiKSB7XHJcbiAgICBpY29uID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9wcmVzZW50LWJveC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGljb24uYWx0ID09PSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvdm9sbGV5YmFsbC1iYWxsLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaWNvbi5hbHQgPT09IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIikge1xyXG4gICAgaWNvbiA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvZHVtYmJlbGxzLWV4ZXJjaXNlLnN2Z1wiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdEFkZGVkID0gbmV3IFByb2plY3QodGl0bGUsIGljb24pO1xyXG5cclxuICBhZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0QWRkZWQpO1xyXG4gIGNsb3NlTW9kYWwoKTtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKHByb2plY3RzKTtcclxuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0KTtcclxuXHJcbiAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICBwcm9qZWN0cy5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gIGNyZWF0ZVByb2plY3RUaXRsZU9uQWRkKGljb24pO1xyXG4gIGZpbGxQcm9qZWN0V2l0aFRhc2tzKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkTmV3VGFzayB9IGZyb20gXCIuL2NyZWF0ZU5ld1Rhc2tcIjtcclxuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCdzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uYWN0aW9uID0gXCIjXCI7XHJcblxyXG4gIC8vIGZvcm0gdGFnJ3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmaXJzdEZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmlyc3RGaWVsZHNEaXYuY2xhc3NMaXN0LmFkZChcImZpZWxkc1wiKTtcclxuXHJcbiAgLy8gZmlyc3QgZmllbGRzIGRpdidzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWwuZm9yID0gXCJ0YXNrLXRpdGxlXCI7XHJcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XHJcbiAgbGFiZWwuaHRtbEZvciA9IFwidGFzay10aXRsZVwiO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInRhc2stdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLlwiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IHNlY29uZEZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBsYWJlbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFR3by5mb3IgPSBcInRhc2stZGV0YWlsc1wiO1xyXG4gIGxhYmVsVHdvLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gIGxhYmVsVHdvLmh0bWxGb3IgPSBcInRhc2stZGV0YWlsc1wiO1xyXG5cclxuICAvLyBzZWNvbmQgZmllbGRzIGRpdidzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IGlucHV0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGlucHV0VHdvLm5hbWUgPSBcInRhc2stZGV0YWlsc1wiO1xyXG4gIGlucHV0VHdvLmlkID0gXCJ0YXNrLWRldGFpbHNcIjtcclxuXHJcbiAgLy8gc2Vjb25kIGZpZWxkcyBkaXYncyB0aGlyZCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaEZpZWxkc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkc1R3by5jbGFzc0xpc3QuYWRkKFwibW9kYWwtZGV0YWlscy1lcnJvclwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHNUd28uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzVHdvLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC5cIjtcclxuXHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tZGF0ZVwiKTtcclxuXHJcbiAgY29uc3QgbmV3RGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbmV3RGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcIm5ldy1kYXRlLXRleHRcIik7XHJcbiAgbmV3RGF0ZVRleHQudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlXCI7XHJcbiAgbmV3RGF0ZVRleHQuaHRtbEZvciA9IFwidG9kby1kYXRlXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGRhdGVJbnB1dC5uYW1lID0gXCJ0b2RvLWRhdGVcIjtcclxuICBkYXRlSW5wdXQuaWQgPSBcInRvZG8tZGF0ZVwiO1xyXG5cclxuICBjb25zdCBkYXRlRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkYXRlRXJyb3IuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWRhdGUtZXJyb3JcIik7XHJcbiAgZGF0ZUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIGRhdGVFcnJvci50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGNob29zZSBhIGRhdGUuXCI7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlMaW5lLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1saW5lXCIpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaW9yaXR5VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktdGV4dFwiKTtcclxuICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuXHJcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1wcmlvcml0eS1lcnJvclwiKTtcclxuICBwcmlvcml0eUVycm9yLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIHByaW9yaXR5RXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBzZWxlY3QgdGhlIHByaW9yaXR5LlwiO1xyXG5cclxuICBjb25zdCBjcmVhdGVUb2RvQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjcmVhdGVUb2RvQnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5cclxuICBjb25zdCBjcmVhdGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjcmVhdGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1idG5cIik7XHJcbiAgY3JlYXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCBkaXYgY2hpbGRyZW5cclxuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3RGaWVsZHNEaXYpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc2Vjb25kRmllbGRzRGl2KTtcclxuXHJcbiAgLy8gZmlyc3QgZmllbGRzIGRpdiBjaGlsZHJlblxyXG4gIGZpcnN0RmllbGRzRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBmaXJzdEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgZmlyc3RGaWVsZHNEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRmllbGRzKTtcclxuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUxpbmUpO1xyXG5cclxuICAvLyBzZWNvbmQgZmllbGRzIGRpdiBjaGlsZHJlblxyXG4gIHNlY29uZEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChsYWJlbFR3byk7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0VHdvKTtcclxuICBzZWNvbmRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRmllbGRzVHdvKTtcclxuXHJcbiAgLy8gbmV3LXRvZG8tZGF0ZSBkaXYgY2hpbGRyZW5cclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKG5ld0RhdGVUZXh0KTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlRXJyb3IpO1xyXG5cclxuICAvLyBwcmlvcml0eSBsaW5lIGRpdiBjaGlsZHJlblxyXG5cclxuICBwcmlvcml0eUxpbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG4gIHByaW9yaXR5TGluZS5hcHBlbmRDaGlsZChwcmlvcml0eUVycm9yKTtcclxuICBwcmlvcml0eUxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bkRpdik7XHJcblxyXG4gIC8vIHByaW9yaXR5IGRpdiBjaGlsZHJlblxyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xyXG5cclxuICAvLyBjcmVhdGUgbmV3IHRhc2sgYnV0dG9uIGRpdiBjaGlsZFxyXG4gIGNyZWF0ZVRvZG9CdG5EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsTW9kYWxCdG4pO1xyXG4gIGNyZWF0ZVRvZG9CdG5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bik7XHJcblxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJpb3JpdHlDbGFzc0xpc3QoKSB7XHJcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ1dHRvbnNcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0UHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzZWxlY3RQcmlvcml0eVtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtcHJpb3JpdHlcIikpIHtcclxuICAgICAgc2VsZWN0UHJpb3JpdHlbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcmlvcml0eVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcmlvcml0eVNlbGVjdGVkKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcHJpb3JpdHlDbGlja2VkID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmICghcHJpb3JpdHlDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1wcmlvcml0eVwiKSkge1xyXG4gICAgY2hlY2tQcmlvcml0eUNsYXNzTGlzdCgpO1xyXG4gICAgcHJpb3JpdHlDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJpb3JpdHlcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3Blbk5ld1Rhc2soKSB7XHJcbiAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1ib2R5XCIpO1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcclxuICBjb25zdCBtb2RhbEhlYWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWhlYWRlci10ZXh0XCIpO1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXJcIik7XHJcblxyXG4gIGlmIChtb2RhbEhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtbW9kYWwtaGVhZGVyXCIpKSB7XHJcbiAgICBtb2RhbEhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZGVsZXRlLW1vZGFsLWhlYWRlclwiKTtcclxuICB9XHJcblxyXG4gIG1vZGFsSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgbmV3IHRhc2tcIjtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcbiAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Rhc2soKSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdFByaW9yaXRpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgc2VsZWN0UHJpb3JpdGllcy5mb3JFYWNoKChzZWxlY3RQcmlvcml0eSkgPT5cclxuICAgIHNlbGVjdFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcmlvcml0eVNlbGVjdGVkKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxuXHJcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnRuXCIpO1xyXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Rhc2spO1xyXG59XHJcbiIsImltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMsIGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5pbXBvcnQgeyBhZGROZXdQcm9qZWN0LCBoYW5kbGVJY29uU2VsZWN0ZWQgfSBmcm9tIFwiLi9uZXdQcm9qZWN0c1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdE1vZGFsKCkge1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCdzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uYWN0aW9uID0gXCIjXCI7XHJcblxyXG4gIC8vIGZvcm0gdGFnJ3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmaWVsZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZpZWxkc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZmllbGRzXCIpO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbC5mb3IgPSBcInByb2plY3QtdGl0bGVcIjtcclxuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcclxuXHJcbiAgLy8gZmllbGRzIGRpdidzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICBpbnB1dC5uYW1lID0gXCJwcm9qZWN0LXRpdGxlXCI7XHJcbiAgaW5wdXQuaWQgPSBcInByb2plY3QtdGl0bGVcIjtcclxuXHJcbiAgLy8gZmllbGRzIGRpdidzIHRoaXJkIGNoaWxkXHJcbiAgY29uc3QgcGFyYWdyYXBoRmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZS1lcnJvclwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC5cIjtcclxuXHJcbiAgLy8gZm9ybSB0YWcncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBpY29uU2VsZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpY29uU2VsZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJpY29uLXNlbGVjdGlvblwiKTtcclxuXHJcbiAgLy8gaWNvbi1zZWxlY3Rpb24gZGl2J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhJY29uU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGFyYWdyYXBoSWNvblNlbGVjdGlvbi50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGFuIEljb25cIjtcclxuXHJcbiAgLy8gaWNvbi1zZWxlY3Rpb24gZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgcHJvamVjdEljb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvbnNcIik7XHJcblxyXG4gIC8vIHByb2plY3QtaWNvbnMgZGl2IGNoaWxkcmVuXHJcbiAgY29uc3QgdG9vbHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b29sc0ljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuICB0b29sc0ljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1pY29uXCIpO1xyXG5cclxuICBjb25zdCBib29rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9va0ljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3QgbW9uZXlCYWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtb25leUJhZ0ljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3QgcGl6emFJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwaXp6YUljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3QgcHJlc2VudEJveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByZXNlbnRCb3hJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IHZvbGxleUJhbGxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB2b2xsZXlCYWxsSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBneW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBneW1JY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IHRvb2xzSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgdG9vbHNJY29uSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvd3JlbmNoLXNjcmV3ZHJpdmVyLWNyb3NzZWQuc3ZnXCI7XHJcbiAgdG9vbHNJY29uSW1nLmFsdCA9IFwiYSB3cmVuY2ggYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiO1xyXG5cclxuICBjb25zdCBib29rSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYm9va0ljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9ib29rLnN2Z1wiO1xyXG4gIGJvb2tJY29uSW1nLmFsdCA9IFwiYSBib29rIGljb25cIjtcclxuXHJcbiAgY29uc3QgbW9uZXlCYWdJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBtb25leUJhZ0ljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9tb25leS1iYWcuc3ZnXCI7XHJcbiAgbW9uZXlCYWdJY29uSW1nLmFsdCA9IFwiYSBiYWcgb2YgbW9uZXkgaWNvblwiO1xyXG5cclxuICBjb25zdCBwaXp6YUljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIHBpenphSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3BpenphLXNsaWNlLnN2Z1wiO1xyXG4gIHBpenphSWNvbkltZy5hbHQgPSBcImEgcGl6emEgc2xpY2UgaWNvblwiO1xyXG5cclxuICBjb25zdCBwcmVzZW50Qm94SWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcHJlc2VudEJveEljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9wcmVzZW50LWJveC5zdmdcIjtcclxuICBwcmVzZW50Qm94SWNvbkltZy5hbHQgPSBcImEgcHJlc2VudCBib3ggaWNvblwiO1xyXG5cclxuICBjb25zdCB2b2xsZXlCYWxsSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgdm9sbGV5QmFsbEljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy92b2xsZXliYWxsLWJhbGwuc3ZnXCI7XHJcbiAgdm9sbGV5QmFsbEljb25JbWcuYWx0ID0gXCJhIHZvbGxleWJhbGwgYmFsbCBpY29uXCI7XHJcblxyXG4gIGNvbnN0IGd5bUljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGd5bUljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9kdW1iYmVsbHMtZXhlcmNpc2Uuc3ZnXCI7XHJcbiAgZ3ltSWNvbkltZy5hbHQgPSBcImEgcGVyc29uIGhvbGRpbmcgdHdvIGR1bWJiZWxscyBpY29uXCI7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vZGFsQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYnV0dG9uc1wiKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xyXG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQgZGl2IGNoaWxkcmVuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJ1dHRvbnMpO1xyXG5cclxuICAvLyBmb3JtIHRhZyBjaGlsZHJlblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzRGl2KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGljb25TZWxlY3Rpb25EaXYpO1xyXG5cclxuICAvLyBtb2RhbC1idXR0b25zIGNoaWxkcmVuXHJcbiAgbW9kYWxCdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbE1vZGFsQnRuKTtcclxuICBtb2RhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XHJcblxyXG4gIC8vIGZpZWxkcyBkaXYgY2hpbGRyZW5cclxuICBmaWVsZHNEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGZpZWxkc0Rpdi5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgZmllbGRzRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaEZpZWxkcyk7XHJcblxyXG4gIC8vIGljb24tc2VsZWN0aW9uIGRpdiBjaGlsZHJlblxyXG4gIGljb25TZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoSWNvblNlbGVjdGlvbik7XHJcbiAgaWNvblNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbnNEaXYpO1xyXG5cclxuICAvLyBwcm9qZWN0LWljb24gZGl2IGNoaWxkcmVuXHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKHRvb2xzSWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKGJvb2tJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQobW9uZXlCYWdJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQocGl6emFJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQocHJlc2VudEJveEljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZCh2b2xsZXlCYWxsSWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKGd5bUljb24pO1xyXG5cclxuICAvLyBwcm9qZWN0LWljb24gaW1nc1xyXG4gIHRvb2xzSWNvbi5hcHBlbmRDaGlsZCh0b29sc0ljb25JbWcpO1xyXG4gIGJvb2tJY29uLmFwcGVuZENoaWxkKGJvb2tJY29uSW1nKTtcclxuICBtb25leUJhZ0ljb24uYXBwZW5kQ2hpbGQobW9uZXlCYWdJY29uSW1nKTtcclxuICBwaXp6YUljb24uYXBwZW5kQ2hpbGQocGl6emFJY29uSW1nKTtcclxuICBwcmVzZW50Qm94SWNvbi5hcHBlbmRDaGlsZChwcmVzZW50Qm94SWNvbkltZyk7XHJcbiAgdm9sbGV5QmFsbEljb24uYXBwZW5kQ2hpbGQodm9sbGV5QmFsbEljb25JbWcpO1xyXG4gIGd5bUljb24uYXBwZW5kQ2hpbGQoZ3ltSWNvbkltZyk7XHJcblxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbGxQcm9qZWN0TW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1ib2R5XCIpO1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcclxuICBjb25zdCBtb2RhbEhlYWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWhlYWRlci10ZXh0XCIpO1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXJcIik7XHJcblxyXG4gIGlmIChtb2RhbEhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtbW9kYWwtaGVhZGVyXCIpKSB7XHJcbiAgICBtb2RhbEhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZGVsZXRlLW1vZGFsLWhlYWRlclwiKTtcclxuICB9XHJcblxyXG4gIG1vZGFsSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgbmV3IHByb2plY3RcIjtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcbiAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RNb2RhbCgpKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaWNvblwiKTtcclxuICBzZWxlY3RlZFByb2plY3RJY29ucy5mb3JFYWNoKChzZWxlY3RlZFByb2plY3RJY29uKSA9PlxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlSWNvblNlbGVjdGVkKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtbW9kYWwtYnRuXCIpO1xyXG4gIGNhbmNlbE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnRuXCIpO1xyXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Byb2plY3QpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjb250ZW50VGl0bGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXRpdGxlLXRleHRcIik7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFRpdGxlKGUpIHtcclxuICBjb25zdCBjb250ZW50VGl0bGVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdGl0bGUtaW1nXCIpO1xyXG4gIGxldCBpbWdFbGVtZW50O1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGUuY29tcG9zZWRQYXRoKCk7XHJcblxyXG4gIC8vIGlmIHVzZXIgY2xpY2tzIG9uIHRoZSBjYWxlbmRhciBpbWcgZWxlbWVudCBhdCB0aGUgc2lkZWJhclxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS5pbm5lclRleHQgPT09IFwiXCIgJiZcclxuICAgIHNlbGVjdGVkUHJvamVjdFsxXS5pbm5lclRleHQgPT09IFwiXCJcclxuICApIHtcclxuICAgIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRQcm9qZWN0WzJdLmlubmVyVGV4dDtcclxuICB9XHJcbiAgLy8gaWYgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwIGVsZW1lbnQgb3IgdGhlIGRpdiBlbGVtZW50IGF0IHRoZSBzaWRlYmFyXHJcbiAgaWYgKHNlbGVjdGVkUHJvamVjdFswXS5pbm5lclRleHQgIT09IFwiXCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRQcm9qZWN0WzBdLmlubmVyVGV4dDtcclxuICB9XHJcblxyXG4gIC8vIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcCBlbGVtZW50IGF0IHRoZSBzaWRlYmFyIGFuZCBpdCdzIG5vdCBhIHByb2plY3RcclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMF0udGFnTmFtZSA9PT0gXCJQXCIgJiZcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS5jbGFzc05hbWUgIT09IFwicHJvamVjdC1uYW1lXCJcclxuICApIHtcclxuICAgIGltZ0VsZW1lbnQgPSBzZWxlY3RlZFByb2plY3RbMV0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGUgdXNlciBjbGlja3MgdGhlIGltZyBlbGVtZW50IGF0IHRoZSBzaWRlYmFyIGFuZCBpdCdzIG5vdCBhIHByb2plY3RcclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMF0udGFnTmFtZSA9PT0gXCJJTUdcIiAmJlxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzFdLmNsYXNzTmFtZSA9PT0gXCJzaWRlYmFyLWxpbmtcIlxyXG4gICkge1xyXG4gICAgaW1nRWxlbWVudCA9IHNlbGVjdGVkUHJvamVjdFswXTtcclxuICB9XHJcblxyXG4gIC8vIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgZGl2IGVsZW1lbnQgYXQgdGhlIHNpZGViYXIgYW5kIGl0J3Mgbm90IGEgcHJvamVjdFxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS50YWdOYW1lID09PSBcIkRJVlwiICYmXHJcbiAgICAhc2VsZWN0ZWRQcm9qZWN0WzBdLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RzLW5hdlwiKVxyXG4gICkge1xyXG4gICAgaW1nRWxlbWVudCA9IHNlbGVjdGVkUHJvamVjdFswXS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS50YWdOYW1lID09PSBcIlBcIiAmJlxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzBdLmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0LW5hbWVcIlxyXG4gICkge1xyXG4gICAgaW1nRWxlbWVudCA9IHNlbGVjdGVkUHJvamVjdFsxXS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIHNlbGVjdGVkUHJvamVjdFswXS50YWdOYW1lID09PSBcIklNR1wiICYmXHJcbiAgICAoc2VsZWN0ZWRQcm9qZWN0WzBdLmNsYXNzTmFtZSAhPT0gXCJlZGl0LXByb2plY3QtYnV0dG9uXCIgfHxcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0WzBdLmNsYXNzTmFtZSAhPT0gXCJlcmFzZS1wcm9qZWN0LWJ1dHRvblwiKSAmJlxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzNdLmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0c1wiXHJcbiAgKSB7XHJcbiAgICBpbWdFbGVtZW50ID0gc2VsZWN0ZWRQcm9qZWN0WzBdO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzBdLnRhZ05hbWUgPT09IFwiSU1HXCIgJiZcclxuICAgIChzZWxlY3RlZFByb2plY3RbMF0uY2xhc3NOYW1lID09PSBcImVyYXNlLXByb2plY3QtYnV0dG9uXCIgfHxcclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0WzBdLmNsYXNzTmFtZSA9PT0gXCJlZGl0LXByb2plY3QtYnV0dG9uXCIpICYmXHJcbiAgICBzZWxlY3RlZFByb2plY3RbM10uY2xhc3NOYW1lID09PSBcInByb2plY3RzXCJcclxuICApIHtcclxuICAgIGltZ0VsZW1lbnQgPSBzZWxlY3RlZFByb2plY3RbMl0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICBzZWxlY3RlZFByb2plY3RbMF0udGFnTmFtZSA9PT0gXCJESVZcIiAmJlxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzBdLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RzLW5hdlwiKVxyXG4gICkge1xyXG4gICAgaW1nRWxlbWVudCA9IHNlbGVjdGVkUHJvamVjdFswXS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICB9XHJcblxyXG4gIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJtb250aCBjYWxlbmRhclwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9jYWxlbmRhci1tb250aC1vdXRsaW5lLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaW1nRWxlbWVudC5hbHQgPT09IFwiZGF5IGNhbGVuZGFyXCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL2NhbGVuZGFyLXRvZGF5LW91dGxpbmUuc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJ3ZWVrIGNhbGVuZGFyXCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL2NhbGVuZGFyLXdlZWstb3V0bGluZS5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImNhbGVuZGFyIHdpdGggYWxlcnRcIikge1xyXG4gICAgY29udGVudFRpdGxlSW1nLnNyYyA9IFwiLi9pbWFnZXMvY2FsZW5kYXItYWxlcnQtb3V0bGluZS5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImNhbGVuZGFyIHdpdGggY2hlY2ttYXJrXCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL2NhbGVuZGFyLWNoZWNrLW91dGxpbmUuc3ZnXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoaW1nRWxlbWVudC5hbHQgPT09IFwiYSB3cmVuY2ggYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID1cclxuICAgICAgXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImEgYm9vayBpY29uXCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCI7XHJcbiAgfSBlbHNlIGlmIChpbWdFbGVtZW50LmFsdCA9PT0gXCJhIGJhZyBvZiBtb25leSBpY29uXCIpIHtcclxuICAgIGNvbnRlbnRUaXRsZUltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL21vbmV5LWJhZy5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImEgcGl6emEgc2xpY2UgaWNvblwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9waXp6YS1zbGljZS5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImEgcHJlc2VudCBib3ggaWNvblwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVJbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9wcmVzZW50LWJveC5zdmdcIjtcclxuICB9IGVsc2UgaWYgKGltZ0VsZW1lbnQuYWx0ID09PSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIikge1xyXG4gICAgY29udGVudFRpdGxlSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvdm9sbGV5YmFsbC1iYWxsLnN2Z1wiO1xyXG4gIH0gZWxzZSBpZiAoaW1nRWxlbWVudC5hbHQgPT09IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIikge1xyXG4gICAgY29udGVudFRpdGxlSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvZHVtYmJlbGxzLWV4ZXJjaXNlLnN2Z1wiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRlbnRUaXRsZVRleHQ7XHJcbn0iLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuL2NyZWF0ZU5ld1Rhc2tcIjtcclxuaW1wb3J0IHtcclxuICBvcGVuVGFza01vZGFsLFxyXG4gIG9wZW5EZXRhaWxzTW9kYWwsXHJcbiAgb3BlbkVkaXRUYXNrTW9kYWwsXHJcbiAgb3BlbkVyYXNlVGFza01vZGFsLFxyXG59IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGNvbnRlbnRUaXRsZVRleHQgfSBmcm9tIFwiLi9wcm9qZWN0Q29udGVudFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNb250aERhdGUsIGNyZWF0ZVRvZGF5RGF0ZSwgY3JlYXRlV2Vla0RhdGUgfSBmcm9tIFwiLi90aW1lXCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDaGlsZE5vZGVzRXhjZXB0Rmlyc3QocGFyZW50KSB7XHJcbiAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQuaWQgIT09IHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZC5pZCkge1xyXG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGFza3NDb3VudCgpIHtcclxuICBjb25zdCB0YXNrc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb3VudFwiKTtcclxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtZGl2XCIpO1xyXG4gIHRhc2tzQ291bnQudGV4dENvbnRlbnQgPSB0YXNrc0Rpdi5jaGlsZHJlbi5sZW5ndGggLSAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrTGlzdEZvclByb2plY3QoKSB7XHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWRpdlwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHRhc2tMaXN0W2ldLnByb2plY3QgPT09IGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0KSB7XHJcbiAgICAgIGlmICh0YXNrTGlzdFtpXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5pZCA9IFwiY29udGVudFwiO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrYm94XCIgY2hlY2tlZC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZSBjb21wbGV0ZWQtdGFza1wiPiR7dGFza0xpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+RGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVyYXNlLXRhc2stYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IGZhbHNlIHx8XHJcbiAgICAgICAgdGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFza0xpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+RGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVyYXNlLXRhc2stYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrTGlzdEZvckRhdGVzKCkge1xyXG4gIGNvbnN0IGRheVRvZGF5ID0gY3JlYXRlVG9kYXlEYXRlKCkuZ2V0RGF0ZSgpO1xyXG4gIGNvbnN0IGRhdGVUb2RheSA9IGNyZWF0ZVRvZGF5RGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gIGNvbnN0IHdlZWtGcm9tVG9kYXkgPSBjcmVhdGVXZWVrRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gIGNvbnN0IG1vbnRoID0gY3JlYXRlTW9udGhEYXRlKCk7XHJcblxyXG4gIGxldCB3ZWVrQ291bnQgPSBjcmVhdGVXZWVrRGF0ZSgpLmdldERhdGUoKSAtIGNyZWF0ZVRvZGF5RGF0ZSgpLmdldERhdGUoKTtcclxuXHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWRpdlwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbW9udGhEaWZmZXJlbmNlID0gdGFza0xpc3RbaV0uZnVsbERhdGUuZ2V0TW9udGgoKSAtIG1vbnRoO1xyXG5cclxuICAgIGlmIChjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJBbGxcIikge1xyXG4gICAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgY29tcGxldGVkLXRhc2tcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0YXNrTGlzdFtpXS5jaGVja2VkID09PSBmYWxzZSB8fFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuZXdUYXNrRGl2LmlkID0gXCJjb250ZW50XCI7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQgPT09IFwiVG9kYXlcIiAmJlxyXG4gICAgICB0YXNrTGlzdFtpXS5kYXRlID09PSBkYXRlVG9kYXlcclxuICAgICkge1xyXG4gICAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgY29tcGxldGVkLXRhc2tcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0YXNrTGlzdFtpXS5jaGVja2VkID09PSBmYWxzZSB8fFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuZXdUYXNrRGl2LmlkID0gXCJjb250ZW50XCI7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQgPT09IFwiV2Vla1wiICYmXHJcbiAgICAgIHRhc2tMaXN0W2ldLmRhdGUgPD0gd2Vla0Zyb21Ub2RheSAmJlxyXG4gICAgICBtb250aERpZmZlcmVuY2UgPj0gMFxyXG4gICAgKSB7XHJcbiAgICAgIGlmICh0YXNrTGlzdFtpXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5pZCA9IFwiY29udGVudFwiO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrYm94XCIgY2hlY2tlZC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZSBjb21wbGV0ZWQtdGFza1wiPiR7dGFza0xpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+RGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVyYXNlLXRhc2stYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IGZhbHNlIHx8XHJcbiAgICAgICAgdGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFza0xpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+RGV0YWlsczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVyYXNlLXRhc2stYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbmV3VGFza0Rpdi5pbm5lckhUTUwgPSBuZXdUYXNrO1xyXG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJJbXBvcnRhbnRcIiAmJlxyXG4gICAgICB0YXNrTGlzdFtpXS5wcmlvcml0eSA9PT0gXCJIaWdoXCJcclxuICAgICkge1xyXG4gICAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgY29tcGxldGVkLXRhc2tcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0YXNrTGlzdFtpXS5jaGVja2VkID09PSBmYWxzZSB8fFxyXG4gICAgICAgIHRhc2tMaXN0W2ldLmNoZWNrZWQgPT09IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuZXdUYXNrRGl2LmlkID0gXCJjb250ZW50XCI7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrTGlzdFtpXS5kYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlZGl0LXRhc2stYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tEaXYuaW5uZXJIVE1MID0gbmV3VGFzaztcclxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9PT0gXCJDb21wbGV0ZWRcIikge1xyXG4gICAgICBpZiAodGFza0xpc3RbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgICAgICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGNoZWNrZWQvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgY29tcGxldGVkLXRhc2tcIj4ke3Rhc2tMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPkRldGFpbHM8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2tMaXN0W2ldLmRhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImVkaXQtdGFzay1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy9ub3RlLWVkaXQtb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlcmFzZS10YXNrLWJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ0cmFzaCBjYW4gaWNvblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBuZXdUYXNrRGl2LmlubmVySFRNTCA9IG5ld1Rhc2s7XHJcbiAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdXR0b24oKSB7XHJcbiAgY29uc3QgdGFza3NUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtdGl0bGVcIik7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5ld1Rhc2tCdXR0b25EaXYuaWQgPSBcIm5ld1Rhc2tCdG5cIjtcclxuICBuZXdUYXNrQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJuZXctdGFzay1idXR0b25cIik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGJ1dHRvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICB0YXNrc1RpdGxlLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b25EaXYpO1xyXG4gIG5ld1Rhc2tCdXR0b25EaXYuYXBwZW5kQ2hpbGQoYnV0dG9uUGFyYWdyYXBoKTtcclxuICBuZXdUYXNrQnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuVGFza01vZGFsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2hlY2ttYXJrKGUpIHtcclxuICBjb25zdCB0YXNrQ2xpY2tlZCA9IGUuY29tcG9zZWRQYXRoKClbMl0uY2hpbGRyZW5bMV07XHJcbiAgY29uc3QgY2hlY2tib3hDaGVjayA9IGUuY29tcG9zZWRQYXRoKClbMF0uY2hlY2tlZDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHRhc2tDbGlja2VkLnRleHRDb250ZW50ID09PSB0YXNrTGlzdFtpXS50aXRsZSkge1xyXG4gICAgICB0YXNrTGlzdFtpXS5jaGVja2VkID0gY2hlY2tib3hDaGVjaztcclxuICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0pO1xyXG4gICAgICBmaWxsUGFnZVdpdGhUYXNrcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsbFBhZ2VXaXRoVGFza3MoKSB7XHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWRpdlwiKTtcclxuICBjb25zdCB0YXNrc1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy10aXRsZVwiKTtcclxuXHJcbiAgcmVtb3ZlQ2hpbGROb2Rlc0V4Y2VwdEZpcnN0KHRhc2tzRGl2KTtcclxuICBjcmVhdGVBZGRUYXNrQnV0dG9uKCk7XHJcbiAgaWYgKFxyXG4gICAgY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQgPT09IFwiQWxsXCIgfHxcclxuICAgIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID09PSBcIlRvZGF5XCIgfHxcclxuICAgIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID09PSBcIldlZWtcIiB8fFxyXG4gICAgY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQgPT09IFwiSW1wb3J0YW50XCIgfHxcclxuICAgIGNvbnRlbnRUaXRsZVRleHQuaW5uZXJUZXh0ID09PSBcIkNvbXBsZXRlZFwiXHJcbiAgKSB7XHJcbiAgICByZW1vdmVDaGlsZE5vZGVzRXhjZXB0Rmlyc3QodGFza3NUaXRsZSk7XHJcbiAgICBjcmVhdGVUYXNrTGlzdEZvckRhdGVzKCk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3hcIik7XHJcbiAgICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PlxyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2hlY2ttYXJrKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXRhaWxcIik7XHJcbiAgICBkZXRhaWxzLmZvckVhY2goKGRldGFpbCkgPT5cclxuICAgICAgZGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRGV0YWlsc01vZGFsKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC10YXNrLWJ1dHRvblwiKTtcclxuICAgIGVkaXRUYXNrQnRuLmZvckVhY2goKGVkaXRUYXNrcykgPT5cclxuICAgICAgZWRpdFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdFRhc2tNb2RhbClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZXJhc2VUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lcmFzZS10YXNrLWJ1dHRvblwiKTtcclxuICAgIGVyYXNlVGFza0J0bi5mb3JFYWNoKChlcmFzZVRhc2spID0+XHJcbiAgICAgIGVyYXNlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVyYXNlVGFza01vZGFsKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhc2tMaXN0Rm9yUHJvamVjdCgpO1xyXG5cclxuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcclxuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PlxyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNoZWNrbWFyaylcclxuICApO1xyXG5cclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXRhaWxcIik7XHJcbiAgZGV0YWlscy5mb3JFYWNoKChkZXRhaWwpID0+XHJcbiAgICBkZXRhaWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5EZXRhaWxzTW9kYWwpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXQtdGFzay1idXR0b25cIik7XHJcbiAgZWRpdFRhc2tCdG4uZm9yRWFjaCgoZWRpdFRhc2tzKSA9PlxyXG4gICAgZWRpdFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdFRhc2tNb2RhbClcclxuICApO1xyXG5cclxuICBjb25zdCBlcmFzZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVyYXNlLXRhc2stYnV0dG9uXCIpO1xyXG4gIGVyYXNlVGFza0J0bi5mb3JFYWNoKChlcmFzZVRhc2spID0+XHJcbiAgICBlcmFzZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FcmFzZVRhc2tNb2RhbClcclxuICApO1xyXG5cclxuICB1cGRhdGVUYXNrc0NvdW50KCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGZ1bmN0aW9uLXBhcmVuLW5ld2xpbmUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcGxpY2l0LWFycm93LWxpbmVicmVhayAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RUaXRsZSB9IGZyb20gXCIuL3Byb2plY3RDb250ZW50XCI7XHJcbmltcG9ydCBmaWxsUGFnZVdpdGhUYXNrcyBmcm9tIFwiLi9zZWxlY3RlZFByb2plY3RcIjtcclxuXHJcbmxldCBzaWRlYmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItbmF2XCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2xhc3NMaXN0KCkge1xyXG4gIHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1uYXZcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZWJhckl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc2lkZWJhckl0ZW1zW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIHNpZGViYXJJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2VjdGlvblNlbGVjdGVkKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgc2lkZWJhckNsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKFxyXG4gICAgIXNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpICYmXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW5hdlwiKVxyXG4gICkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgIGNyZWF0ZVByb2plY3RUaXRsZShlKTtcclxuICAgIGZpbGxQYWdlV2l0aFRhc2tzKCk7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInNpZGViYXItbmF2XCIgfHxcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInNpZGViYXItbmF2IHByb2plY3RzLW5hdlwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjbGlja2VkID0gc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudDtcclxuICAgIGlmICghY2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgICBjaGVja0NsYXNzTGlzdCgpO1xyXG4gICAgICBjbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgICAgY3JlYXRlUHJvamVjdFRpdGxlKGUpO1xyXG4gICAgICBmaWxsUGFnZVdpdGhUYXNrcygpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInNpZGViYXItbmF2XCIgfHxcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09XHJcbiAgICAgIFwic2lkZWJhci1uYXYgcHJvamVjdHMtbmF2XCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCFjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIGNoZWNrQ2xhc3NMaXN0KCk7XHJcbiAgICAgIGNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgICBjcmVhdGVQcm9qZWN0VGl0bGUoZSk7XHJcbiAgICAgIGZpbGxQYWdlV2l0aFRhc2tzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5zaWRlYmFySXRlbXMuZm9yRWFjaCgoc2lkZWJhckl0ZW0pID0+XHJcbiAgc2lkZWJhckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVNlY3Rpb25TZWxlY3RlZClcclxuKTtcclxuIiwiaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vbmV3UHJvamVjdHNcIjtcclxuaW1wb3J0IGZpbGxQYWdlV2l0aFRhc2tzIGZyb20gXCIuL3NlbGVjdGVkUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRQYWdlKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKHByb2plY3RzKTtcclxuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RMaXN0KTtcclxuICBmaWxsUGFnZVdpdGhUYXNrcygpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZGF5RGF0ZSgpIHtcclxuICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgcmV0dXJuIGRhdGVOb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWVrRGF0ZSgpIHtcclxuICBjb25zdCBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgZGF0ZU5vdy5zZXREYXRlKGRhdGVOb3cuZ2V0RGF0ZSgpICsgNyk7XHJcbiAgY29uc3Qgd2Vla0Zyb21Ob3cgPSBkYXRlTm93O1xyXG5cclxuICByZXR1cm4gd2Vla0Zyb21Ob3c7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb250aERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGNvbnN0IG1vbnRoID0gZGF0ZU5vdy5nZXRNb250aCgpO1xyXG5cclxuICByZXR1cm4gbW9udGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVZZWFyRGF0ZSgpIHt9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbmltcG9ydCB7IG9wZW5Qcm9qZWN0TW9kYWwsIG9wZW5UYXNrTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU5ld1Byb2plY3QsXHJcbiAgYWRkUHJvamVjdFRvUHJvamVjdHMsXHJcbiAgcHJvamVjdExpc3QsXHJcbiAgUHJvamVjdCxcclxufSBmcm9tIFwiLi9uZXdQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBUYXNrLCBhZGRUYXNrVG9UYXNrcywgdGFza0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVOZXdUYXNrXCI7XHJcbmltcG9ydCBzdGFydFBhZ2UgZnJvbSBcIi4vc3RhcnRQYWdlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRvZGF5RGF0ZSwgY3JlYXRlV2Vla0RhdGUgfSBmcm9tIFwiLi90aW1lXCI7XHJcblxyXG5jb25zdCBoYW1tZXJXcmVuY2ggPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3dyZW5jaC1zY3Jld2RyaXZlci1jcm9zc2VkLnN2Z1wiO1xyXG5jb25zdCB2b2xsZXliYWxsID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy92b2xsZXliYWxsLWJhbGwuc3ZnXCI7XHJcbmNvbnN0IGd5bUR1bWJiZWxsID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9kdW1iYmVsbHMtZXhlcmNpc2Uuc3ZnXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0Rml0bmVzcyA9IG5ldyBQcm9qZWN0KFwiU3RheWluZyBGaXRuZXNzXCIsIGd5bUR1bWJiZWxsKTtcclxuY29uc3QgcHJvamVjdFdvcmsgPSBuZXcgUHJvamVjdChcIldvcmsgaGFyZCBhbmQgZ2V0IHJpY2hcIiwgaGFtbWVyV3JlbmNoKTtcclxuLy8gY29uc3QgZGF0ZU5vdyA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbmNvbnN0IGRhdGVOb3cgPSBjcmVhdGVUb2RheURhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuXHJcbmFkZFByb2plY3RUb1Byb2plY3RzKHByb2plY3RGaXRuZXNzKTtcclxuYWRkUHJvamVjdFRvUHJvamVjdHMocHJvamVjdFdvcmspO1xyXG5cclxuY29uc3QgZml0bmVzc1Rhc2tPbmUgPSBuZXcgVGFzayhcclxuICBcIlN0YXlpbmcgRml0bmVzc1wiLFxyXG4gIFwiR28gdG8gdGhlIGd5bVwiLFxyXG4gIFwiV29yayBvdXQgYW5kIGxpZnQgd2VpZ2h0cyBhdCB0aGUgZ3ltLCAzIHRpbWVzIGEgd2Vla1wiLFxyXG4gIFwiMjUvMTEvMjAyMlwiLFxyXG4gIG5ldyBEYXRlKDIwMjIsIDEwLCAyNSksXHJcbiAgXCJIaWdoXCJcclxuKTtcclxuXHJcbmNvbnN0IGZpdG5lc3NUYXNrVHdvID0gbmV3IFRhc2soXHJcbiAgXCJTdGF5aW5nIEZpdG5lc3NcIixcclxuICBcIldha2UgdXAgZWFybHkgYW5kIHJ1biBhdCB0aGUgc3RyZWV0XCIsXHJcbiAgXCJSdW4gYXQgdGhlIHN0cmVldCA0IHRpbWVzIGEgd2VlayBmb3IgYXQgbGVhc3QgMTUgbWludXRlc1wiLFxyXG4gIFwiMzEvMTIvMjAyMlwiLFxyXG4gIG5ldyBEYXRlKDIwMjIsIDExLCAzMSksXHJcbiAgXCJNZWRpdW1cIlxyXG4pO1xyXG5cclxuY29uc3QgcHJvamVjdFRlc3RUYXNrT25lID0gbmV3IFRhc2soXHJcbiAgXCJXb3JrIGhhcmQgYW5kIGdldCByaWNoXCIsXHJcbiAgXCJDcmVhdGUgYSB2ZXJ5IG5pY2UgYXBwXCIsXHJcbiAgXCJHbyBvbiBWUyBDb2RlIGFuZCBidWlsZCBhIGxvdCBvZiBuaWNlIGZlYXR1cmVzIGluIGphdmFzY3JpcHRcIixcclxuICBkYXRlTm93LFxyXG4gIG5ldyBEYXRlKCksXHJcbiAgXCJIaWdoXCJcclxuKTtcclxuXHJcbmFkZFRhc2tUb1Rhc2tzKGZpdG5lc3NUYXNrT25lKTtcclxuYWRkVGFza1RvVGFza3MoZml0bmVzc1Rhc2tUd28pO1xyXG5hZGRUYXNrVG9UYXNrcyhwcm9qZWN0VGVzdFRhc2tPbmUpO1xyXG5cclxuc3RhcnRQYWdlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==