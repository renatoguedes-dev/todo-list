import { appendChildren, createDivElement } from "./helperFunctions"
import { icons } from "./images"
import { openModal, removeAllChildNodes } from "./modals"
import { projectList } from "./newProject"
import { taskList, toggleTaskCompletion } from "./newTask"
import { checkToday, checkWeek } from "./handleDates"

const mainContent = document.querySelector("#mainContent")

export function handleSidebarClick(e) {
    const sidebarNavs = document.querySelectorAll(".sidebar-nav")
    const targetBar = e.currentTarget

    sidebarNavs.forEach((sidebar) => {
        sidebar.classList.toggle("active-section", sidebar === targetBar)
    })

    displayTasks(targetBar)
}

export function displayTasks(target) {
    removeAllChildNodes(mainContent)

    const targetTitle = target.classList.contains("projects-nav")
        ? target.children[0].children[1].textContent
        : target.children[1].textContent

    createTasksDiv(taskList, targetTitle)
}

function createTasksDiv(taskList, target) {
    const contentTitle = createDivElement("content-title")
    const tasksDiv = createDivElement("tasks-div")

    let filteredTasks = []
    let icon = null
    let title = target
    let project = null

    switch (target) {
        case "All":
            createStartingTasksDiv()
            return
        case "Today":
            filteredTasks = taskList.filter(
                (task) => checkToday(task.date) && !task.completed
            )
            icon = icons.find((icon) => icon.name === "Today")
            title = icon?.name || target
            break
        case "Week":
            filteredTasks = taskList.filter(
                (task) => checkWeek(task.date) && !task.completed
            )
            icon = icons.find((icon) => icon.name === "Week")
            title = icon?.name || target
            break
        case "Important":
            filteredTasks = taskList.filter(
                (task) => task.priority === "High" && !task.completed
            )
            icon = icons.find((icon) => icon.name === "Important")
            title = icon?.name || target
            break
        case "Completed":
            filteredTasks = taskList.filter((task) => task.completed)
            icon = icons.find((icon) => icon.name === "Completed")
            title = icon?.name || target
            createCompletedTasksDiv(icon, title, filteredTasks)
            setupEventListeners()
            return
        default: {
            project = projectList.find((p) => p.title === target)
            if (project) {
                filteredTasks = taskList.filter(
                    (task) =>
                        task.project.title === project.title && !task.completed
                )
                icon = project.icon
                title = project.title
            }
        }
    }

    if (icon) {
        contentTitle.innerHTML = `
            <img class="content-title-img" src="${icon.src}" alt="${icon.alt}">
            <h1 class="content-title-text">${title}</h1>
        `
    } else {
        contentTitle.innerHTML = `
            <h1 class="content-title-text">${title}</h1>
        `
    }

    if (project) {
        appendTasksTitle(tasksDiv, filteredTasks.length)
    } else {
        appendTasksTitleWithoutTaskBtn(tasksDiv, filteredTasks.length)
    }

    filteredTasks.forEach((task) =>
        appendChildren(tasksDiv, createTaskContent(task))
    )
    appendChildren(mainContent, contentTitle, tasksDiv)
    setupEventListeners()
}

function setupEventListeners() {
    const newTaskBtn = document.querySelector("#newTaskBtn")
    if (newTaskBtn) {
        newTaskBtn.addEventListener("click", openModal)
    }
    const checkboxes = document.querySelectorAll(".checkbox")
    checkboxes.forEach((checkbox) =>
        checkbox.addEventListener("click", toggleCheckmark)
    )
}

export function createStartingTasksDiv() {
    removeAllChildNodes(mainContent)

    const contentTitle = createDivElement("content-title")
    const tasksDiv = createDivElement("tasks-div")
    contentTitle.innerHTML = `
        <img class="content-title-img" src="./assets/calendar-month-outline.svg" alt="month calendar">
        <h1 class="content-title-text">All</h1>
    `
    let filteredTasks = []
    filteredTasks = taskList.filter((task) => !task.completed)

    appendTasksTitleWithoutTaskBtn(tasksDiv, filteredTasks.length)
    taskList
        .filter((task) => !task.completed)
        .forEach((task) => appendChildren(tasksDiv, createTaskContent(task)))

    appendChildren(mainContent, contentTitle, tasksDiv)
    setupEventListeners()
}

function appendTasksTitle(tasksDiv, taskCount) {
    const taskTitle = createDivElement("tasks-title")
    taskTitle.id = "tasksTitle"
    taskTitle.innerHTML = `
        <p>Tasks (<span class="tasks-count">${taskCount}</span>)</p>
        <div data-modal-target="#modal" id="newTaskBtn" class="new-task-button">
            <p>+</p>
        </div>
    `
    appendChildren(tasksDiv, taskTitle)
}

function appendTasksTitleWithoutTaskBtn(tasksDiv, taskCount) {
    const taskTitle = createDivElement("tasks-title")
    taskTitle.id = "tasksTitle"
    taskTitle.innerHTML = `
        <p>Tasks (<span class="tasks-count">${taskCount}</span>)</p>
    `
    appendChildren(tasksDiv, taskTitle)
}

function createTaskContent(task) {
    const content = createDivElement("content")
    content.id = "content"
    content.innerHTML = `
        <div class="left-content">
            <label class="container">
                <input type="checkbox" class="checkbox" name="checkbox">
                <span class="checkmark"></span>
            </label>
            <p class="task-title">${task.title}</p>
        </div>
        <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${task.date}</div>
            <div class="images">
                <img class="edit-task-button" src="./assets/note-edit-outline.png" alt="edit icon">
                <img class="erase-task-button" src="./assets/trash-can-outline.png" alt="trash can icon">
            </div>
        </div>
    `
    return content
}

export function createCompletedTasksDiv(icon, title, filteredTasks) {
    removeAllChildNodes(mainContent)

    const contentTitle = createDivElement("content-title")
    const tasksDiv = createDivElement("tasks-div")
    contentTitle.innerHTML = `
            <img class="content-title-img" src="${icon.src}" alt="${icon.alt}">
            <h1 class="content-title-text">${title}</h1>
        `

    appendTasksTitleWithoutTaskBtn(tasksDiv, filteredTasks.length)
    taskList
        .filter((task) => task.completed)
        .forEach((task) =>
            appendChildren(tasksDiv, createCompletedTaskContent(task))
        )

    appendChildren(mainContent, contentTitle, tasksDiv)
    setupEventListeners()
}

function createCompletedTaskContent(task) {
    const content = createDivElement("content")
    content.id = "content"
    content.innerHTML = `
        <div class="left-content">
            <label class="container">
                <input type="checkbox" class="checkbox" name="checkbox" checked>
                <span class="checkmark"></span>
            </label>
            <p class="task-title completed-task">${task.title}</p>
        </div>
        <div class="right-content">
            <div class="detail">Details</div>
            <div class="due-date">${task.date}</div>
            <div class="images">
                <img class="edit-task-button" src="./assets/note-edit-outline.png" alt="edit icon">
                <img class="erase-task-button" src="./assets/trash-can-outline.png" alt="trash can icon">
            </div>
        </div>
    `
    return content
}

function toggleCheckmark(e) {
    // finds the element with the task name
    const taskClicked = e.composedPath()[2].children[1]

    // selects the classList on the element with the task
    const teste = e.composedPath()[2].children[1].classList

    const task = taskList.find((task) => task.title === taskClicked.textContent)

    toggleTaskCompletion(task)
    teste.toggle("completed-task")
}
