function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerText = taskInput.value;
      taskList.appendChild(li);
      taskInput.value = "";
      li.innerHTML += '<button class="delete-btn" onclick="deleteTask(this)">X</button>';
    } else {
      alert("Please enter a task!");
    }
  }
  
  function deleteTask(task) {
    task.parentNode.remove();
  }
  