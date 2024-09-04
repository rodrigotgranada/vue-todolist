import { createStore } from "vuex";
import todos from "./modules/todos"; // Importar o módulo de tarefas

export default createStore({
  modules: {
    todos, // Adicionar o módulo
  },
});
