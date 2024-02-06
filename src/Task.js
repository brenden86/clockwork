
export default class Task {
  constructor(name) {
    this.id = this.getId();
    this.name = name;
  }

  getId() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    // start with ID of 1 if no tasks exist
    if(tasks.length < 1) return 1

    let currentIDs = tasks.map(task => task.id);
    return Math.max(...currentIDs) + 1;
  }

}



