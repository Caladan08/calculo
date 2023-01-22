<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { SvelteUIProvider } from "@svelteuidev/core";
</script>

<SvelteUIProvider override={{ height: "100vh" }}>
  <div class="h-full">
    <Navbar />
    <div class="content bg-[#3d3b3b]">
      <slot />
    </div>
  </div>
</SvelteUIProvider>

<style>
  .content {
    height: 100%;
  }
</style>
