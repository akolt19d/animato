<script>
    import { Avatar } from "@skeletonlabs/skeleton";
    import { getContext } from "svelte";
    import { blur } from "svelte/transition";

    let user = getContext('user')

    let editingData = false
    let editingAvatar = false 

    let username = user?.username
    let description = user?.description
    let avatarUrl = user?.avatar_url
    let initials = user?.initials

    function resetValuesAfterCancel(e) {
        e.preventDefault()
        editingData = !editingData
        username = user.username
        description = user.description
    }

    function resetAvatarAfterCancel(e) {
        e.preventDefault()
        editingAvatar = !editingAvatar
        avatarUrl = user?.avatar_url
        initials = user?.initials
    }
</script>

<h1 class="h1 px-4">User information</h1>
<hr class="my-6">
<div class="mx-auto grid rows-cols-[auto_1fr] gap-12 px-12">
    <div>
        <h4 class="h4">Public information</h4>
        <p class="opacity-40">These are the things which will be visible on your <a class="anchor" href={`/profile/${user.handle}`}>profile</a>.</p>
    </div>
    <div class="relative mx-auto">
        <form on:reset={resetValuesAfterCancel} method="post" action="?/pubInfo">
            <label for="username" class="label">
                <span>Username</span><br>
                <input type="text" name="username" id="username" class="input w-80 h-10 p-2" bind:value={username} disabled={!editingData}>
            </label>
            <br>
            <label for="description" class="label">
                <span>Description</span><br>
                    <textarea name="description" id="description" rows="4" class="input w-80 p-2" bind:value={description} disabled={!editingData} />
            </label>
            <br>
            {#if editingData}
            <button type="submit" class="btn variant-filled-primary" disabled={!editingData}>Save</button>
            <button type="reset" class="btn variant-filled-secondary" disabled={!editingData}>Cancel</button>
            {/if}
        </form>
        {#if !editingData}
        <button class="btn variant-filled-primary absolute top-0 left-full ml-2 p-2 rounded-full" on:click={ () => { editingData = !editingData } }><iconify-icon icon="mingcute:edit-2-line" width="16"></iconify-icon></button>
        {/if}
    </div>
</div>
<hr class="my-6">
<div class="mx-auto grid rows-cols-[auto_1fr] gap-12 px-12">
    <div>
        <h4 class="h4">Avatar</h4>
        <p class="opacity-40">Choose whatever suits you best. You can utilize our built-in default avatar or upload your own.</p>
    </div>
    <div class="relative mx-auto flex flex-row gap-8">
        <div>
            <div class="relative">
                {#if editingAvatar}
                <div class="w-full h-full absolute z-10 rounded-full bg-black/75 flex justify-center items-center gap-4" transition:blur={{ duration: 200 }}>
                    <button class="btn-icon variant-ghost-primary"><iconify-icon icon="mingcute:upload-2-line"></iconify-icon></button>
                    {#if avatarUrl.length != 0} 
                    <button class="btn-icon variant-ghost-error" on:click={() => { avatarUrl = "" }}>x</button>
                    {/if}
                </div>
                {/if}
                <Avatar bind:src={avatarUrl} bind:initials={initials} width="w-72" background="bg-gradient-to-br variant-gradient-primary-secondary" rounded="rounded-full" />
            </div>
            {#if !editingAvatar}
            <button class="btn variant-filled-primary absolute top-0 left-full ml-2 p-2 rounded-full" on:click={ () => { editingAvatar = !editingAvatar } }><iconify-icon icon="mingcute:edit-2-line" width="16"></iconify-icon></button>
            {/if}
        </div>
        <form on:reset={resetAvatarAfterCancel}>
            {#if avatarUrl.length == 0}    
                <label for="initials" class="label">
                    <span>Initials</span><br>
                    <input type="text" name="initials" id="initials" class="input w-80 h-10 p-2" bind:value={initials} disabled={!editingAvatar} maxlength="2">
                </label>
                <br>
                <!-- <label for="color" class="label">
                    <span>Avatar color</span><br>
                    <div class="grid grid-cols-[auto_1fr] gap-2">
                        <input class="input" id="color" type="color" bind:value={avatarColor} disabled={!editingAvatar} on:change={() => { console.log(avatarColor) }} />
                        <input class="input" type="text" bind:value={avatarColor} readonly tabindex="-1" disabled={!editingAvatar} />
                    </div>
                </label>
                <br> -->
            {/if}
            {#if editingAvatar}
                <button type="submit" class="btn variant-filled-primary" disabled={!editingAvatar}>Save</button>
                <button type="reset" class="btn variant-filled-secondary" disabled={!editingAvatar}>Cancel</button>
            {/if}
        </form>
    </div>
</div>