"use client";

import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";
import { motion } from "framer-motion";

export const StyledDivider = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  &.hide-plus {
    width: 100%;
    transform: translateX(0);
  }
`;

export const PlusWrapper = styled.div`
  position: absolute;
  &.left {
    left: calc(-0.5 * var(--plus-size));
  }
  &.right {
    right: calc(-0.5 * var(--plus-size));
  }
`;

export const DividerLine = styled(motion.div)<{
  color: ColorKeys | "currentColor";
}>`
  width: 100%;
  height: var(--dot-size);
  background-color: ${({ color }) => colors?.[color] || color};
  transform-origin: 0 0;
  &.reverse {
    transform-origin: 100% 0;
  }
`;
