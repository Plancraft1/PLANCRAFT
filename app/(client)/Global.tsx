"use client";
import { createGlobalStyle } from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
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
  @font-face {
    font-family: 'HelveticaNow';
    src: url('../fonts/helveticaNowRegular.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;
