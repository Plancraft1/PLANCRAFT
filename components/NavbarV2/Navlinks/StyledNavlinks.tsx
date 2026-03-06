"use client";

import styled from "styled-components";
import { colors } from "../../../consts/colors";
import Link from "next/link";

export const StyledNavlinks = styled.div`
  position: fixed;
  top: var(--navbar-max-height);
  right: 0;
  left: 0;
  bottom: 0;
`;

export const NavlinksLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: calc(1 * var(--gap-size));
  background: ${colors.primary400};
  color: ${colors.white};
  height: 100%;
`;

export const NavlinksList = styled.div``;

export const Navlink = styled(Link)`
  color: currentColor;
  display: block;
  font-size: 28px;
  padding: 8px 0;
  text-decoration: none;
`;

export const Perex = styled.p`
  max-width: 600px;
  font-size: 21px;
`;
