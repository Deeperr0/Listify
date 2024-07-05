displayTasks();
let today = new Date();
const tasksList = JSON.parse(localStorage.getItem("tasks"));
let count = 0;
tasksList.map((task) => {
  count++;
  if (task.date != today.getDay()) {
    tasksList.splice(tasksList.indexOf(count), 1);
  }
});
localStorage.setItem("tasks", JSON.stringify(tasksList));

function handleSubmit(e) {
  e.preventDefault();
  const task = document.getElementById("task");
  if (task.value != "") {
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
  if (localStorage.getItem("tasks") != undefined) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const list = document.getElementById("list-of-tasks");
    list.innerHTML = "";
    tasks.map((task) => {
      if (task.value != "") {
        const li = document.createElement("li");
        const completeButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const span = document.createElement("span");
        const buttons = document.createElement("div");
        buttons.classList.add("buttons");
        completeButton.innerHTML = "Check";
        completeButton.classList.add("check-button");
        deleteButton.innerHTML = "Delete";
        deleteButton.id = task.value;
        deleteButton.classList.add("delete-button");
        list.appendChild(li);
        tasks.push(task);
        li.appendChild(span);
        span.innerHTML = task.value;
        buttons.appendChild(completeButton);
        buttons.appendChild(deleteButton);
        li.appendChild(buttons);
        if (task.completed) {
          span.classList.add("completed");
        }
        completeButton.addEventListener("click", () => {
          if (span.classList.contains("completed")) {
            const updated = JSON.parse(localStorage.getItem("tasks"));
            updated.map((item) => {
              if ((item.value = task.value)) {
                item.completed = false;
              }
            });
            localStorage.setItem("tasks", JSON.stringify(updated));
            span.classList.remove("completed");
            completeButton.innerHTML = "Check";
          } else {
            const updated = JSON.parse(localStorage.getItem("tasks"));
            updated.map((item) => {
              if (item.value == task.value) {
                item.completed = true;
              }
            });
            localStorage.setItem("tasks", JSON.stringify(updated));
            span.classList.add("completed");
            completeButton.innerHTML = "Uncheck";
          }
        });
        deleteButton.addEventListener("click", () => {
          const tasksList = JSON.parse(localStorage.getItem("tasks"));
          tasksList.splice(tasksList.indexOf(deleteButton.id), 1);
          localStorage.setItem("tasks", JSON.stringify(tasksList));
          displayTasks();
        });
      }
    });
  } else {
    localStorage.setItem("tasks", "");
  }
}
