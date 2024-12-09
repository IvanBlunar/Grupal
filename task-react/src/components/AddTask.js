import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      addTask(newTaskName);
      setNewTaskName('');
    }
  };

  return (
    <div className="add-task">
      <input
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Añadir</button>
    </div>
  );
}

export default AddTask;

