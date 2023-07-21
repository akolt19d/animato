<script>
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { page } from '$app/stores';
	import { AppShell, AppBar, AppRail, AppRailAnchor} from '@skeletonlabs/skeleton';

	console.log($page)
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center place-" slotTrail="place-content-end" padding="p-5">
			<svelte:fragment slot="lead">
				<a href="/">animato</a>
			</svelte:fragment>
			<!-- <TabGroup>
				<TabAnchor href="/animations" selected>
					<svelte:fragment slot="lead">Animations</svelte:fragment>
				</TabAnchor>
				<TabAnchor href="/models">
					<svelte:fragment slot="lead">Models</svelte:fragment>
				</TabAnchor>
			</TabGroup> -->
			<svelte:fragment slot="trail">
				<div class="flex flex-row gap-4">
					<button class="btn variant-filled-secondary">log in</button>
					<button class="btn variant-filled-primary">sign in</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/animations" selected={$page.route.id === "/animations"}>
				<svelte:fragment slot="lead">icon1</svelte:fragment>
				<span>Animations</span>
			</AppRailAnchor>
			<AppRailAnchor href="/models" selected={$page.route.id === "/models"}>
				<svelte:fragment slot="lead">icon2</svelte:fragment>
				<span>Models</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<slot />
</AppShell>
