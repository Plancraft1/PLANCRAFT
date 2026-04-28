"use client";

import NextLink from "next/link";
import styled, { css } from "styled-components";
import { spaces } from "../../../consts/spaces";

const linkStyles = css`
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  gap: ${spaces.xs}px;
  text-transform: inherit;
  flex-shrink: 0;
  align-items: center;
  &.flip {
    flex-direction: row-reverse;
    svg {
      transform: rotate(180deg);
    }
  }
  &.inline {
    display: inline-flex;
  }
  &.underline {
    text-decoration: underline;
  }
  &:visited {
    color: inherit;
  }
`;

export const StyledLink = styled(NextLink)`
  ${linkStyles}
`;

export const StyledLinkSpan = styled.span`
  ${linkStyles}
`;
