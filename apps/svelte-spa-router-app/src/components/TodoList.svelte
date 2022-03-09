<script>
  import Todo from "./Todo.svelte";
  export let todos;
  export let title;
</script>

<h3>{title}</h3>

<ul>
  {#each todos as todo}
    <li>
      <Todo id={todo.id} title={todo.title} completed={todo.completed} />
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }
</style>
