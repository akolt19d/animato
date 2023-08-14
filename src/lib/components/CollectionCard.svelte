<script>
    export let title, models, animations, likes, author
    import { popup } from "@skeletonlabs/skeleton";
    import UserProfilePopup from "./UserProfilePopup.svelte";

    const popupSettings = {
        event: "click",
        target: "popupSettings",
        placement: "bottom"
    }
</script>

<div class="card variant-ghost-surface w-80 h-64 grid grid-rows-[1fr_auto] overflow-hidden cursor-pointer">
    <div class="grid grid-rows-2 grid-cols-2 border-b border-surface-400-500-token gap-px">
        {#each Array(4) as _, index (index)}
            <div class="bg-surface-500">

            </div>
        {/each}
    </div>
    <div class="p-2 grid grid-rows-[1fr_auto] text-surface-900-50-token text-sm">
        <div class="text-ellipsis mb-1">
            <p>{ title }</p>
        </div>
        <div class="grid grid-cols-[1fr_auto]">
            <div class="flex flex-row justify-start opacity-40">
                <div class="flex items-center gap-2">
                    <span class="flex items-center">
                        <iconify-icon icon="mingcute:run-fill"></iconify-icon>
                        { animations }
                    </span>
                    <span class="flex items-center">
                        <iconify-icon icon="mingcute:box-3-line"></iconify-icon>
                        { models }
                    </span>
                </div>
                <span class="divider-vertical mx-2"></span>
                <span class="flex items-center">
                    ♡ { likes }
                </span>
            </div>
            <div>
                <span class="hover:anchor" use:popup={popupSettings}>@{ author.handle }</span>
            </div>
        </div>
    </div>
</div>
<UserProfilePopup target={popupSettings.target} user={author} />