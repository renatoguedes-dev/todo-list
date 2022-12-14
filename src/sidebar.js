/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable no-constant-condition */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */

import toggleMenu from "./menuBtn";
import { createProjectTitle } from "./projectContent";
import fillPageWithTasks from "./selectedProject";

let sidebarItems = document.querySelectorAll(".sidebar-nav");
const menuBtn = document.querySelector(".menu-btn");

export function checkClassList() {
  sidebarItems = document.querySelectorAll(".sidebar-nav");

  for (let i = 0; i < sidebarItems.length; i++) {
    if (sidebarItems[i].classList.contains("active-section")) {
      sidebarItems[i].classList.remove("active-section");
    }
  }
}

export function handleSectionSelected(e) {
  e.preventDefault();
  const sidebarClicked = e.target;

  if (
    !sidebarClicked.classList.contains("active-section") &&
    sidebarClicked.classList.contains("sidebar-nav")
  ) {
    checkClassList();
    sidebarClicked.classList.add("active-section");
    createProjectTitle(e);
    fillPageWithTasks();
  } else if (
    sidebarClicked.parentElement.className === "sidebar-nav" ||
    sidebarClicked.parentElement.className === "sidebar-nav projects-nav"
  ) {
    const clicked = sidebarClicked.parentElement;
    if (!clicked.classList.contains("active-section")) {
      checkClassList();
      clicked.classList.add("active-section");
      createProjectTitle(e);
      fillPageWithTasks();
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
      createProjectTitle(e);
      fillPageWithTasks();
    }
  }

  if (menuBtn.classList.contains("open")) {
    toggleMenu();
  }
}

sidebarItems.forEach((sidebarItem) =>
  sidebarItem.addEventListener("click", handleSectionSelected)
);
