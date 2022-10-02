export const contentTitleText = document.querySelector(".content-title-text");

// eslint-disable-next-line import/prefer-default-export
export function createProjectTitle(e) {
  const selectedProject = e.composedPath();

  if (
    selectedProject[0].innerText === "" &&
    selectedProject[1].innerText === ""
  ) {
    contentTitleText.innerText = selectedProject[2].innerText;
  }
  if (selectedProject[0] !== "") {
    contentTitleText.innerText = selectedProject[0].innerText;
  }
  return contentTitleText;
}
