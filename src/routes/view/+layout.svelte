<script>
    export let data;
    import { AppShell } from "@skeletonlabs/skeleton";
    import NavBar from "$lib/components/NavBar.svelte";

    $: user = data?.user
</script>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar {user} />
	</svelte:fragment>
	<slot />
</AppShell>