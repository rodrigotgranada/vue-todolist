import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import ToDoItem from "../components/ToDoItem.vue";

const todo = { id: 1, title: "Tarefa 1", completed: false };

test("renderiza e emite eventos corretamente", async () => {
  const wrapper = mount(ToDoItem, {
    props: { todo },
  });

  // Testa se o item é renderizado corretamente
  expect(wrapper.text()).toContain("Tarefa 1");

  // Testa se a tarefa é marcada como concluída
  const completeButton = wrapper.find("button");
  await completeButton.trigger("click");
  expect(wrapper.emitted("toggle")).toHaveLength(1);
  expect(wrapper.emitted("toggle")[0]).toEqual([todo]);
});
