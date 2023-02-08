<script>
  import { page } from "$app/stores";
  import { Group } from "@svelteuidev/core";
</script>

<svelte:head>
  <title>Error!</title>
</svelte:head>

<div class="wrapper">
  <Group position="center" direction="column">
    <img src="/ErrorFile.png" alt="There was an error!" class="w-1/4 pt-5" />
    <h1 class="text-5xl text-white pt-5 font-righteous">Error!</h1>
    <h1 class="text-white font-nunito text-2xl pt-5">
      {$page.status}: {$page.error?.message}
    </h1>
  </Group>
</div>

<style>
  .wrapper {
    height: calc(100vh - (4rem + 11rem));
  }
</style>
