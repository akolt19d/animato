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

<div class="container mx-auto">
    <svelte:component this={components[$selectedOption]} />
</div>