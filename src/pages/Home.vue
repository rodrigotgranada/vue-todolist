<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">To-Do List</h1>

    <!-- Formulário de adicionar tarefa estará disponível em todas as rotas -->
    <ToDoForm @add-todo="addTodo" />

    <!-- Botões de navegação -->
    <div class="mb-4">
      <router-link to="/" exact class="mr-4">Todas</router-link>
      <router-link to="/completed" class="mr-4">Concluídas</router-link>
      <router-link to="/incomplete" class="mr-4">Incompletas</router-link>
    </div>

    <!-- Renderiza o componente da rota ativa -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToDoForm from '@/components/ToDoForm.vue';
import { useStore } from 'vuex';
import { Todo } from '@/store/index';

export default defineComponent({
  components: { ToDoForm },
  setup() {
    const store = useStore();

    // Função para adicionar nova tarefa
    const addTodo = (todo: Todo) => {
      store.dispatch('todos/addTodoAction', todo);
    };

    return { addTodo };
  }
});
</script>
