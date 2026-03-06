"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledPageIntro = styled.div``;

export const PageIntroHero = styled.section`
  display: grid;
  row-gap: calc(3 * var(--gap-size));
  ${breakpoint.monitor} {
    row-gap: calc(3 * var(--gap-size));
  }
  ${breakpoint.tabletPortrait} {
    row-gap: calc(6 * var(--gap-size));
  }
  ${breakpoint.phone} {
    row-gap: calc(4 * var(--gap-size));
  }
`;

export const PageIntroCta = styled.div`
  margin-top: calc(2 * var(--gap-size));
`;
