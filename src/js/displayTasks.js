import { appendChildren, createDivElement } from "./helperFunctions"
import { icons, projectIcons } from "./images"
import openModal, { removeAllChildNodes } from "./modals"
import { projectList } from "./newProject"
import { taskList } from "./newTask"
import { checkToday } from "./handleDates"

const mainContent = document.querySelector("#mainContent")

export function handleSidebarClick(e) {
    const sidebarNavs = document.querySelectorAll(".sidebar-nav")
    const targetBar = e.currentTarget

    sidebarNavs.forEach((bar) => {
        if (bar.classList.contains("active-section")) {
            bar.classList.remove("active-section")
        }
    })

    targetBar.classList.add("active-section")
    // console.log(targetBar.children[1].textContent);
    displayTasks(targetBar)
    createTasksDiv(taskList)
}

export function displayTasks(target) {
    removeAllChildNodes(mainContent)

    const contentTitle = createDivElement("content-title")
    const tasksDiv = createDivElement("tasks-div")

    // build this div if the clicked sidebar is a project
    if (target.classList.contains("projects-nav")) {
        const targetTitle = target.children[0].children[1].textContent
        for (let project of projectList) {
            if (project.title === targetTitle) {
                contentTitle.innerHTML = `
                        <img class="content-title-img" src="${project.icon.src}" alt="${project.icon.alt}">
                        <h1 class="content-title-text">${project.title}</h1>
                    `
                break
            }
        }
    } else {
        // build this div if the clicked sidebar is not a project
        const targetTitle = target.children[1].textContent
        createTasksDiv(taskList, targetTitle)
    }
}

function createTasksDiv(taskList, target) {
    // create a copy of the original taskList to manipulate it
    // const copyTaskList = taskList.map((x) => x)
    const contentTitle = createDivElement("content-title")
    const tasksDiv = createDivElement("tasks-div")

    switch (target) {
        case "All": {
            createStartingTasksDiv()
            break
        }

        case "Today": {
            const copyTaskList = taskList.filter((task) => {
                const isToday = checkToday(task.date)
                if (isToday) {
                    return task
                }
            })

            for (let icon of icons) {
                if (icon.name === "Today") {
                    contentTitle.innerHTML = `
                        <img class="content-title-img" src="${icon.src}" alt="${icon.alt}">
                        <h1 class="content-title-text">${icon.name}</h1>
                    `
                    const taskTitle = createDivElement("tasks-title")
                    taskTitle.id = "taskTitle"
                    taskTitle.innerHTML = `
                        <p>Tasks (<span class="tasks-count">${copyTaskList.length}</span>)</p>
                        <div data-modal-target="#modal" id="newTaskBtn" class="new-task-button">
                            <p>+</p>
                        </div>
                    `
                    appendChildren(tasksDiv, taskTitle)

                    for (let task of copyTaskList) {
                        const content = createDivElement("content")
                        content.id = "content"
                        content.innerHTML = `
                            <div class="left-content">
                            <label class="container">
                                <input type="checkbox" class="checkbox" name="checkbox">
                                <span class="checkmark"></span>
                            </label>

                            <p>${task.title}</p>
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
                        appendChildren(tasksDiv, content)
                    }

                    appendChildren(mainContent, contentTitle, tasksDiv)

                    const newTaskBtn = document.querySelector("#newTaskBtn")
                    newTaskBtn.addEventListener("click", openModal)
                }
            }

            break
        }

        default:
            break
    }
}

export function createStartingTasksDiv() {
    removeAllChildNodes(mainContent)

    const contentTitle = createDivElement("content-title")
    const tasksDiv = createDivElement("tasks-div")
    contentTitle.innerHTML = `
            <img class="content-title-img" src="./assets/calendar-month-outline.svg" alt="month calendar">
            <h1 class="content-title-text">All</h1>
        `

    appendTaskTitle(tasksDiv, taskList.length)
    taskList.filter(task => !task.completed).forEach(task => {
        appendChildren(tasksDiv, createTaskContent(task))
    })


    appendChildren(mainContent, contentTitle, tasksDiv)

    const newTaskBtn = document.querySelector("#newTaskBtn")
    newTaskBtn.addEventListener("click", openModal)
}

function appendTaskTitle(tasksDiv, taskCount) {
    const taskTitle = createDivElement("tasks-title")
    taskTitle.id = "taskTitle"
    taskTitle.innerHTML = `
        <p>Tasks (<span class="tasks-count">${taskCount}</span>)</p>
        <div data-modal-target="#modal" id="newTaskBtn" class="new-task-button">
            <p>+</p>
        </div>
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
            <p>${task.title}</p>
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
