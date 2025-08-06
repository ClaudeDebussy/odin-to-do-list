export default class Display {

  createHeader() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const header = document.createElement("div");
    header.setAttribute("class", "header");

    const headerButtonGroup = document.createElement("div");
    headerButtonGroup.setAttribute("class", "header-button-group");

    const newToDoItemButton = document.createElement("button");
    newToDoItemButton.setAttribute("class", "header-button");
    newToDoItemButton.textContent = "Create new task";

    document.body.appendChild(content);
    content.appendChild(header);
    header.appendChild(headerButtonGroup);
    headerButtonGroup.appendChild(newToDoItemButton);
  }
}