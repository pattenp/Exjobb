<script>
  import Todo from "./Todo.svelte";
  export let todos;
  export let title;
</script>

<h3>{title}</h3>
{#each todos as todo}
  <ul>
    <li>
      <Todo id={todo.id} title={todo.title} completed={todo.completed} />
    </li>
  </ul>
{/each}

<style>
    ul {
        list-style: none;
        padding: 0;
    }
</style>