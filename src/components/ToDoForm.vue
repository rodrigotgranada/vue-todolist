<template>
  <form @submit.prevent="submitForm" class="mb-4">
    <input
      v-model="newTodoText"
      placeholder="New Task"
      class="p-2 border rounded w-full"
    />
    <button type="submit" class="p-2 mt-2 bg-blue-500 text-white rounded">
      Add Task
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

// Define o tipo para o evento de adicionar tarefa
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const emit = defineEmits<{
  (event: "add-todo", todo: Todo): void;
}>();

const newTodoText = ref("");

const submitForm = () => {
  if (newTodoText.value.trim() !== "") {
    emit("add-todo", {
      id: Date.now(),
      title: newTodoText.value,
      completed: false,
    });
    newTodoText.value = "";
  }
};
</script>
