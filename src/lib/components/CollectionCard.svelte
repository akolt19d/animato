<div class="card variant-ghost-surface w-80 h-64 grid grid-rows-[1fr_auto] overflow-hidden card-hover cursor-pointer">
    <div class="grid grid-rows-2 grid-cols-2 border-b border-surface-400-500-token gap-px">
        {#each Array(4) as _, index (index)}
            <div class="bg-surface-500">

            </div>
        {/each}
    </div>
    <div class="p-2 grid grid-cols-[1fr_auto] text-surface-900-50-token text-sm">
        <div class="text-ellipsis">
            <p>Collection #1</p>
        </div>
        <div class="flex flex-row">
            <span class="divider-vertical mx-2"></span>
            <div class="flex items-center gap-2">
                <span class="flex items-center">
                    <iconify-icon icon="mingcute:run-fill"></iconify-icon>
                    3
                </span>
                <span class="flex items-center">
                    <iconify-icon icon="mingcute:box-3-line"></iconify-icon>
                    16
                </span>
            </div>
            <span class="divider-vertical mx-2"></span>
            <span class="flex items-center">
                ♡ 450
            </span>
        </div>
    </div>
</div>