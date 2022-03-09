<script>
  import TodoList from "../components/TodoList.svelte";
  import Header from "../components/PageHeader.svelte";
  import { link } from "svelte-spa-router";
  import { projects, todos } from "../stores";

  export let params = {};

  $: currentProject = $projects.find((p) => p.id === params.id);

  $: completedTaks = $todos.filter(
    (todo) => todo.completed && todo.projectId === params.id
  );

  $: uncompletedTaks = $todos.filter(
    (todo) => !todo.completed && todo.projectId === params.id
  );

  let filterValue = 0;
  let filters = ["Alla", "Aktiva", "Klara"];
</script>

<Header>
  <h2 slot="title">{currentProject.title}</h2>
  <a slot="action" href={`/add-todo/${params.id}`} use:link>Lägg till uppgift</a
  >
</Header>
<div class="btn-group">
  {#each filters as filter, index}
    <label class:active={filterValue === index}>
      {filter}
      <input
        type="radio"
        bind:group={filterValue}
        name="filter"
        value={index}
      />
    </label>
  {/each}
</div>
{#if $todos.filter((t) => t.projectId === params.id).length > 0}
  <div
    style:display={filterValue === 0 || filterValue === 1 ? "block" : "none"}
  >
    {#if uncompletedTaks.length > 0}
      <TodoList title={"Aktiva uppgifter"} todos={uncompletedTaks} />
    {:else}
      <p>Inga aktiva uppgifter</p>
    {/if}
  </div>
  <div
    style:display={filterValue === 0 || filterValue === 2 ? "block" : "none"}
  >
    {#if completedTaks.length > 0}
      <TodoList title={"Avslutade uppgifter"} todos={completedTaks} />
    {:else}
      <p>Inga klara uppgifter</p>
    {/if}
  </div>
{:else}
  <p>Du har inga uppgifter i projektet</p>
{/if}

<style>
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .btn-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border: 1px solid #0ea5e9;
    cursor: pointer;
    color: #0ea5e9;
    font-weight: bold;
    border-radius: 0.25rem;
  }

  label.active {
    background-color: #0ea5e9;
    color: #f1f5f9;
  }

  input[type="radio"] {
    appearance: none;
  }
</style>
