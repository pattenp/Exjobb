<script>
  import { pop } from "svelte-spa-router";
  import { projects } from "../stores";
  import Button from "../components/Button.svelte";
  let projectName = "";
  let error = false;

  const handleSubmit = () => {
    if (projectName.length === 0) {
      error = true;
      return;
    } else {
      error = false;
      projects.add(projectName);
      pop();
    }
  };

  const handleCancel = () => {
    pop();
  };
  
</script>

<form>
  <label>
    Ange Namn på projekt
    <input type="text" bind:value={projectName} />
    <p class:error>Du måste ange ett namn på ditt projekt.</p>
  </label>
  <div>
    <Button --bg-color="#22c55e" on:click={handleSubmit}>Add Project</Button>
    <Button --bg-color="#ef4444" on:click={handleCancel}>Avbryt</Button>
  </div>
</form>

<style>
  label {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  p {
    display: none;
  }

  .error {
    display: block;
    color: red;
  }

  label > input {
    font-size: 1.4rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>
