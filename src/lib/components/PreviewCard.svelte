<script>
    export let title, description, date, rating;
</script>

<div class="card variant-ghost-surface w-72 h-96 grid grid-rows-[8fr_2fr_3fr_2fr] overflow-hidden card-hover">
    <div class="bg-surface-500">

    </div>
    <div class="card-header flex items-end relative justify-between">
        <h4 class="h4">{ title }</h4>
        <div class="h-8 aspect-square bg-gradient-to-br variant-gradient-primary-secondary rounded-full"></div>
    </div>
    <div class="p-4">
        <p class="text-xs text-opacity-50 text-surface-900-50-token">
            { description }
        </p>
    </div>
    <div class="card-footer flex items-end relative justify-between text-surface-500-400-token text-opacity-30 transition-all text-sm">
        <hr class="mx-auto w-5/6 absolute top-0">
        <p>{ date }</p>
        <p>★ { rating }</p>
    </div>
</div>