<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Tarefas Incompletas</h2>
    <ToDoList :todos="incompleteTodos" @toggle="toggleTodo" @edit="editTodo" @remove="removeTodo" />
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

    // Computed para obter as tarefas incompletas do estado Vuex
    const incompleteTodos = computed(() => store.getters['todos/filteredTodos'].filter((todo: Todo) => !todo.completed));

    // Funções para manipular as tarefas
    const toggleTodo = (todo: Todo) => {
      store.dispatch('todos/toggleTodoAction', todo);
    };

    const editTodo = (todo: Todo) => {
      store.dispatch('todos/editTodoAction', todo);
    };

    const removeTodo = (todoId: number) => {
      store.dispatch('todos/removeTodoAction', todoId);
    };

    return {
      incompleteTodos,
      toggleTodo,
      editTodo,
      removeTodo,
    };
  }
});
</script>
