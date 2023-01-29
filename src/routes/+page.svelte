<script lang="ts">
  import { Group, Input } from "@svelteuidev/core";
  import { conversionData } from "$lib/stores/conversionData";
  import { currentConversion } from "$lib/stores/currentConversion";
  import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";

  function changeToValue(value: String) {
    const changeToData = $conversionData.filter((val) => val.value === value);
    const newCurrentConversion = {
      from: $currentConversion.from,
      to: {
        ...$currentConversion.to,
        name: changeToData[0].name,
        value: changeToData[0].value,
      },
    };
    currentConversion.set(newCurrentConversion);
    localStorage.setItem(
      "currentConversion",
      JSON.stringify($currentConversion)
    );
    changeValue();
  }

  function changeValue() {
    const currentPxValue = parseInt($currentConversion.from.inputted);
    const toTypeValue = $conversionData.filter(
      (val) => val.value === $currentConversion.to.value
    )[0].convert;
    const newCurrentConversion = {
      from: $currentConversion.from,
      to: {
        ...$currentConversion.to,
        inputted: (currentPxValue / toTypeValue).toString(),
      },
    };
    currentConversion.set(newCurrentConversion);
    localStorage.setItem(
      "currentConversion",
      JSON.stringify($currentConversion)
    );
  }
</script>

<svelte:head>
  <title>Calculo</title>
  <meta
    name="description"
    content="The easiest way to quickly convert pixels to REMs or pixels to EMs!"
  />
</svelte:head>

<h1 class="text-5xl text-white pt-20" align="center">
  {$currentConversion.from.name} to {$currentConversion.to.name} Converter
</h1>
<div class="w-full flex justify-center gap-10 pt-10 px-6">
  <Group position="center" direction="column" class="!items-center">
    <!-- <div class="dropdown relative inline-block">
      <h1 class="text-primary rounded-md pt-4 px-4 text-2xl cursor-default">
        {$currentConversion.from.name} ({$currentConversion.from.value})
      </h1>
    </div> -->
    <label for="convert-from" class="text-primary rounded-md pt-4 px-4 text-2xl cursor-default"
      >{$currentConversion.from.name} ({$currentConversion.from.value})</label
    >
    <Input
      override={{
        input: {
          py: "2rem",
          fontSize: "2rem",
          backgroundColor: "#3d3b3b !important",
          textAlign: "center !important",
          border: "1px solid #fdcd05 !important",
          color: "#ffffff !important",
        },
      }}
      type="number"
      bind:value={$currentConversion.from.inputted}
      on:input={changeValue}
      id="convert-from"
      label="The value to be converted"
    />
  </Group>
  <Group position="center" direction="column" class="my-auto mt-20">
    <ArrowRight size={32} fill="#fdcd05" class="cursor-default" />
  </Group>
  <Group position="center" direction="column" class="!items-center">
    <div class="dropdown relative inline-block">
      <button class="text-primary rounded-md pt-4 px-4 text-2xl"
        >{$currentConversion.to.name} ({$currentConversion.to.value})</button
      >
      <div
        class="dropdown-content hidden absolute bg-[#f1f1f1] min-w-[160px] shadow-lg z-[1] rounded-md"
      >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p
          class="text-black py-3 px-4 block hover:bg-[#ddd] cursor-pointer rounded-t-md transition-all ease-in duration-100"
          on:click={() => changeToValue("em")}
        >
          EM (em)
        </p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p
          class="text-black py-3 px-4 block hover:bg-[#ddd] cursor-pointer rounded-b-md transition-all ease-in duration-100"
          on:click={() => changeToValue("rem")}
        >
          REM (rem)
        </p>
      </div>
    </div>
    <Input
      override={{
        input: {
          py: "2rem",
          fontSize: "2rem",
          backgroundColor: "#3d3b3b !important",
          textAlign: "center !important",
          border: "1px solid #fdcd05 !important",
          color: "#ffffff !important",
        },
      }}
      type="number"
      bind:value={$currentConversion.to.inputted}
      on:input={changeValue}
      id="convert-to"
      label="The converted value"
    />
  </Group>
</div>

<style>
  * {
    font-family: "Sofia Sans";
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
