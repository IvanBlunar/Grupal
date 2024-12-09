<template>
    <div class="task-filter">
      <input 
        v-model="filterText" 
        placeholder="Filtrar tareas" 
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskFilter',
    props: {
      value: String // Este es el valor que el componente padre pasará
    },
    computed: {
      // Computed property para enlazar el valor del input al valor que pasa el componente padre
      filterText: {
        get() {
          return this.value; // Obtiene el valor actual de la prop 'value'
        },
        set(value) {
          this.$emit('update:value', value); // Emite un evento 'update:value' para que el padre lo actualice
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .task-filter {
    width: 100%;
    max-width: 400px;
    margin: 0 auto 20px;
  }
  
  input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input::placeholder {
    color: #aaa;
  }
  </style>
  