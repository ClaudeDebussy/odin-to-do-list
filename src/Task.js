import Project from "./Project";

export default class Task {
  static #_taskList = [];
  
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

  static removeTaskInLocalStorage(task) {
    const uuid = task.uuid;
    for (let i = 0; i < localStorage.length; i++) {
      const obj = localStorage.key(i);
      if (obj === uuid) {
        localStorage.removeItem(uuid);
        console.log(`${uuid} removed from local storage`)
      }
    }
  }

  toJSON() {
    const { title, description, dueDate, priority, status, project, uuid } = this;
    return { title, description, dueDate, priority, status, project, uuid };
  }

  static fromJSON(json) {
    const t = new Task({
      title: json.title,
      description: json.description,
      dueDate: json.dueDate,
      priority: json.priority,
      project: json.project
    });
    t.#_status = json.status ?? "open";
    t.#_uuid = json.uuid;
    return t;
  }

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