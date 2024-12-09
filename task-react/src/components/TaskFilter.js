import React from 'react';

function TaskFilter({ value, onChange }) {
  return (
    <div className="task-filter">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filtrar tareas"
      />
    </div>
  );
}

export default TaskFilter;
