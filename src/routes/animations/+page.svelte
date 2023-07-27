<script>
    import PreviewCard from "../../lib/components/PreviewCard.svelte";
</script>

<div class="container flex w-full justify-center flex-row flex-wrap p-7 mx-auto gap-8">	
    {#each Array(12) as _, index (index)}
        <PreviewCard/>
    {/each}
</div>