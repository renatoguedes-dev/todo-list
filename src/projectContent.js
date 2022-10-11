export const contentTitleText = document.querySelector(".content-title-text");

// eslint-disable-next-line import/prefer-default-export
export function createProjectTitle(e) {
  const contentTitleImg = document.querySelector(".content-title-img");
  let imgElement;
  const selectedProject = e.composedPath();

  // if user clicks on the calendar img element at the sidebar
  if (
    selectedProject[0].innerText === "" &&
    selectedProject[1].innerText === ""
  ) {
    contentTitleText.innerText = selectedProject[2].innerText;
  }
  // if the user clicks on the p element or the div element at the sidebar
  if (selectedProject[0].innerText !== "") {
    contentTitleText.innerText = selectedProject[0].innerText;
  }

  // if the user clicks the p element at the sidebar and it's not a project
  if (
    selectedProject[0].tagName === "P" &&
    selectedProject[0].className !== "project-name"
  ) {
    imgElement = selectedProject[1].firstElementChild.firstElementChild;
  }

  // if the user clicks the img element at the sidebar and it's not a project
  if (
    selectedProject[0].tagName === "IMG" &&
    selectedProject[1].className === "sidebar-link"
  ) {
    imgElement = selectedProject[0];
  }

  // if the user clicks the div element at the sidebar and it's not a project
  if (
    selectedProject[0].tagName === "DIV" &&
    !selectedProject[0].classList.contains("projects-nav")
  ) {
    imgElement = selectedProject[0].firstElementChild.firstElementChild;
  }

  if (
    selectedProject[0].tagName === "P" &&
    selectedProject[0].className === "project-name"
  ) {
    imgElement = selectedProject[1].firstElementChild;
  }

  if (
    selectedProject[0].tagName === "IMG" &&
    (selectedProject[0].className !== "edit-project-button" ||
      selectedProject[0].className !== "erase-project-button") &&
    selectedProject[3].className === "projects"
  ) {
    imgElement = selectedProject[0];
  }

  if (
    selectedProject[0].tagName === "IMG" &&
    (selectedProject[0].className === "erase-project-button" ||
      selectedProject[0].className === "edit-project-button") &&
    selectedProject[3].className === "projects"
  ) {
    imgElement = selectedProject[2].firstElementChild.firstElementChild;
  }

  if (
    selectedProject[0].tagName === "DIV" &&
    selectedProject[0].classList.contains("projects-nav")
  ) {
    imgElement = selectedProject[0].firstElementChild.firstElementChild;
  }

  if (imgElement.alt === "month calendar") {
    contentTitleImg.src = "./images/calendar-month-outline.svg";
  } else if (imgElement.alt === "day calendar") {
    contentTitleImg.src = "./images/calendar-today-outline.svg";
  } else if (imgElement.alt === "week calendar") {
    contentTitleImg.src = "./images/calendar-week-outline.svg";
  } else if (imgElement.alt === "calendar with alert") {
    contentTitleImg.src = "./images/calendar-alert-outline.svg";
  } else if (imgElement.alt === "calendar with checkmark") {
    contentTitleImg.src = "./images/calendar-check-outline.svg";
  }

  if (imgElement.alt === "a wrench and a screwdriver crossed") {
    contentTitleImg.src =
      "./images/projects-icons/wrench-screwdriver-crossed.svg";
  } else if (imgElement.alt === "a book icon") {
    contentTitleImg.src = "./images/projects-icons/book.svg";
  } else if (imgElement.alt === "a bag of money icon") {
    contentTitleImg.src = "./images/projects-icons/money-bag.svg";
  } else if (imgElement.alt === "a pizza slice icon") {
    contentTitleImg.src = "./images/projects-icons/pizza-slice.svg";
  } else if (imgElement.alt === "a present box icon") {
    contentTitleImg.src = "./images/projects-icons/present-box.svg";
  } else if (imgElement.alt === "a volleyball ball icon") {
    contentTitleImg.src = "./images/projects-icons/volleyball-ball.svg";
  } else if (imgElement.alt === "a person holding two dumbbells icon") {
    contentTitleImg.src = "./images/projects-icons/dumbbells-exercise.svg";
  }

  return contentTitleText;
}