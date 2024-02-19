

export default class Task {
  constructor(name) {
    this.id = this.getId();
    this.name = name;
    this.startDate = new Date;
    this.lastTaskStart = Date.now();
    this.elapsedTime = 0;
  }

  getId() {
    // get the latest id (largest) from tasks array, increment for next task
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    // start with ID of 1 if no tasks exist
    if(tasks.length < 1) return 1

    // get next available ID
    let currentIDs = tasks.map(task => task.id);
    return Math.max(...currentIDs) + 1;
  }



}