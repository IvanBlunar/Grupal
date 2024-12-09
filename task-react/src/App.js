import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Estudiar React', done: false },
    { name: 'Comprar pan', done: false }
  ]);
  const [filterText, setFilterText] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter(task =>
      task.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [tasks, filterText]);

  const addTask = (newTaskName) => {
    setTasks([...tasks, { name: newTaskName, done: false }]);
  };

  return (
    <div id="app">
      <Header />
      <TaskFilter value={filterText} onChange={setFilterText} />
      <AddTask addTask={addTask} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
