document.getElementById('taskForm').addEventListener('submit', addTask);

let tasks = [];

function addTask(e) {
  e.preventDefault();

  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;
  const estimateTime = new Date(document.getElementById('taskEstimateTime').value).getTime();
  
  const task = {
    id: Date.now(),
    title,
    description,
    estimateTime,
    startTime: null,
    endTime: null,
    timerInterval: null,
    status: 'pending',
    points: 0,
  };

  tasks.push(task);
  displayTasks();
}

function displayTasks() {
  const taskListDiv = document.getElementById('taskList');
  taskListDiv.innerHTML = ''; // Clear existing tasks
  
  tasks.forEach((task) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    
    const taskContent = document.createElement('div');
    taskContent.innerHTML = `
      <strong>${task.title}</strong><br>
      ${task.description}<br>
      Estimated Time: ${new Date(task.estimateTime).toLocaleString()}<br>
      Status: ${task.status}<br>
      Points: ${task.points}
    `;
    
    const actionDiv = document.createElement('div');
    actionDiv.innerHTML = `
      <button onclick="startTimer(${task.id})" ${task.startTime ? 'disabled' : ''}>Start Now</button>
      <button onclick="endTimer(${task.id})" ${!task.startTime ? 'disabled' : ''}>End Now</button>
      <button onclick="markCompleted(${task.id})">Mark Completed</button>
      <button onclick="deleteTask(${task.id})">Delete Task</button>
    `;
    
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(actionDiv);
    taskListDiv.appendChild(taskDiv);
  });

  displayCompletionSummary();
}

function startTimer(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  task.startTime = Date.now();
  task.timerInterval = setInterval(updateTimer, 1000, taskId);
  displayTasks();
}

function updateTimer(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  const elapsedTime = Date.now() - task.startTime;
  const remainingTime = task.estimateTime - Date.now();
  
  if (remainingTime <= 0) {
    clearInterval(task.timerInterval);
    task.endTime = Date.now();
    task.status = 'overdue';
    task.points = -5;  // Deduct points if overdue
    displayTasks();
  }
}

function endTimer(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  clearInterval(task.timerInterval);
  task.endTime = Date.now();
  task.status = 'completed';
  
  // Calculate points: +5 if completed within estimated time
  if (task.endTime <= task.estimateTime) {
    task.points = 5;
  } else {
    task.points = -5;
  }
  displayTasks();
}

function markCompleted(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  task.status = 'completed';
  task.points = (task.endTime <= task.estimateTime) ? 5 : -5;
  displayTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  displayTasks();
}

function displayCompletionSummary() {
  const completedTasks = tasks.filter(task => task.status === 'completed');
  const pendingTasks = tasks.filter(task => task.status !== 'completed');

  let completionRate = 0;
  if (tasks.length > 0) {
    completionRate = (completedTasks.length / tasks.length) * 100;
  }

  const summary = `
    <strong>Completion Rate: ${completionRate.toFixed(2)}%</strong><br>
    <strong>Completed Tasks: ${completedTasks.length}</strong><br>
    <strong>Pending Tasks: ${pendingTasks.length}</strong>
  `;
  document.getElementById('completionSummary').innerHTML = summary;
}

window.onbeforeunload = function() {
  alert("Summary of completed and pending tasks:\nCompleted: " + tasks.filter(task => task.status === 'completed').length + "\nPending: " + tasks.filter(task => task.status !== 'completed').length);
};
