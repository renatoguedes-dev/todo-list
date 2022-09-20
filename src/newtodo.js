import { addModalClassList, removeAllChildNodes } from "./modal";

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

export default function openNewTodo(e) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const sidebarModalClicked = e.target;
  const sectionClicked = e.target.innerText;

  removeAllChildNodes(modalContent);
  if (
    sectionClicked === "To do" &&
    !sidebarModalClicked.classList.contains("active-section")
  ) {
    modalBody.appendChild(createNewTodo());
  }
  addModalClassList(e);

  return modalContent;
}
