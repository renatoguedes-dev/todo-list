import { projectList } from "./newProject"

export const taskList = []

export class Task {
    constructor(project, title, description, date, priority) {
        this.project = project
        this.title = title
        this.description = description
        this.date = date
        this.priority = priority
        this.completed = false
    }
}

export function addTaskToTaskList(task) {
    taskList.push(task)
}

export function createTask(project, title, description, date, priority) {
    const task = new Task(project, title, description, date, priority)
    addTaskToTaskList(task)
    project.addTask(project.title, title, description, date, priority)

    return task
}

export function createTemplateTask() {
    for (let project of projectList) {
        if (project.title === "Staying Fitness") {
            createTask(
                project,
                "Go to the gym",
                "Work out and lift weights at the gym, 3 times a week",
                "18-05-2024",
                "Low"
            )
        }
    }
}
