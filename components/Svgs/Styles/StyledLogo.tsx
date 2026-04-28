"use client";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";
import Link from "next/link";

export const LogoLink = styled(Link)`
  color: currentColor;
`;

export const StyledLogo = styled.svg`
  display: block;
  width: auto;
  height: 100%;
  max-width: 300px;
  ${breakpoint.phone} {
    max-width: 250px;
  }
  ${breakpoint.custom(400)} {
    max-width: 150px;
  }
`;
