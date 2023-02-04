<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte"
  import { SvelteUIProvider } from "@svelteuidev/core";
</script>

<SvelteUIProvider>
  <div class="h-full">
    <Navbar />
    <div class="content bg-background">
      <slot />
    </div>
    <Footer />
  </div>
</SvelteUIProvider>

<style>
  .content {
    height: 100%;
  }
  :global(*) {
    scroll-behavior: smooth;
  }
</style>
