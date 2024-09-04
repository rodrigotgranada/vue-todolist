<template>
    <ul class="space-y-2">
      <ToDoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @edit="editTodo"
        @remove="removeTodo"
      />
    </ul>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import ToDoItem from './ToDoItem.vue';
  import { Todo } from '@/store/index';
  
  export default defineComponent({
    name: 'ToDoList',
    components: {
      ToDoItem,
    },
    props: {
      todos: {
        type: Array as PropType<Todo[]>,
        required: true,
      },
    },
    emits: ['toggle', 'edit', 'remove'],
    methods: {
      toggleTodo(todo: Todo) {
        this.$emit('toggle', todo);
      },
      editTodo(todo: Todo) {
        this.$emit('edit', todo);
      },
      removeTodo(todoId: number) {
        this.$emit('remove', todoId);
      },
    },
  });
  </script>
  