import type { Theme } from "@c15t/nextjs";
import { colors, rgbaColors } from "../../consts/colors";

const uppercase = {
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  fontWeight: 400,
} as const;

const button = { ...uppercase, whiteSpace: "nowrap" } as const;

const heading = { ...uppercase, fontSize: "16px" } as const;

export const cookieConsentTheme = {
  colors: {
    primary: colors.primary400,
    primaryHover: colors.primary500,
    textOnPrimary: colors.white,
    surface: colors.white,
    surfaceHover: colors.gray100,
    border: colors.primary400,
    borderHover: colors.primary500,
    text: colors.primary400,
    textMuted: colors.gray600,
    overlay: rgbaColors(0.4).primary400,
    switchTrack: colors.gray300,
    switchTrackActive: colors.primary400,
    switchThumb: colors.white,
  },
  typography: {
    fontFamily: "HelveticaNow, Helvetica, Arial, sans-serif",
    fontSize: { sm: "14px", base: "14px", lg: "16px" },
    fontWeight: { normal: 400, medium: 400, semibold: 500 },
    lineHeight: { tight: "1.2", normal: "1.4", relaxed: "1.6" },
  },
  radius: { sm: "0", md: "0", lg: "0", full: "0" },
  shadows: { sm: "none", md: "none", lg: "none" },
  motion: {
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    easingOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  },
  consentActions: {
    default: { variant: "neutral", mode: "stroke" },
    accept: { variant: "primary", mode: "filled" },
    reject: { variant: "primary", mode: "stroke" },
    customize: { variant: "primary", mode: "ghost" },
  },
  slots: {
    consentBannerCard: {
      style: { border: `1px solid ${colors.primary400}` },
    },
    consentBannerTitle: { style: heading },
    consentDialogCard: {
      style: { border: `1px solid ${colors.primary400}` },
    },
    consentDialogTitle: { style: heading },
    // gray CTA strip bleeding to the card edges, same as the banner footer
    consentWidgetFooter: {
      style: {
        margin:
          "var(--consent-dialog-card-padding) calc(-1 * var(--consent-dialog-card-padding)) calc(-1 * var(--consent-dialog-card-padding))",
        padding: "1rem var(--consent-dialog-card-padding)",
        background: colors.gray100,
        borderTop: 0,
      },
    },
    buttonPrimary: { style: button },
    buttonSecondary: { style: button },
  },
} satisfies Theme;
