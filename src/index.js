import "./styles.css";
import "./cssReset.css";
import ToDoItem from "./Task.js";
import Display from "./Display.js";

let makeCoffee = new ToDoItem("Make coffee", "Make some coffee");
console.log(makeCoffee);

const page = new Display;
page.createBodyStructure();