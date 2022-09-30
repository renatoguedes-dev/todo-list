/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");
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

  // const modalContent = document.querySelector(".modal-content");
  // removeAllChildNodes(modalContent);
  (0,_newTask__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
/* harmony export */   "addProjectToProjects": () => (/* binding */ addProjectToProjects),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");


const projectList = [];

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
  projects.addEventListener("click", _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

function addProjectToProjects(project) {
  projectList.push(project);
}


/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
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
}


/***/ }),

/***/ "./src/projectContent.js":
/*!*******************************!*\
  !*** ./src/projectContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectTitle": () => (/* binding */ createProjectTitle)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
function createProjectTitle(e) {
  const contentTitleText = document.querySelector(".content-title-text");
  const selectedProject = e.path;

  if (
    selectedProject[0].innerText === "" &&
    selectedProject[1].innerText === ""
  ) {
    contentTitleText.innerText = selectedProject[2].innerText;
  } else if (selectedProject[0] !== "") {
    contentTitleText.innerText = selectedProject[0].innerText;
  }
}


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClassList)
/* harmony export */ });
/* harmony import */ var _projectContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectContent */ "./src/projectContent.js");
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

function addClassList(e) {
  e.preventDefault();
  const sidebarClicked = e.target;

  if (
    !sidebarClicked.classList.contains("active-section") &&
    sidebarClicked.classList.contains("sidebar-nav")
  ) {
    checkClassList();
    sidebarClicked.classList.add("active-section");
    (0,_projectContent__WEBPACK_IMPORTED_MODULE_0__.createProjectTitle)(e);
  } else if (
    sidebarClicked.parentElement.className === "sidebar-nav" ||
    sidebarClicked.parentElement.className === "sidebar-nav projects-nav"
  ) {
    const clicked = sidebarClicked.parentElement;
    if (!clicked.classList.contains("active-section")) {
      checkClassList();
      clicked.classList.add("active-section");
      (0,_projectContent__WEBPACK_IMPORTED_MODULE_0__.createProjectTitle)(e);
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
    }
  }
}

