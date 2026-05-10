function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;
 
  if (task === "") return;
 
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
 
  renderTasks();
  input.value = "";
}
 
function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";
 
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
 
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;
 
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = function () {
      deleteTask(index);
    };
 
    li.appendChild(btn);
    list.appendChild(li);
  });
}
 
function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
 
window.onload = renderTasks;
