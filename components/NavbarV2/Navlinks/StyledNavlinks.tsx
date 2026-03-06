"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";
import { colors } from "../../../consts/colors";

export const StyledNavlinks = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const NavlinksLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: calc(1 * var(--gap-size));
  padding-top: calc(var(--navbar-max-height) + var(--gap-size));
  background: ${colors.primary400};
  color: ${colors.white};
  height: 100%;
`;

export const NavlinksContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  column-gap: var(--gap-size);
`;

export const NavlinksList = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Perex = styled(motion.p)`
  width: 600px;
  flex-shrink: 0;
  font-size: 35px;
  ${breakpoint.monitor} {
    width: 800px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 28px;
    width: 500px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 21px;
    width: 400px;
  }
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;
