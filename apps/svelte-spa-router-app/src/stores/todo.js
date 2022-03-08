import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

const createTodos = (initialValue = []) => {
  const { subscribe, set, update } = writable(initialValue);

  return {
    subscribe,
    add: (title, description, projectId, completed = false) =>
      update((todos) => [
        ...todos,
        { id: uuidv4(), completed, title, description, projectId },
      ]),
    toggle: (id) =>
      update((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      ),
    remove: (id) => update(todos => todos.filter(todo => todo.id !== id)),
  }
};

export const todos = createTodos();
