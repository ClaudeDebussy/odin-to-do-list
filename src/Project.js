export default class Project {
  #_title;
  static #_projects = ["Project 1", "Project 2"]; //hard-coded;

  constructor(title) {
    this.#_title = title;
  }

  static createProject(projectName) {
    if (!this.#_projects.includes(projectName)) {
    this.#_projects.push(projectName);
    return this.Project;
    } else {
      console.log("Project name aready exists.");
    }
  }

  static get projects() {
    return this.#_projects;
  }

  get title() {
    return this.#_title;
  }

  set title(title) {
    this.#_title = title;
  }
}