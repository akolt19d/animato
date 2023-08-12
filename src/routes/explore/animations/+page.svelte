<script>
    export let data;
    import PreviewCard from "$lib/components/PreviewCard.svelte";
    import User from "$stores"

    const card = {
        title: "Title",
        description: "Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quasi repellat in officiis nulla cumque iusto asperiores a aspernatur at.",
        date: "1 year ago",
        rating: "4,5",
        author: {
            username: "ye",
            initials: "YE",
        }
    }

    $:user = data?.user

    $:{
        User.set(data?.user)
    }
</script>

<div class="flex w-5/6 justify-center flex-row flex-wrap p-7 mx-auto gap-10">	
    {#each Array(18) as _, index (index)}
        <PreviewCard {...card}/>
    {/each}
</div>