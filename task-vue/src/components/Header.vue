<template>
    <header>
      <h1>Lista de Tareas</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  header {
    background-color: #fff;
    color: #333;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  
  h1 {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0;
    text-transform: uppercase;
    color: #3498db;
  }
  </style>
  