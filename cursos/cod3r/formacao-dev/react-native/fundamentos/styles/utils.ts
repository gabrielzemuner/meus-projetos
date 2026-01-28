// styles/utils.ts
import { Platform, StyleSheet } from "react-native";
import {
  alpha,
  borderWidth,
  colors,
  fontSize,
  lineHeight,
  radius,
  size,
  spacing,
  zIndex,
} from "./tokens";

export const u = StyleSheet.create({
  /**
   * =========================
   * 1) Layout / Flex
   * =========================
   */
  flex1: { flex: 1 },
  flexRow: { flexDirection: "row" },
  flexCol: { flexDirection: "column" },

  flexWrap: { flexWrap: "wrap" },
  flexNoWrap: { flexWrap: "nowrap" },

  itemsStart: { alignItems: "flex-start" },
  itemsCenter: { alignItems: "center" },
  itemsEnd: { alignItems: "flex-end" },
  itemsStretch: { alignItems: "stretch" },

  justifyStart: { justifyContent: "flex-start" },
  justifyCenter: { justifyContent: "center" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyEvenly: { justifyContent: "space-evenly" },

  selfStart: { alignSelf: "flex-start" },
  selfCenter: { alignSelf: "center" },
  selfEnd: { alignSelf: "flex-end" },
  selfStretch: { alignSelf: "stretch" },

  grow: { flexGrow: 1 },
  grow0: { flexGrow: 0 },
  shrink: { flexShrink: 1 },
  shrink0: { flexShrink: 0 },

  // gap (depende da versão do RN/engine; mas está correto)
  gap0: { gap: spacing[0] },
  gap1: { gap: spacing[1] },
  gap2: { gap: spacing[2] },
  gap3: { gap: spacing[3] },
  gap4: { gap: spacing[4] },
  gap5: { gap: spacing[5] },
  gap6: { gap: spacing[6] },
  gap8: { gap: spacing[8] },
  gap10: { gap: spacing[10] },
  gap12: { gap: spacing[12] },

  // úteis pra row/col
  gapX2: { columnGap: spacing[2] },
  gapX4: { columnGap: spacing[4] },
  gapY2: { rowGap: spacing[2] },
  gapY4: { rowGap: spacing[4] },

  /**
   * =========================
   * 2) Spacing (Padding/Margin)
   * =========================
   */
  // Padding all
  p0: { padding: spacing[0] },
  p0_5: { padding: spacing[0.5] },
  p1: { padding: spacing[1] },
  p1_5: { padding: spacing[1.5] },
  p2: { padding: spacing[2] },
  p2_5: { padding: spacing[2.5] },
  p3: { padding: spacing[3] },
  p3_5: { padding: spacing[3.5] },
  p4: { padding: spacing[4] },
  p5: { padding: spacing[5] },
  p6: { padding: spacing[6] },
  p8: { padding: spacing[8] },
  p10: { padding: spacing[10] },
  p12: { padding: spacing[12] },
  p16: { padding: spacing[16] },

  // Padding axis
  px2: { paddingHorizontal: spacing[2] },
  px4: { paddingHorizontal: spacing[4] },
  px6: { paddingHorizontal: spacing[6] },
  px8: { paddingHorizontal: spacing[8] },
  py2: { paddingVertical: spacing[2] },
  py4: { paddingVertical: spacing[4] },
  py6: { paddingVertical: spacing[6] },
  py8: { paddingVertical: spacing[8] },

  // Padding sides
  pt2: { paddingTop: spacing[2] },
  pr2: { paddingRight: spacing[2] },
  pb2: { paddingBottom: spacing[2] },
  pl2: { paddingLeft: spacing[2] },

  pt4: { paddingTop: spacing[4] },
  pr4: { paddingRight: spacing[4] },
  pb4: { paddingBottom: spacing[4] },
  pl4: { paddingLeft: spacing[4] },

  // Margin all
  m0: { margin: spacing[0] },
  m0_5: { margin: spacing[0.5] },
  m1: { margin: spacing[1] },
  m1_5: { margin: spacing[1.5] },
  m2: { margin: spacing[2] },
  m2_5: { margin: spacing[2.5] },
  m3: { margin: spacing[3] },
  m3_5: { margin: spacing[3.5] },
  m4: { margin: spacing[4] },
  m6: { margin: spacing[6] },
  m8: { margin: spacing[8] },

  // Margin axis
  mx2: { marginHorizontal: spacing[2] },
  mx4: { marginHorizontal: spacing[4] },
  mx6: { marginHorizontal: spacing[6] },
  my2: { marginVertical: spacing[2] },
  my4: { marginVertical: spacing[4] },
  my6: { marginVertical: spacing[6] },

  // Margin sides
  mt2: { marginTop: spacing[2] },
  mr2: { marginRight: spacing[2] },
  mb2: { marginBottom: spacing[2] },
  ml2: { marginLeft: spacing[2] },

  mt4: { marginTop: spacing[4] },
  mr4: { marginRight: spacing[4] },
  mb4: { marginBottom: spacing[4] },
  ml4: { marginLeft: spacing[4] },

  /**
   * =========================
   * 3) Typography
   * =========================
   */
  textXs: { fontSize: fontSize.xs },
  textSm: { fontSize: fontSize.sm },
  textBase: { fontSize: fontSize.base },
  textLg: { fontSize: fontSize.lg },
  textXl: { fontSize: fontSize.xl },
  text2xl: { fontSize: fontSize["2xl"] },
  text3xl: { fontSize: fontSize["3xl"] },

  fontNormal: { fontWeight: "400" },
  fontMedium: { fontWeight: "500" },
  fontSemibold: { fontWeight: "600" },
  fontBold: { fontWeight: "700" },

  italic: { fontStyle: "italic" },

  textLeft: { textAlign: "left" },
  textCenter: { textAlign: "center" },
  textRight: { textAlign: "right" },

  uppercase: { textTransform: "uppercase" },
  lowercase: { textTransform: "lowercase" },
  capitalize: { textTransform: "capitalize" },

  leadingTight: { lineHeight: Math.round(fontSize.base * lineHeight.tight) },
  leadingNormal: { lineHeight: Math.round(fontSize.base * lineHeight.normal) },
  leadingRelaxed: {
    lineHeight: Math.round(fontSize.base * lineHeight.relaxed),
  },

  /**
   * =========================
   * 4) Colors (Text/Background)
   * =========================
   */
  // base
  textText: { color: colors.text },
  textWhite: { color: colors.white },
  textBlack: { color: colors.black },

  bgTransparent: { backgroundColor: colors.transparent },
  bgWhite: { backgroundColor: colors.white },
  bgBlack: { backgroundColor: colors.black },

  // grays
  textGray500: { color: colors.gray500 },
  textGray700: { color: colors.gray700 },
  textGray900: { color: colors.gray900 },
  bgGray50: { backgroundColor: colors.gray50 },
  bgGray100: { backgroundColor: colors.gray100 },
  bgGray200: { backgroundColor: colors.gray200 },

  // reds/blues/greens/yellows (níveis úteis)
  textRed500: { color: colors.red500 },
  textRed600: { color: colors.red600 },
  bgRed500: { backgroundColor: colors.red500 },
  bgRed50: { backgroundColor: colors.red50 },

  textBlue500: { color: colors.blue500 },
  textBlue600: { color: colors.blue600 },
  bgBlue500: { backgroundColor: colors.blue500 },
  bgBlue50: { backgroundColor: colors.blue50 },

  textGreen500: { color: colors.green500 },
  textGreen600: { color: colors.green600 },
  bgGreen500: { backgroundColor: colors.green500 },
  bgGreen200: { backgroundColor: colors.green200 },
  bgGreen50: { backgroundColor: colors.green50 },

  textYellow500: { color: colors.yellow500 },
  textYellow600: { color: colors.yellow600 },
  bgYellow500: { backgroundColor: colors.yellow500 },
  bgYellow50: { backgroundColor: colors.yellow50 },

  // overlays prontos (muito úteis pra modal/backdrop)
  bgOverlay10: { backgroundColor: colors.overlay10 },
  bgOverlay25: { backgroundColor: colors.overlay25 },
  bgOverlay50: { backgroundColor: colors.overlay50 },
  bgOverlay75: { backgroundColor: colors.overlay75 },

  /**
   * =========================
   * 5) Borders / Radius
   * =========================
   */
  border0: { borderWidth: borderWidth[0] },
  border: { borderWidth: borderWidth[1] },
  border2: { borderWidth: borderWidth[2] },
  border4: { borderWidth: borderWidth[4] },

  borderTransparent: { borderColor: colors.transparent },
  borderGray200: { borderColor: colors.gray200 },
  borderGray300: { borderColor: colors.gray300 },
  borderRed500: { borderColor: colors.red500 },
  borderBlue500: { borderColor: colors.blue500 },
  borderGreen500: { borderColor: colors.green500 },

  roundedNone: { borderRadius: radius.none },
  roundedSm: { borderRadius: radius.sm },
  roundedMd: { borderRadius: radius.md },
  roundedLg: { borderRadius: radius.lg },
  roundedXl: { borderRadius: radius.xl },
  rounded2xl: { borderRadius: radius["2xl"] },
  roundedFull: { borderRadius: radius.full },

  overflowHidden: { overflow: "hidden" },

  /**
   * =========================
   * 6) Sizing (Width/Height)
   * =========================
   */
  wAuto: { width: "auto" },
  hAuto: { height: "auto" },
  wFull: { width: "100%" },
  hFull: { height: "100%" },

  // escala: w4, h10 etc
  w0: { width: size[0] },
  w1: { width: size[1] },
  w2: { width: size[2] },
  w3: { width: size[3] },
  w4: { width: size[4] },
  w6: { width: size[6] },
  w8: { width: size[8] },
  w10: { width: size[10] },
  w12: { width: size[12] },
  w16: { width: size[16] },
  w20: { width: size[20] },
  w24: { width: size[24] },

  h0: { height: size[0] },
  h1: { height: size[1] },
  h2: { height: size[2] },
  h3: { height: size[3] },
  h4: { height: size[4] },
  h6: { height: size[6] },
  h8: { height: size[8] },
  h10: { height: size[10] },
  h12: { height: size[12] },
  h16: { height: size[16] },
  h20: { height: size[20] },
  h24: { height: size[24] },

  minW0: { minWidth: 0 },
  minH0: { minHeight: 0 },

  aspectSquare: { aspectRatio: 1 },
  aspectVideo: { aspectRatio: 16 / 9 },

  /**
   * =========================
   * 7) Position
   * =========================
   */
  relative: { position: "relative" },
  absolute: { position: "absolute" },

  top0: { top: 0 },
  right0: { right: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },

  inset0: { top: 0, right: 0, bottom: 0, left: 0 },

  absoluteFill: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  z0: { zIndex: zIndex[0] },
  z10: { zIndex: zIndex[10] },
  z20: { zIndex: zIndex[20] },
  z30: { zIndex: zIndex[30] },
  z40: { zIndex: zIndex[40] },
  z50: { zIndex: zIndex[50] },

  /**
   * =========================
   * 8) Effects (Opacity / Shadow / Elevation)
   * =========================
   * Recomendo: opacity separado (igual Tailwind)
   */
  opacity0: { opacity: alpha[0] },
  opacity5: { opacity: alpha[5] },
  opacity10: { opacity: alpha[10] },
  opacity20: { opacity: alpha[20] },
  opacity25: { opacity: alpha[25] },
  opacity30: { opacity: alpha[30] },
  opacity40: { opacity: alpha[40] },
  opacity50: { opacity: alpha[50] },
  opacity60: { opacity: alpha[60] },
  opacity70: { opacity: alpha[70] },
  opacity75: { opacity: alpha[75] },
  opacity80: { opacity: alpha[80] },
  opacity90: { opacity: alpha[90] },
  opacity100: { opacity: alpha[100] },

  // Sombras: iOS ok; Android use elevation.
  shadowNone: Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    android: { elevation: 0 },
    default: {},
  }) as object,

  shadowSm: Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 4,
    },
    android: { elevation: 2 },
    default: {},
  }) as object,

  shadowMd: Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.16,
      shadowRadius: 10,
    },
    android: { elevation: 6 },
    default: {},
  }) as object,

  shadowLg: Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
    },
    android: { elevation: 10 },
    default: {},
  }) as object,

  elevation1: { elevation: 1 },
  elevation2: { elevation: 2 },
  elevation4: { elevation: 4 },
  elevation8: { elevation: 8 },
  elevation12: { elevation: 12 },
});
