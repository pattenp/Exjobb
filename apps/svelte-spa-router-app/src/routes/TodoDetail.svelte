<script>
  import { pop } from "svelte-spa-router";

  import Button from "../components/Button.svelte";
  import { todos } from "../stores";

  export let params = {};
  let id = params.id;
  $: todo = $todos.find((todo) => todo.id === id);

  const handleToggle = (e) => {
    todos.toggle(id);
    pop();
  };

  const handleDelete = (e) => {
    todos.remove(id);
    pop();
  };
</script>

{#if todo}
  <h2>{todo.title}</h2>
  {#if todo.description}
    <h3>Beskrivning</h3>
    <p>{todo.description}</p>
  {/if}
  <div>
    <Button on:click={handleToggle} --bg-color="#22D3EE">
      {#if todo.completed}Avmarkera
      {:else}
        Markera som klar
      {/if}
    </Button>
    <Button on:click={handleDelete} --bg-color="#ef4444">Ta bort uppgift</Button
    >
  </div>
{/if}

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
