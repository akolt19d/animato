<script>
    export let form;
    import Alert from '$lib/components/Alert.svelte';
    import { blur } from 'svelte/transition';
    import { popup } from '@skeletonlabs/skeleton';

    let handle = ""
    let email = ""
    let password = ""
    let repeat = ""

    let invalid = ""
    let visible = false
    let disable = true
    $: handleTaken = false

    const handlePopup = {
        event: "hover",
        target: "handlePopup",
        placement: "top"
    }

    setTimeout(() => {
        visible = form ? true : false
    }, 200)

    function checkInvalid() {
        if(password == repeat || repeat.length == 0) {
            invalid =  ""
        }
        else {
            invalid = " input-error"
        }
    }

    async function filterUsers() {
        const res = await fetch("/api/handleAvailable", {
            method: "POST",
            body: JSON.stringify({ handle }),
            headers: {
                "Content-Type": "application-json"
            }
        })
        handleTaken = await res.json()
    }

    $: if(handle.length > 0){
        filterUsers()
    } else {
        handleTaken = false
    }

    $: if(handle.length > 0 && email.length > 0 && password.length > 0 && password == repeat && !handleTaken) {
        disable = false
    } else {
        disable = true
    }
</script>

<section class="container flex justify-center items-center h-full mx-auto">
    <div class="card p-12 relative">
        <a href="/" class="btn-icon absolute left-1 top-1"><iconify-icon icon="mingcute:arrow-left-fill" width="24"></iconify-icon></a>
        <h1 class="h2 px-4">Create an account</h1>
        <hr class="my-6">
        <form method="POST">
            <label for="nick" class="label">
                <span>Handle</span><br>
                <div class="input-group input-group-divider grid-cols-[auto_1fr] relative">
                    <input type="text" name="handle" class={`input w-80 h-10 p-2 outline-none${handleTaken ? " input-error" : ""}`} maxlength="25" bind:value={handle} required>
                    {#if handle.length > 0}    
                    <div class={`input-group-shim variant-filled-${handleTaken ? "error" : "success"} absolute right-0 h-full`} transition:blur={{ duration: 300 }} use:popup={handlePopup}>{handleTaken ? "X" : "✓"}</div>
                    {/if}
                </div>
            </label>
            <br>
            <label for="email" class="label">
                <span>E-mail</span><br>
                <input type="email" name="email" class="input w-80 h-10 p-2" bind:value={email} required>
            </label>
            <br>
            <label for="password" class="label">
                <span>Password</span><br>
                <input type="password" name="password" class="input w-80 h-10 p-2" bind:value={password} required><br>
            </label>
            <br>
            <label for="r-password" class="label">
                <span>Repeat password</span><br>
                <input type="password" name="r-password" class={`input w-80 h-10 p-2${invalid}`} bind:value={repeat} on:blur={checkInvalid} required><br>
            </label>
            <br>
            <button type="submit" class="btn variant-filled-secondary my-4" disabled={disable}>Sign up</button><br>
            <a href="/login" class="anchor">Already have an account?</a>
        </form>
    </div>
    {#if visible}
    <Alert {...form} on:click={() => { visible = false }}/>
    {/if}
</section>
<div class={handle.length > 0 ? "" : "opacity-0"}>
    <div class={`card p-4 variant-filled-${handleTaken ? "error" : "success"}`} data-popup="handlePopup">
        <p>This handle is {handleTaken ? "already taken" : "available"}.</p>
        <div class={`arrow variant-filled-${handleTaken ? "error" : "success"}`} />
    </div>
</div>