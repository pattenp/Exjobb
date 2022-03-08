<script>
  import { push } from "svelte-spa-router";
  import TodoCheckbox from "./TodoCheckbox.svelte";
  import Button from "./Button.svelte";
  import { todos } from "../stores";
  export let id;
  export let title;
  export let completed;

  const handleChange = (e) => {
    todos.toggle(id)
  }

  const handleOnDeleteClick = (e) => {
    todos.remove(id);
  }

  const handleClick = (e) => {
    push(`/todo/${id}`);
  }

</script>

<div on:click={handleClick}>
  <TodoCheckbox on:change={handleChange} completed={completed} />
  <h3>{title}</h3>
  <Button on:click={handleOnDeleteClick} --bg-color="#ef4444">Delete</Button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #1e293b;
    gap: 1rem;
    padding: 0.5rem 1rem;
    justify-content: space-between;
  }
</style>
