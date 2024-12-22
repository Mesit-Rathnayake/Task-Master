document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskName = document.getElementById('task-name').value;
    const deadline = document.getElementById('task-deadline').value;
    const priority = document.getElementById('task-priority').value;

    if (taskName && deadline) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.draggable = true;
        task.innerHTML = `
            <p><strong>${taskName}</strong></p>
            <p>Deadline: ${deadline}</p>
            <p>Priority: ${priority}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        document.getElementById('to-do').appendChild(task);

        task.querySelector('.delete-btn').addEventListener('click', () => task.remove());
        task.querySelector('.edit-btn').addEventListener('click', () => alert('Edit functionality not yet implemented.'));

        task.addEventListener('dragstart', () => task.classList.add('dragging'));
        task.addEventListener('dragend', () => task.classList.remove('dragging'));
    }
});

const columns = document.querySelectorAll('.task-column');
columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingTask = document.querySelector('.dragging');
        column.appendChild(draggingTask);
    });
});
