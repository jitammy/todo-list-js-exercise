// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];
// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description)
//   taskComplete.push(false);
// }
function newTask (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function(){
       console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markCompleted: function(){
      this.complete = true
    }
  }
  return task
}
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   // taskComplete[taskIndex] = true;
//   task.complete = true
// }
// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   // const title = taskTitles[taskIndex];
//   // const complete = taskComplete[taskIndex];
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }
// DRIVER CODE BELOW
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
const task1 = newTask('clean cat litter', 'take all the shit out of the litter box')
const task2 = newTask ('Do laundry', 'haha')
const tasks = [task1, task2]
console.log(tasks)
task1.logState()
task1.markCompleted()
task1.logState()
task1.title

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
