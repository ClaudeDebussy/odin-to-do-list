export default class TaskFormHandler {
  collectNewTaskFormData(formClass) {
    const form = document.querySelector(`.${formClass}`);
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
    return formData;
  }
}