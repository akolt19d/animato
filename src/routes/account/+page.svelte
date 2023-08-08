<script>
    import selectedOption from "./store";
    import Uploads from "./Uploads.svelte";
    import Collections from "./Collections.svelte";
    import UserInfo from "./UserInfo.svelte";

    const components = {
            userInfo: UserInfo,
            collections: Collections,
            uploads:  Uploads
    }
</script>

<div class="container h-full mx-auto py-6 border-surface-200-700-token">
    <svelte:component this={components[$selectedOption]} />
</div>