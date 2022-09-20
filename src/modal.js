const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const sidebarModalItems = document.querySelectorAll(".modal-sidebar-item");

export function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
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

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
