<script>
    import { Avatar } from "@skeletonlabs/skeleton";
    import User from "$stores"
</script>

<h1 class="h1 px-4">User information</h1>
<hr class="my-6">
<div class="w-min mx-auto grid grid-cols-[auto_1fr] gap-12 px-12">
    <div>
        <Avatar src={$User.avatar_url} initials={$User.username.slice(0, 1)} width="w-72" background="bg-gradient-to-br variant-gradient-primary-secondary" rounded="rounded-full" />
        <p class="h2 mt-2 text-center">Avatar</p>
    </div>
    <form>
        <label for="username" class="label">
            <span>Username</span><br>
            <input type="text" name="username" class="input w-80 h-10 p-2" value={$User.username} disabled>
        </label>
        <br>
        <label for="handle" class="label">
            <span>Handle</span><br>
                <input type="text" name="handle" class="input w-80 h-10 p-2" value={`@${$User.username}`} disabled>
        </label>
        <br>
        <label for="email" class="label">
            <span>E-mail</span><br>
            <input type="email" name="email" class="input w-80 h-10 p-2" value={$User.email} disabled>
        </label>
        <br>
        <button class="btn variant-filled-secondary">Edit data</button>
    </form>
</div>