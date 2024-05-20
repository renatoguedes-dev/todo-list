import displayProjects from "./displayProjects"
import { createStartingTasksDiv } from "./displayTasks"
import { projectIcons } from "./images"
import { createProject, createTemplateProject, projectList } from "./newProject"
import { createTask, createTemplateTask } from "./newTask"

const myIcon = projectIcons.find(
    (icon) => icon.alt === "a wrench and a screwdriver crossed"
)

export default function startPage() {
    createTemplateProject()
    createProject("Start a Business", myIcon)
    const myProject = projectList.find(
        (project) => project.title === "Start a Business"
    )
    displayProjects()
    createTemplateTask()
    createTask(
        myProject,
        "Begin renovation of the site",
        "Check craigslist and other website",
        "19-05-2024",
        "Medium"
    )

    createStartingTasksDiv()
}
