<template>
  <div>
    <h2>Todas as Tarefas</h2>
    <ToDoList :todos="todos" @toggle="toggleTodo" @edit="editTodo" @remove="removeTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ToDoList from '@/components/ToDoList.vue';
import { useStore } from 'vuex';
import { Todo } from '@/store/modules/todos';

export default defineComponent({
  components: { ToDoList },
  setup() {
    const store = useStore();

    // Computed para obter as tarefas do estado Vuex
    const todos = computed(() => store.getters['todos/filteredTodos']);

    // Função para marcar uma tarefa como concluída
    const toggleTodo = (todo: Todo) => {
      store.dispatch('todos/toggleTodoAction', todo);
    };

    // Função para editar uma tarefa
    const editTodo = (todo: Todo) => {
      store.dispatch('todos/editTodoAction', todo);
    };

    // Função para remover uma tarefa
    const removeTodo = (todoId: number) => {
      store.dispatch('todos/removeTodoAction', todoId);
    };

    return {
      todos,
      toggleTodo,
      editTodo,
      removeTodo,
    };
  }
});
</script>
