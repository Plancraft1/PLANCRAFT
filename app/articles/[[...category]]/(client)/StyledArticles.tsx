"use client";

import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledArticles = styled.main`
  padding: calc(1 * var(--gap-size));
  padding-bottom: 0;
`;

export const ArticlesList = styled.ul`
  list-style: none;
  padding: calc(1 * var(--gap-size));
  display: grid;
  row-gap: calc(1 * var(--gap-size));
  ${breakpoint.phone} {
    padding: 0;
  }
`;
