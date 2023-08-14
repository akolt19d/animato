<script>
    export let data;

    $: targetUser = data?.targetUser
</script>

<p>{ targetUser.username }</p>