<script>
    export let completed;
</script>

<div>
    <input on:click|stopPropagation on:change type="checkbox" bind:checked={completed}>
</div>

<style>
    div {
        position: relative;
    }

    input {
        appearance: none;
        height: 24px;
        width: 24px;
        border: 1px solid #344953;
        border-radius: 50%;
        outline: none;
        background-color: #41B883;
        cursor: pointer;
    }

    input:checked {
        /* border: 1px solid #41B883; */
        /* background-color: #34495E; */
    }

    input:checked::after {
       content: "";
       position:absolute;
       border: 2px solid #fff;
       border-top: none;
       border-right: none;
       transform: rotate(-45deg);
       height: 4px;
       width: 8px;
       left: 11px;
       top: 10px;
    }

    input:active {
        border: 2px solid #34495E;
    }
</style>