import Display from "./Display";
import Project from "./Project";
import Task from "./Task";

export default class TaskFormHandler {
  constructor() {
    this.formDataObject = {};
  }
  
  launchTaskFormHandler(formClassName) {    
    this.collectNewTaskFormData(formClassName);
    this.checkAndHandleProjectExistence(this.formDataObject);
    this.createTaskObject();
  }
  
  collectNewTaskFormData(formClass) {
    const form = document.querySelector(`.${formClass}`);
    const formData = new FormData(form);
    this.formDataObject = Object.fromEntries(formData.entries());
    console.log(this.formDataObject);
  }

  checkAndHandleProjectExistence(formDataObject) {
    console.log(this.formDataObject.newProjectName);
    if (this.formDataObject.newProjectName && !Project.projects.includes(`${this.formDataObject.newProjectName}`)) {
      Project.createProject(this.formDataObject.newProjectName);
      this.formDataObject.project = this.formDataObject.newProjectName;
      console.log(this.formDataObject);
      console.log(Project.projects);
    } 
  }

  createTaskObject() {
    const taskObject = new Task(this.formDataObject);
    Task.addTaskToTaskList(taskObject);
    console.log(taskObject);
  }  
}