<script>
    export let user;
    import { AppBar } from "@skeletonlabs/skeleton";
    import SearchBar from "./SearchBar.svelte";
    import UserNavbarArea from "./UserNavbarArea.svelte";
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center place-" slotTrail="place-content-end" padding="p-5">
    <svelte:fragment slot="lead">
        <a href="/">animato</a>
    </svelte:fragment>
    <SearchBar/>
    <svelte:fragment slot="trail">
        {#if user}
        <UserNavbarArea { user } />
        {:else}	
        <div class="flex flex-row gap-4">
            <a href="/login" class="btn variant-ringed-primary">log in</a>
            <a href="/register" class="btn variant-filled-secondary">sign up</a>
        </div>
        {/if}
    </svelte:fragment>
</AppBar>