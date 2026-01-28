// styles/tokens.ts

export const colors = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#000000",

  // Base text
  text: "#111827",

  // Gray scale
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",

  // Red
  red50: "#FEF2F2",
  red100: "#FEE2E2",
  red200: "#FECACA",
  red300: "#FCA5A5",
  red400: "#F87171",
  red500: "#EF4444",
  red600: "#DC2626",
  red700: "#B91C1C",

  // Blue
  blue50: "#EFF6FF",
  blue100: "#DBEAFE",
  blue200: "#BFDBFE",
  blue300: "#93C5FD",
  blue400: "#60A5FA",
  blue500: "#3B82F6",
  blue600: "#2563EB",
  blue700: "#1D4ED8",

  // Green
  green50: "#F0FDF4",
  green100: "#DCFCE7",
  green200: "#BBF7D0",
  green300: "#86EFAC",
  green400: "#4ADE80",
  green500: "#22C55E",
  green600: "#16A34A",
  green700: "#15803D",

  // Yellow
  yellow50: "#FEFCE8",
  yellow100: "#FEF9C3",
  yellow200: "#FEF08A",
  yellow300: "#FDE047",
  yellow400: "#FACC15",
  yellow500: "#EAB308",
  yellow600: "#CA8A04",
  yellow700: "#A16207",

  // Useful overlays
  overlay10: "rgba(0,0,0,0.10)",
  overlay25: "rgba(0,0,0,0.25)",
  overlay50: "rgba(0,0,0,0.50)",
  overlay75: "rgba(0,0,0,0.75)",
} as const;

export const alpha = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  90: 0.9,
  100: 1,
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 20,
  xl: 24,
  "2xl": 30,
  "3xl": 36,
} as const;

export const lineHeight = {
  tight: 1.1,
  normal: 1.35,
  relaxed: 1.6,
} as const;

export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
} as const;

// para w/h em escala (mesma ideia do Tailwind: w-4, h-10 etc)
export const size = spacing;

export const radius = {
  none: 0,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  "2xl": 24,
  full: 9999,
} as const;

export const borderWidth = {
  0: 0,
  1: 1,
  2: 2,
  4: 4,
} as const;

export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
} as const;
