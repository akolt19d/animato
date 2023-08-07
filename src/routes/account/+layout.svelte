<script>
    export let data;
    import { AppShell } from "@skeletonlabs/skeleton";
    import selectedOption from "./store"
    import NavBar from "$lib/components/NavBar.svelte";
	import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";

    $: user = data?.user

    let selected = "userInfo";
	$: {
		selectedOption.set(selected)
	}

    const listboxData = [
        {
            text: "User info",
			value: "userInfo",
            icon: "mingcute:user-info-line"
        },
        {
            text: "My collections",
			value: "collections",
            icon: "mingcute:folder-star-line"
        },
        {
            text: "My uploads",
			value: "uploads",
            icon: "mingcute:file-upload-line"
        }
    ]
</script>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar {user} />
	</svelte:fragment>
	<!-- <svelte:fragment slot="pageHeader">
		<div class="pt-16 px-4 flex justify-between w-4/5 mx-auto items-end relative">
			<h2 class="h2">Welcome, {user.username}!</h2>
		</div>
	</svelte:fragment> -->
	<svelte:fragment slot="sidebarLeft">
		<div class="p-8">
			<h2 class="h2 pb-4 text-center">Account</h2>
			<ListBox>
				{#each listboxData as item}	
				<ListBoxItem active="variant-filled-primary" bind:group={selected} name="listbox" value={item.value}>
					<svelte:fragment slot="lead"><iconify-icon icon={item.icon}></iconify-icon></svelte:fragment>
					{item.text}
				</ListBoxItem>
				{/each}
			</ListBox>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>

