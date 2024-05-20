import { projectList } from "./newProject"

export let taskList = []

export class Task {
    constructor(project, title, description, date, priority) {
        this.project = project
        this.title = title
        this.description = description
        this.date = date
        this.priority = priority
        this.completed = false
    }

    // Method to toggle task completion status
    toggleCompleted() {
        this.completed = !this.completed
    }
}

export function addTaskToTaskList(task) {
    taskList.push(task)
}

// Function to update task status in both taskList and project tasks
export function updateTaskCompletion(task) {
    // Update the task in the taskList
    const taskInList = taskList.find(t => t === task)
    if (taskInList) {
        taskInList.completed = task.completed
    }

    // Update the task in the respective project's task list
    const project = projectList.find(p => p.title === task.project)
    if (project) {
        const taskInProject = project.tasks.find(t => t === task)
        if (taskInProject) {
            taskInProject.completed = task.completed
        }
    }
}

// Function to toggle task completion status in both taskList and project tasks
export function toggleTaskCompletion(task) {
    task.toggleCompleted()
    updateTaskCompletion(task)
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
                "19-05-2024",
                "High"
            )
        }
    }
}

export function updateTaskList(updatedTaskList) {
    taskList = updatedTaskList
}