sidebarItems.forEach((sidebarItem) =>
  sidebarItem.addEventListener("click", addClassList)
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
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */



const hammerWrench = "./images/projects-icons/wrench-screwdriver-crossed.svg";
const volleyball = "./images/projects-icons/volleyball-ball.svg";
const gymDumbbell = "./images/projects-icons/dumbbells-exercise.svg";

class Project {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
}

const projectFitness = new Project("Staying Fitness", gymDumbbell);
const projectWork = new Project("Work hard and get rich", hammerWrench);

(0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjects)(projectFitness);
(0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjects)(projectWork);

(0,_newProjects__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxFQUFFLDZEQUFnQjtBQUNsQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBVztBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsOEJBQThCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEcUM7QUFDckM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnREFBWTtBQUNqRDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEM4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEo4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBbUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0pBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQWtCO0FBQ3RCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQWtCO0FBQ3hCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNzRTtBQUNDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFvQjtBQUNwQixrRUFBb0I7QUFDcEI7QUFDQSw4REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vcGVuUHJvamVjdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9wZW5OZXdUYXNrIGZyb20gXCIuL25ld1Rhc2tcIjtcclxuaW1wb3J0IGZpbGxQcm9qZWN0TW9kYWwgZnJvbSBcIi4vb3BlblByb2plY3RNb2RhbFwiO1xyXG5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xyXG5jb25zdCBzaWRlYmFyTW9kYWxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtc2lkZWJhci1pdGVtXCIpO1xyXG5jb25zdCBvcGVuUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3UHJvamVjdEJ0blwiKTtcclxuY29uc3Qgb3BlblRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tCdG5cIik7XHJcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsQ2xvc2VCdG5cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcclxuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3RNb2RhbCgpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBmaWxsUHJvamVjdE1vZGFsKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuVGFza01vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAvLyBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcbiAgLy8gcmVtb3ZlQWxsQ2hpbGROb2Rlcyhtb2RhbENvbnRlbnQpO1xyXG4gIG9wZW5OZXdUYXNrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0NsYXNzTGlzdCgpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGViYXJNb2RhbEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc2lkZWJhck1vZGFsSXRlbXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgc2lkZWJhck1vZGFsSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGFsQ2xhc3NMaXN0KGUpIHtcclxuICBjb25zdCBzaWRlYmFyTW9kYWxDbGlja2VkID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmICghc2lkZWJhck1vZGFsQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJNb2RhbENsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gIH1cclxufVxyXG5cclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XHJcbm9wZW5Qcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvamVjdE1vZGFsKTtcclxub3BlblRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5UYXNrTW9kYWwpO1xyXG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxuIiwiaW1wb3J0IGFkZENsYXNzTGlzdCBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInNpZGViYXItbmF2XCIpO1xyXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtbmF2XCIpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10ZXh0LWljb25cIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzPVwic2lkZWJhci1pY29uc1wiXHJcbiAgICAgICAgc3JjPVwiJHtwcm9qZWN0TGlzdFtpXS5pY29ufVwiXHJcbiAgICAgICAgYWx0PVwiQSBoYW1tZXIgYW5kIGEgc2NyZXdkcml2ZXIgY3Jvc3NlZFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0TGlzdFtpXS50aXRsZX08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWVkaXQtZXJhc2VcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL25vdGUtZWRpdC1vdXRsaW5lLnBuZ1wiIGFsdD1cImVkaXQgaWNvblwiIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nXCJcclxuICAgICAgICAgIGFsdD1cInRyYXNoIGNhbiBpY29uXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIG5ld1Byb2plY3REaXYuaW5uZXJIVE1MID0gbmV3UHJvamVjdDtcclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xyXG4gIH1cclxuICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQ2xhc3NMaXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RUb1Byb2plY3RzKHByb2plY3QpIHtcclxuICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xyXG59XHJcbiIsImltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzaygpIHtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIC8vIG1vZGFsLWNvbnRlbnQncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmFjdGlvbiA9IFwiI1wiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIGZpcnN0IGNoaWxkXHJcbiAgY29uc3QgZmlyc3RGaWVsZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZpcnN0RmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcblxyXG4gIC8vIGZpcnN0IGZpZWxkcyBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsLmZvciA9IFwidGFzay10aXRsZVwiO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInRhc2stdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLlwiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IHNlY29uZEZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcbiAgc2Vjb25kRmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRldGFpbHNcIik7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBsYWJlbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFR3by5mb3IgPSBcInRhc2stZGV0YWlsc1wiO1xyXG4gIGxhYmVsVHdvLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgaW5wdXRUd28ubmFtZSA9IFwidGFzay1kZXRhaWxzXCI7XHJcbiAgaW5wdXRUd28uaWQgPSBcInRhc2stZGV0YWlsc1wiO1xyXG5cclxuICAvLyBzZWNvbmQgZmllbGRzIGRpdidzIHRoaXJkIGNoaWxkXHJcbiAgY29uc3QgcGFyYWdyYXBoRmllbGRzVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzVHdvLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC10aXRsZS1lcnJvclwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHNUd28uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgcGFyYWdyYXBoRmllbGRzVHdvLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC5cIjtcclxuXHJcbiAgLy8gY29uc3QgbmV3VG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgLy8gbmV3VG9kb0RldGFpbHMubmFtZSA9IFwibmV3LXRvZG8tZGV0YWlsc1wiO1xyXG4gIC8vIG5ld1RvZG9EZXRhaWxzLmlkID0gXCJuZXctdG9kby1kZXRhaWxzXCI7XHJcbiAgLy8gbmV3VG9kb0RldGFpbHMucGxhY2Vob2xkZXIgPSBcIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWRhdGVcIik7XHJcblxyXG4gIGNvbnN0IG5ld0RhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwibmV3LWRhdGUtdGV4dFwiKTtcclxuICBuZXdEYXRlVGV4dC50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6XCI7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGRhdGVJbnB1dC5uYW1lID0gXCJ0b2RvLWRhdGVcIjtcclxuICBkYXRlSW5wdXQuaWQgPSBcIm5ldy10b2RvLWRhdGVcIjtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eUxpbmUuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxpbmVcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS10ZXh0XCIpO1xyXG4gIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuXHJcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRvZG9CdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNyZWF0ZVRvZG9CdG5EaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJ1dHRvbnNcIik7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNyZWF0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWJ0blwiKTtcclxuICBjcmVhdGVUb2RvQnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50IGRpdiBjaGlsZHJlblxyXG5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdEZpZWxkc0Rpdik7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzZWNvbmRGaWVsZHNEaXYpO1xyXG5cclxuICAvLyBmaXJzdCBmaWVsZHMgZGl2IGNoaWxkcmVuXHJcbiAgZmlyc3RGaWVsZHNEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGZpcnN0RmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBmaXJzdEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhGaWVsZHMpO1xyXG5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGluZSk7XHJcblxyXG4gIC8vIHNlY29uZCBmaWVsZHMgZGl2IGNoaWxkcmVuXHJcbiAgc2Vjb25kRmllbGRzRGl2LmFwcGVuZENoaWxkKGxhYmVsVHdvKTtcclxuICBzZWNvbmRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXRUd28pO1xyXG4gIHNlY29uZEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhGaWVsZHNUd28pO1xyXG5cclxuICAvLyBuZXctdG9kby1kYXRlIGRpdiBjaGlsZHJlblxyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQobmV3RGF0ZVRleHQpO1xyXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgLy8gcHJpb3JpdHkgbGluZSBkaXYgY2hpbGRyZW5cclxuXHJcbiAgcHJpb3JpdHlMaW5lLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuICBwcmlvcml0eUxpbmUuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bkRpdik7XHJcblxyXG4gIC8vIHByaW9yaXR5IGRpdiBjaGlsZHJlblxyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xyXG5cclxuICAvLyBjcmVhdGUgbmV3IHRhc2sgYnV0dG9uIGRpdiBjaGlsZFxyXG4gIGNyZWF0ZVRvZG9CdG5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bik7XHJcblxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5OZXdUYXNrKCkge1xyXG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcbiAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWhlYWRlci10ZXh0XCIpO1xyXG5cclxuICBtb2RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgbmV3IHRhc2tcIjtcclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcbiAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Rhc2soKSk7XHJcblxyXG4gIHJldHVybiBtb2RhbENvbnRlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gXCIuL21vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICAvLyBtb2RhbC1jb250ZW50J3MgZmlyc3QgY2hpbGRcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcclxuXHJcbiAgLy8gZm9ybSB0YWcncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGZpZWxkc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmllbGRzRGl2LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNcIik7XHJcblxyXG4gIC8vIGZpZWxkcyBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsLmZvciA9IFwicHJvamVjdC10aXRsZVwiO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3Mgc2Vjb25kIGNoaWxkXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0Lm5hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcclxuICBpbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xyXG5cclxuICAvLyBmaWVsZHMgZGl2J3MgdGhpcmQgY2hpbGRcclxuICBjb25zdCBwYXJhZ3JhcGhGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlLWVycm9yXCIpO1xyXG4gIHBhcmFncmFwaEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICBwYXJhZ3JhcGhGaWVsZHMudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLlwiO1xyXG5cclxuICAvLyBmb3JtIHRhZydzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IGljb25TZWxlY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGljb25TZWxlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcImljb24tc2VsZWN0aW9uXCIpO1xyXG5cclxuICAvLyBpY29uLXNlbGVjdGlvbiBkaXYncyBmaXJzdCBjaGlsZFxyXG4gIGNvbnN0IHBhcmFncmFwaEljb25TZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGhJY29uU2VsZWN0aW9uLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYW4gSWNvblwiO1xyXG5cclxuICAvLyBpY29uLXNlbGVjdGlvbiBkaXYncyBzZWNvbmQgY2hpbGRcclxuICBjb25zdCBwcm9qZWN0SWNvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RJY29uc0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uc1wiKTtcclxuXHJcbiAgLy8gcHJvamVjdC1pY29ucyBkaXYgY2hpbGRyZW5cclxuICBjb25zdCB0b29sc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvb2xzSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG4gIHRvb2xzSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWljb25cIik7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib29rSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vbmV5QmFnSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwaXp6YUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBpenphSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICBjb25zdCBwcmVzZW50Qm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJlc2VudEJveEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3Qgdm9sbGV5QmFsbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHZvbGxleUJhbGxJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb25cIik7XHJcblxyXG4gIGNvbnN0IGd5bUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGd5bUljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcclxuXHJcbiAgY29uc3QgdG9vbHNJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB0b29sc0ljb25JbWcuc3JjID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuICB0b29sc0ljb25JbWcuYWx0ID0gXCJhIHdyZW5jaCBhbmQgYSBzY3Jld2RyaXZlciBjcm9zc2VkXCI7XHJcblxyXG4gIGNvbnN0IGJvb2tJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBib29rSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2Jvb2suc3ZnXCI7XHJcbiAgYm9va0ljb25JbWcuYWx0ID0gXCJhIGJvb2sgaWNvblwiO1xyXG5cclxuICBjb25zdCBtb25leUJhZ0ljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1vbmV5QmFnSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL21vbmV5LWJhZy5zdmdcIjtcclxuICBtb25leUJhZ0ljb25JbWcuYWx0ID0gXCJhIGJhZyBvZiBtb25leSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHBpenphSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcGl6emFJY29uSW1nLnNyYyA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvcGl6emEtc2xpY2Uuc3ZnXCI7XHJcbiAgcGl6emFJY29uSW1nLmFsdCA9IFwiYSBwaXp6YSBzbGljZSBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHByZXNlbnRCb3hJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBwcmVzZW50Qm94SWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ByZXNlbnQtYm94LnN2Z1wiO1xyXG4gIHByZXNlbnRCb3hJY29uSW1nLmFsdCA9IFwiYSBwcmVzZW50IGJveCBpY29uXCI7XHJcblxyXG4gIGNvbnN0IHZvbGxleUJhbGxJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3ZvbGxleWJhbGwtYmFsbC5zdmdcIjtcclxuICB2b2xsZXlCYWxsSWNvbkltZy5hbHQgPSBcImEgdm9sbGV5YmFsbCBiYWxsIGljb25cIjtcclxuXHJcbiAgY29uc3QgZ3ltSWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgZ3ltSWNvbkltZy5zcmMgPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL2R1bWJiZWxscy1leGVyY2lzZS5zdmdcIjtcclxuICBneW1JY29uSW1nLmFsdCA9IFwiYSBwZXJzb24gaG9sZGluZyB0d28gZHVtYmJlbGxzIGljb25cIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCdzIHNlY29uZCBjaGlsZFxyXG4gIGNvbnN0IG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbW9kYWxCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25zXCIpO1xyXG5cclxuICBjb25zdCBjYW5jZWxNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1tb2RhbC1idG5cIik7XHJcbiAgY2FuY2VsTW9kYWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5cclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idG5cIik7XHJcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCBkaXYgY2hpbGRyZW5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQnV0dG9ucyk7XHJcblxyXG4gIC8vIGZvcm0gdGFnIGNoaWxkcmVuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNEaXYpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaWNvblNlbGVjdGlvbkRpdik7XHJcblxyXG4gIC8vIG1vZGFsLWJ1dHRvbnMgY2hpbGRyZW5cclxuICBtb2RhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsTW9kYWxCdG4pO1xyXG4gIG1vZGFsQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcclxuXHJcbiAgLy8gZmllbGRzIGRpdiBjaGlsZHJlblxyXG4gIGZpZWxkc0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgZmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBmaWVsZHNEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoRmllbGRzKTtcclxuXHJcbiAgLy8gaWNvbi1zZWxlY3Rpb24gZGl2IGNoaWxkcmVuXHJcbiAgaWNvblNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhJY29uU2VsZWN0aW9uKTtcclxuICBpY29uU2VsZWN0aW9uRGl2LmFwcGVuZENoaWxkKHByb2plY3RJY29uc0Rpdik7XHJcblxyXG4gIC8vIHByb2plY3QtaWNvbiBkaXYgY2hpbGRyZW5cclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQodG9vbHNJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQoYm9va0ljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChtb25leUJhZ0ljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChwaXp6YUljb24pO1xyXG4gIHByb2plY3RJY29uc0Rpdi5hcHBlbmRDaGlsZChwcmVzZW50Qm94SWNvbik7XHJcbiAgcHJvamVjdEljb25zRGl2LmFwcGVuZENoaWxkKHZvbGxleUJhbGxJY29uKTtcclxuICBwcm9qZWN0SWNvbnNEaXYuYXBwZW5kQ2hpbGQoZ3ltSWNvbik7XHJcblxyXG4gIC8vIHByb2plY3QtaWNvbiBpbWdzXHJcbiAgdG9vbHNJY29uLmFwcGVuZENoaWxkKHRvb2xzSWNvbkltZyk7XHJcbiAgYm9va0ljb24uYXBwZW5kQ2hpbGQoYm9va0ljb25JbWcpO1xyXG4gIG1vbmV5QmFnSWNvbi5hcHBlbmRDaGlsZChtb25leUJhZ0ljb25JbWcpO1xyXG4gIHBpenphSWNvbi5hcHBlbmRDaGlsZChwaXp6YUljb25JbWcpO1xyXG4gIHByZXNlbnRCb3hJY29uLmFwcGVuZENoaWxkKHByZXNlbnRCb3hJY29uSW1nKTtcclxuICB2b2xsZXlCYWxsSWNvbi5hcHBlbmRDaGlsZCh2b2xsZXlCYWxsSWNvbkltZyk7XHJcbiAgZ3ltSWNvbi5hcHBlbmRDaGlsZChneW1JY29uSW1nKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsbFByb2plY3RNb2RhbCgpIHtcclxuICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJvZHlcIik7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG4gIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1oZWFkZXItdGV4dFwiKTtcclxuXHJcbiAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIG5ldyBwcm9qZWN0XCI7XHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhtb2RhbENvbnRlbnQpO1xyXG4gIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0TW9kYWwoKSk7XHJcbn1cclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUaXRsZShlKSB7XHJcbiAgY29uc3QgY29udGVudFRpdGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10aXRsZS10ZXh0XCIpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGUucGF0aDtcclxuXHJcbiAgaWYgKFxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzBdLmlubmVyVGV4dCA9PT0gXCJcIiAmJlxyXG4gICAgc2VsZWN0ZWRQcm9qZWN0WzFdLmlubmVyVGV4dCA9PT0gXCJcIlxyXG4gICkge1xyXG4gICAgY29udGVudFRpdGxlVGV4dC5pbm5lclRleHQgPSBzZWxlY3RlZFByb2plY3RbMl0uaW5uZXJUZXh0O1xyXG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRQcm9qZWN0WzBdICE9PSBcIlwiKSB7XHJcbiAgICBjb250ZW50VGl0bGVUZXh0LmlubmVyVGV4dCA9IHNlbGVjdGVkUHJvamVjdFswXS5pbm5lclRleHQ7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jdGlvbi1wYXJlbi1uZXdsaW5lICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0VGl0bGUgfSBmcm9tIFwiLi9wcm9qZWN0Q29udGVudFwiO1xyXG5cclxubGV0IHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1uYXZcIik7XHJcblxyXG5mdW5jdGlvbiBjaGVja0NsYXNzTGlzdCgpIHtcclxuICBzaWRlYmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItbmF2XCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGViYXJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHNpZGViYXJJdGVtc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgICBzaWRlYmFySXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3NMaXN0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgc2lkZWJhckNsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKFxyXG4gICAgIXNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpICYmXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW5hdlwiKVxyXG4gICkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgIGNyZWF0ZVByb2plY3RUaXRsZShlKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXZcIiB8fFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXYgcHJvamVjdHMtbmF2XCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaWYgKCFjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIGNoZWNrQ2xhc3NMaXN0KCk7XHJcbiAgICAgIGNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgICBjcmVhdGVQcm9qZWN0VGl0bGUoZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXZcIiB8fFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PT1cclxuICAgICAgXCJzaWRlYmFyLW5hdiBwcm9qZWN0cy1uYXZcIlxyXG4gICkge1xyXG4gICAgY29uc3QgY2xpY2tlZCA9IHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGlmICghY2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgICBjaGVja0NsYXNzTGlzdCgpO1xyXG4gICAgICBjbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgICAgY3JlYXRlUHJvamVjdFRpdGxlKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc2lkZWJhckl0ZW1zLmZvckVhY2goKHNpZGViYXJJdGVtKSA9PlxyXG4gIHNpZGViYXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRDbGFzc0xpc3QpXHJcbik7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbmltcG9ydCB7IG9wZW5Qcm9qZWN0TW9kYWwsIG9wZW5UYXNrTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0LCBhZGRQcm9qZWN0VG9Qcm9qZWN0cyB9IGZyb20gXCIuL25ld1Byb2plY3RzXCI7XHJcblxyXG5jb25zdCBoYW1tZXJXcmVuY2ggPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3dyZW5jaC1zY3Jld2RyaXZlci1jcm9zc2VkLnN2Z1wiO1xyXG5jb25zdCB2b2xsZXliYWxsID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy92b2xsZXliYWxsLWJhbGwuc3ZnXCI7XHJcbmNvbnN0IGd5bUR1bWJiZWxsID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9kdW1iYmVsbHMtZXhlcmNpc2Uuc3ZnXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgaWNvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5pY29uID0gaWNvbjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RGaXRuZXNzID0gbmV3IFByb2plY3QoXCJTdGF5aW5nIEZpdG5lc3NcIiwgZ3ltRHVtYmJlbGwpO1xyXG5jb25zdCBwcm9qZWN0V29yayA9IG5ldyBQcm9qZWN0KFwiV29yayBoYXJkIGFuZCBnZXQgcmljaFwiLCBoYW1tZXJXcmVuY2gpO1xyXG5cclxuYWRkUHJvamVjdFRvUHJvamVjdHMocHJvamVjdEZpdG5lc3MpO1xyXG5hZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0V29yayk7XHJcblxyXG5jcmVhdGVOZXdQcm9qZWN0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==