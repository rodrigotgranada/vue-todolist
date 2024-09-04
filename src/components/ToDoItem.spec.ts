import { mount } from "@vue/test-utils";
import ToDoItem from "./ToDoItem.vue"; // Certifique-se de que o caminho está correto

describe("ToDoItem.vue", () => {
  it("renders todo text", () => {
    const todo = { id: 1, text: "Test ToDo", completed: false };
    const wrapper = mount(ToDoItem, {
      props: { todo },
    });

    expect(wrapper.text()).toContain("Test ToDo");
  });
});
