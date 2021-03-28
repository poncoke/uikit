import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#0A0E3B",
  primaryBright: "#4F7FFB",
  primaryDark: "#010037",
  secondary: "#7645D9",
  success: "#0904A4",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#C0C7F0",
  backgroundDisabled: "#B7B7F7",
  contrast: "#191326",
  invertedContrast: "#9D9AF7",
  input: "#B2B2F7",
  inputSecondary: "#9E9ACC",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#8EA5F0",
  textSubtle: "#8f80ba",
  borderColor: "#B7B7F7",
  card: "#9D9AF7",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#9D9AF7",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
