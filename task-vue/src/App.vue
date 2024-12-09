<template>
  <div id="app">
    <Header />
    <TaskFilter v-bind:value="filterText" @update:value="filterText = $event" />
    <AddTask @addTask="addTask" />
    <TaskList :tasks="filteredTasks" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import AddTask from './components/AddTask.vue';
import Header from './components/Header.vue';
import TaskFilter from './components/TaskFilter.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    AddTask,
    Header,
    TaskFilter,
    TaskList
  },
  setup() {
    const tasks = ref([
      { name: 'Estudiar Vue', done: false },
      { name: 'Comprar leche', done: false },
    ]);
    const filterText = ref('');

    // Computed property para filtrar las tareas
    const filteredTasks = computed(() => {
      return tasks.value.filter(task => task.name.toLowerCase().includes(filterText.value.toLowerCase()));
    });

    // Método para agregar tareas
    const addTask = (newTaskName) => {
      tasks.value.push({ name: newTaskName, done: false });
    };

    return {
      tasks,
      filterText,
      filteredTasks,
      addTask
    };
  }
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px 0;
  font-size: 16px;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

header {
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 600px;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

li:last-child {
  border-bottom: none;
}

input[type="checkbox"] {
  margin-right: 10px;
}

span {
  flex-grow: 1;
  font-size: 18px;
}

span[style*="line-through"] {
  color: #7f8c8d;
  text-decoration: line-through;
}

.task-filter {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
}
</style>
