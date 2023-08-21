<script>
    export let form;
    import selectedOption from "./store";
    import Uploads from "./Uploads.svelte";
    import Collections from "./Collections.svelte";
    import UserInfo from "./UserInfo.svelte";
    import Alert from "$lib/components/Alert.svelte";

    let visible = false
    setTimeout(() => {
        visible = form ? true : false
    }, 200)

    const components = {
            userInfo: UserInfo,
            collections: Collections,
            uploads:  Uploads
    }
</script>

<div class="container h-full mx-auto py-6 border-surface-200-700-token">
    {#if visible}
    <Alert {...form} on:click={() => { visible = false }}/>
    {/if}
    <svelte:component this={components[$selectedOption]} />
</div>