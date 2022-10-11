import { taskList, updateTaskList } from "./createNewTask";
import { closeModal, removeAllChildNodes } from "./modal";
import fillPageWithTasks from "./selectedProject";

export let taskListThree;
let task;

function removeAndUpdateTaskList() {
  taskListThree = taskList;

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].title === task) {
      taskListThree = taskListThree.filter((item) => item.title !== task);
      console.log(taskList[i]);
    }
  }

  updateTaskList(taskListThree);
  fillPageWithTasks();
  closeModal();
}

function createFilledEraseTaskModal(taskTitle) {
  const modalContent = document.querySelector(".modal-content");

  // modal-content's first child
  const textDiv = document.createElement("div");
  textDiv.classList.add("erase-task-text");

  // erase task text' first child
  const paragraphOne = document.createElement("p");
  paragraphOne.textContent = "Are you sure?";

  const paragraphTwo = document.createElement("p");
  paragraphTwo.innerHTML = `Task <span class="task-name-deletion">"${taskTitle}"</span> will be gone forever`;

  // modal-content's second child
  const modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");

  const cancelModalBtn = document.createElement("button");
  cancelModalBtn.classList.add("cancel-delete-modal-btn");
  cancelModalBtn.textContent = "Cancel";

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.classList.add("delete-task-btn");
  deleteTaskBtn.textContent = "Delete Task";

  // modal-content div children
  modalContent.appendChild(textDiv);
  modalContent.appendChild(modalButtons);

  // erase task text child
  textDiv.appendChild(paragraphOne);
  textDiv.appendChild(paragraphTwo);

  // modal-buttons children
  modalButtons.appendChild(cancelModalBtn);
  modalButtons.appendChild(deleteTaskBtn);

  return modalContent;
}

export function createEraseTask(taskTitle) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");

  removeAllChildNodes(modalContent);

  modalBody.appendChild(createFilledEraseTaskModal(taskTitle));

  const cancelModalBtn = document.querySelector(".cancel-delete-modal-btn");
  cancelModalBtn.addEventListener("click", closeModal);

  const deleteTaskBtn = document.querySelector(".delete-task-btn");
  deleteTaskBtn.addEventListener("click", removeAndUpdateTaskList);
}

export function openEraseTask(taskTitle) {
  const modalHeader = document.querySelector(".modal-header");
  const modalHeaderText = document.querySelector(".modal-header-text");
  modalHeaderText.textContent = "Delete Task";

  if (!modalHeader.classList.contains("delete-modal-header")) {
    modalHeader.classList.add("delete-modal-header");
  }

  task = taskTitle;
  createEraseTask(taskTitle);
}
