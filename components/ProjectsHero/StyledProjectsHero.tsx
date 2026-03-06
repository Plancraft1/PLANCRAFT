"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";

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
    row-gap: calc(1 * var(--gap-size));
    margin-bottom: calc(3 * var(--gap-size));
  }
`;

export const ProjectsHeroHeader = styled.h1`
  color: ${colors.primary400};
  font-size: 60px;
  ${breakpoint.monitor} {
    font-size: 70px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 36px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 28px;
  }
`;
