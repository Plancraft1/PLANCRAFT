"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const StyledNavbar = styled(motion.nav)`
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavbarPlaceholder = styled.div`
  height: calc(4 * var(--gap-size));
  ${breakpoint.monitor} {
    height: calc(5 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    height: calc(5 * var(--gap-size));
  }
  ${breakpoint.tabletLandscape} {
    height: calc(6 * var(--gap-size));
  }
`;

export const TopbarContent = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(2 * var(--gap-size));
  height: calc(3 * var(--gap-size));
  &.compact {
    padding: ${spaces.s}px calc(2 * var(--gap-size));
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.primary400};
    height: calc(2 * var(--gap-size));
    &.open {
      background-color: ${colors.primary400};
    }
  }
  ${breakpoint.tabletPortrait} {
    &.compact {
      height: calc(3 * var(--gap-size));
    }
    padding: ${spaces.m}px calc(2 * var(--gap-size));
  }
  ${breakpoint.phone} {
    padding: 0 calc(1 * var(--gap-size));
  }
`;

export const Topbar = styled(motion.div)`
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const BurgerWrapper = styled.div`
  display: block;
  height: calc(1 * var(--gap-size));
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(1 * var(--gap-size));
  ${breakpoint.smallNotebook} {
    max-width: calc(2 * var(--gap-size));
  }
`;

export const LogoWrapper = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  ${breakpoint.phone} {
    height: calc(1 * var(--gap-size));
  }
  /* aspect-ratio: 321/43; */
  /* ${breakpoint.tabletLandscape} {
    height: calc(1.5 * var(--gap-size));
  }
  ${breakpoint.tabletPortrait} {
    height: calc(1.75 * var(--gap-size));
  }
  ${breakpoint.phone} {
    height: calc(1 * var(--gap-size));
  } */
`;

export const NavbarDividerWrapper = styled(motion.div)`
  width: 100%;
  padding: 0 calc(1 * var(--gap-size));
  display: flex;
  align-items: center;
  &.show {
    opacity: 1;
    margin-top: calc(var(--gap-size));
  }
  &.hide {
    opacity: 0;
    margin-top: 0;
  }
`;

export const NavLinks = styled(motion.div)`
  position: absolute;
  z-index: 1;
  inset: 0;
  height: 100dvh;
  background-color: ${colors.primary400};
  padding: calc(1 * var(--gap-size));
  padding-top: calc(5 * var(--gap-size));
  ${breakpoint.smallNotebook} {
    padding-top: calc(6 * var(--gap-size));
  }
  ${breakpoint.tabletPortrait} {
    padding-top: calc(10 * var(--gap-size));
  }
`;

export const NavigationDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: calc(2 * var(--gap-size));
  height: 100%;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavlinkWrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavlinkDividerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

export const NavLink = styled(Link)`
  all: unset;
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LinkDescription = styled(motion.span)`
  font-size: 40px;
  color: ${colors.white};
  ${breakpoint.monitor} {
    font-size: 60px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 30px;
  }
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;

export const NavlinkInner = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: calc(1 * var(--gap-size));
`;

export const NavlinkInnerArrowW = styled(motion.span)`
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;
