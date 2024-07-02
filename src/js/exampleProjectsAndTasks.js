import { getTodayDate } from "./handleDates";
import { projectIcons } from "./images";
import { createProject } from "./newProject";
import { createTask } from "./newTask";

function createExampleProjectOne() {
    // select first project's icon
    const projectOneIcon = projectIcons.find(
        (icon) => icon.alt === "a wrench and a screwdriver crossed"
    );

    // create first example project
    const projectOne = createProject("Start a Business", projectOneIcon);

    return projectOne;
}

function createExampleProjectTwo() {
    // select second project's icon
    const projectTwoIcon = projectIcons.find(
        (icon) => icon.alt === "a person holding two dumbbells icon"
    );

    // create second example project
    const projectTwo = createProject("Staying Fitness", projectTwoIcon);

    return projectTwo;
}

export function createExampleTaskOne() {
    // create project to use as argument when creating a task
    const project = createExampleProjectOne();

    // create date for today
    const taskDateFormatted = getTodayDate();

    // create first example task
    createTask(
        project,
        "begin renovation of the location",
        "Check craigslist and other websites to find workers",
        taskDateFormatted,
        "Medium"
    );
}

export function createExampleTaskTwo() {
    // create project to use as argument when creating a task
    const project = createExampleProjectTwo();

    // create date for today
    const taskDateFormatted = getTodayDate();

    // create second example task
    createTask(
        project,
        "Go to the gym",
        "Work out and lift weights at the gym, 3 times a week",
        taskDateFormatted,
        "High"
    );
}
