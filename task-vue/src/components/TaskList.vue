<template>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.name">
        <input type="checkbox" v-model="task.done" />
        <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">{{ task.name }}</span>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'TaskList',
    props: {
      tasks: Array // Recibe la lista de tareas desde el componente padre
    }
  };
  </script>
  
  <style scoped>
  .task-list {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    border-radius: 4px;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
  
  span {
    flex-grow: 1;
  }
  </style>
  