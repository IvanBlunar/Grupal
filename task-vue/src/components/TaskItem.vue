<template>
    <li>
      <input type="checkbox" v-model="task.done" />
      <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">{{ task.name }}</span>
    </li>
  </template>
  
  <script>
  export default {
    name: 'TaskItem',
    props: {
      task: Object
    }
  };
  </script>
  
  <style scoped>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin: 8px 0;
  }
  
  input[type="checkbox"] {
    margin-right: 15px;
    transform: scale(1.2);
  }
  
  span {
    font-size: 18px;
    color: #333;
    flex-grow: 1;
  }
  
  span[style*="line-through"] {
    color: #b2bec3;
    text-decoration: line-through;
  }
  </style>
  