<script>
    import { Avatar } from "@skeletonlabs/skeleton";
    import { getContext } from "svelte";
    import { blur } from "svelte/transition";

    let user = getContext('user')

    let editing = false
    let username = user?.username
    let handle = `@${user?.username}`
    let email = user?.email
    let avatarUrl = user?.avatar_url
    let initials = user?.username.slice(0, 1)

    function resetValuesAfterCancel(e) {
        e.preventDefault()
        editing = !editing
        username = user.username
        handle = `@${user.username}`
        email = user.email
    }
</script>

<h1 class="h1 px-4">User information</h1>
<hr class="my-6">
<div class="w-min mx-auto grid grid-cols-[auto_1fr] gap-12 px-12">
    <div>
        <div class="relative">
            {#if editing}
            <div class="w-full h-full absolute z-10 rounded-full bg-black/75 flex justify-center items-center gap-4" transition:blur={{ duration: 200 }}>
                <button class="btn-icon variant-ghost-primary"><iconify-icon icon="mingcute:upload-2-line"></iconify-icon></button>
                <button class="btn-icon variant-ghost-error">x</button>
            </div>
            {/if}
            <Avatar bind:src={avatarUrl} bind:initials={initials} width="w-72" background="bg-gradient-to-br variant-gradient-primary-secondary" rounded="rounded-full" />
        </div>
        <p class="h2 mt-2 text-center">Avatar</p>
    </div>
    <div class="relative">
        <form on:reset={resetValuesAfterCancel}>
            <label for="username" class="label">
                <span>Username</span><br>
                <input type="text" name="username" id="username" class="input w-80 h-10 p-2" bind:value={username} disabled={!editing}>
            </label>
            <br>
            <label for="handle" class="label">
                <span>Handle</span><br>
                    <input type="text" name="handle" id="handle" class="input w-80 h-10 p-2" bind:value={handle} disabled={!editing}>
            </label>
            <br>
            <label for="email" class="label">
                <span>E-mail</span><br>
                <input type="email" name="email" id="email" class="input w-80 h-10 p-2" bind:value={email} disabled={!editing}>
            </label>
            <br>
            {#if editing}
            <button type="submit" class="btn variant-filled-primary" disabled={!editing}>Save</button>
            <button type="reset" class="btn variant-filled-secondary" disabled={!editing}>Cancel</button>
            {/if}
        </form>
        {#if !editing}
        <button class="btn variant-filled-primary absolute top-0 left-full ml-2 p-2 rounded-full" on:click={ () => { editing = !editing } }><iconify-icon icon="mingcute:edit-2-line" width="16"></iconify-icon></button>
        {/if}
    </div>
</div>