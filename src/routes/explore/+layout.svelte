<script>
	export let data;
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import { AppShell, AppRail, AppRailAnchor, storePopup} from '@skeletonlabs/skeleton';

	$:user = data?.user

	// setTimeout(() => {
	// 	console.log(user)
	// }, 50)
</script>

<AppShell slotSidebarLeft="w-24">
	<svelte:fragment slot="header">
		<NavBar {user} />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail width="w-auto">
			<AppRailAnchor href="/explore/animations" selected={$page.route.id === "/explore/animations"}>
				<svelte:fragment slot="lead"><iconify-icon icon="mingcute:run-fill" width="32" height="32"></iconify-icon></svelte:fragment>
				<span>Animations</span>
			</AppRailAnchor>
			<AppRailAnchor href="/explore/models" selected={$page.route.id === "/explore/models"}>
				<svelte:fragment slot="lead"><iconify-icon icon="mingcute:box-3-line" width="32" height="32"></iconify-icon></svelte:fragment>
				<span>Models</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<div class="pt-16 px-4 flex justify-between w-4/5 mx-auto items-end relative">
			<h2 class="h2">Explore the {$page.route.id.slice(9)}!</h2>
			<div>
				<button class="btn-icon"><iconify-icon icon="mingcute:sort-descending-line" width="24">Sort</iconify-icon></button>
			</div>
		</div>
		<!-- <hr class=" w-5/6 mx-auto"> -->
	</svelte:fragment>
	<slot />
</AppShell>
