<script>
    import { Autocomplete, popup } from "@skeletonlabs/skeleton";

    let userInput = ""

    const autocompleteOptions = [
        { label: 'yes', value: 'yes' },
        { label: 'no', value: 'no' },
        { label: 'maybe', value: 'maybe' },
        { label: 'idk', value: 'idk' }
    ]

    const popupSettings = {
        event: 'focus-click',
        target: 'searchPopup',
        placement: 'bottom'
    }

    function onSelect(event) {
        document.querySelector("#searchbar").focus()
        userInput = event.detail.label
    }

    function onInput(event) {
        event.target.blur()
        event.target.focus()
    }
</script>

<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <input type="search" name="searchbar" id="searchbar" class="input w-80 h-10 p-2 outline-none" placeholder="Search" bind:value={userInput} use:popup={popupSettings} on:input={onInput}>
    <button class="variant-soft-secondary active:variant-filled-primary hover:variant-filled-secondary transition-colors"><iconify-icon icon="mingcute:search-3-line"></iconify-icon></button>
</div>
<div data-popup="searchPopup" class="card p-4 w-72 shadow-xl variant-ghost-primary">
    <Autocomplete bind:input={userInput} options={autocompleteOptions} on:selection={onSelect}/>
</div>