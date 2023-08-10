<script>
    import { Avatar } from "@skeletonlabs/skeleton";
    import { getContext } from "svelte";
    import { blur } from "svelte/transition";

    let user = getContext('user')

    let editingData = false
    let editingAvatar = false 

    let username = user?.username
    let handle = `@${user?.username}`
    let email = user?.email
    let avatarUrl = user?.avatar_url
    let avatarColor = "#aeaeae"
    let initials = user?.username.slice(0, 1)

    $: avatarBg = `bg-[${avatarColor}]`

    $: {
        console.log(avatarBg)
    }

    function resetValuesAfterCancel(e) {
        e.preventDefault()
        editingData = !editingData
        username = user.username
        handle = `@${user.username}`
        email = user.email
    }

    function resetAvatarAfterCancel(e) {
        e.preventDefault()
        editingAvatar = !editingAvatar
        avatarUrl = user?.avatar_url
        avatarColor = "#aeaeae"
        initials = user?.username.slice(0, 1)
    }
</script>

<h1 class="h1 px-4">User information</h1>
<hr class="my-6">
<div class="mx-auto grid rows-cols-[auto_1fr] gap-12 px-12">
    <div>
        <h4 class="h4">Edit data</h4>
        <p class="opacity-40">Customize the things which make you.. you!</p>
    </div>
    <div class="relative mx-auto">
        <form on:reset={resetValuesAfterCancel}>
            <label for="username" class="label">
                <span>Username</span><br>
                <input type="text" name="username" id="username" class="input w-80 h-10 p-2" bind:value={username} disabled={!editingData}>
            </label>
            <br>
            <label for="handle" class="label">
                <span>Handle</span><br>
                    <input type="text" name="handle" id="handle" class="input w-80 h-10 p-2" bind:value={handle} disabled={!editingData}>
            </label>
            <br>
            <label for="email" class="label">
                <span>E-mail</span><br>
                <input type="email" name="email" id="email" class="input w-80 h-10 p-2" bind:value={email} disabled={!editingData}>
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
    <div class="relative mx-auto flex flex-row gap-4">
        <div>
            <div class="relative">
                {#if editingAvatar}
                <div class="w-full h-full absolute z-10 rounded-full bg-black/75 flex justify-center items-center gap-4" transition:blur={{ duration: 200 }}>
                    <button class="btn-icon variant-ghost-primary"><iconify-icon icon="mingcute:upload-2-line"></iconify-icon></button>
                    <button class="btn-icon variant-ghost-error">x</button>
                </div>
                {/if}
                <Avatar bind:src={avatarUrl} bind:initials={initials} width="w-72" bind:background={avatarBg} rounded="rounded-full" />
            </div>
            <p class="h2 mt-2 text-center">Your avatar</p>
            {#if !editingAvatar}
            <button class="btn variant-filled-primary absolute top-0 left-full ml-2 p-2 rounded-full" on:click={ () => { editingAvatar = !editingAvatar } }><iconify-icon icon="mingcute:edit-2-line" width="16"></iconify-icon></button>
            {/if}
        </div>
        <form on:reset={resetAvatarAfterCancel}>
            {#if avatarUrl.length == 0}    
                <label for="initials" class="label">
                    <span>Initials</span><br>
                    <input type="text" name="initials" id="initials" class="input w-80 h-10 p-2" bind:value={initials} disabled={!editingAvatar} maxlength="2" on:change={() => { initials = initials.toUpperCase() }}>
                </label>
                <br>
                <div class="grid grid-cols-[auto_1fr] gap-2">
                    <input class="input" type="color" bind:value={avatarColor} disabled={!editingAvatar} on:change={() => { console.log(avatarColor) }} />
                    <input class="input" type="text" bind:value={avatarColor} readonly tabindex="-1" disabled={!editingAvatar} />
                </div>
                <br>
                {#if editingAvatar}
                    <button type="submit" class="btn variant-filled-primary" disabled={!editingAvatar}>Save</button>
                    <button type="reset" class="btn variant-filled-secondary" disabled={!editingAvatar}>Cancel</button>
                {/if}
            {/if}
        </form>
    </div>
</div>