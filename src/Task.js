import Project from "./Project";

export default class Task {
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