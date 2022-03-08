<script>
	import Router, {link} from "svelte-spa-router";
	import routes from "./routes";
</script>

  <header>
	  <a href="/" use:link>
	  	<h1>Todo</h1>
	  </a>
  </header>
  <main>
  <Router routes={routes} />
  </main>

<style>
    :global(body) {
        margin: 0 2rem;
        padding: 0;
		height: 100vh;
		width: calc(100% - 2rem * 2);
        background-color: #0f172a;
		color: #f8fafc;
		font-family: Inter;
    }

	:global(a) {
		text-decoration: none;
		color: #f8fafc;
	}


</style>
