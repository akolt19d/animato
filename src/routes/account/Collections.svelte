<script>
    import CollectionCard from "$lib/components/CollectionCard.svelte";

    const cardSettings = {
        title: "Collection",
        animations: "3",
        models: "10",
        likes: "1,2k",
        creatorHandle: "test"
    }
</script>

<h1 class="h1 px-4">Your collections</h1>
<hr class="my-6">
<div class="flex flex-wrap gap-8 px-6 justify-center">
    {#each Array(8) as _, index (index)}
        <CollectionCard {...cardSettings} />
    {/each}
</div>