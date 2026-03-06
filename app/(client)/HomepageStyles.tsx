"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";

export const StyledHomepage = styled.main`
  padding: 0 calc(1 * var(--gap-size));
  position: relative;
`;

export const HpHeader = styled.h1`
  font-size: 130px;
  line-height: 1.1em;
  letter-spacing: -0.02em;
  color: ${colors.primary400};
  margin-left: -0.06em;
  white-space: pre-line;
  ${breakpoint.smallNotebook} {
    font-size: 90px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 70px;
  }
  ${breakpoint.phone} {
    font-size: 35px;
  }
  ${breakpoint.smallPhone} {
    font-size: 28px;
  }
`;

export const HpHeroInner = styled.div`
  margin-left: calc(19 * var(--gap-size));
  margin-top: calc(2 * var(--gap-size));
  display: grid;
  row-gap: calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    margin-left: calc(21 * var(--gap-size));
  }
  ${breakpoint.tabletPortrait} {
    margin-left: calc((var(--column-count) / 3) * var(--gap-size));
    row-gap: calc(2 * var(--gap-size));
  }
  ${breakpoint.phone} {
    margin-left: calc(3 * var(--gap-size));
  }
  ${breakpoint.phone} {
    margin-left: 0;
  }
`;

export const HpHero = styled.section`
  margin-left: calc(1 * var(--gap-size));
  ${breakpoint.phone} {
    margin-left: 0;
  }
`;

export const HpAbout = styled.section`
  margin-top: calc(2 * var(--gap-size));
  padding: 0 calc(1 * var(--gap-size));
  ${breakpoint.tabletPortrait} {
    margin-top: calc(4 * var(--gap-size));
  }
  ${breakpoint.phone} {
    padding: 0;
  }
`;

export const HpQuoteAbout = styled.div`
  margin: calc(4 * var(--gap-size)) 0;
  ${breakpoint.tabletPortrait} {
    margin: calc(6 * var(--gap-size)) 0;
  }
`;

export const HpQuoteServices = styled.div`
  margin: calc(4 * var(--gap-size)) 0;
  margin-left: calc(0.2 * var(--gap-size) * var(--column-count));
  display: grid;
  row-gap: calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    margin-left: calc(0.3 * var(--gap-size) * var(--column-count));
  }
  ${breakpoint.tabletPortrait} {
    margin-left: 0;
    row-gap: calc(3 * var(--gap-size));
    margin: calc(5 * var(--gap-size)) 0;
  }
  ${breakpoint.phone} {
    /* margin: calc(2 * var(--gap-size)) 0; */
  }
`;

export const HpProjectsCta = styled.div`
  display: grid;
  justify-items: start;
  row-gap: calc(1.5 * var(--gap-size));
  margin-top: calc(1 * var(--gap-size));
  max-width: calc(0.4 * var(--gap-size) * var(--column-count));
  ${breakpoint.tabletPortrait} {
    row-gap: calc(2 * var(--gap-size));
    max-width: calc(0.6 * var(--gap-size) * var(--column-count));
    margin: calc(7 * var(--gap-size)) 0 calc(5 * var(--gap-size));
  }
  ${breakpoint.phone} {
    max-width: 100%;
    margin: calc(5 * var(--gap-size)) 0 calc(3 * var(--gap-size));
  }
`;

export const HpQuoteW = styled.div`
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;
