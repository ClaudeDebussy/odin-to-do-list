export default class Project {
  #_title;
  static #_projects = [];  

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
}