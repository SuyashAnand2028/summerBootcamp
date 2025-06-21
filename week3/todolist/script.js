const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filter');

let tasks = [];

function renderTasks(filter = 'all') {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    if (filter === 'completed' && !task.completed) return;
    if (filter === 'pending' && task.completed) return;

    const li = document.createElement('li');
    li.classList.toggle('completed', task.completed);

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    taskText.className = 'task-text';

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = task.completed ? '✅' : '✔️';
    completeBtn.onclick = () => toggleComplete(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = () => deleteTask(index);

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text !== '') {
    tasks.push({ text, completed: false });
    taskInput.value = '';
    renderTasks(getCurrentFilter());
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(getCurrentFilter());
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(getCurrentFilter());
}

function getCurrentFilter() {
  const activeFilter = document.querySelector('.filter.active');
  return activeFilter ? activeFilter.dataset.filter : 'all';
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTasks(btn.dataset.filter);
  });
});

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

renderTasks();
