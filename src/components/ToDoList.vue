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

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import ToDoItem from "./ToDoItem.vue";
import { Todo } from "@/store/modules/todos";

// Definindo as props recebidas
defineProps<{
  todos: Todo[];
}>();

// Definindo os eventos emitidos
const emit = defineEmits(["toggle", "edit", "remove"]);

// Métodos
const toggleTodo = (todo: Todo) => {
  emit("toggle", todo);
};

const editTodo = (todo: Todo) => {
  emit("edit", todo);
};

const removeTodo = (todoId: number) => {
  emit("remove", todoId);
};
</script>
