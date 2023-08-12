<script>
    import PreviewCard from "$lib/components/PreviewCard.svelte"

    const card = {
        title: "Title",
        description: "Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quasi repellat in officiis nulla cumque iusto asperiores a aspernatur at.",
        date: "1 year ago",
        rating: "4,5"
    }
</script>

<h1 class="h1 px-4">Your uploads</h1>
<hr class="my-6">
<div class="flex flex-wrap gap-8 px-6 justify-center">
    {#each Array(8) as _, index (index)}
        <PreviewCard { ...card }  />
    {/each}
</div>