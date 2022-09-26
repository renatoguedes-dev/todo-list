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
const openModalButton = document.querySelector("#newTodoBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");

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

overlay.addEventListener("click", closeModal);
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);


/***/ }),

/***/ "./src/newproject.js":
/*!***************************!*\
  !*** ./src/newproject.js ***!
  \***************************/
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
/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newproject */ "./src/newproject.js");
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

(0,_newproject__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjects)(projectFitness);
(0,_newproject__WEBPACK_IMPORTED_MODULE_1__.addProjectToProjects)(projectWork);

(0,_newproject__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsOEJBQThCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdEQUFZO0FBQ2pEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3REQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNnRDtBQUNzQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBb0I7QUFDcEIsaUVBQW9CO0FBQ3BCO0FBQ0EsNkRBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdwcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XHJcbmNvbnN0IHNpZGViYXJNb2RhbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1zaWRlYmFyLWl0ZW1cIik7XHJcbmNvbnN0IG9wZW5Nb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VG9kb0J0blwiKTtcclxuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxDbG9zZUJ0blwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0NsYXNzTGlzdCgpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGViYXJNb2RhbEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc2lkZWJhck1vZGFsSXRlbXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgc2lkZWJhck1vZGFsSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGFsQ2xhc3NMaXN0KGUpIHtcclxuICBjb25zdCBzaWRlYmFyTW9kYWxDbGlja2VkID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmICghc2lkZWJhck1vZGFsQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJNb2RhbENsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XHJcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG5cclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XHJcbm9wZW5Nb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcclxuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XHJcbiIsImltcG9ydCBhZGRDbGFzc0xpc3QgZnJvbSBcIi4vc2lkZWJhclwiO1xyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLW5hdlwiKTtcclxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLW5hdlwiKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gYFxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3M9XCJzaWRlYmFyLWljb25zXCJcclxuICAgICAgICBzcmM9XCIke3Byb2plY3RMaXN0W2ldLmljb259XCJcclxuICAgICAgICBhbHQ9XCJBIGhhbW1lciBhbmQgYSBzY3Jld2RyaXZlciBjcm9zc2VkXCJcclxuICAgICAgLz5cclxuICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3RMaXN0W2ldLnRpdGxlfTwvcD5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZWRpdC1lcmFzZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvbm90ZS1lZGl0LW91dGxpbmUucG5nXCIgYWx0PVwiZWRpdCBpY29uXCIgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwidHJhc2ggY2FuIGljb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgbmV3UHJvamVjdERpdi5pbm5lckhUTUwgPSBuZXdQcm9qZWN0O1xyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XHJcbiAgfVxyXG4gIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRDbGFzc0xpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvUHJvamVjdHMocHJvamVjdCkge1xyXG4gIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xyXG5cclxubGV0IHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1uYXZcIik7XHJcblxyXG5mdW5jdGlvbiBjaGVja0NsYXNzTGlzdCgpIHtcclxuICBzaWRlYmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItbmF2XCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGViYXJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHNpZGViYXJJdGVtc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgICBzaWRlYmFySXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3NMaXN0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgc2lkZWJhckNsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKFxyXG4gICAgIXNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpICYmXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW5hdlwiKVxyXG4gICkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXZcIiB8fFxyXG4gICAgc2lkZWJhckNsaWNrZWQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwic2lkZWJhci1uYXYgcHJvamVjdHMtbmF2XCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaWYgKCFjbGlja2VkLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIGNoZWNrQ2xhc3NMaXN0KCk7XHJcbiAgICAgIGNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zZWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInNpZGViYXItbmF2XCIgfHxcclxuICAgIHNpZGViYXJDbGlja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09XHJcbiAgICAgIFwic2lkZWJhci1uYXYgcHJvamVjdHMtbmF2XCJcclxuICApIHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBzaWRlYmFyQ2xpY2tlZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpZiAoIWNsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgICAgY2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNlY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5zaWRlYmFySXRlbXMuZm9yRWFjaCgoc2lkZWJhckl0ZW0pID0+XHJcbiAgc2lkZWJhckl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZENsYXNzTGlzdClcclxuKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jdGlvbi1wYXJlbi1uZXdsaW5lICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cclxuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCwgYWRkUHJvamVjdFRvUHJvamVjdHMgfSBmcm9tIFwiLi9uZXdwcm9qZWN0XCI7XHJcblxyXG5jb25zdCBoYW1tZXJXcmVuY2ggPSBcIi4vaW1hZ2VzL3Byb2plY3RzLWljb25zL3dyZW5jaC1zY3Jld2RyaXZlci1jcm9zc2VkLnN2Z1wiO1xyXG5jb25zdCB2b2xsZXliYWxsID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy92b2xsZXliYWxsLWJhbGwuc3ZnXCI7XHJcbmNvbnN0IGd5bUR1bWJiZWxsID0gXCIuL2ltYWdlcy9wcm9qZWN0cy1pY29ucy9kdW1iYmVsbHMtZXhlcmNpc2Uuc3ZnXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgaWNvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5pY29uID0gaWNvbjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RGaXRuZXNzID0gbmV3IFByb2plY3QoXCJTdGF5aW5nIEZpdG5lc3NcIiwgZ3ltRHVtYmJlbGwpO1xyXG5jb25zdCBwcm9qZWN0V29yayA9IG5ldyBQcm9qZWN0KFwiV29yayBoYXJkIGFuZCBnZXQgcmljaFwiLCBoYW1tZXJXcmVuY2gpO1xyXG5cclxuYWRkUHJvamVjdFRvUHJvamVjdHMocHJvamVjdEZpdG5lc3MpO1xyXG5hZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0V29yayk7XHJcblxyXG5jcmVhdGVOZXdQcm9qZWN0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==