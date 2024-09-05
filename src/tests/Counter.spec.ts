import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import Counter from "../pages/Counter.vue";

test("verifica se o contador inicial é renderizado corretamente", () => {
  const wrapper = mount(Counter);
  // Verifica se a mensagem e o contador inicial aparecem corretamente
  expect(wrapper.text()).toContain("Você clicou.. 0 vezes");
});

test("incrementa o contador ao clicar no botão", async () => {
  const wrapper = mount(Counter);
  const button = wrapper.find("button");

  // Simula o clique no botão
  await button.trigger("click");
  // Verifica se o contador foi incrementado
  expect(wrapper.text()).toContain("Você clicou.. 1 vezes");
});

test("mostra a mensagem quando o contador passa de 5", async () => {
  const wrapper = mount(Counter);
  const button = wrapper.find("button");

  // Clica 6 vezes no botão
  for (let i = 0; i < 6; i++) {
    await button.trigger("click");
  }

  // Verifica se a mensagem "O contador passou de 5!" aparece
  expect(wrapper.text()).toContain("O contador passou de 5!");
});

test("atualiza a entrada de texto corretamente", async () => {
  const wrapper = mount(Counter);
  const input = wrapper.find("input");

  // Simula a digitação de um número no campo de input
  await input.setValue(42);

  // Verifica se o valor digitado aparece corretamente
  expect(wrapper.text()).toContain("Você digitou: 42");
});

test("renderiza corretamente a lista de itens", () => {
  const wrapper = mount(Counter);

  // Verifica se os itens da lista são renderizados corretamente
  const items = wrapper.findAll("li");
  expect(items).toHaveLength(3);
  expect(items[0].text()).toBe("Item 1");
  expect(items[1].text()).toBe("Item 2");
  expect(items[2].text()).toBe("Item 3");
});

test("o botão exibe 'Clicar' quando o contador é menor ou igual a 5 e 'Bloqueado' quando o contador é maior que 5", async () => {
  const wrapper = mount(Counter);
  const button = wrapper.find("button");

  // Verifica se o texto do botão é 'Clicar' quando o contador é 0
  expect(button.text()).toBe("Clicar");

  // Incrementa o contador até que seja maior que 5
  for (let i = 0; i < 6; i++) {
    await button.trigger("click");
  }

  // Verifica se o texto do botão muda para 'Bloqueado' quando o contador é maior que 5
  expect(button.text()).toBe("Bloqueado");
});
