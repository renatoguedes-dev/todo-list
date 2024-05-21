import { ContentTitleText } from "./createTaskModal"
import { selectEditProject } from "./editProject"
import { formatTaskDate } from "./handleDates"
import { closeModal } from "./modals"
import { projectList } from "./newProject"
import { createTask } from "./newTask"

export function addNewTask() {
    // grab the values from the divs: title, description and date
    const taskTitle = document.querySelector("#task-title")
    const title = taskTitle.value
    const descriptionDiv = document.querySelector("#task-description")
    const descriptionText = descriptionDiv.value
    const taskDateDiv = document.querySelector("#todo-date")
    const taskDate = taskDateDiv.value
    const priorityBtns = document.querySelectorAll(".priority-buttons")
    let taskPriority = false

    //  set the taskPriority to true if one of the buttons were selected
    priorityBtns.forEach((button) => {
        if (button.classList.contains("active-priority")) {
            taskPriority = button.textContent
        }
    })

    // pass the values to check if the fields are filled
    const isChecked = checkFields(title, descriptionText, taskDate, taskPriority)

    // if all are filled, proceed to create a task
    if (!isChecked) {
        return
    }

    const projectSelected = projectList.find((project) => project.title === ContentTitleText)
    const formattedDate = formatTaskDate(taskDate)

    createTask(projectSelected, title, descriptionText, formattedDate, taskPriority)
    closeModal()
    selectEditProject(ContentTitleText)

}

export function checkFields(title, descriptionText, taskDate, taskPriority) {
    // check if the fields are filled
    const errorTitle = document.querySelector(".modal-title-error")
    if (!title) {
        errorTitle.classList.remove("hide")
        errorTitle.classList.add("show")
    } else {
        errorTitle.classList.add("hide")
        errorTitle.classList.remove("show")
    }

    const errorDetails = document.querySelector(".modal-details-error")
    if (!descriptionText) {
        errorDetails.classList.remove("hide")
        errorDetails.classList.add("show")
    } else {
        errorDetails.classList.add("hide")
        errorDetails.classList.remove("show")
    }
    
    const errorDate = document.querySelector(".modal-date-error")
    if (!taskDate) {
        errorDate.classList.remove("hide")
        errorDate.classList.add("show")
    } else {
        errorDate.classList.add("hide")
        errorDate.classList.remove("show")
    }

    const errorPriority = document.querySelector(".modal-priority-error")
    if (!taskPriority) {
        errorPriority.classList.remove("hide")
        errorPriority.classList.add("show")
    } else {
        errorPriority.classList.add("hide")
        errorPriority.classList.remove("show")
    }


    if (!title || !descriptionText || !taskDate || !taskPriority) {
        return false
    } else {
        return true
    }
}
