<script>
    export let target, user;
    import { Avatar } from "@skeletonlabs/skeleton";
</script>

<div class="card p-4 w-60 variant-filled-surface shadow-xl z-10" data-popup={ target }>
    <div class="text-center flex flex-col items-center">
        <Avatar src={user?.avatar_url} initials={user?.initials} background="bg-gradient-to-br variant-gradient-primary-secondary" rounded="rounded-full" />
        <span class="mt-1 text-sm">{ user?.username }</span>
        <span class="opacity-40 text-xs">@{ user?.username }</span>
    </div>
    <p class="text-sm my-2 text-center">
        This is a built-in account which allows the creators of the website to test new features :D
    </p>
    <div class="flex flex-row gap-2 opacity-40 justify-evenly">
        <span class="flex items-center">
            <iconify-icon icon="mingcute:run-fill"></iconify-icon>
            100
        </span>
        <span class="flex items-center">
            <iconify-icon icon="mingcute:box-3-line"></iconify-icon>
            200
        </span>
        <span class="flex items-center">
            <iconify-icon icon="mingcute:folder-star-line"></iconify-icon>
            12
        </span>
    </div>
    <div class="mt-4 flex justify-center">
        <button class="btn variant-filled-secondary text-sm">View profile</button>
    </div>
	<div class="arrow variant-filled-surface" />
</div>


