<script>
  import { link } from "svelte-spa-router";
  import Project from "../components/Project.svelte";
  import Header from "../components/PageHeader.svelte"
  import { projects } from "../stores";
</script>


<Header>
  <h2 slot="title">Dina projeket</h2>
  <a  slot="action" href="/project" use:link>Skapa Projekt</a> 
</Header>
{#if $projects.length > 0} 

<div class="projects">
  {#each $projects as project}
    <Project id={project.id} title={project.title} />
  {/each}
</div>
{:else}
  <p>Du har inga projekt än</p>
{/if}
<style>
  .projects {
    margin: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33%, 1fr)); 
    gap: 1rem;
    
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

</style>
