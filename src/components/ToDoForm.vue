<template>
  <form @submit.prevent="submitForm" class="mb-4">
    <input v-model="newTodoText" placeholder="New Task" class="p-2 border rounded w-full" />
    <button type="submit" class="p-2 mt-2 bg-blue-500 text-white rounded">Add Task</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ToDoForm",
  emits: ["add-todo"],
  setup(props, { emit }) {
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

    return {
      newTodoText,
      submitForm,
    };
  },
});
</script>
