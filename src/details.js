import { removeAllChildNodes } from "./modal";
import { taskList } from "./createNewTask";

function createTaskDetails(taskDetailTitle) {
  const modalContent = document.querySelector(".modal-content");
  for (let i = 0; i < taskList.length; i++) {
    if (taskDetailTitle === taskList[i].title) {
      const projectName = taskList[i].project;
      const taskDescription = taskList[i].details;
      const dueDateInfo = taskList[i].date;
      const priorityInfo = taskList[i].priority;

      // project div with project and project text

      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-detail-div");
      projectDiv.classList.add("details-divs");

      const project = document.createElement("p");
      project.classList.add("details-left-column");
      project.textContent = "Project:";

      const projectText = document.createElement("p");
      projectText.classList.add("details-right-column");
      projectText.textContent = `${projectName}`;

      // title div with title and title text
      const taskTitleDiv = document.createElement("div");
      taskTitleDiv.classList.add("task-title-detail");
      taskTitleDiv.classList.add("details-divs");

      const detailTitle = document.createElement("p");
      detailTitle.classList.add("details-left-column");
      detailTitle.textContent = "Title:";

      const detailTitleText = document.createElement("p");
      detailTitleText.classList.add("details-right-column");
      detailTitleText.textContent = `${taskDetailTitle}`;

      // description div with description and description text
      const detailDescriptionDiv = document.createElement("div");
      detailDescriptionDiv.classList.add("task-description-div");
      detailDescriptionDiv.classList.add("details-divs");

      const detailDescription = document.createElement("p");
      detailDescription.classList.add("details-left-column");
      detailDescription.textContent = "Description:";

      const detailDescriptionText = document.createElement("p");
      detailDescriptionText.classList.add("details-right-column");
      detailDescriptionText.textContent = `${taskDescription}`;

      // due date div with due date and due date info

      const dueDateDiv = document.createElement("div");
      dueDateDiv.classList.add("due-date-div");
      dueDateDiv.classList.add("details-divs");

      const dueDate = document.createElement("p");
      dueDate.classList.add("details-left-column");
      dueDate.textContent = "Due Date:";

      const dueDateText = document.createElement("p");
      dueDateText.classList.add("details-right-column");
      dueDateText.textContent = `${dueDateInfo}`;

      // priority div with priority and priority info

      const priorityDiv = document.createElement("div");
      priorityDiv.classList.add("priority-div");
      priorityDiv.classList.add("details-divs");

      const priority = document.createElement("p");
      priority.classList.add("details-left-column");
      priority.textContent = "Priority:";

      const priorityText = document.createElement("p");
      priorityText.classList.add("details-right-column");
      priorityText.textContent = `${priorityInfo}`;

      modalContent.appendChild(projectDiv);
      modalContent.appendChild(taskTitleDiv);
      modalContent.appendChild(detailDescriptionDiv);
      modalContent.appendChild(dueDateDiv);
      modalContent.appendChild(priorityDiv);

      projectDiv.appendChild(project);
      projectDiv.appendChild(projectText);

      taskTitleDiv.appendChild(detailTitle);
      taskTitleDiv.appendChild(detailTitleText);

      detailDescriptionDiv.appendChild(detailDescription);
      detailDescriptionDiv.appendChild(detailDescriptionText);

      dueDateDiv.appendChild(dueDate);
      dueDateDiv.appendChild(dueDateText);

      priorityDiv.appendChild(priority);
      priorityDiv.appendChild(priorityText);

      return modalContent;
    }
  }
  return modalContent;
}

export default function openTaskDetails(taskDetailTitle) {
  const modalBody = document.querySelector(".modal-body");
  const modalContent = document.querySelector(".modal-content");
  const modalHeader = document.querySelector(".modal-header-text");

  modalHeader.textContent = "Task details";

  removeAllChildNodes(modalContent);

  modalBody.appendChild(createTaskDetails(taskDetailTitle));
}
