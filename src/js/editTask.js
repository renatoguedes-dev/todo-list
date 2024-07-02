import { addNewTask, checkFields } from "./addTask";
import createTaskModal from "./createTaskModal";
import { displayTasks, selectedSidebarNav } from "./displayTasks";
import { dateFormatToTasks, formatTaskDate } from "./handleDates";
import keyPressed from "./keyboardKeys";
import { closeModal } from "./modals";
import { projectList } from "./newProject";
import { taskList } from "./newTask";

const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
let oldTitle;

export function openEditTaskModal(e) {
    modal.classList.toggle("active");
    overlay.classList.toggle("active");
    createTaskModal();

    const taskTitle = e.composedPath()[3].children[0].children[1].innerText;

    updateTaskModal(taskTitle);

    window.addEventListener("keydown", keyPressed);
}

function updateTaskModal(title) {
    // change the header text to Edit Task
    const modalHeader = document.querySelector(".modal-header-text");
    modalHeader.textContent = "Edit Task";

    // locate the task to be edited on the taskList
    const taskToEdit = taskList.find((task) => task.title === title);

    // fill the fields with the task's values
    const taskTitleDiv = document.querySelector("#task-title");
    taskTitleDiv.value = taskToEdit.title;
    oldTitle = taskToEdit.title;

    const taskDescriptionDiv = document.querySelector("#task-description");
    taskDescriptionDiv.value = taskToEdit.description;

    const dueDateDiv = document.querySelector("#todo-date");
    const taskDateString = taskToEdit.date;
    const taskDate = dateFormatToTasks(taskDateString);
    dueDateDiv.value = taskDate;

    const priorityBtns = document.querySelectorAll(".priority-buttons");
    const taskPriority = taskToEdit.priority;

    priorityBtns.forEach((button) => {
        if (button.innerText === taskPriority) {
            button.classList.add("active-priority");
        }
    });

    const addTodoBtn = document.querySelector(".add-todo-btn");
    addTodoBtn.textContent = "Edit Task";
    addTodoBtn.removeEventListener("click", addNewTask);
    addTodoBtn.addEventListener("click", updateTask);
}

function updateTask() {
    console.log(taskList);
    // collect the values input by the user
    const taskTitleDiv = document.querySelector("#task-title");
    const title = taskTitleDiv.value;

    const taskDescriptionDiv = document.querySelector("#task-description");
    const descriptionText = taskDescriptionDiv.value;

    const dueDateDiv = document.querySelector("#todo-date");
    const taskDate = dueDateDiv.value;

    const priorityBtns = document.querySelectorAll(".priority-buttons");
    let taskPriority;
    priorityBtns.forEach((button) => {
        if (button.classList.contains("active-priority")) {
            taskPriority = button.textContent;
        }
    });

    // check if there are no empty fields
    const isChecked = checkFields(
        title,
        descriptionText,
        taskDate,
        taskPriority
    );

    // return if there is any empty field and dont update
    if (!isChecked) {
        return;
    }

    // format the date to the websites' format
    const formattedDate = formatTaskDate(taskDate);

    // edit the task inside the project list
    projectList.forEach((project) => {
        project.tasks.forEach((task) => {
            if (task.title === oldTitle) {
                task.title = title;
                task.description = descriptionText;
                task.date = formattedDate;
                task.priority = taskPriority;
            }
        });
    });

    // edit task from taskList
    for (let task of taskList) {
        if (task.title === oldTitle) {
            task.title = title;
            task.description = descriptionText;
            task.date = formattedDate;
            task.priority = taskPriority;
            break;
        }
    }

    closeModal();
    // select the same sidebar that was selected before editing
    selectSameSidebar();

    console.log(taskList);
}

function selectSameSidebar() {
    const sidebarNavs = document.querySelectorAll(".sidebar-nav");
    let activeSidebar;

    sidebarNavs.forEach((sidebar) => {
        if (sidebar.innerText === selectedSidebarNav) {
            activeSidebar = sidebar;
        }
    });

    displayTasks(activeSidebar);
}
