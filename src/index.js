class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
}

class Task {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
  }
}



document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskList = new TaskList();
  const taskItem = document.getElementById("tasks");
  const submitNewTask = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");

  const renderApp = () => (taskItem.innerHTML = taskList.renderTasks());

  submitNewTask.addEventListener("submit", (x) => {
    x.preventDefault();
    taskList.createNewTask(taskDescription.value);
    x.target.reset();
    renderApp();
  });

  taskItem.addEventListener("click", (x) => {
    if (x.target.nodeName === "BUTTON") {
      taskList.deleteTask(x.target.dataset.description);
      renderApp();
    }
  });

});



