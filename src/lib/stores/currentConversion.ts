import { writable } from "svelte/store";
import type { CurrentConversionType } from "$lib/types"
import { browser } from "$app/environment";

let current_conversion = {
  from: {
    name: "Pixels",
    value: "px",
    inputted: "10"
  },
  to: {
    name: "REM",
    value: "rem",
    inputted: "0.625"
  }, 
}

if (browser) {
  const storedLatestConversion = localStorage.getItem("currentConversion")
  if (storedLatestConversion) {
    current_conversion = JSON.parse(storedLatestConversion)
  }
}

export const currentConversion = writable<CurrentConversionType>(current_conversion);
