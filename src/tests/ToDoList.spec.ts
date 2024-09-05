import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import ToDoList from "../components/ToDoList.vue";

const todos = [
  { id: 1, title: "Tarefa 1", completed: false },
  { id: 2, title: "Tarefa 2", completed: true },
];

test("renderiza a lista de tarefas corretamente", () => {
  const wrapper = mount(ToDoList, {
    props: { todos },
  });

  const items = wrapper.findAllComponents({ name: "ToDoItem" });
  expect(items).toHaveLength(2);
  expect(items[0].props("todo").title).toBe("Tarefa 1");
  expect(items[1].props("todo").title).toBe("Tarefa 2");
});
