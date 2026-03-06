"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const BurgerWrapper = styled.button`
  all: unset;
  display: block;
  width: 70px;
`;

export const NavbarWrapper = styled.div`
  height: var(--navbar-max-height);
  padding: 0 calc(1 * var(--gap-size));
  padding-top: calc(1 * var(--gap-size));
  border: none;

  &.isCompact {
    height: auto;
    padding: 21px calc(1 * var(--gap-size));
  }

  &.hasBorder {
    border-bottom: 1px solid;
    border-color: ${colors.primary400};
  }

  &.bgDark {
    // background-color: ${colors.primary400};
    background-color: red;
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

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;

  // &.opened {
  //   background-color: ${colors.primary400};
  //   color: ${colors.white};
  //   bottom: 0;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  // }

  &.hidden {
    transform: translateY(-100%);
  }
`;
