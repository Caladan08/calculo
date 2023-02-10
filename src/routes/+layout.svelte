<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte"
  import { SvelteUIProvider } from "@svelteuidev/core";
</script>

<SvelteUIProvider>
  <div class="h-full">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="content bg-background">
      <slot />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</SvelteUIProvider>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

  .content {
    height: 100%;
    font-family: 'Nunito';
  }
  .navbar, .footer {
    font-family: "Righteous"
  }
  :global(*) {
    scroll-behavior: smooth;
  }
</style>
