import { addNewTask } from "./createNewTask";
import { removeAllChildNodes, closeModal } from "./modal";

function createNewTask() {
  const modalContent = document.querySelector(".modal-content");

  // modal-content's first child
  const form = document.createElement("form");
  form.action = "#";

  // form tag's first child
  const firstFieldsDiv = document.createElement("div");
  firstFieldsDiv.classList.add("fields");

  // first fields div's first child
  const label = document.createElement("label");
  label.for = "task-title";
  label.textContent = "Title";
  label.htmlFor = "task-title";

  // first fields div's second child
  const input = document.createElement("input");
  input.type = "text";
  input.name = "task-title";
  input.id = "task-title";

  // first fields div's third child
  const paragraphFields = document.createElement("p");
  paragraphFields.classList.add("modal-title-error");
  paragraphFields.classList.add("hide");
  paragraphFields.textContent = "Please fill out this field.";

  // form tag's second child
  const secondFieldsDiv = document.createElement("div");
  secondFieldsDiv.classList.add("fields");
  secondFieldsDiv.classList.add("task-details");

  // second fields div's first child
  const labelTwo = document.createElement("label");
  labelTwo.for = "task-details";
  labelTwo.textContent = "Description";
  labelTwo.htmlFor = "task-details";

  // second fields div's second child
  const inputTwo = document.createElement("textarea");
  inputTwo.name = "task-details";
  inputTwo.id = "task-details";

  // second fields div's third child
  const paragraphFieldsTwo = document.createElement("p");
  paragraphFieldsTwo.classList.add("modal-details-error");
  paragraphFieldsTwo.classList.add("hide");
  paragraphFieldsTwo.textContent = "Please fill out this field.";

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("new-todo-date");

  const newDateText = document.createElement("label");
  newDateText.classList.add("new-date-text");
  newDateText.textContent = "Due date";
  newDateText.htmlFor = "todo-date";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "todo-date";
  dateInput.id = "todo-date";

  const dateError = document.createElement("p");
  dateError.classList.add("modal-date-error");
  dateError.classList.add("hide");
  dateError.textContent = "Please choose a date.";

  const priorityLine = document.createElement("div");
  priorityLine.classList.add("priority-line");

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("priority");

  const priorityText = document.createElement("div");
  priorityText.classList.add("priority-text");
  priorityText.textContent = "Priority";

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

  const priorityError = document.createElement("p");
  priorityError.classList.add("modal-priority-error");
  priorityError.classList.add("hide");
  priorityError.textContent = "Please select the priority.";

  const createTodoBtnDiv = document.createElement("div");
  createTodoBtnDiv.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-modal-btn");
  cancelModalBtn.textContent = "Cancel";

  const createTodoBtn = document.createElement("button");
  createTodoBtn.classList.add("add-todo-btn");
  createTodoBtn.textContent = "Create Task";

  // modal-content div children

  modalContent.appendChild(form);
  form.appendChild(firstFieldsDiv);
  form.appendChild(secondFieldsDiv);

  // first fields div children
  firstFieldsDiv.appendChild(label);
  firstFieldsDiv.appendChild(input);
  firstFieldsDiv.appendChild(paragraphFields);

  modalContent.appendChild(dateDiv);
  modalContent.appendChild(priorityLine);

  // second fields div children
  secondFieldsDiv.appendChild(labelTwo);
  secondFieldsDiv.appendChild(inputTwo);
  secondFieldsDiv.appendChild(paragraphFieldsTwo);

  // new-todo-date div children
  dateDiv.appendChild(newDateText);
  dateDiv.appendChild(dateInput);
  dateDiv.appendChild(dateError);

  // priority line div children

  priorityLine.appendChild(priorityDiv);
  priorityLine.appendChild(priorityError);
  priorityLine.appendChild(createTodoBtnDiv);

  // priority div children
  priorityDiv.appendChild(priorityText);
  priorityDiv.appendChild(lowPriority);
  priorityDiv.appendChild(mediumPriority);
  priorityDiv.appendChild(highPriority);

  // create new task button div child
  createTodoBtnDiv.appendChild(cancelModalBtn);
  createTodoBtnDiv.appendChild(createTodoBtn);

  return modalContent;
}

function checkPriorityClassList() {
  const selectPriority = document.querySelectorAll(".priority-buttons");

  for (let i = 0; i < selectPriority.length; i++) {
    if (selectPriority[i].classList.contains("active-priority")) {
      selectPriority[i].classList.remove("active-priority");
    }
  }
}

export function handlePrioritySelected(e) {
  e.preventDefault();
  const priorityClicked = e.target;

  if (!priorityClicked.classList.contains("active-priority")) {
    checkPriorityClassList();
    priorityClicked.classList.add("active-priority");
  }
}

export function openNewTask() {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Create a new task";
  removeAllChildNodes(modalContent);
  modalBody.appendChild(createNewTask());

  const selectPriorities = document.querySelectorAll(".priority-buttons");
  selectPriorities.forEach((selectPriority) =>
    selectPriority.addEventListener("click", handlePrioritySelected)
  );

  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
  cancelModalBtn.addEventListener("click", closeModal);

  const addTaskBtn = document.querySelector(".add-todo-btn");
  addTaskBtn.addEventListener("click", addNewTask);
}
