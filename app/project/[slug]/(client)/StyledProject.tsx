"use client";

import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledProject = styled.main`
  padding: 0 calc(2 * var(--gap-size));
  ${breakpoint.phone} {
    padding: 0 calc(1 * var(--gap-size));
  }
`;

export const ProjectDetail = styled.div`
  display: grid;
  grid-template-columns: calc(0.5 * var(--gap-size) * var(--column-count)) auto;
  grid-template-areas: "content info";
  column-gap: calc(1 * var(--gap-size));
  ${breakpoint.tabletLandscape} {
    max-width: 900px;
    grid-template-columns: unset;
    grid-template-areas: "info" "content";
    row-gap: calc(3 * var(--gap-size));
  }
`;

export const ProjectCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
