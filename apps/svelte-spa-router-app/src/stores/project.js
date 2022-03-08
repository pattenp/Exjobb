import { writable } from "svelte/store";
import {v4 as uuidv4 } from "uuid";

const createProject = (initialValue = []) => {
  const { subscribe, set, update } = writable(initialValue);

  return {
    subscribe,
    add(title) {
      update((projects) => [...projects, { id: uuidv4(), title }]);
    },
  };
};

export const projects = createProject();
