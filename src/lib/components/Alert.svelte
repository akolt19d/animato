<script>
    export let variant, header, message = undefined, link = false;

    import { fly, blur } from 'svelte/transition';
</script>

<aside class={`alert variant-ghost-${variant} fixed top-15 right-5 px-8 py-4`} in:fly|local={{ duration: 200, x: -100 }} out:blur|local={{ duration: 200 }}>
    <div class="alert-message">
        <h4 class="h4">{header}</h4>
        {#if message}
        <p>{message}</p>
        {/if}
    </div>    
    <div class="alert-actions">
        {#if link}
            <a href={link} class={`btn variant-filled-${variant}`}>Log in</a>
        {/if}
        <button class={`btn-icon variant-filled-${variant}`} on:click>X</button>
    </div>
</aside>