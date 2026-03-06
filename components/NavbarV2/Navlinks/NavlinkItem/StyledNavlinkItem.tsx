"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const NavlinkItemWrapper = styled(motion.div)`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const NavlinkDividerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const NavlinkInner = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: calc(1 * var(--gap-size));
`;

export const ArrowWrapper = styled(motion.span)`
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;

export const NavlinkLink = styled(Link)`
  all: unset;
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
