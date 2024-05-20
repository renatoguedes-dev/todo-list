import { Task } from "./newTask"
import { projectIcons } from "./images"
import { displayTasks } from "./displayTasks"

export let projectList = []

export class Project {
    constructor(title, icon) {
        this.title = title
        this.icon = icon
        this.tasks = []
    }

    // add a new task on the project
    addTask(projectTitle, taskTitle, details, date, priority) {
        const task = new Task(projectTitle, taskTitle, details, date, priority)
        this.tasks.push(task)
        return task
    }

    // remove a task from the project
    removeTask(task) {
        this.tasks = this.tasks.filter((t) => t !== task)
    }

    listTasks() {
        return this.tasks
    }
}

export function addProjectToProjectList(project) {
    projectList.push(project)
}

export function createProject(title, icon) {
    const project = new Project(title, icon)
    addProjectToProjectList(project)
}

export function createTemplateProject() {
    projectIcons.forEach((icon) => {
        if (icon.alt === "a person holding two dumbbells icon") {
            createProject("Staying Fitness", icon)
        }
    })
}

export function selectCreatedProject() {
    const sidebarNavs = document.querySelectorAll(".sidebar-nav")
    const projectNavs = document.querySelectorAll(".projects-nav")
    const lastProjectNav = projectNavs[projectNavs.length - 1]
    sidebarNavs.forEach((sidebar) => {
        sidebar.classList.toggle("active-section", sidebar === lastProjectNav)
    })
    displayTasks(lastProjectNav)
}


export function updateProjectList(updatedProjectList) {
    projectList = updatedProjectList
}