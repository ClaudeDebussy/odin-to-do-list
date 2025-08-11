import Project from "./Project";

const hardCodedTask1 = {title: 'Finish to-do list', 
  description: 'Todo lists are a staple in beginning webdev tutorials, the implementation can be basic. There is, however, a lot of room for improvement and many features that can be added.', 
  dueDate: '2025-08-06', 
  priority: '5', 
  status: 'open', 
  project: 'Project 1', 
  uuid: '2d33df62-21ed-4e54-ab80-770c56fb1b38'
};
const hardCodedTask2 = {
  title: 'Complete portfolio update',
  description: 'Updating a portfolio is essential for showcasing new projects and skills. The update will include recent work and improved designs.',
  dueDate: '2025-09-15',
  priority: '3',
  status: 'open',
  project: 'Project 2',
  uuid: '7c9b5f70-4b22-4682-bb80-542f4d4725ad'
};

export default class Task {
  static #_taskList = [hardCodedTask1, hardCodedTask2];
  
  #_title;
  #_description;
  #_dueDate;
  #_priority;
  #_status;
  #_project;
  #_uuid;

  constructor({title, description = null, dueDate = null, priority = 3, project = "none"}) {
    this.#_title = title;
    this.#_description = description;
    this.#_dueDate = dueDate;
    this.#_priority = priority;
    this.#_status = "open";
    this.#_project = project;
    this.#_uuid = crypto.randomUUID();
  }

  static addTaskToTaskList(task) {
    this.#_taskList.push(task);
    console.log(this.#_taskList);
  }

  static get taskList() {
    return this.#_taskList;
  }
  
  static getTaskByUUID(uuid) {
    const tasks = this.taskList;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].uuid === uuid) {
        return tasks[i];
      }
    }
  };

  static removeTask(taskToDelete) {    
    const index = this.#_taskList.indexOf(taskToDelete);        
    if (index > -1) {
      this.#_taskList.splice(index, 1);
    }    
    console.log(this.#_taskList);
  };  

  get title() {
    return this.#_title;
  }

  get description() {
    return this.#_description;
  }

  get dueDate() {
    return this.#_dueDate;
  }

  get priority() {
    return this.#_priority;
  }

  get status() {
    return this.#_status;
  }
  
  get project() {
    return this.#_project;
  }

  get uuid() {
    return this.#_uuid;
  }

  set title(title) {
    this.#_title = title;
  }

  set description(description) {
    this.#_description = description;
  }

  set dueDate(dueDate) {
    this.#_dueDate = dueDate;
  }

  set priority(piority) {
    if (piority >= 0 && piority <= 5) {
      this.#_priority = piority;
    } else {
      console.log("Invalid priority value.")
    }
  }

  set status(status) {
    if (status === "open" || status === "closed") {
      this.#_status = status;
    } else {
      console.log("Invalid status value.")
    }
  }

  set project(project) {
    this.#_project = project;
  }

  

}