import Project from "./Project";
import Task from "./Task";
import TaskFormHandler from "./TaskFormHandler";

export default class Display {

  buildPage() {
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

    this.populateTasks();

    this.createListeners();
  }
  
  createHeader() {
    const content = document.querySelector(".content");
    
    const header = document.createElement("div");
    header.classList.add("header");

    const headerButtonGroup = document.createElement("div");
    headerButtonGroup.classList.add("header-button-group");

    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("header-button");
    newTaskButton.textContent = "Create new task";
    
    content.appendChild(header);
    header.appendChild(headerButtonGroup);
    headerButtonGroup.appendChild(newTaskButton);    
  }   

  createSidebar() {      
    function createFormRow() {
      const formRow = document.createElement("div");
      formRow.classList.add("form-row");
      return formRow
    };
    
    const mainArea = document.querySelector(".main-area");
    mainArea.classList.add("sidebar-closed");

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

    const newTaskForm = document.createElement("form");
    newTaskForm.classList.add("new-task-form");
    sidebarArea.appendChild(newTaskForm);

    
    const formRowTitle = createFormRow();
    const formRowDescription = createFormRow();
    const formRowDueDate = createFormRow();
    const formRowPriority = createFormRow();
    const formRowProject = createFormRow();
    const formRowNewProjectName = createFormRow();
    const formRowSaveNewTask = createFormRow();

    newTaskForm.appendChild(formRowTitle);
    newTaskForm.appendChild(formRowDescription);
    newTaskForm.appendChild(formRowDueDate);
    newTaskForm.appendChild(formRowPriority);
    newTaskForm.appendChild(formRowProject);
    newTaskForm.appendChild(formRowNewProjectName);
    newTaskForm.appendChild(formRowSaveNewTask);

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
    formProjectLabel.textContent = "Project";
    formRowProject.appendChild(formProjectLabel);

    const formProjectSelect = document.createElement("select")
    formProjectSelect.setAttribute("name", "project");
    formProjectSelect.setAttribute("id", "project");
    formRowProject.appendChild(formProjectSelect);

    const formProjectSelectNoneOption = document.createElement("option");
    formProjectSelectNoneOption.setAttribute("value", "none");
    formProjectSelectNoneOption.textContent = "none";
    formProjectSelect.appendChild(formProjectSelectNoneOption);

    const formProjectSelectCreateNewProjectOption = document.createElement("option");
    formProjectSelectCreateNewProjectOption.setAttribute("value", "create-new-project");
    formProjectSelectCreateNewProjectOption.classList.add("create-new-project");
    formProjectSelectCreateNewProjectOption.textContent = "Create new project";
    formProjectSelect.appendChild(formProjectSelectCreateNewProjectOption);
    
    const projects = Project.projects;
    projects.forEach(project => {
      const formProjectSelectOption = document.createElement("option");
      formProjectSelectOption.setAttribute("value", `${project}`);
      formProjectSelectOption.textContent = `${project}`;
      formProjectSelect.appendChild(formProjectSelectOption);
    });


    formRowNewProjectName.classList.add("hide");
    const formNewProjectNameLabel = document.createElement("label");
    formNewProjectNameLabel.setAttribute("for", "new-project-name");
    formNewProjectNameLabel.textContent = "New project name";
    formRowNewProjectName.appendChild(formNewProjectNameLabel);

    const formNewProjectNameInput = document.createElement("input");
    formNewProjectNameInput.setAttribute("type", "text");
    formNewProjectNameInput.setAttribute("name", "newProjectName");
    formNewProjectNameInput.setAttribute("id", "new-project-name");
    formRowNewProjectName.appendChild(formNewProjectNameInput);

    
    formProjectSelect.addEventListener("change", () => {
      const selectedValue = formProjectSelect.value;
      if (selectedValue === "create-new-project") {
        formRowNewProjectName.classList.remove("hide");
      } else if (selectedValue != "create-new-project" && !formRowNewProjectName.classList.contains("hide")) {
        formRowNewProjectName.classList.add("hide");
      }
    })

    const saveNewTaskButton = document.createElement("button");
    saveNewTaskButton.classList.add("save-new-task-button");
    saveNewTaskButton.setAttribute("type", "button");
    saveNewTaskButton.textContent = "Save task";
    formRowSaveNewTask.appendChild(saveNewTaskButton);
    
  }  

  createListeners() {
    const newTaskButton = document.querySelector(".header-button");
    newTaskButton.addEventListener("click", () => this.toggleSidebar());  
    
    const closeSideBarButton = document.querySelector(".close-sidebar-button");
    closeSideBarButton.addEventListener("click", () => this.toggleSidebar()); 
    
    const saveNewTaskButton = document.querySelector(".save-new-task-button");    
    saveNewTaskButton.addEventListener("click", () => {
      const formClass = saveNewTaskButton.form.className;
      const taskFormHandler = new TaskFormHandler;
      taskFormHandler.launchTaskFormHandler(formClass);
      this.clearPage()
      this.buildPage();
      // this.toggleSidebar();
    });

    const expandTaskButtons = document.querySelectorAll(".expander");
    expandTaskButtons.forEach(expander => {
      expander.addEventListener("click", (event) => {
      this.expandTask(event.target);
      })
    });
    
    const minimizeTaskButtons = document.querySelectorAll(".minimizer");
    minimizeTaskButtons.forEach(minimizer => {
      minimizer.addEventListener("click", (event) => {
        this.minimizeTask(event.target);
      })
    });

    const removeTaskButtons = document.querySelectorAll(".remove-task-button");
    removeTaskButtons.forEach(button => {
      button.addEventListener("click", (event) => {
        this.removeTask(event.target);
        this.clearPage()
        this.buildPage();
      })
    })
  } 

