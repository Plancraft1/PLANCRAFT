"use client";

import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { spaces } from "../../consts/spaces";

export const StyledFilterBarInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(10 * var(--gap-size)) 1fr;
  column-gap: calc(1 * var(--gap-size));
  align-items: center;
  ${breakpoint.monitor} {
    grid-template-columns: calc(10 * var(--gap-size)) 1fr;
    column-gap: calc(1 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: calc(10 * var(--gap-size)) 1fr;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: calc(12 * var(--gap-size)) 1fr;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    row-gap: calc(0.5 * var(--gap-size));
  }
`;

export const StyledFilterItems = styled.div`
  display: flex;
  row-gap: ${spaces.xxs}px;
  column-gap: calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    column-gap: calc(1 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    column-gap: calc(0.5 * var(--gap-size));
  }
  ${breakpoint.tabletLandscape} {
    flex-wrap: wrap;
  }
  ${breakpoint.phone} {
  }
`;

export const StyledFilterItem = styled(Link)`
  all: unset;
  cursor: pointer;
  &.inactive {
    opacity: 0.5;
  }
`;
