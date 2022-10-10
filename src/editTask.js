import { removeAllChildNodes, closeModal } from "./modal";
import { handlePrioritySelected } from "./newTask";
import { taskList } from "./createNewTask";
import fillPageWithTasks from "./selectedProject";

let taskName;

function createFilledTask(
  taskName,
  taskDescription,
  dueDateInfo,
  priorityInfo
) {
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
  input.value = taskName;

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
  inputTwo.value = taskDescription;

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
  dateInput.valueAsDate = dueDateInfo;

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

  if (priorityInfo === lowPriority.textContent) {
    lowPriority.classList.add("active-priority");
  } else if (priorityInfo === mediumPriority.textContent) {
    mediumPriority.classList.add("active-priority");
  } else if (priorityInfo === highPriority.textContent) {
    highPriority.classList.add("active-priority");
  }

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
  createTodoBtn.textContent = "Edit Task";

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

function editTask() {
  const title = document.getElementById("task-title").value;
  const details = document.getElementById("task-details").value;
  let taskDueDate = document.querySelector("#todo-date").valueAsDate;
  const taskFullDueDate = document.querySelector("#todo-date").valueAsDate;
  let priority = document.querySelector(".active-priority");

  const modalTitleError = document.querySelector(".modal-title-error");
  const modalDetailsError = document.querySelector(".modal-details-error");
  const modalDateError = document.querySelector(".modal-date-error");
  const modalPriorityError = document.querySelector(".modal-priority-error");

  // Title, details, date and priority not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    return;
  }

  // Title filled. Details, date and priority not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Details filled. Title, date and priority not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Date filled. Title, details and priority not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Priority filled. Title, details and date not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Title and details filled. Date and priority not filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Title and date filled. Details and priority not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalDetailsError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Title and priority filled. Details and date not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Details and date filled. Title and priority not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Details and priority filled. Title and date not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Date and priority filled. Title and details not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Title not filled. Details, date and priority filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Details not filled. Title, date and priority filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalDetailsError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Date not filled. Title, details and priority filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalDateError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Priority not filled. Title, details and date filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalPriorityError.classList.remove("hide");
    if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  if (taskDueDate !== null) {
    taskDueDate = taskDueDate.toLocaleDateString();
  }

  if (priority !== null) {
    priority = priority.textContent;
  }

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].title === taskName) {
      taskList[i].title = title;
      taskList[i].details = details;
      taskList[i].date = taskDueDate;
      taskList[i].fullDate = taskFullDueDate;
      taskList[i].priority = priority;
      console.log(taskList[i]);
    }
  }

  closeModal();
  fillPageWithTasks();
}

function openFilledTask(taskName, taskDescription, dueDateInfo, priorityInfo) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");

  removeAllChildNodes(modalContent);
  modalBody.appendChild(
    createFilledTask(taskName, taskDescription, dueDateInfo, priorityInfo)
  );

  const selectPriorities = document.querySelectorAll(".priority-buttons");
  selectPriorities.forEach((selectPriority) =>
    selectPriority.addEventListener("click", handlePrioritySelected)
  );

  const cancelModalBtn = document.querySelector(".cancel-modal-btn");
  cancelModalBtn.addEventListener("click", closeModal);

  const addTaskBtn = document.querySelector(".add-todo-btn");
  addTaskBtn.addEventListener("click", editTask);
}

function createEditTask(taskTitle) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskTitle === taskList[i].title) {
      taskName = taskList[i].title;
      const taskDescription = taskList[i].details;
      const dueDateInfo = taskList[i].fullDate;
      const priorityInfo = taskList[i].priority;

      openFilledTask(taskName, taskDescription, dueDateInfo, priorityInfo);
    }
  }
}

export default function openEditTask(taskTitle) {
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Edit task";

  createEditTask(taskTitle);
}
