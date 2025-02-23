import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTodoStore = defineStore(
  "todo",
  () => {
    //setup()

    const name = "useTodoStore";

    const todos = ref([]);

    const getTodos = computed(() => todos?.value);

    const addTodo = (todo) => {
      todos.value.push(todo);
    };

    const removeTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    return { name, todos, getTodos, addTodo, removeTodo };
  },
  { persist: true }
);
