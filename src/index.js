/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { openModal, closeModal } from "./modal";
import addClassList from "./sidebar";
import openNewTodo from "./newtodo";

const openModalButton = document.querySelector("#newTodoBtn");
const closeModalButton = document.querySelector("#modalCloseBtn");
const sidebarModalItems = document.querySelectorAll(".modal-sidebar-item");
const overlay = document.getElementById("overlay");
const sidebarItems = document.querySelectorAll(".sidebar-nav");

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

sidebarModalItems.forEach((sidebarModalItem) =>
  sidebarModalItem.addEventListener("click", openNewTodo)
);

sidebarItems.forEach((sidebarItem) =>
  sidebarItem.addEventListener("click", addClassList)
);
