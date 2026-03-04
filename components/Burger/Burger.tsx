"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { easing } from "../../consts/animationConfig";
import { ColorKeys, colors } from "../../consts/colors";

interface BurgerProps {
  stroke?: ColorKeys;
  strokeWidth?: number;
  width?: number;
  height?: number;
  isOpen: boolean;
  onClick: () => void;
}

const StyledBurger = styled.svg`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const Burger = ({
  stroke = "black",
  strokeWidth = 8,
  width = 100,
  height = 18,
  isOpen,
  onClick,
}: BurgerProps) => {
  const svgWidth = width;
  const svgHeight = height + strokeWidth * 2;

  return (
    <StyledBurger
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={svgWidth}
      height={svgHeight}
      fill="none"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      <motion.path
        d={`M 0 ${strokeWidth / 2} L ${svgWidth} ${strokeWidth / 2}`}
        transition={{ ease: easing }}
        animate={{
          d: isOpen
            ? `M 0 ${strokeWidth / 2} L ${svgWidth} ${
                svgHeight - strokeWidth / 2
              }`
            : `M 0 ${strokeWidth / 2} L ${svgWidth} ${strokeWidth / 2}`,
        }}
        stroke={colors[stroke]}
        strokeWidth={strokeWidth}
        vectorEffect={"non-scaling-stroke"}
      />
      <motion.path
        d={`M 0 ${svgHeight / 2} H ${svgWidth}`}
        transition={{ ease: easing }}
        animate={{
          d: isOpen
            ? `M 0 ${svgHeight / 2} H ${0}`
            : `M 0 ${svgHeight / 2} H ${svgWidth}`,
        }}
        stroke={colors[stroke]}
        strokeWidth={strokeWidth}
        vectorEffect={"non-scaling-stroke"}
      />
      <motion.path
        d={`M 0 ${svgHeight - strokeWidth / 2} L ${svgWidth} ${
          svgHeight - strokeWidth / 2
        }`}
        transition={{ ease: easing }}
        animate={{
          d: isOpen
            ? `M 0 ${svgHeight - strokeWidth / 2} L ${svgWidth} ${
                strokeWidth / 2
              }`
            : `M 0 ${svgHeight - strokeWidth / 2} L ${svgWidth} ${
                svgHeight - strokeWidth / 2
              }`,
        }}
        stroke={colors[stroke]}
        strokeWidth={strokeWidth}
        vectorEffect={"non-scaling-stroke"}
      />
    </StyledBurger>
  );
};

export default Burger;
