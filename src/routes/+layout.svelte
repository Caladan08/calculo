<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { SvelteUIProvider } from "@svelteuidev/core";
</script>

<SvelteUIProvider>
  <div class="content">
    <Navbar />
    <slot />
  </div>
</SvelteUIProvider>

<style>
  .content {
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 600px
      ),
      fixed 0 0 / 20px 20px radial-gradient(#d1d1d1 1px, transparent 0),
      fixed 10px 10px / 20px 20px radial-gradient(#d1d1d1 1px, transparent 0);
  }
</style>
