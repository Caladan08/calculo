export type ConversionType = {
  value: String,
  name: String,
  convert: number
}

export type CurrentConversionType = {
  from: {
    name: String,
    value: String,
    inputted: string
  };
  to: {
    name: String,
    value: String,
    inputted: string
  };
}