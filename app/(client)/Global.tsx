"use client";
import { createGlobalStyle } from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  /* :where() keeps specificity at 0; c15t elements are excluded because
     c15t ships its CSS in @layer and an unlayered reset would override it */
  :where(*:not([class*="c15t-"])) {
    margin: 0;
    padding: 0;
    font-family: HelveticaNow, Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
  :root {
    --dot-size: 1px;
    --plus-size: 21px;
    --column-count: 40;
    --gap-size: calc(100vw / var(--column-count));
    --navbar-max-height: calc(3 * var(--gap-size));

    ${breakpoint.monitor} {
      --dot-size: 2px;
    }
    ${breakpoint.tabletLandscape} {
      --plus-size: 11px;
    }
    ${breakpoint.phone} {
      --column-count: 20;
      --gap-size: calc(100vw / var(--column-count));
      --plus-size: 9px;
    }
  }
  /* c15t overrides — c15t declares these inside @layer, so unlayered
     rules here always win regardless of specificity */
  :root {
    --consent-widget-font-family: HelveticaNow, Helvetica, Arial, sans-serif;
    --frame-font-family: HelveticaNow, Helvetica, Arial, sans-serif;
    --consent-dialog-max-width: 40rem;
    --consent-widget-max-width: 40rem;
    --consent-banner-max-width: 520px;
    --consent-widget-accordion-arrow-color: ${colors.primary400};
    --consent-widget-accordion-icon-color: ${colors.primary400};
    --consent-widget-accordion-content-color: ${colors.gray600};
    --consent-widget-accordion-padding: 1rem;
  }
  /* switch: keep track colour on hover/focus, no ring around the thumb */
  [data-slot="switch"]:hover [data-slot="switch-track"],
  [data-slot="switch"]:focus-visible [data-slot="switch-track"] {
    background-color: var(--c15t-switch-track);
  }
  [data-slot="switch"][data-state="checked"]:hover [data-slot="switch-track"],
  [data-slot="switch"][data-state="checked"]:focus-visible
    [data-slot="switch-track"] {
    background-color: var(--c15t-switch-track-active);
  }
  [data-slot="switch-thumb"] {
    box-shadow: none;
  }
  /* even spacing: title top / title→description / description bottom */
  [data-slot="preference-item-content-inner"] {
    padding-top: 0;
  }
  [class*="c15t-ui-"] {
    letter-spacing: 0.02em;
  }
  /* align expanded description with the category title (padding + icon + gap) */
  [data-slot="preference-item-content-viewport"] {
    padding-inline-start: calc(
      var(--consent-widget-accordion-padding) +
        var(--consent-widget-accordion-icon-size) + var(--consent-widget-gap)
    );
  }
  @font-face {
    font-family: 'HelveticaNow';
    src: url('../fonts/helveticaNowRegular.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;
