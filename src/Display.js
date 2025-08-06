export default class Display {

  createBodyStructure() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");

    this.createHeader();

    const mainArea = document.createElement("div");
    mainArea.setAttribute("class", "main-area");

    const tasksArea = document.createElement("div");
    tasksArea.setAttribute("class", "tasks-area");
  }
  
  createHeader() {
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

  createSidebar() {    
    const mainArea = document.querySelector(".main-area");
    mainArea.setAttribute("class", "side-bar-open"); // hard-coded for now
  }
}