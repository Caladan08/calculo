<script lang="ts">
  import { Group, Input, Divider } from "@svelteuidev/core";
  import { conversionData } from "$lib/stores/conversionData";
  import { currentConversion } from "$lib/stores/currentConversion";
  import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";
  import ArrowDown from "carbon-icons-svelte/lib/ArrowDown.svelte";

  const dataPoints = [1, 2, 4, 6, 8, 10, 15, 20]
  $: divisionValue = $conversionData.filter((conversion) => conversion.value === $currentConversion.to.value)[0].convert

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

  function changeToValueFromTable(value: number) {
    const newCurrentConversion = {
      from: {
        ...$currentConversion.from,
        inputted: value.toString()
      },
      to: $currentConversion.to
    }
    currentConversion.set(newCurrentConversion)
    changeValue()
    window.scrollTo(0, 0)
  }

  let windowWidth = 0
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
  <title>Calculo</title>
  <meta
    name="description"
    content="The easiest way to quickly convert pixels to REMs or pixels to EMs!"
  />
</svelte:head>

<h1 class={`text-4xl text-white pt-20 px-6 ${windowWidth > 527 ? "" : "pb-5"}`} align="center">
  {$currentConversion.from.name} to {$currentConversion.to.name} Converter
</h1>
<div class={`w-full ${windowWidth > 527 ? "flex justify-center gap-10 pt-10" : ""} px-6 mb-8`}>
  <Group position="center" direction="column" class={`${windowWidth > 527 ? "" : "w-full"}`}>
    <label
      for="convert-from"
      class="text-primary rounded-md pt-4 px-4 text-2xl cursor-default"
      >{$currentConversion.from.name} ({$currentConversion.from
        .value})</label
    >
    <Input
      override={{
        input: {
          py: "2rem",
          fontSize: "2rem",
          backgroundColor: "#212020 !important",
          textAlign: "center !important",
          border: "1px solid #fdcd05 !important",
          color: "#ffffff !important",
          px: "0.75rem"
        },
      }}
      type="number"
      bind:value={$currentConversion.from.inputted}
      on:input={changeValue}
      id="convert-from"
      label="The value to be converted"
    />
  </Group>
  <Group position="center" direction="column" class={`my-auto ${windowWidth > 527 ? "mt-20" : "mt-5"}`}>
    {#if windowWidth > 527}
      <ArrowRight size={32} fill="#fdcd05" class="cursor-default" />
    {:else}
      <ArrowDown size={32} fill="#fdcd05" class="cursor-default" />
    {/if}
  </Group>
  <Group position="center" direction="column" class={`${windowWidth > 527 ? "" : "w-full"}`}>
    <div class="dropdown relative inline-block">
      <button class="text-primary rounded-md pt-4 px-4 text-2xl"
        >{$currentConversion.to.name} ({$currentConversion.to.value})</button
      >
      <div
        class="dropdown-content hidden absolute bg-[#f1f1f1] min-w-[160px] shadow-lg z-[1] rounded-md"
      >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p
          class="text-black py-3 px-4 block hover:bg-[#ddd] cursor-pointer rounded-t-md transition-smooth"
          on:click={() => changeToValue("em")}
        >
          EM (em)
        </p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p
          class="text-black py-3 px-4 block hover:bg-[#ddd] cursor-pointer rounded-b-md transition-smooth"
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
          backgroundColor: "#212020 !important",
          textAlign: "center !important",
          border: "1px solid #fdcd05 !important",
          color: "#ffffff !important",
          px: "0.75rem"
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
<Divider class="!mx-6 !mb-8 " />
<h1 class="text-3xl text-gray-300 mb-8" align="center">Unit Conversion Table</h1>
<div class="max-w-lg flex justify-center mx-auto">
  <table class="text-white text-center rounded-md mb-11 w-full mx-5" id="conversion-table" align="center">
    <thead>
      <tr class="w-full">
        <th class={`py-3 bg-primary text-white rounded-tl-md w-1/2`}>{$currentConversion.from.name}</th>
        <th class={`py-3 bg-primary text-white rounded-tr-md w-1/2`}>{$currentConversion.to.name}s</th>
      </tr>
    </thead>
    <tbody>
      {#each dataPoints as dataPoint}
        <tr class="transition-smooth hover:bg-[#595757] cursor-pointer" on:click={() => changeToValueFromTable(dataPoint)}>
          <td class="border-b border-[#ddd] border-solid">{dataPoint}px</td>
          <td class="border-b border-[#ddd] border-solid">{dataPoint / divisionValue}{$currentConversion.to.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  * {
    font-family: "Sofia Sans";
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  #conversion-table td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
