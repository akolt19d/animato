<script>
    export let form;
    export let data;
    import Alert from '$lib/components/Alert.svelte';
    import User from '$stores';

    let visible = false

    setTimeout(() => {
        visible = form ? true : false
    }, 200)

    if(data) {
        User.set(undefined)
    }
</script>

<section class="container flex justify-center items-center h-full mx-auto">
    <div class="card p-12 relative">
        <a href="/" class="btn-icon absolute left-1 top-1"><iconify-icon icon="mingcute:arrow-left-fill" width="24"></iconify-icon></a>
        <h1 class="h2 px-4">Log into your account</h1>
        <hr class="my-6">
        <form method="POST">
            <label for="email" class="label">
                <span>E-mail</span><br>
                <input type="email" name="email" class="input w-80 h-10 p-2">
            </label>
            <br>
            <label for="password" class="label">
                <span>Password</span><br>
                <input type="password" name="password" class="input w-80 h-10 p-2"><br>
                <a href="/" class="anchor">Forgot your password?</a>
            </label>
            <br>
            <label for="remember" class="label flex items-center space-x-1">
                <input type="checkbox" name="remember" id="remember" class="checkbox">
                <span>Remember me</span>
            </label>
            <button type="submit" class="btn variant-filled-secondary my-4">Log in</button><br>
            <a href="/register" class="anchor">Don't have an account?</a>
        </form>
    </div>
    {#if visible}
        <Alert {...form} on:click={() => { visible = false }}/>
    {/if}
</section>