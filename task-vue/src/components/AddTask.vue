<template>
    <div class="add-task">
      <input v-model="newTaskName" placeholder="Nueva tarea" />
      <button @click="addTask">Añadir</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddTask',
    data() {
      return {
        newTaskName: ''
      };
    },
    methods: {
      addTask() {
        if (this.newTaskName.trim()) {
          this.$emit('addTask', this.newTaskName);
          this.newTaskName = ''; // Limpiar el campo de entrada
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .add-task {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  input {
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 10px;
    width: 70%;
  }
  
  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  