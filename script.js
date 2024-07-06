// Store today's date to be able to check if the tasks stored in the localStorage are old (Or store the date for tasks added today)
let today = new Date();

// Check if localStorage doesnt already have a "tasks" key-value pair
// If such a pair does not already exist it is initialized as an empty array
if (localStorage.getItem("tasks") == undefined) {
  localStorage.setItem("tasks", "[]");
}

// Retrieve tasks list from the localStorage and store it in an array
const tasksList = JSON.parse(localStorage.getItem("tasks"));

// Variable to keep track of index of the item we are looping through
let count = 0;

// Looping through the array to check the dates of the tasks and whether some of them are over a day old
tasksList.map((task) => {
  // If today's date is not today then splice is used to remove 1 task at the index (count)
  if (task.date != today.getDay()) {
    tasksList.splice(count, 1);
  }
  count++;
});

// Update the value stored in the localStorage with the new array after old tasks were removed
localStorage.setItem("tasks", JSON.stringify(tasksList));

// Tasks are displayed if there are any in the localStorage from a previous session (that are not more than 1 day old)
displayTasks();

//
function addTask() {
  const task = document.getElementById("task");
  if (task.value.replace(/\s/g, "") != "") {
    const taskObj = {
      value: task.value,
      completed: false,
      date: today.getDay(),
    };
    if (localStorage.getItem("tasks") == "") {
      localStorage.setItem("tasks", JSON.stringify([taskObj]));
    } else {
      const updated = JSON.parse(localStorage.getItem("tasks"));
      updated.push(taskObj);
      localStorage.setItem("tasks", JSON.stringify(updated));
    }
    task.value = "";
    displayTasks();
  }
}
function displayTasks() {
  const listContainer = document.querySelector(".list-container");
  const list = document.getElementById("list-of-tasks");

  if (localStorage.getItem("tasks").replace(/[\[\]]/g, "") != "") {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    listContainer.classList.remove("hide");
    list.innerHTML = "";
    tasks.map((task) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      label.classList.add("check-button");
      const innerLabel = document.createElement("label");
      innerLabel.classList.add("cross-right");
      const innerLabel2 = document.createElement("label");
      innerLabel2.classList.add("cross-left");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        if (span.classList.contains("completed")) {
          const updated = JSON.parse(localStorage.getItem("tasks"));
          updated.map((item) => {
            if ((item.value = task.value)) {
              item.completed = false;
            }
          });
          localStorage.setItem("tasks", JSON.stringify(updated));
          span.classList.remove("completed");
          innerLabel.classList.remove("checked");
          innerLabel2.classList.remove("checked");
        } else {
          const updated = JSON.parse(localStorage.getItem("tasks"));
          updated.map((item) => {
            if (item.value == task.value) {
              item.completed = true;
            }
          });
          localStorage.setItem("tasks", JSON.stringify(updated));
          span.classList.add("completed");
          innerLabel.classList.add("checked");
          innerLabel2.classList.add("checked");
        }
      });
      const span = document.createElement("span");
      if (task.completed) {
        span.classList.add("completed");
        innerLabel.classList.add("checked");
        innerLabel2.classList.add("checked");
      }
      const deleteButton = document.createElement("button");
      deleteButton.id = task.value;
      deleteButton.classList.add("delete-button");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", () => {
        const tasksList = JSON.parse(localStorage.getItem("tasks"));
        tasksList.splice(tasksList.indexOf(deleteButton.id), 1);
        localStorage.setItem("tasks", JSON.stringify(tasksList));
        displayTasks();
      });
      list.appendChild(li);
      list.appendChild(document.createElement("hr"));
      li.appendChild(label);
      label.appendChild(innerLabel);
      label.appendChild(innerLabel2);
      label.appendChild(checkbox);
      tasks.push(task);
      li.appendChild(span);
      span.innerHTML = task.value;
      li.appendChild(deleteButton);
    });
  } else {
    listContainer.classList.add("hide");
    localStorage.setItem("tasks", "");
  }
}
function handleKeyDown(event) {
  if (event.keyCode === 13) {
    addTask();
  }
}
function clearList() {
  localStorage.setItem("tasks", "[]");
  displayTasks();
}
