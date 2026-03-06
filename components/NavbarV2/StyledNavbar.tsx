"use client";

import styled from "styled-components";
import { easing } from "../../consts/animationConfig";
import { colors } from "../../consts/colors";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: var(--gap-size);
`;

export const BurgerWrapper = styled.button`
  all: unset;
  display: block;
  width: 70px;
`;

export const NavbarWrapper = styled.div`
  padding: 0 calc(1 * var(--gap-size));
  padding-top: calc(1 * var(--gap-size));
  border: none;

  &.isCompact {
    padding: 21px calc(1 * var(--gap-size));
  }

  &.hasBorder {
    border-bottom: 1px solid;
    border-color: ${colors.primary400};
  }

  &.bgDark {
    background-color: ${colors.primary400};
    color: ${colors.white};
  }

  &.bgLight {
    background-color: ${colors.white};
    color: ${colors.primary400};
  }

  &.bgTransparent {
    background-color: ${colors.transparent};
    color: ${colors.primary400};
  }
`;

export const DividerWrapper = styled.div`
  height: var(--gap-size);
`;

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(${easing.join(", ")});

  &.hidden {
    transform: translateY(-100%);
  }
`;
