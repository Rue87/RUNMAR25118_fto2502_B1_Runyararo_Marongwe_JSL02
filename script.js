//Get task containers from HTML
const todoContainer = document.getElementById("todo-head-div");
const doingContainer = document.getElementById("doing-head-div");
const doneContainer = document.getElementById("done-head-div");

function collectTaskData() {
  const tasks = [];
  for (let i = 1; i <= 2; i++) {
    let taskNumber = 0 + i;
  
    console.log(`collectTaskData(${taskNumber}) called`);

    const taskTitle = prompt(`Enter title for task ${taskNumber}:`);

    const taskDescription = prompt(`Enter description for task ${taskNumber}:`);

    let taskStatus;

    do {
      taskStatus = prompt(`Enter status for task ${taskNumber} (todo, doing, done):`);
      if(taskStatus){
        taskStatus = taskStatus.toLowerCase();
      }

      if (
        taskStatus !== "todo" &&
        taskStatus !== "doing" &&
        taskStatus !== "done"
      ) {
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");

        //The loop will continue until a valid status is entered
      }
    } while (
      taskStatus !== "todo" &&
      taskStatus !== "doing" &&
      taskStatus !== "done"
    );

    tasks.push({
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    });
  }
  return tasks;
}