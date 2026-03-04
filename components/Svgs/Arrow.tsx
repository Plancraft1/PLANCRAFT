"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";
import { easingInOutCubic } from "../../consts/animationConfig";

interface ArrowProps {
  stroke?: ColorKeys;
  strokeWidth?: number;
  animate?: boolean;
}

const StyledArrow = styled.svg``;

const Arrow = ({
  stroke = "primary400",
  strokeWidth = 1,
  animate,
}: ArrowProps) => {
  return (
    <StyledArrow
      width="12"
      height="17"
      viewBox={`0 0 12 17`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={colors[stroke]}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={`M5 1 L 11 8 L 5 15`} />
      <motion.path
        d="M 0 8 L 0 8"
        animate={{ d: animate ? "M 0 8 L 11 8" : "M 0 8 L 0 8" }}
        transition={{ ease: easingInOutCubic }}
      />
    </StyledArrow>
  );
};

export default Arrow;
