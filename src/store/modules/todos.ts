export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const state = {
  todos: [] as Todo[],
  filter: "all" as "all" | "completed" | "incomplete",
};

const getters = {
  filteredTodos: (state: {
    todos: Todo[];
    filter: "all" | "completed" | "incomplete";
  }) => {
    switch (state.filter) {
      case "completed":
        return state.todos.filter((todo) => todo.completed); // Retorna apenas as concluídas
      case "incomplete":
        return state.todos.filter((todo) => !todo.completed); // Retorna apenas as incompletas
      default:
        return state.todos; // Retorna todas as tarefas
    }
  },
  filter: (state: { filter: "all" | "completed" | "incomplete" }) =>
    state.filter, // Retorna o filtro atual
};

const mutations = {
  SET_TODOS(state: { todos: Todo[] }, todos: Todo[]) {
    state.todos = todos;
  },
  ADD_TODO(state: { todos: Todo[] }, todo: Todo) {
    state.todos.push(todo);
  },
  TOGGLE_TODO(state: { todos: Todo[] }, updatedTodo: Todo) {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos[index].completed = updatedTodo.completed;
    }
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  EDIT_TODO(state: { todos: Todo[] }, updatedTodo: Todo) {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos[index].title = updatedTodo.title;
    }
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  REMOVE_TODO(state: { todos: Todo[] }, todoId: number) {
    state.todos = state.todos.filter((todo) => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  SET_FILTER(
    state: { filter: "all" | "completed" | "incomplete" },
    filter: "all" | "completed" | "incomplete"
  ) {
    state.filter = filter;
  },
};

const actions = {
  fetchTodos({ commit }) {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    commit("SET_TODOS", todos);
  },
  addTodoAction({ commit }, todo: Todo) {
    const newTodo = { ...todo, id: Date.now() };
    commit("ADD_TODO", newTodo);
  },
  toggleTodoAction({ commit }, todo: Todo) {
    const updatedTodo = { ...todo, completed: !todo.completed };
    commit("TOGGLE_TODO", updatedTodo);
  },
  editTodoAction({ commit }, updatedTodo: Todo) {
    commit("EDIT_TODO", updatedTodo);
  },
  removeTodoAction({ commit }, todoId: number) {
    commit("REMOVE_TODO", todoId);
  },
  updateFilter({ commit }, filter: "all" | "completed" | "incomplete") {
    commit("SET_FILTER", filter);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
