export default class Display {

  createBodyStructure() {
    const content = document.createElement("div");
    content.classList.add("content");
    document.body.appendChild(content);

    this.createHeader();

    const mainArea = document.createElement("div");
    mainArea.classList.add("main-area");
    content.appendChild(mainArea);

    const tasksArea = document.createElement("div");
    tasksArea.classList.add("tasks-area");
    mainArea.appendChild(tasksArea);

    this.createSidebar();

    this.createListeners();
  }
  
  createHeader() {
    const content = document.querySelector(".content");
    
    const header = document.createElement("div");
    header.classList.add("header");

    const headerButtonGroup = document.createElement("div");
    headerButtonGroup.classList.add("header-button-group");

    const newToDoItemButton = document.createElement("button");
    newToDoItemButton.classList.add("header-button");
    newToDoItemButton.textContent = "Create new task";
    
    content.appendChild(header);
    header.appendChild(headerButtonGroup);
    headerButtonGroup.appendChild(newToDoItemButton);    
  }   

  createSidebar() {      
    function createFormRow() {
      const formRow = document.createElement("div");
      formRow.classList.add("form-row");
      return formRow
    };
    
    const mainArea = document.querySelector(".main-area");
    mainArea.classList.add("sidebar-closed"); // hard-coded for now

    const sidebarArea = document.createElement("div");
    sidebarArea.classList.add("sidebar-area");
    sidebarArea.classList.add("sidebar-closed");
    mainArea.appendChild(sidebarArea);

    const sidebarHeader = document.createElement("div");
    sidebarHeader.classList.add("sidebar-header");
    sidebarArea.appendChild(sidebarHeader);

    const sidebarHeaderH1 = document.createElement("h1");
    sidebarHeaderH1.classList.add("sidebar-header-title");
    sidebarHeaderH1.textContent = "Create task:"
    sidebarHeader.appendChild(sidebarHeaderH1);

    const closeSidebarButton = document.createElement("button");
    closeSidebarButton.classList.add("close-sidebar-button");
    closeSidebarButton.textContent = "X";
    sidebarHeader.appendChild(closeSidebarButton);

    const newToDoItemForm = document.createElement("form");
    newToDoItemForm.classList.add("new-to-do-item-form");
    sidebarArea.appendChild(newToDoItemForm);

    
    const formRowTitle = createFormRow();
    const formRowDescription = createFormRow();
    const formRowDueDate = createFormRow();
    const formRowPriority = createFormRow();
    const formRowProject = createFormRow();
    const formRowSaveNewToDo = createFormRow();

    sidebarArea.appendChild(formRowTitle);
    sidebarArea.appendChild(formRowDescription);
    sidebarArea.appendChild(formRowDueDate);
    sidebarArea.appendChild(formRowPriority);
    sidebarArea.appendChild(formRowProject);
    sidebarArea.appendChild(formRowSaveNewToDo);

    const formTitleLabel = document.createElement("label");
    formTitleLabel.setAttribute("for","title");
    formTitleLabel.textContent = "Title";
    formRowTitle.appendChild(formTitleLabel);

    const formTitleInput = document.createElement("input");
    formTitleInput.setAttribute("type", "text");
    formTitleInput.setAttribute("name", "title");
    formTitleInput.setAttribute("id", "title");
    formRowTitle.appendChild(formTitleInput);


    const formDescriptionLabel = document.createElement("label");
    formDescriptionLabel.setAttribute("for", "description");
    formDescriptionLabel.textContent = "Description";
    formRowDescription.appendChild(formDescriptionLabel);

    const formDescriptionInput = document.createElement("textarea");
    formDescriptionInput.setAttribute("name", "description");
    formDescriptionInput.setAttribute("id", "description");
    formRowDescription.appendChild(formDescriptionInput);


    const formDueDateLabel = document.createElement("label");
    formDueDateLabel.setAttribute("for", "due-date");
    formDueDateLabel.textContent = "Due date";
    formRowDueDate.appendChild(formDueDateLabel);

    const formDueDateInput = document.createElement("input");
    formDueDateInput.setAttribute("type","date");
    formDueDateInput.setAttribute("id","due-date");
    formDueDateInput.setAttribute("name","dueDate");
    formDueDateInput.setAttribute("value","2025-08-06"); // hard coded
    formDueDateInput.setAttribute("min","2025-08-06"); //hard coded
    formRowDueDate.appendChild(formDueDateInput);


    const formPriorityLabel = document.createElement("label");
    formPriorityLabel.setAttribute("for", "priority");
    formPriorityLabel.textContent = "Priority";
    formRowPriority.appendChild(formPriorityLabel);

    const formPrioritySelect = document.createElement("select");
    formPrioritySelect.setAttribute("name", "priority");
    formPrioritySelect.setAttribute("id", "priority");
    for (let i = 1; i < 6; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", `${i}`);
      if (i === 1) {
        option.textContent = `${i} (lowest)`;
      } else if (i === 3) {
        option.setAttribute("selected", "selected");
        option.textContent = `${i}`        
      } else if (i === 5) {
        option.textContent = `${i} (highest)`;
      } else {
        option.textContent = i;
      };      
      formPrioritySelect.appendChild(option);
    }
    formRowPriority.appendChild(formPrioritySelect);   


    const formProjectLabel = document.createElement("label");
    formProjectLabel.setAttribute("for", "project");
    formProjectLabel.textContent = "Priority";
    formRowProject.appendChild(formProjectLabel);

    const formProjectSelect = document.createElement("select")
    formProjectSelect.setAttribute("name", "project");
    formProjectSelect.setAttribute("id", "project");
    const forProjectSelectOption = document.createElement("option");
    forProjectSelectOption.setAttribute("value", "null"); // hard-coded
    forProjectSelectOption.textContent = "none"
    formProjectSelect.appendChild(forProjectSelectOption);
    formRowProject.appendChild(formProjectSelect);


    const saveNewToDoItemButton = document.createElement("button");
    saveNewToDoItemButton.classList.add("save-new-to-do-button");
    saveNewToDoItemButton.textContent = "Save task";
    formRowSaveNewToDo.appendChild(saveNewToDoItemButton);
    
  }  

  createListeners() {
    const newToDoItemButton = document.querySelector(".header-button");
    newToDoItemButton.addEventListener("click", () => this.toggleSidebar());  
    
    const closeSideBarButton = document.querySelector(".close-sidebar-button");
    closeSideBarButton.addEventListener("click", () => this.toggleSidebar());   
  } 

  toggleSidebar() {
    const mainArea = document.querySelector(".main-area");
    const sidebarArea = document.querySelector(".sidebar-area");
    const newToDoItemButton = document.querySelector(".header-button");
    
    if (mainArea.classList.contains("sidebar-open")) {
      mainArea.classList.remove("sidebar-open");
      mainArea.classList.add("sidebar-closed");
      sidebarArea.classList.remove("sidebar-open");
      sidebarArea.classList.add("sidebar-closed");
      showCreateNewToDoButton();
    } else {
      mainArea.classList.add("sidebar-open");
      mainArea.classList.remove("sidebar-closed");
      sidebarArea.classList.add("sidebar-open");
      sidebarArea.classList.remove("sidebar-closed");
      hideCreateNewToDoButton();
    } 

    function hideCreateNewToDoButton() {      
      newToDoItemButton.classList.add("hide"); 
    }
    function showCreateNewToDoButton() {
      newToDoItemButton.classList.remove("hide");
    }

  }    
}