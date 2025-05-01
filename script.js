
function collectTaskData() {
  
  // This variable is initialized to false and will be set to true if any task is marked as done
  let hasCompletedTask = false;
  
  // Variables to store task data for two tasks
  let task1Title, task1Description, task1Status;
  let task2Title, task2Description, task2Status;

  // Loop to manage multiple tasks
  for (let i = 1; i <= 2; i++) {
    let taskNumber = 0 + i;
    console.log(`collectTaskData(${taskNumber}) called`);

  // Prompt the user for task details(collect iput from user)
    const taskTitle = prompt(`Enter title for task ${taskNumber}:`);
    const taskDescription = prompt(`Enter description for task ${taskNumber}:`);
    let taskStatus;

  // loop to get a valid status for the task (todo, doing, done)
    do {
      // Ask for task status input
      taskStatus = prompt(`Enter status for task ${taskNumber} (todo, doing, done):`);

      if (taskStatus) {
        taskStatus = taskStatus.toLowerCase();
      }
     
      if (
        taskStatus !== "todo" && taskStatus !== "doing" && taskStatus !== "done") {
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        }
        //The loop will continue until a valid status is entered
    } while (taskStatus !== "todo" && taskStatus !== "doing" && taskStatus !== "done" );
   
    if (taskNumber === 1) {
      task1Title = taskTitle;
      task1Description = taskDescription;
      task1Status = taskStatus;
    } else if (taskNumber === 2) {
      task2Title = taskTitle;
      task2Description = taskDescription;
      task2Status = taskStatus;
    }
   
    if (taskStatus === "done") {
      console.log(`Title: ${taskTitle}, status: ${taskStatus}`);
      hasCompletedTask = true;
    }
  }
  
    if (!hasCompletedTask) {
      console.log("No tasks completed, let's go to work!");
    }
  }
