export const taskList = [];

export class Task {
  constructor(project, title, details, date, priority) {
    this.project = project;
    this.title = title;
    this.details = details;
    this.date = date;
    this.priority = priority;
  }
}

export function addTaskToTasks(task) {
  taskList.push(task);
}
