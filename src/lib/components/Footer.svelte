<script>
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
  import { Group } from "@svelteuidev/core"

  let windowWidth = 0
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="w-full bg-footer text-white py-10 h-44 flex justify-center items-center flex-col">
  <h1 align="center" class="mb-5 font-bold font-sofiasans text-2xl">Made by Caladan</h1> 
  <Group position="center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class={`flex items-center`}>
      <a href="https://github.com/Caladan08/calculo" target="_blank" rel="noreferrer">
        <LogoGithub class="w-[37px] h-[37px] transition-smooth hover:w-[45px] hover:h-[45px]" fill="white" />
      </a>
    </div>
  </Group>
</div>