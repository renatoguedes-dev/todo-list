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
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const sidebarModalItems = document.querySelectorAll(".modal-sidebar-item");

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
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

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


/***/ }),

/***/ "./src/newtodo.js":
/*!************************!*\
  !*** ./src/newtodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openNewTodo)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");


function createNewTodo() {
  const modalContent = document.querySelector(".modal-content");

  const newTodoTitle = document.createElement("textarea");
  newTodoTitle.name = "new-todo-title";
  newTodoTitle.id = "new-todo-title";
  newTodoTitle.maxLength = "40";
  newTodoTitle.placeholder = "Title: e.g Pay for the internet";

  const newTodoDetails = document.createElement("textarea");
  newTodoDetails.name = "new-todo-details";
  newTodoDetails.id = "new-todo-details";
  newTodoDetails.placeholder = "Details: e.g internet, phone, rent.";

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

  const createTodoBtn = document.createElement("button");
  createTodoBtn.classList.add("add-todo-btn");
  createTodoBtn.textContent = "CREATE TO DO";

  // modal-content div children
  modalContent.appendChild(newTodoTitle);
  modalContent.appendChild(newTodoDetails);
  modalContent.appendChild(dateDiv);
  modalContent.appendChild(priorityLine);

  // new-todo-date div children
  dateDiv.appendChild(newDateText);
  dateDiv.appendChild(dateInput);

  // priority line div children

  priorityLine.appendChild(priorityDiv);
  priorityLine.appendChild(createTodoBtn);

  // priority div children
  priorityDiv.appendChild(priorityText);
  priorityDiv.appendChild(lowPriority);
  priorityDiv.appendChild(mediumPriority);
  priorityDiv.appendChild(highPriority);

  return modalContent;
}

function openNewTodo(e) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const sidebarModalClicked = e.target;
  const sectionClicked = e.target.innerText;

  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(modalContent);
  if (
    sectionClicked === "To do" &&
    !sidebarModalClicked.classList.contains("active-section")
  ) {
    modalBody.appendChild(createNewTodo());
  }
  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.addModalClassList)(e);

  return modalContent;
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
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable no-constant-condition */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */

function checkClassList() {
  const sidebarItems = document.querySelectorAll(".sidebar-nav");

  for (let i = 0; i < sidebarItems.length; i++) {
    if (sidebarItems[i].classList.contains("active-section")) {
      sidebarItems[i].classList.remove("active-section");
    }
  }
}

function addClassList(e) {
  const sidebarClicked = e.target;

  if (
    !sidebarClicked.classList.contains("active-section") &&
    sidebarClicked.classList.contains("sidebar-nav")
  ) {
    checkClassList();
    sidebarClicked.classList.add("active-section");
  } else if (
    sidebarClicked.parentElement.className === "sidebar-nav" ||
    sidebarClicked.parentElement.className === "sidebar-nav projects-nav"
  ) {
    const clicked = sidebarClicked.parentElement;
    if (!clicked.classList.contains("active-section")) {
      checkClassList();
      clicked.classList.add("active-section");
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
    }
  }
}


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
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _newtodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newtodo */ "./src/newtodo.js");
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */




const projectList = [];

const openModalButton = document.querySelector("#newTodoBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");
const overlay = document.getElementById("overlay");
const sidebarItems = document.querySelectorAll(".sidebar-nav");
const hammerWrench = "./images/projects-icons/wrench-screwdriver-crossed.svg";
const volleyball = "./images/projects-icons/volleyball-ball.svg";
const gymDumbbell = "./images/projects-icons/dumbbells-exercise.svg";

openModalButton.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.openModal);
closeModalButton.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.closeModal);
overlay.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.closeModal);

sidebarItems.forEach((sidebarItem) =>
  sidebarItem.addEventListener("click", _sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])
);

class Project {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
}

const projectFitness = new Project("Staying Fitness", gymDumbbell);
const projectWork = new Project("Work hard and get rich", hammerWrench);

function addProjectToProjects(project) {
  projectList.push(project);
}

addProjectToProjects(projectFitness);
addProjectToProjects(projectWork);

