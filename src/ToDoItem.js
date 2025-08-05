class ToDoItem {
  constructor(title, description = null, dueDate = null, priority = 3) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = "open";
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get dueDate() {
    return this.dueDate;
  }

  get priority() {
    return this.priority;
  }

  get status() {
    return this.status;
  }

  set title(title) {
    this.title = title;
  }

  set description(description) {
    this.description = description;
  }

  set dueDate(dueDate) {
    this.dueDate = dueDate;
  }

  set priority(priority) {
    if (priority >= 0 && priority <= 5) {
      this.priority = priority;
    } else {
      console.log("Invalid priority value.")
    }
  }

  set status(status) {
    if (status === "open" || status === "closed") {
      this.status = status;
    } else {
      console.log("Invalid status value.")
    }
  }
}

