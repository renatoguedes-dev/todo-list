import { closeModal } from "./modal";
import { contentTitleText } from "./projectContent";
import fillPageWithTasks from "./selectedProject";

export let taskList = [];

export class Task {
  constructor(project, title, details, date, fullDate, priority) {
    this.project = project;
    this.title = title;
    this.details = details;
    this.date = date;
    this.fullDate = fullDate;
    this.priority = priority;
  }
}

export function addTaskToTasks(task) {
  taskList.push(task);
}

export function updateTaskList(updatedTaskList) {
  taskList = updatedTaskList.map((x) => x);
  console.log(taskList);
  
}

export function addNewTask(e) {
  e.preventDefault();

  const project = contentTitleText.innerText;
  const title = document.getElementById("task-title").value;
  const details = document.getElementById("task-details").value;
  let taskDueDate = document.querySelector("#todo-date").valueAsDate;
  const taskFullDueDate = document.querySelector("#todo-date").valueAsDate;
  let priority = document.querySelector(".active-priority");

  const modalTitleError = document.querySelector(".modal-title-error");
  const modalDetailsError = document.querySelector(".modal-details-error");
  const modalDateError = document.querySelector(".modal-date-error");
  const modalPriorityError = document.querySelector(".modal-priority-error");

  // Title, details, date and priority not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    return;
  }

  // Title filled. Details, date and priority not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Details filled. Title, date and priority not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Date filled. Title, details and priority not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Priority filled. Title, details and date not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Title and details filled. Date and priority not filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate === null &&
    priority === null
  ) {
    modalDateError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Title and date filled. Details and priority not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalDetailsError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Title and priority filled. Details and date not filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalDetailsError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    } else if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Details and date filled. Title and priority not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalTitleError.classList.remove("hide");
    modalPriorityError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Details and priority filled. Title and date not filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDateError.classList.remove("hide");
    if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    }
    return;
  }

  // Date and priority filled. Title and details not filled
  if (
    title === "" &&
    details === "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    modalDetailsError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    }
    return;
  }

  // Title not filled. Details, date and priority filled
  if (
    title === "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalTitleError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    }
    return;
  }

  // Details not filled. Title, date and priority filled
  if (
    title !== "" &&
    details === "" &&
    taskDueDate !== null &&
    priority !== null
  ) {
    modalDetailsError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Date not filled. Title, details and priority filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate === null &&
    priority !== null
  ) {
    modalDateError.classList.remove("hide");
    if (!modalPriorityError.classList.contains("hide")) {
      modalPriorityError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  // Priority not filled. Title, details and date filled
  if (
    title !== "" &&
    details !== "" &&
    taskDueDate !== null &&
    priority === null
  ) {
    modalPriorityError.classList.remove("hide");
    if (!modalDateError.classList.contains("hide")) {
      modalDateError.classList.add("hide");
    } else if (!modalDetailsError.classList.contains("hide")) {
      modalDetailsError.classList.add("hide");
    } else if (!modalTitleError.classList.contains("hide")) {
      modalTitleError.classList.add("hide");
    }
    return;
  }

  if (taskDueDate !== null) {
    taskDueDate = taskDueDate.toLocaleDateString();
  }

  if (priority !== null) {
    priority = priority.textContent;
  }

  const taskAdded = new Task(
    project,
    title,
    details,
    taskDueDate,
    taskFullDueDate,
    priority
  );

  addTaskToTasks(taskAdded);
  closeModal();
  fillPageWithTasks();
}
