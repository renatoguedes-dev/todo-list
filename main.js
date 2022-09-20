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
const sidebarItems = document.querySelectorAll(".sidebar-nav");

function checkClassList() {
  for (let i = 0; i < sidebarItems.length; i++) {
    if (sidebarItems[i].classList.contains("active-section")) {
      sidebarItems[i].classList.remove("active-section");
    }
  }
}

function addClassList(e) {
  const sidebarClicked = e.target;

  if (!sidebarClicked.classList.contains("active-section")) {
    checkClassList();
    sidebarClicked.classList.add("active-section");
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
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _newtodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newtodo */ "./src/newtodo.js");
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */




const openModalButton = document.querySelector("#newTodoBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");
const sidebarModalItems = document.querySelectorAll(".modal-sidebar-item");
const overlay = document.getElementById("overlay");
const sidebarItems = document.querySelectorAll(".sidebar-nav");

openModalButton.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.openModal);
closeModalButton.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.closeModal);
overlay.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.closeModal);

sidebarModalItems.forEach((sidebarModalItem) =>
  sidebarModalItem.addEventListener("click", _newtodo__WEBPACK_IMPORTED_MODULE_2__["default"])
);

sidebarItems.forEach((sidebarItem) =>
  sidebarItem.addEventListener("click", _sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25DaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWlCO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ2dEO0FBQ1g7QUFDRDtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw2Q0FBUztBQUNuRCwyQ0FBMkMsOENBQVU7QUFDckQsa0NBQWtDLDhDQUFVO0FBQzVDO0FBQ0E7QUFDQSw2Q0FBNkMsZ0RBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdEQUFZO0FBQ3BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXd0b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XHJcbmNvbnN0IHNpZGViYXJNb2RhbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1zaWRlYmFyLWl0ZW1cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDbGFzc0xpc3QoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlYmFyTW9kYWxJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHNpZGViYXJNb2RhbEl0ZW1zW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1zZWN0aW9uXCIpKSB7XHJcbiAgICAgIHNpZGViYXJNb2RhbEl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNb2RhbENsYXNzTGlzdChlKSB7XHJcbiAgY29uc3Qgc2lkZWJhck1vZGFsQ2xpY2tlZCA9IGUudGFyZ2V0O1xyXG5cclxuICBpZiAoIXNpZGViYXJNb2RhbENsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgIGNoZWNrQ2xhc3NMaXN0KCk7XHJcbiAgICBzaWRlYmFyTW9kYWxDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xyXG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkTW9kYWxDbGFzc0xpc3QsIHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VG9kbygpIHtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBuZXdUb2RvVGl0bGUubmFtZSA9IFwibmV3LXRvZG8tdGl0bGVcIjtcclxuICBuZXdUb2RvVGl0bGUuaWQgPSBcIm5ldy10b2RvLXRpdGxlXCI7XHJcbiAgbmV3VG9kb1RpdGxlLm1heExlbmd0aCA9IFwiNDBcIjtcclxuICBuZXdUb2RvVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBlLmcgUGF5IGZvciB0aGUgaW50ZXJuZXRcIjtcclxuXHJcbiAgY29uc3QgbmV3VG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbmV3VG9kb0RldGFpbHMubmFtZSA9IFwibmV3LXRvZG8tZGV0YWlsc1wiO1xyXG4gIG5ld1RvZG9EZXRhaWxzLmlkID0gXCJuZXctdG9kby1kZXRhaWxzXCI7XHJcbiAgbmV3VG9kb0RldGFpbHMucGxhY2Vob2xkZXIgPSBcIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWRhdGVcIik7XHJcblxyXG4gIGNvbnN0IG5ld0RhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXdEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwibmV3LWRhdGUtdGV4dFwiKTtcclxuICBuZXdEYXRlVGV4dC50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6XCI7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGRhdGVJbnB1dC5uYW1lID0gXCJ0b2RvLWRhdGVcIjtcclxuICBkYXRlSW5wdXQuaWQgPSBcIm5ldy10b2RvLWRhdGVcIjtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eUxpbmUuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWxpbmVcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS10ZXh0XCIpO1xyXG4gIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25zXCIpO1xyXG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuXHJcbiAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xyXG5cclxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcclxuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvbnNcIik7XHJcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNyZWF0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWJ0blwiKTtcclxuICBjcmVhdGVUb2RvQnRuLnRleHRDb250ZW50ID0gXCJDUkVBVEUgVE8gRE9cIjtcclxuXHJcbiAgLy8gbW9kYWwtY29udGVudCBkaXYgY2hpbGRyZW5cclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VG9kb1RpdGxlKTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VG9kb0RldGFpbHMpO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMaW5lKTtcclxuXHJcbiAgLy8gbmV3LXRvZG8tZGF0ZSBkaXYgY2hpbGRyZW5cclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKG5ld0RhdGVUZXh0KTtcclxuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gIC8vIHByaW9yaXR5IGxpbmUgZGl2IGNoaWxkcmVuXHJcblxyXG4gIHByaW9yaXR5TGluZS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XHJcbiAgcHJpb3JpdHlMaW5lLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9CdG4pO1xyXG5cclxuICAvLyBwcmlvcml0eSBkaXYgY2hpbGRyZW5cclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xyXG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3Blbk5ld1RvZG8oZSkge1xyXG4gIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XHJcbiAgY29uc3Qgc2lkZWJhck1vZGFsQ2xpY2tlZCA9IGUudGFyZ2V0O1xyXG4gIGNvbnN0IHNlY3Rpb25DbGlja2VkID0gZS50YXJnZXQuaW5uZXJUZXh0O1xyXG5cclxuICByZW1vdmVBbGxDaGlsZE5vZGVzKG1vZGFsQ29udGVudCk7XHJcbiAgaWYgKFxyXG4gICAgc2VjdGlvbkNsaWNrZWQgPT09IFwiVG8gZG9cIiAmJlxyXG4gICAgIXNpZGViYXJNb2RhbENsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIilcclxuICApIHtcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjcmVhdGVOZXdUb2RvKCkpO1xyXG4gIH1cclxuICBhZGRNb2RhbENsYXNzTGlzdChlKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsQ29udGVudDtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xyXG5jb25zdCBzaWRlYmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItbmF2XCIpO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tDbGFzc0xpc3QoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlYmFySXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzaWRlYmFySXRlbXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXNlY3Rpb25cIikpIHtcclxuICAgICAgc2lkZWJhckl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZENsYXNzTGlzdChlKSB7XHJcbiAgY29uc3Qgc2lkZWJhckNsaWNrZWQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKCFzaWRlYmFyQ2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtc2VjdGlvblwiKSkge1xyXG4gICAgY2hlY2tDbGFzc0xpc3QoKTtcclxuICAgIHNpZGViYXJDbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKTtcclxuICB9XHJcbn1cclxuXHJcbnNpZGViYXJJdGVtcy5mb3JFYWNoKChzaWRlYmFySXRlbSkgPT5cclxuICBzaWRlYmFySXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQ2xhc3NMaXN0KVxyXG4pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmN0aW9uLXBhcmVuLW5ld2xpbmUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcGxpY2l0LWFycm93LWxpbmVicmVhayAqL1xyXG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xyXG5pbXBvcnQgYWRkQ2xhc3NMaXN0IGZyb20gXCIuL3NpZGViYXJcIjtcclxuaW1wb3J0IG9wZW5OZXdUb2RvIGZyb20gXCIuL25ld3RvZG9cIjtcclxuXHJcbmNvbnN0IG9wZW5Nb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VG9kb0J0blwiKTtcclxuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxDbG9zZUJ0blwiKTtcclxuY29uc3Qgc2lkZWJhck1vZGFsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsLXNpZGViYXItaXRlbVwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcclxuY29uc3Qgc2lkZWJhckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLW5hdlwiKTtcclxuXHJcbm9wZW5Nb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcclxuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XHJcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xyXG5cclxuc2lkZWJhck1vZGFsSXRlbXMuZm9yRWFjaCgoc2lkZWJhck1vZGFsSXRlbSkgPT5cclxuICBzaWRlYmFyTW9kYWxJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTmV3VG9kbylcclxuKTtcclxuXHJcbnNpZGViYXJJdGVtcy5mb3JFYWNoKChzaWRlYmFySXRlbSkgPT5cclxuICBzaWRlYmFySXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQ2xhc3NMaXN0KVxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=