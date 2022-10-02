import { removeAllChildNodes, closeModal } from "./modal";
import { addNewProject, handleIconSelected } from "./newProjects";

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

export default function fillProjectModal() {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Create a new project";
  removeAllChildNodes(modalContent);
  modalBody.appendChild(createProjectModal());

  const addProjectBtn = document.querySelector(".add-project-btn");
  const selectedProjectIcons = document.querySelectorAll(".project-icon");
  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
  cancelModalBtn.addEventListener("click", closeModal);
  selectedProjectIcons.forEach((selectedProjectIcon) =>
    selectedProjectIcon.addEventListener("click", handleIconSelected)
  );
  addProjectBtn.addEventListener("click", addNewProject);
}
