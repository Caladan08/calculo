import { readable } from "svelte/store";
import type { ConversionType } from "$lib/types"

export const conversionData = readable<ConversionType[]>([
  {
    convert: 16,
    name: "REM",
    value: "rem"
  },
  {
    convert: .16,
    name: "EM",
    value: "em"
  }
]);