  toggleSidebar() {
    const mainArea = document.querySelector(".main-area");
    const sidebarArea = document.querySelector(".sidebar-area");
    const newTaskButton = document.querySelector(".header-button");
    
    if (mainArea.classList.contains("sidebar-open")) {
      mainArea.classList.remove("sidebar-open");
      mainArea.classList.add("sidebar-closed");
      sidebarArea.classList.remove("sidebar-open");
      sidebarArea.classList.add("sidebar-closed");
      showCreateNewTaskButton();
    } else {
      mainArea.classList.add("sidebar-open");
      mainArea.classList.remove("sidebar-closed");
      sidebarArea.classList.add("sidebar-open");
      sidebarArea.classList.remove("sidebar-closed");
      hideCreateNewTaskButton();
    } 

    function hideCreateNewTaskButton() {      
      newTaskButton.classList.add("hide"); 
    }
    function showCreateNewTaskButton() {
      newTaskButton.classList.remove("hide");
    }
  }    
  
  populateTasks() {    
    const taskList = Task.taskList;
    for (let i = 0; i < taskList.length; i++) {
      const task = taskList[i];
      this.createTaskDiv(task);      
    }
  }

  createTaskDiv(task) {    
    const tasksArea = document.querySelector(".tasks-area");
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.dataset.uuid = task.uuid;
    tasksArea.appendChild(taskDiv);

    const taskTitle = document.createElement("h1");
    taskTitle.classList.add("task-title");  

    const taskDueDate = document.createElement("p");
    taskDueDate.classList.add("task-due-date");

    const taskDescription = document.createElement("p");
    taskDescription.classList.add("task-description");
    taskDescription.classList.add("hide");

    const taskPriority = document.createElement("p");
    taskPriority.classList.add("task-priority");
    taskPriority.classList.add("hide");

    const taskStatus = document.createElement("p");
    taskStatus.classList.add("task-status");
    taskStatus.classList.add("hide");

    const taskProject = document.createElement("p");
    taskProject.classList.add("task-project");
    taskProject.classList.add("hide");

    const expandTaskButton = document.createElement("a");
    expandTaskButton.textContent = "see more...";
    expandTaskButton.classList.add("expand-or-minimize-task-button");
    expandTaskButton.classList.add("expander");

    const minimizeTaskButton = document.createElement("a");
    minimizeTaskButton.textContent = "see less...";
    minimizeTaskButton.classList.add("expand-or-minimize-task-button");
    minimizeTaskButton.classList.add("minimizer");
    minimizeTaskButton.classList.add("hide");

    const removeTaskButton = document.createElement("a");
    removeTaskButton.textContent = "remove task";
    removeTaskButton.classList.add("remove-task-button");

    taskTitle.textContent = task.title;
    taskDueDate.textContent = `Due: ${task.dueDate}`;
    taskDescription.textContent = task.description;
    taskPriority.textContent = `Priority: ${task.priority}`;
    taskStatus.textContent = task.status;
    taskProject.textContent = task.project;
    
    
    const elementsToAppend = [taskTitle, taskDueDate, taskDescription, taskPriority, taskStatus, taskProject, expandTaskButton, minimizeTaskButton, removeTaskButton];
    elementsToAppend.forEach(element => {
      taskDiv.appendChild(element);
    });
  }

  expandTask(target) {
    const expandTaskButton = target;
    const taskDiv = expandTaskButton.parentElement;
    const taskDivElements = taskDiv.childNodes;
    taskDivElements.forEach(element => {
      if (element.classList.contains('expander')) {
        element.classList.add('hide');
      }      
      if (element.classList.contains('hide') && !element.classList.contains('expander')) {
        element.classList.remove('hide');
      }
    });
  }

  minimizeTask(target) {
    const minimizeTaskButton = target;
    const taskDiv = minimizeTaskButton.parentElement;
    const taskDivElements = taskDiv.childNodes;
    taskDivElements.forEach(element => {
      if (element.classList.contains('minimizer')) {
        element.classList.add('hide');
      }
      if (!element.classList.contains('hide')) {
        if(element.classList.contains('task-description') ||
          element.classList.contains('task-priority') ||
          element.classList.contains('task-status') ||
          element.classList.contains('task-project'))
        element.classList.add('hide');
      }
      if (element.classList.contains("expander")) {
        element.classList.remove("hide");
      }
    });
  }

  clearPage() {
    document.body.innerHTML = "";
  }

  removeTask(target) {
    const removeTaskButton = target;
    const taskDiv = removeTaskButton.parentElement;
    const uuid = taskDiv.dataset.uuid;    
    const taskToDelete = Task.getTaskByUUID(uuid);
    console.log(taskToDelete);
    Task.removeTask(taskToDelete)
  }
}