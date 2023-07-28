<section class="container flex justify-center items-center h-full mx-auto">
    <div class="card p-12 relative">
        <a href="/" class="btn-icon absolute left-1 top-1"><iconify-icon icon="mingcute:arrow-left-fill" width="24"></iconify-icon></a>
        <h1 class="h2 px-4">Create an account</h1>
        <hr class="my-6">
        <form action="GET">
            <label for="nick" class="label">
                <span>Nick</span><br>
                <input type="text" name="nick" class="input w-80 h-10 p-2">
            </label>
            <br>
            <label for="email" class="label">
                <span>E-mail</span><br>
                <input type="email" name="email" class="input w-80 h-10 p-2">
            </label>
            <br>
            <label for="password" class="label">
                <span>Password</span><br>
                <input type="password" name="password" class="input w-80 h-10 p-2"><br>
            </label>
            <br>
            <label for="r-password" class="label">
                <span>Repeat password</span><br>
                <input type="password" name="r-password" class="input w-80 h-10 p-2"><br>
            </label>
            <br>
            <button type="submit" class="btn variant-filled-secondary my-4">Sign in</button><br>
            <a href="/login" class="anchor">Already have an account?</a>
        </form>
    </div>
</section>