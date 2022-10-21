import { openNewTask } from "./newTask";
import fillProjectModal from "./openProjectModal";
import openTaskDetails from "./details";
import keyPressed from "./keyboardkeys";
import openEditTask from "./editTask";
import { openEditProject } from "./editProject";
import { openEraseProject } from "./eraseProject";
import { openEraseTask } from "./eraseTask";
import toggleMenu from "./menuBtn";

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const sidebarModalItems = document.querySelectorAll(".modal-sidebar-item");
const openProjectButton = document.querySelector("#newProjectBtn");
const openTaskButton = document.querySelector("#newTaskBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");
const editTaskBtn = document.querySelector(".edit-task-button");
const menuBtn = document.querySelector(".menu-btn");

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function openProjectModal() {
  if (menuBtn.classList.contains("open")) {
    toggleMenu();
  }
  modal.classList.add("active");
  overlay.classList.add("active");
  fillProjectModal();
  window.addEventListener("keydown", keyPressed);
}

export function openTaskModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  openNewTask();
  window.addEventListener("keydown", keyPressed);
}

export function openDetailsModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const taskDetailTitle =
    e.composedPath()[2].children[0].lastElementChild.innerText;

  openTaskDetails(taskDetailTitle);
  window.addEventListener("keydown", keyPressed);
}

export function openEditTaskModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const taskTitle = e.composedPath()[3].children[0].lastElementChild.innerText;

  openEditTask(taskTitle);
  window.addEventListener("keydown", keyPressed);
}

export function openEditProjectModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const projectTitle =
    e.composedPath()[2].children[0].lastElementChild.innerText;

  openEditProject(projectTitle);
  window.addEventListener("keydown", keyPressed);
}

export function openEraseProjectModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const projectTitle =
    e.composedPath()[2].children[0].lastElementChild.innerText;

  openEraseProject(projectTitle);
  window.addEventListener("keydown", keyPressed);
}

export function openEraseTaskModal(e) {
  modal.classList.add("active");
  overlay.classList.add("active");
  const taskTitle = e.composedPath()[3].children[0].lastElementChild.innerText;

  openEraseTask(taskTitle);
  window.addEventListener("keydown", keyPressed);
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
