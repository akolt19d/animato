<script>
    export let data;
    import { AppShell } from "@skeletonlabs/skeleton";
    import NavBar from "$lib/components/NavBar.svelte";
	import { setContext } from "svelte";

    $: user = data?.user

	$: {
		setContext('user', user)
	}
</script>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar {user} />
	</svelte:fragment>
	<!-- <svelte:fragment slot="pageHeader">
		<div class="pt-16 px-4 flex justify-between w-4/5 mx-auto items-end relative">
			<h2 class="h2">test's profile</h2>
		</div>
	</svelte:fragment> -->
	<slot />
</AppShell>

