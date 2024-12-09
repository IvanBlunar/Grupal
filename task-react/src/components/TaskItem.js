import React from 'react';

function TaskItem({ task }) {
  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={() => task.done = !task.done} />
      <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
        {task.name}
      </span>
    </li>
  );
}

export default TaskItem;
