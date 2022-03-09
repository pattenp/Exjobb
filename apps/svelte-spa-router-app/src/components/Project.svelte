<script>
  import { todos } from "../stores";
  import { push } from "svelte-spa-router";

  export let title = "No Title Given";
  export let id;

  $: completedTasks = $todos.filter(
    (t) => t.projectId === id && t.completed === true
  );

  const handleClick = (e) => {
    e.preventDefault();
    push(`/project/${id}`);
  };
</script>

<div on:click={handleClick}>
  <h3>{title}</h3>
  <p>{completedTasks.length} av {$todos.length}</p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #64748b;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
