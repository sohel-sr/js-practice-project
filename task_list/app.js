// Define UI variable
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listener
loadEventListeners();

// Load all event listener
function loadEventListeners() {

  // DOM  load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // add task event
  form.addEventListener("submit", addTask);

  // remove task event
  taskList.addEventListener("click", removeTask);

  // clrar tasks event
  clearBtn.addEventListener("click", clearTasks);

  // filter task event
  filter.addEventListener("keyup", filterTask);
}

// get tasks from ls
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // create li element
    const li = document.createElement("li");

    // add class
    li.className = "collection-item";

    // create text node and append to li

    li.appendChild(document.createTextNode(task));

    // create new link element
    const link = document.createElement("a");

    // add class name
    link.className = "delete-item secondary-content";

    // add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // append link to li
    li.appendChild(link);

    // append li to ui
    taskList.appendChild(li);
  })
}


// add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // create li element
  const li = document.createElement("li");

  // add class
  li.className = "collection-item";

  // create text node and append to li

  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element
  const link = document.createElement("a");

  // add class name
  link.className = "delete-item secondary-content";

  // add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // append link to li
  li.appendChild(link);

  // append li to ui
  taskList.appendChild(li);

  //Store in Ls
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskList.value = "";

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure ?")) {
      e.target.parentElement.parentElement.remove();

      // remove from ls
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// remove from ls
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1)
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear tasks
function clearTasks() {
  // taskList.innerHTML = '';   // slower

  // suggested link >>>  https://jsperf.com/innerhtml-vs-removechild

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear Tasks
  clearTasksFromLocalStorage();
}

// clrar tasks from ls
function clearTasksFromLocalStorage(){
  if(confirm('Are you sure ?')){
    localStorage.clear();
  }
}


// filter task
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
