"use client";
import styled from "styled-components";
import { StyledProjects } from "../../app/projects/[[...category]]/(client)/StyledProjects";
import { breakpoint } from "../../consts/breakpoints";
import { spaces } from "../../consts/spaces";

export const StyledDividerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(1 * var(--gap-size)) 0;
  &.flip {
    flex-direction: column-reverse;
  }
  &.no-padding {
    padding: 0;
  }
`;

export const StyledDividerHeaderInner = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc(1 * var(--gap-size));
  padding-right: calc(1 * var(--gap-size));
  padding-top: 0;
  ${StyledProjects} & {
    ${breakpoint.tabletLandscape} {
      padding-bottom: ${spaces.xs}px;
    }
  }
  ${breakpoint.phone} {
    padding: 0;
  }
`;
