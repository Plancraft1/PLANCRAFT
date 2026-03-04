"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledProjectsHero = styled.div`
  display: grid;
  grid-template-columns: calc(10 * var(--gap-size)) 1fr;
  column-gap: calc(1 * var(--gap-size));
  align-items: center;
  margin-bottom: calc(3 * var(--gap-size));
  padding: 0 calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    grid-template-columns: calc(10 * var(--gap-size)) 1fr;
    column-gap: calc(1 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: calc(10 * var(--gap-size)) 1fr;
  }
  ${breakpoint.tabletLandscape} {
    margin-bottom: calc(5 * var(--gap-size));
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    row-gap: calc(2 * var(--gap-size));
    margin-bottom: calc(6 * var(--gap-size));
  }
  ${breakpoint.phone} {
    padding: 0;
  }
`;
