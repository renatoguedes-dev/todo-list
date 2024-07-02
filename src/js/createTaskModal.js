import { closeModal, removeAllChildNodes } from "./modals";
import {
    createDivElement,
    createLabelElement,
    createInputElement,
    createParagraphElement,
    createButtonElement,
    appendChildren,
} from "./helperFunctions";
import { addNewTask } from "./addTask";

export let ContentTitleText;

export default function createTaskModal() {
    const modalContent = document.querySelector(".modal-content");
    const modalHeaderDiv = document.querySelector(".modal-header");
    modalHeaderDiv.classList.remove("delete-modal-header");
    const modalHeader = document.querySelector(".modal-header-text");
    modalHeader.textContent = "Create a new task";
    removeAllChildNodes(modalContent);

    // Create the form
    const form = document.createElement("form");
    form.action = "#";

    // First Fields Div
    const firstFieldsDiv = createDivElement("fields");
    const titleLabel = createLabelElement("task-title", "Title");
    const titleInput = createInputElement("text", "task-title", "task-title");
    const titleError = createParagraphElement(
        "Please fill out this field.",
        "modal-title-error",
        "hide"
    );

    // Second Fields Div
    const secondFieldsDiv = createDivElement("fields", "task-description");
    const descriptionLabel = createLabelElement(
        "task-description",
        "Description"
    );
    const descriptionInput = document.createElement("textarea");
    descriptionInput.name = "task-description";
    descriptionInput.id = "task-description";
    const descriptionError = createParagraphElement(
        "Please fill out this field.",
        "modal-details-error",
        "hide"
    );

    // Date Div
    const dateDiv = createDivElement("new-todo-date");
    const dateLabel = createLabelElement(
        "todo-date",
        "Due date",
        "new-date-text"
    );
    const dateInput = createInputElement("date", "todo-date", "todo-date");
    const dateError = createParagraphElement(
        "Please choose a date.",
        "modal-date-error",
        "hide"
    );

    // Priority Div
    const priorityLine = createDivElement("priority-line");
    const priorityDiv = createDivElement("priority");
    const priorityText = createDivElement("priority-text");
    priorityText.textContent = "Priority";
    const lowPriority = createDivElement("low", "priority-buttons");
    lowPriority.textContent = "Low";
    const mediumPriority = createDivElement("medium", "priority-buttons");
    mediumPriority.textContent = "Medium";
    const highPriority = createDivElement("high", "priority-buttons");
    highPriority.textContent = "High";
    const priorityError = createParagraphElement(
        "Please select the priority.",
        "modal-priority-error",
        "hide"
    );

    // Create modal buttons div
    const createTodoBtnDiv = createDivElement("modal-buttons");
    const cancelModalBtn = createButtonElement("Cancel", "cancel-modal-btn");
    const createTodoBtn = createButtonElement("Create Task", "add-todo-btn");

    // Assemble the form
    appendChildren(firstFieldsDiv, titleLabel, titleInput, titleError);
    appendChildren(
        secondFieldsDiv,
        descriptionLabel,
        descriptionInput,
        descriptionError
    );
    appendChildren(dateDiv, dateLabel, dateInput, dateError);
    appendChildren(
        priorityDiv,
        priorityText,
        lowPriority,
        mediumPriority,
        highPriority
    );
    appendChildren(createTodoBtnDiv, cancelModalBtn, createTodoBtn);

    appendChildren(form, firstFieldsDiv, secondFieldsDiv);
    appendChildren(priorityLine, priorityDiv, priorityError, createTodoBtnDiv);

    appendChildren(modalContent, form, dateDiv, priorityLine);

    const priorityBtns = document.querySelectorAll(".priority-buttons");
    priorityBtns.forEach((div) => {
        div.addEventListener("click", handlePriority);
    });
    cancelModalBtn.addEventListener("click", closeModal);
    createTodoBtn.addEventListener("click", addNewTask);
    const ContentTitleTextElement = document.querySelector(
        ".content-title-text"
    );
    ContentTitleText = ContentTitleTextElement.textContent;

    return modalContent;
}

function handlePriority(e) {
    const targetDiv = e.currentTarget;
    const priorityBtns = document.querySelectorAll(".priority-buttons");
    priorityBtns.forEach((div) => {
        div.classList.toggle("active-priority", div === targetDiv);
    });
}
