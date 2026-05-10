
function addTask() {
	let input = document.getElementById("taskInput");
	let task = input.value;

	llet li = document.createElement("li");
	li.innerText = task;

	document.getElementById("taskList").appendChild(li);
	input.value = "";
}
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;
 
  let li = document.createElement("li");
  li.innerText = task;
 
  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.onclick = function () {
    li.remove();
  };
 
  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
 
  input.value = "";
}
