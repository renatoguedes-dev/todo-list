import openNewTask from "./newTaskButton";
import fillProjectModal from "./openProjectModal";

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const sidebarModalItems = document.querySelectorAll(".modal-sidebar-item");
const openProjectButton = document.querySelector("#newProjectBtn");
const openTaskButton = document.querySelector("#newTaskBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function openProjectModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  fillProjectModal();
}

export function openTaskModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  openNewTask();
}

export function closeModal() {
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

export function addModalClassList(e) {
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