function createNewProject() {
  const projects = document.querySelector("#projects");

  for (let i = 0; i < projectList.length; i++) {
    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("sidebar-nav");
    newProjectDiv.classList.add("projects-nav");
    let newProject;

    newProject = `
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
  projects.addEventListener("click", _sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

createNewProject();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXd0b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XHJcbmNvbnN0IHNpZGViYXJNb2RhbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1zaWRlYmFyLWl0ZW1cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDbGFzc0xpc3QoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlYmFyTW9kYWxJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHNpZGViYXJNb2RhbEl0ZW1zW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIHNpZGViYXJNb2RhbEl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNb2RhbENsYXNzTGlzdChlKSB7XHJcbiAgY29uc3Qgc2lkZWJhck1vZGFsQ2xpY2tlZCA9IGUudGFyZ2V0O1xyXG5cclxuICBpZiAoIXNpZGViYXJNb2RhbENsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgIGNoZWNrQ2xhc3NMaXN0KCk7XHJcbiAgICBzaWRlYmFyTW9kYWxDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xyXG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkTW9kYWxDbGFzc0xpc3QsIHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VG9kbygpIHtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBuZXdUb2RvVGl0bGUubmFtZSA9IFwibmV3LXRvZG8tdGl0bGVcIjtcclxuICBuZXdUb2RvVGl0bGUuaWQgPSBcIm5ldy10b2RvLXRpdGxlXCI7XHJcbiAgbmV3VG9kb1RpdGxlLm1heExlbmd0aCA9IFwiNDBcIjtcclxuICBuZXdUb2RvVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBlLmcgUGF5IGZvciB0aGUgaW50ZXJuZXRcIjtcclxuXHJcbiAgY29uc3QgbmV3VG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbmV3VG9kb0RldGFpbHMubmFtZSA9IFwibmV3LXRvZG8tZGV0YWlsc1wiO1xyXG4gIG5ld1RvZG9EZXRhaWxzLmlkID0gXCJuZXctdG9kby1kZXRhaWxzXCI7XHJcbiAgbmV3VG9kb0RldGFpbHMucGxhY2Vob2xkZXIgPSBcIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWRhdGVcIik7XHJcblxyXG4gIGNvbnN0IG5ld0RhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwibmV3LWRhdGUtdGV4dFwiKTtcclxuICBuZXdEYXRlVGV4dC50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6XCI7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGRhdGVJbnB1dC5uYW1lID0gXCJ0b2RvLWRhdGVcIjtcclxuICBkYXRlSW5wdXQuaWQgPSBcIm5ldy10b2RvLWRhdGVcIjtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eUxpbmUuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxpbmVcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS10ZXh0XCIpO1xyXG4gIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuXHJcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNyZWF0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWJ0blwiKTtcclxuICBjcmVhdGVUb2RvQnRuLnRleHRDb250ZW50ID0gXCJDUkVBVEUgVE8gRE9cIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCBkaXYgY2hpbGRyZW5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VG9kb1RpdGxlKTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VG9kb0RldGFpbHMpO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaW5lKTtcclxuXHJcbiAgLy8gbmV3LXRvZG8tZGF0ZSBkaXYgY2hpbGRyZW5cclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKG5ld0RhdGVUZXh0KTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gIC8vIHByaW9yaXR5IGxpbmUgZGl2IGNoaWxkcmVuXHJcblxyXG4gIHByaW9yaXR5TGluZS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XHJcbiAgcHJpb3JpdHlMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9CdG4pO1xyXG5cclxuICAvLyBwcmlvcml0eSBkaXYgY2hpbGRyZW5cclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3Blbk5ld1RvZG8oZSkge1xyXG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcbiAgY29uc3Qgc2lkZWJhck1vZGFsQ2xpY2tlZCA9IGUudGFyZ2V0O1xyXG4gIGNvbnN0IHNlY3Rpb25DbGlja2VkID0gZS50YXJnZXQuaW5uZXJUZXh0O1xyXG5cclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcbiAgaWYgKFxyXG4gICAgc2VjdGlvbkNsaWNrZWQgPT09IFwiVG8gZG9cIiAmJlxyXG4gICAgIXNpZGViYXJNb2RhbENsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIilcclxuICApIHtcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVOZXdUb2RvKCkpO1xyXG4gIH1cclxuICBhZGRNb2RhbENsYXNzTGlzdChlKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xyXG5cclxuZnVuY3Rpb24gY2hlY2tDbGFzc0xpc3QoKSB7XHJcbiAgY29uc3Qgc2lkZWJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLW5hdlwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlYmFySXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzaWRlYmFySXRlbXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgc2lkZWJhckl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZENsYXNzTGlzdChlKSB7XHJcbiAgY29uc3Qgc2lkZWJhckNsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKFxyXG4gICAgIXNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpICYmXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW5hdlwiKVxyXG4gICkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXZcIiB8fFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXYgcHJvamVjdHMtbmF2XCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaWYgKCFjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIGNoZWNrQ2xhc3NMaXN0KCk7XHJcbiAgICAgIGNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInNpZGViYXItbmF2XCIgfHxcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09XHJcbiAgICAgIFwic2lkZWJhci1uYXYgcHJvamVjdHMtbmF2XCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpZiAoIWNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgICAgY2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCBhZGRDbGFzc0xpc3QgZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5pbXBvcnQgb3Blbk5ld1RvZG8gZnJvbSBcIi4vbmV3dG9kb1wiO1xyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbmNvbnN0IG9wZW5Nb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VG9kb0J0blwiKTtcclxuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxDbG9zZUJ0blwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcclxuY29uc3Qgc2lkZWJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLW5hdlwiKTtcclxuY29uc3QgaGFtbWVyV3JlbmNoID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy93cmVuY2gtc2NyZXdkcml2ZXItY3Jvc3NlZC5zdmdcIjtcclxuY29uc3Qgdm9sbGV5YmFsbCA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvdm9sbGV5YmFsbC1iYWxsLnN2Z1wiO1xyXG5jb25zdCBneW1EdW1iYmVsbCA9IFwiLi9pbWFnZXMvcHJvamVjdHMtaWNvbnMvZHVtYmJlbGxzLWV4ZXJjaXNlLnN2Z1wiO1xyXG5cclxub3Blbk1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xyXG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XHJcblxyXG5zaWRlYmFySXRlbXMuZm9yRWFjaCgoc2lkZWJhckl0ZW0pID0+XHJcbiAgc2lkZWJhckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZENsYXNzTGlzdClcclxuKTtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBpY29uKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcHJvamVjdEZpdG5lc3MgPSBuZXcgUHJvamVjdChcIlN0YXlpbmcgRml0bmVzc1wiLCBneW1EdW1iYmVsbCk7XHJcbmNvbnN0IHByb2plY3RXb3JrID0gbmV3IFByb2plY3QoXCJXb3JrIGhhcmQgYW5kIGdldCByaWNoXCIsIGhhbW1lcldyZW5jaCk7XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0KSB7XHJcbiAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcclxufVxyXG5cclxuYWRkUHJvamVjdFRvUHJvamVjdHMocHJvamVjdEZpdG5lc3MpO1xyXG5hZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0V29yayk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLW5hdlwiKTtcclxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLW5hdlwiKTtcclxuICAgIGxldCBuZXdQcm9qZWN0O1xyXG5cclxuICAgIG5ld1Byb2plY3QgPSBgXHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz1cInNpZGViYXItaWNvbnNcIlxyXG4gICAgICAgIHNyYz1cIiR7cHJvamVjdExpc3RbaV0uaWNvbn1cIlxyXG4gICAgICAgIGFsdD1cIkEgaGFtbWVyIGFuZCBhIHNjcmV3ZHJpdmVyIGNyb3NzZWRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cCBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdExpc3RbaV0udGl0bGV9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1lZGl0LWVyYXNlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9ub3RlLWVkaXQtb3V0bGluZS5wbmdcIiBhbHQ9XCJlZGl0IGljb25cIiAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIi4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJ0cmFzaCBjYW4gaWNvblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICBuZXdQcm9qZWN0RGl2LmlubmVySFRNTCA9IG5ld1Byb2plY3Q7XHJcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcclxuICB9XHJcbiAgcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZENsYXNzTGlzdCk7XHJcbn1cclxuXHJcbmNyZWF0ZU5ld1Byb2plY3QoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9