// eslint-disable-next-line import/prefer-default-export
export function createProjectTitle(e) {
  const contentTitleText = document.querySelector(".content-title-text");
  const selectedProject = e.path;

  if (
    selectedProject[0].innerText === "" &&
    selectedProject[1].innerText === ""
  ) {
    contentTitleText.innerText = selectedProject[2].innerText;
  } else if (selectedProject[0] !== "") {
    contentTitleText.innerText = selectedProject[0].innerText;
  }
}
