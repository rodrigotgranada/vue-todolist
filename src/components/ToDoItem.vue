<template>
  <li class="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-2">
    <div v-if="isEditing" class="flex items-center">
      <input v-model="editedTitle" class="mr-2 p-1 border rounded focus:ring focus:ring-blue-300 transition w-full" />
      <button @click="saveEdit" class="bg-green-500 text-white p-1 px-2 rounded mr-1 hover:bg-green-600">Salvar</button>
      <button @click="cancelEdit" class="bg-red-500 text-white p-1 px-2 rounded hover:bg-red-600">Cancelar</button>
    </div>
    <div v-else class="flex items-center justify-between w-full">
      <span :class="{ 'line-through text-gray-500': todo.completed }" class="text-lg text-black mr-4">
        {{ todo.title }}
      </span>
      <div class="flex space-x-2">
        <button @click="toggleTodo" class="bg-blue-500 text-white p-1 px-4 rounded hover:bg-blue-600">
          {{ todo.completed ? 'Desfazer' : 'Completar' }}
        </button>
        <button @click="startEditing" class="bg-yellow-500 text-white p-1 px-4 rounded hover:bg-yellow-600">Editar</button>
        <button @click="removeTodo" class="bg-red-500 text-white p-1 px-4 rounded hover:bg-red-600">Remover</button>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { Todo } from '@/store/modules/todos';

export default defineComponent({
  name: "ToDoItem",
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isEditing = ref(false);
    const editedTitle = ref(props.todo.title);

    const startEditing = () => {
      isEditing.value = true;
    };

    const saveEdit = () => {
      emit("edit", { ...props.todo, title: editedTitle.value });
      isEditing.value = false;
    };

    const cancelEdit = () => {
      editedTitle.value = props.todo.title;
      isEditing.value = false;
    };

    const toggleTodo = () => {
      emit("toggle", props.todo);
    };

    const removeTodo = () => {
      emit("remove", props.todo.id);
    };

    return {
      isEditing,
      editedTitle,
      startEditing,
      saveEdit,
      cancelEdit,
      toggleTodo,
      removeTodo,
    };
  }
});
</script>

<style scoped>
li {
  background-color: #f7fafc; /* Fundo mais suave */
}

span {
  word-break: break-word; /* Quebrar o texto se for muito longo */
}

input {
  width: 100%;
  max-width: 300px; /* Largura máxima para evitar que o input se expanda muito */
}

button {
  transition: background-color 0.3s ease; /* Transição suave para mudança de cor */
}
</style>
