import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import NavBar from "../components/NavBar.vue";

test("renderiza os botões da Navbar corretamente", () => {
  const wrapper = mount(NavBar);

  const buttons = wrapper.findAllComponents({ name: "ButtonNavBar" });
  expect(buttons).toHaveLength(3); // Home, Sobre, Contador
  expect(buttons[0].props("name")).toBe("Home");
  expect(buttons[1].props("name")).toBe("Sobre");
  expect(buttons[2].props("name")).toBe("Contador");
});
