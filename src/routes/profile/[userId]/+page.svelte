<script>
    export let data;
    import { Avatar } from '@skeletonlabs/skeleton';
    import PreviewCard from "$lib/components/PreviewCard.svelte"
    import CollectionCard from "$lib/components/CollectionCard.svelte"

    $: targetUser = data?.targetUser

    // $: console.log(targetUser)

    $: previewCard = {
        title: "Ye",
        description: "description",
        date: "1 day ago",
        rating: "4,0",
        author: targetUser
    }

    $: collectionCard = {
        title: "Ye",
        models: "120",
        animations: "0",
        likes: "12",
        author: targetUser
    }

    const list = [
        {
            icon: "mingcute:box-3-line",
            text: "120",
            title: "models"
        },
        {
            icon: "mingcute:run-fill",
            text: "8",
            title: "animations"
        },
        {
            icon: "mingcute:folder-line",
            text: "8",
            title: "collections"
        }
    ]
</script>

<div class="container mx-auto py-6">
    <h1 class="h1 px-4">User profile</h1>
    <hr class="my-6">
    <div class="grid grid-cols-[auto_1fr]">
        <div class="text-center w-min">
            <Avatar bind:src={targetUser.avatar_url} bind:initials={targetUser.initials} width="w-72" background="bg-gradient-to-br variant-gradient-primary-secondary" rounded="rounded-full" />
            <h2 class="h2 mt-2">{ targetUser.username }</h2>
            <h4 class="h4 opacity-40">@{ targetUser.handle }</h4>
            <p class="my-2 text-sm">
                This is a built-in account which allows the creators of the website to test new features :D
            </p>
            <ul class="mx-auto text-sm flex justify-around opacity-50">
                {#each list as el}
                    <li class="flex justify-center items-center gap-1" title={`${el.text} ${el.title}`}>
                        <iconify-icon icon={el.icon}></iconify-icon> {el.text}
                    </li>
                {/each}
            </ul>
        </div>
        <div class="pl-10 relative overflow-x-hidden">
            <p class="h3">Models <a href="/explore/models"><iconify-icon icon="mingcute:external-link-line"></iconify-icon></a></p> 
            <div class="h-max gap-6 py-6 flex items-center overflow-x-scroll snap-x scroll-px-4 snap-mandatory scroll-smooth mb-6">
                {#each Array(8) as _, index (index)}
                    <div class="w-max snap-start shrink-0">
                        <PreviewCard {...previewCard} />
                    </div>
                {/each}
            </div>
            <p class="h3">Animations <a href="/explore/animations"><iconify-icon icon="mingcute:external-link-line"></iconify-icon></a></p> 
            <div class="h-max gap-6 py-6 flex items-center overflow-x-scroll snap-x scroll-px-4 snap-mandatory scroll-smooth mb-6">
                {#each Array(8) as _, index (index)}
                    <div class="w-max snap-start shrink-0">
                        <PreviewCard {...previewCard} />
                    </div>
                {/each}
            </div>
            <p class="h3">Collections <a href="/explore/models"><iconify-icon icon="mingcute:external-link-line"></iconify-icon></a></p> 
            <div class="h-80 gap-6 py-6 flex items-center overflow-x-scroll snap-x scroll-px-4 snap-mandatory scroll-smooth">
                {#each Array(8) as _, index (index)}
                    <div class="w-max snap-start shrink-0">
                        <CollectionCard {...collectionCard} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>