import Task from "./Task";

export default class TaskFormHandler {
  constructor() {
    this.formDataObject = {};
  }
  
  launchTaskFormHandler(formClassName) {    
    this.collectNewTaskFormData(formClassName);
    this.createTaskObject();
  }
  
  collectNewTaskFormData(formClass) {
    const form = document.querySelector(`.${formClass}`);
    const formData = new FormData(form);
    this.formDataObject = Object.fromEntries(formData.entries());
  }

  createTaskObject() {
    const taskObject = new Task(this.formDataObject); 
    console.log(taskObject);
  }  
}