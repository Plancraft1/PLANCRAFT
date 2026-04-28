"use client";

import { ColorKeys, colors } from "../../consts/colors";
import { StyledPlus } from "./Styles/StyledPlus";

interface PlusProps {
  stroke?: ColorKeys | "currentColor";
  width?: number;
}

const Plus = ({ stroke = "primary400", width = 21 }: PlusProps) => {
  const size = 100;
  return (
    <StyledPlus
      viewBox={`0 0 ${size} ${size}`}
      stroke={colors?.[stroke] || stroke}
    >
      <g>
        <line
          x1={0}
          y1={size / 2}
          x2={size}
          y2={size / 2}
          vectorEffect={"non-scaling-stroke"}
        />
        <line
          x1={size / 2}
          x2={size / 2}
          y1={0}
          y2={size}
          vectorEffect={"non-scaling-stroke"}
        />
      </g>
    </StyledPlus>
  );
};

export default Plus;
