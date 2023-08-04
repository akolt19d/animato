<script>
    export let user;
    import { Avatar, popup, LightSwitch } from "@skeletonlabs/skeleton";

    const settingsPopup = {
        event: "click",
        target: "settingsPopup",
        placement: "bottom"
    }

    const settingsList = [
        {
            text: "Account",
            icon: "mingcute:user-3-line",
            link: "/account"
        },
        {
            text: "Upload",
            icon: "mingcute:upload-2-line",
            link: "/upload"
        },
        {
            text: "Log out",
            icon: "mingcute:exit-line",
            link: "/logout"
        },
    ]
</script>

<div class="flex gap-4 items-center">
    <button class="btn-icon h-min active:rotate-180" use:popup={settingsPopup}><iconify-icon icon="mingcute:settings-5-line" width="32"></iconify-icon></button>
    <div class="card p-4 shadow-xl variant-filled-surface" data-popup="settingsPopup">
        <ul class="list-nav">
            {#each settingsList as el}
                <li>
                    <a data-sveltekit-preload-data={ el.link == "/logout" ? "off" : "hover" } href={el.link}>
                        <iconify-icon icon={el.icon}></iconify-icon>
                        <span>{el.text}</span>
                    </a>
                </li>
            {/each}
        </ul>
        <div class="flex justify-center pt-2">
            <LightSwitch />
        </div>
        <div class="arrow variant-filled-surface" />
    </div>
    <Avatar src={user.avatar_url} initials={user.username.slice(0, 1)} background="bg-gradient-to-br variant-gradient-primary-secondary" rounded="rounded-full" />
</div>