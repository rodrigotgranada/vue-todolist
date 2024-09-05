import { computed } from "vue";
import { useStore } from "vuex";
import { Todo } from "../store/modules/todos";

export function useTodos() {
  const store = useStore();

  // Computed para filtrar as tarefas
  const filteredTodos = computed(() => store.getters["todos/filteredTodos"]);
  const filter = computed(() => store.getters["todos/filter"]);

  // Função para definir o filtro
  const setFilter = (filter: "all" | "completed" | "incomplete") => {
    store.dispatch("todos/updateFilter", filter); // Atualizado com o namespace do módulo
  };

  // Funções para manipulação das tarefas
  const addTodo = (todo: Todo) => {
    store.dispatch("todos/addTodoAction", todo); // Usar o namespace 'todos' do Vuex
  };

  const toggleTodo = (todo: Todo) => {
    store.dispatch("todos/toggleTodoAction", todo); // Usar o namespace 'todos'
  };

  const editTodo = (todo: Todo) => {
    store.dispatch("todos/editTodoAction", todo); // Usar o namespace 'todos'
  };

  const removeTodo = (todoId: number) => {
    store.dispatch("todos/removeTodoAction", todoId); // Usar o namespace 'todos'
  };

  // Retornar tudo que será usado em outros componentes
  return {
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    removeTodo,
  };
}
