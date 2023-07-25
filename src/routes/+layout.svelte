<script>
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { page } from '$app/stores';
	import SearchBar from '../lib/components/SearchBar.svelte';
	import { AppShell, AppBar, AppRail, AppRailAnchor, storePopup} from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import 'iconify-icon';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell slotSidebarLeft="w-24">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center place-" slotTrail="place-content-end" padding="p-5">
			<svelte:fragment slot="lead">
				<a href="/">animato</a>
			</svelte:fragment>
			<SearchBar/>
			<svelte:fragment slot="trail">
				<div class="flex flex-row gap-4">
					<button class="btn variant-ringed-primary">log in</button>
					<button class="btn variant-filled-secondary">sign in</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail width="w-auto">
			<AppRailAnchor href="/animations" selected={$page.route.id === "/animations"}>
				<svelte:fragment slot="lead"><iconify-icon icon="mingcute:run-fill" width="32" height="32"></iconify-icon></svelte:fragment>
				<span>Animations</span>
			</AppRailAnchor>
			<AppRailAnchor href="/models" selected={$page.route.id === "/models"}>
				<svelte:fragment slot="lead"><iconify-icon icon="mingcute:box-3-line" width="32" height="32"></iconify-icon></svelte:fragment>
				<span>Models</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<div class="container h-full mx-auto flex justify-center items-center">
		<slot />
	</div>
</AppShell>
