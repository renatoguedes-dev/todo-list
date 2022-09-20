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

export default function addClassList(e) {
  const sidebarClicked = e.target;

  if (!sidebarClicked.classList.contains("active-section")) {
    checkClassList();
    sidebarClicked.classList.add("active-section");
  }
}

sidebarItems.forEach((sidebarItem) =>
  sidebarItem.addEventListener("click", addClassList)
);
