
function addTask() {
	let input = document.getElementById("taskInput");
	let task = input.value;

	llet li = document.createElement("li");
	li.innerText = task;

	document.getElementById("taskList").appendChild(li);
	input.value = "";
}

