<script>
</script>

<button on:click|preventDefault|stopPropagation>
    <slot></slot>
</button>

<style>
  button {
    background-color: var(--bg-color);
    font-weight: bold;
    font-size: 1.175rem;
    padding: 0.5rem 1rem;
    color: #f8fafc;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    box-shadow: 1px 2px 3px rgba(0,0,0,0,.2);
  }
</style>