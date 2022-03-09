<script>
  import Button from "../components/Button.svelte";
  import { pop } from "svelte-spa-router";
  import { todos } from "../stores";

  export let params = {}

  let title = "";
  let description = "";
  let error = false;

  const handleSubmit = (e) => {
    if (title.trim().length === 0) {
        error = true;
        return;
    }
    error = false;
    todos.add(title, description, params.projectId);
    pop();
  }

  const handleCancel = (e) => pop(); 

</script>

<h2>Lägg till upggift</h2>
<form on:submit|preventDefault>
  <label>
    Titel
    <input type="text" bind:value={title} />
    <p class:error>Uppgift måste ha en titel</p>
  </label>
  <label>
    Beskrivning 
    <textarea cols="37" rows="5" bind:value={description} />
  </label>
  <div>
  <Button on:click={handleSubmit} --bg-color="#22c55e">
   Spara 
  </Button>
  <Button on:click={handleCancel} --bg-color="#ef4444">Avbryt</Button>
  </div>
</form>

<style>
  label {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 0.4rem;
  }
  div {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 1rem;
  }
  p {
      display: none;
  }
  .error {
    color: red;
    font-size: 0.8rem;
    display: block;
  }
</style>
