import { removeAllChildNodes } from "./modal";

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
  labelTwo.textContent = "Details";

  // second fields div's second child
  const inputTwo = document.createElement("textarea");
  inputTwo.name = "task-details";
  inputTwo.id = "task-details";

  // second fields div's third child
  const paragraphFieldsTwo = document.createElement("p");
  paragraphFieldsTwo.classList.add("modal-title-error");
  paragraphFieldsTwo.classList.add("hide");
  paragraphFieldsTwo.textContent = "Please fill out this field.";

  // const newTodoDetails = document.createElement("textarea");
  // newTodoDetails.name = "new-todo-details";
  // newTodoDetails.id = "new-todo-details";
  // newTodoDetails.placeholder = "Details: e.g internet, phone, rent.";

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

  const createTodoBtnDiv = document.createElement("div");
  createTodoBtnDiv.classList.add("modal-buttons");

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

  // priority line div children

  priorityLine.appendChild(priorityDiv);
  priorityLine.appendChild(createTodoBtnDiv);

  // priority div children
  priorityDiv.appendChild(priorityText);
  priorityDiv.appendChild(lowPriority);
  priorityDiv.appendChild(mediumPriority);
  priorityDiv.appendChild(highPriority);

  // create new task button div child
  createTodoBtnDiv.appendChild(createTodoBtn);

  return modalContent;
}

export default function openNewTask() {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Create a new task";
  removeAllChildNodes(modalContent);
  modalBody.appendChild(createNewTask());

  return modalContent;
}
