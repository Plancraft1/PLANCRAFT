"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";

export const StyledDetailNavigation = styled.div`
  margin: 0 calc(-1 * var(--gap-size));
  ${breakpoint.phone} {
    margin: 0;
  }
`;

export const DetailNavigationInner = styled.p`
  color: ${colors.primary400};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 16px;
  ${breakpoint.phone} {
    padding: 8px 0;
    justify-content: flex-end;
    .backlink {
      display: none;
    }
    font-size: 14px;
  }
`;
