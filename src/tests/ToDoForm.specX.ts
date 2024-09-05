import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import ToDoForm from "../components/ToDoForm.vue";

test("verifica se o formulário é renderizado corretamente", () => {
  const wrapper = mount(ToDoForm);

  // Verifica se o campo de input e o botão são renderizados
  expect(wrapper.find("input").exists()).toBe(true);
  expect(wrapper.find("button").exists()).toBe(true);
});

test("emite o evento 'add-todo' com a tarefa correta ao enviar o formulário", async () => {
  const wrapper = mount(ToDoForm);
  const input = wrapper.find("input");
  const button = wrapper.find("button");

  // Define o valor do input e simula o envio do formulário
  await input.setValue("Nova tarefa");
  await button.trigger("click");

  // Verifica se o evento 'add-todo' foi emitido com os dados corretos
  const emitted = wrapper.emitted("add-todo");
  expect(emitted).toBeDefined();
  expect(emitted?.length).toBe(1);

  if (emitted) {
    const [todo] = emitted[0];
    expect(todo).toEqual({
      id: expect.any(Number), // O ID gerado é um número
      title: "Nova tarefa",
      completed: false,
    });
  }
});

test("não emite o evento 'add-todo' se o campo de entrada estiver vazio", async () => {
  const wrapper = mount(ToDoForm);
  const button = wrapper.find("button");

  // Simula o envio do formulário com o campo de entrada vazio
  await button.trigger("click");

  // Verifica se o evento 'add-todo' não foi emitido
  expect(wrapper.emitted("add-todo")).toBeFalsy();
});
